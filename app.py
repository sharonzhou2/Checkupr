from flask import Flask, send_from_directory, request, render_template, jsonify
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler
from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow

app = Flask(__name__)#, static_url_path='', static_folder='hackathon/build')

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/flask'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Patients(db.Model):
    __tablename__ = 'patients'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    dob = db.Column(db.DateTime, default=datetime.datetime.now)
    notes = db.Column(db.Text(), default="")
    doctor_id = db.Column(db.Integer, db.ForeignKey('doctors.id'))
    doctor = db.relationship('Doctors', cascade='all,delete-orphan', single_parent=True, backref=db.backref('patients', lazy='joined'))


    def __init__(self, name):
        self.name = name

class Doctors(db.Model):
    __tablename__ = 'doctors'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    
    def __init__(self, name):
        self.name = name


class PatientSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Patients
        include_fk = True

class DoctorSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Doctors


patient_schema = PatientSchema()
patients_schema = PatientSchema(many=True)

doctor_schema = DoctorSchema()

# CORS(app) #comment this on deployment
# api = Api(app)

@app.route("/get", methods = ['GET'])
def get_patients():
    all_patients = Patients.query.all()
    results = patients_schema.dump(all_patients)
    return jsonify(results)

@app.route("/get/<id>", methods = ['GET'])
def post_details(id):
    patient = Patients.query.get(id)
    return patient_schema.jsonify(patient)

@app.route("/patients/<id>", methods = ['GET'])
def doctor_patients(id):
    patients = Patients.query.filter(Patients.doctor_id == id)
    results = patients_schema.dump(patients)
    return jsonify(results)

@app.route("/add", methods = ['POST'])
def add_patient():
    name = request.json['name']

    patient = Patients(name)
    db.session.add(patient)
    db.session.commit()
    return patient_schema.jsonify(patient)

@app.route("/update/<id>", methods = ['PUT'])
def update_patient(id):
    patient = Patients.query.get(id)

    name = request.json['name']

    patient.name = name

    db.session.commit()
    return patient_schema.jsonify(patient)


@app.route("/delete/<id>", methods = ['DELETE'])
def article_delete(id):
    patient = Patients.query.get(id)
    db.session.delete(patient)
    db.session.commit()


if __name__ == "__main__":
    app.run(debug=True)

# @app.route('/form')
# def form():
#     return render_template('form.html')
 
# @app.route('/login', methods = ['POST', 'GET'])
# def login():
#     if request.method == 'GET':
#         return "Login via the login Form"
     
#     if request.method == 'POST':
#         name = request.form['name']
#         age = request.form['age']
#         cursor = mysql.connection.cursor()
#         cursor.execute(''' INSERT INTO info_table VALUES(%s,%s)''',(name,age))
#         mysql.connection.commit()
#         cursor.close()
#         return f"Done!!"
 
# app.run(host='localhost', port=5000)

# api.add_resource(HelloApiHandler, '/flask/hello')