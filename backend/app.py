from typing import Tuple

from flask import Flask, jsonify, request, Response, json
import mockdb.mockdb_interface as db

app = Flask(__name__)


def create_response(
    data: dict = None, status: int = 200, message: str = ""
) -> Tuple[Response, int]:
    """Wraps response in a consistent format throughout the API.
    
    Format inspired by https://medium.com/@shazow/how-i-design-json-api-responses-71900f00f2db
    Modifications included:
    - make success a boolean since there's only 2 values
    - make message a single string since we will only use one message per response
    IMPORTANT: data must be a dictionary where:
    - the key is the name of the type of data
    - the value is the data itself

    :param data <str> optional data
    :param status <int> optional status code, defaults to 200
    :param message <str> optional message
    :returns tuple of Flask Response and int, which is what flask expects for a response
    """
    if type(data) is not dict and data is not None:
        raise TypeError("Data should be a dictionary 😞")

    response = {
        "code": status,
        "success": 200 <= status < 300,
        "message": message,
        "result": data,
    }
    return jsonify(response), status


"""
~~~~~~~~~~~~ API ~~~~~~~~~~~~
"""


@app.route("/")
def hello_world():
    return create_response({"content": "hello world!"})


@app.route("/mirror/<name>")
def mirror(name):
    data = {"name": name}
    return create_response(data)

@app.route("/shows", methods=['GET'])
def get_all_shows():
    try:
        minEpisodes = request.args['minEpisodes']
    except:
        return create_response({"shows": db.get('shows')})
    list_of_shows = []
    for i in db.get('shows'):
        if i["episodes_seen"] >= int(minEpisodes):
            list_of_shows.append(i)
    if len(list_of_shows) == 0:
        return create_response(status=404, message="No shows with this many or more episodes.")
    return create_response({"shows": list_of_shows})

@app.route("/shows/<id>", methods=['DELETE'])
def delete_show(id):
    if db.getById('shows', int(id)) is None:
        return create_response(status=404, message="No show with this id exists")
    db.deleteById('shows', int(id))
    return create_response(message="Show deleted")

# TODO: Implement the rest of the API here!

@app.route("/shows/<id>", methods=['GET'])
def get_show(id):
    if db.getById('shows', int(id)) is None:
        return create_response(status=404, message="No show with this id exists")
    return create_response(db.getById('shows', int(id)))

@app.route("/shows", methods=['POST'])
def add_show():
    name = request.get_json().get('name', '')
    episodes_seen = request.get_json().get('episodes seen','')
    if name == '' or episodes_seen == '':
        return create_response(status=422, message="Please provide both the name and the number of episodes watched for this new show")
    new_show_dict = {"name": name, "episodes seen": episodes_seen}
    new_show = db.create('shows', new_show_dict)
    return create_response({"added show": new_show}, status=201)

### ~~~~~~~~~~~~ END API ~~~~~~~~~~~~
if __name__ == "__main__":
    app.run(port=8080, debug=True)
