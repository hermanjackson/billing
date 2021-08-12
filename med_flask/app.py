from twilio.rest import Client
from flask import Flask , request
from flask_cors import CORS



app = Flask(__name__)


CORS(app)




@app.route('/', methods=['POST'])
def sendSMS():
    account_sid = "ACcbb36dbfec56a9f85d9a0127a87e8d08"
    auth_token = "88a1c616bf969a68ebf3f6498689fde5"
    client = Client(account_sid, auth_token)
    text_message = request.get_json()
    print(text_message)

    # def sendTXT(): 
    message = client.messages \
                    .create(
                        body=text_message["body"],
                        from_='+19193518942',
                        to="5615029869"
                    )
    # sendTXT()                    
  
    return "hello"

@app.route('/hello', methods=['GET'])
def hello():
    return "hello"






