//studentserver.js

const express = require('express')
const app = express()
//parsing is used to convert the data into a format that is easy to read
const bodyParser = require('body-parser'); 
const fs = require('fs'); 
const glob = require("glob");
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
//ejs
app.set('view engine', 'ejs');
//mongoose
const mongoose = require('mongoose');

//cors
app.use(cors({
  origin: '*',
}));

app.use(express.static('./public'));

//connecting mongo through mongoose
mongoose.connect("mongodb+srv://edavid2021:Z23619905@cluster0.nva3dco.mongodb.net/?retryWrites=true&w=majority")

//schema
const studentSchema = new mongoose.Schema({
  _id: {
    required: true,
    type: Number
  },
  first_name: {
    required: true,
    type: String
  },
  last_name: {
    required: true,
    type: String
  },
  gpa: {
    required: true,
    type: String
  },
  enrolled: {
    required: true,
    type: String
  }
})

//model for the schema
const Model = mongoose.model("Students", studentSchema) //student or data


/**
 * posts student data into the MongoDB database
 * @function POST_METHOD
 * @param {string} record_id - record id of student
 * @param {string} last_name - last name of student
 * @param {number} gpa - gpa of student
 * @param {boolean} enrolled - enrolled status of student
 * @returns {object} - returns a json object with record_id and message
 */
app.post('/students',async function(req, res) {
  var record_id = new Date().getTime(); 

  //checks if the data already exists
  let flag = await Model.findOne({ first_name: req.body.first_name, last_name: req.body.last_name })
  if (flag) {   //if the data already exists
    return res.status(400).send("Student already exists"); //bad request
  }
//creating a new document with the format of the schema
  const data = new Model({
    _id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gpa: req.body.gpa,
    enrolled: req.body.enrolled
  })
  await data.save();
  console.log(data);

  //writing to the file
  var obj = {};
  obj.record_id = record_id;
  obj.first_name = req.body.first_name;
  obj.last_name = req.body.last_name;
  obj.gpa = req.body.gpa;
  obj.enrolled = req.body.enrolled;

  return res.status(200).send("Successfully added student");
});

/**
 * gets a student record file from the MongoDB database
 * @function GET_METHOD
 * @param {string} record_id - record id of student
 * @param {string} first_name - first name of student
 * @param {string} last_name - last name of student
 * @param {number} gpa - gpa of student
 * @param {boolean} enrolled - enrolled status of student
 * @returns {object} - returns a json object with record_id and message
 */
app.get('/students/:record_id', async function(req, res) {

  let student = await Model.findOne({ _id: req.params.record_id }); //finds the student
  console.log(student);
  return res.status(200).send(student); //returns the student
}); 

function readFiles(files,arr,res) {
  fname = files.pop();
  if (!fname)
    return;
  fs.readFile(fname, "utf8", function(err, data) {
    if (err) {
      return res.status(500).send({"message":"error - internal server error"});
    } else {
      arr.push(JSON.parse(data));
      if (files.length == 0) {
        var obj = {};
        obj.students = arr;
        return res.status(200).send(obj);
      } else {
        readFiles(files,arr,res);
      }
    }
  });  
}
/**
 * gets all student records from the MongoDB database
 * @function GET_METHOD
 * @param {string} record_id - record id of student
 * @param {string} first_name - first name of student
 * @param {string} last_name - last name of student
 * @param {number} gpa - gpa of student
 * @param {boolean} enrolled - enrolled status of student
 * @returns {object} - returns a json object with record_id and message
 */
app.get('/students', async function (req, res) {
  let { first, last } = req.query;//gets the query parameters

  //if the query parameters are not empty
  if (first || last) { 
    var regexp = new RegExp("^" + first); //regex for first name
    var regexp2 = new RegExp("^" + last); //regex for last name
    let students = await Model.find({ first_name: regexp, last_name: regexp2 }); //finds the students with the first and last name
    
    if (students.length > 0) { //if the students are found
      return res.status(200).send(students); //returns the students
    } 
  }
  //if the query parameters are empty
  else {
    let students = await Model.find({}); //finds all the students
    return res.status(200).send(students); //returns all the students
  }

});

/**
 * gets all student records from the MongoDB database through last name
 * @function GET_METHOD
 * @param {string} last_name - last name of student
 * @returns {object} - returns a json object with record_id and message
 */
app.get('/get/:lastname', async function (req, res) {
  // View all students if no query parameters are provided
  var regexp = new RegExp("^" + req.params.lastname);
  let students = await Model.find({last_name:regexp});
  res.status(200).send(students);

  });

/**
 * updates a student record file from the MongoDB database
 * @function PUT_METHOD
 * @param {string} record_id - record id of student
 * @param {string} first_name - first name of student
 * @param {string} last_name - last name of student
 * @param {number} gpa - gpa of student
 * @param {boolean} enrolled - enrolled status of student
 * @returns {object} - returns a json object with record_id and message
 */
app.put('/students/:record_id', async function (req, res) {
  //update the file by record_id
  
  let students = await Model.updateOne({ _id: req.params.record_id }, {first_name: req.body.first_name, last_name: req.body.last_name, gpa: req.body.gpa, enrolled: req.body.enrolled});
  return res.status(200).send(students);

}); 

/**
 * deletes a student record file from the MongoDB database
 * @function DELETE_METHOD
 * @param {string} record_id - record id of student
 * @param {string} first_name - first name of student
 * @param {string} last_name - last name of student
 * @param {number} gpa - gpa of student
 * @param {boolean} enrolled - enrolled status of student
 * @returns {object} - returns a json object with record_id and message
 */
app.delete('/students/:record_id', async function (req, res) { //delete the file by record_id 
  //finds the student and deletes it
  let students = await Model.findOneAndDelete({ _id: req.params.record_id }); 
  return res.status(200).send(students);

});

app.listen(5678); //start the server
console.log('Server is running...'); //the url is http://localhost:5678/