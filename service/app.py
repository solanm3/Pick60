from flask import Flask, request, jsonify, make_response
from flask_restplus import Api, Resource, fields
from sklearn.externals import joblib
import numpy as np
import sys

flask_app = Flask(__name__)
app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "NFL Game Prediction", 
		  description = "Predict the result of NFL Games")

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params', 
				  {'yppa_diff': fields.Float(required = True, 
				  							   description="Yards Per Pass Attempt Differential", 
    					  				 	   help="YPPA cannot be blank"),
				  'rush_diff': fields.Float(required = True, 
				  							   description="Rush Per Attempt Differential", 
    					  				 	   help="RUSH Differential cannot be blank"),
				  'drive_points_diff': fields.Float(required = True, 
				  							description="Drive Points Differential", 
    					  				 	help="Drive Points cannot be blank"),
				  'turnover_diff': fields.Float(required = True, 
				  							description="Turnover Differential", 
    					  				 	help="Turnover DIfferential cannot be blank"),
				  'sack_yards_diff': fields.Float(required = True, 
				  							description="Sack Yards Differential", 
    					  				 	help="Sack Yards cannot be blank"),
				  'sack_times_diff': fields.Float(required = True, 
				  							description="Sack Times Differentital", 
    					  				 	help="Sack Times Differentital cannot be blank")})

classifier = joblib.load('classifier.joblib')

@name_space.route("/")
class MainClass(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):
		try: 
			formData = request.json
			data = [val for val in formData.values()]
			prediction = classifier.predict(np.array(data).reshape(1, -1))
			types = { 0: "Away Win", 1: "Home Win"}
			response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result": "Game Result: " + types[prediction[0]]
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})