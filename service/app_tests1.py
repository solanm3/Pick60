import urllib2
from flask import Flask
from flask_testing import LiveServerTestCase
import app


class MyTest(LiveServerTestCase):

	@app.route("/ajax/")
	def some_json():
		return jsonify(success=True)



class TestViews(TestCase):
	def test_some_json(self):
		response = self.client.get("/ajax/")
		self.assertEquals(response.json, dict(success=True))