import React, { useState } from 'react';
import axios from 'axios';

function Search() {
    const [studentData, setStudentData] = useState([]);

    function submitHandler(event) {
        event.preventDefault(); // Prevents page from reloading
        submitForm();
        clearForm();
    }

    async function submitForm() {
        const data = await axios.get('http://localhost:5678/get/'+document.getElementById('lname').value).then((response) => { setStudentData(response.data) });
    }

    function clearForm() {
        document.getElementById('lname').value = '';
    }

    return (
        <React.Fragment>
            <div class="container">
                <h1 class="text-center">Search Students</h1>
            </div>

            <div class="container">
                <form onSubmit={submitHandler}>
                    
            <div className="form-group">
                <label for="lname"></label>
                <input class="form-control" type="text" id="lname" name="lname" placeholder="Enter Last Name" />
            </div>
                    <br></br>
                <button class="btn btn-primary btn-lg">Search</button>
            </form>
            </div>

            <br></br>
            <br></br>

            <div class="container">
            <table class="table" id="studentTable">
                <thead>
                    <tr>
                        <th scope = "col">ID</th>
                        <th scope = "col">First Name</th>
                        <th scope = "col">Last Name</th>
                        <th scope = "col">GPA</th>
                        <th scope = "col">Enrolled</th>
                    </tr>
                </thead>
                {studentData[0]&&studentData.map((student) => (
                    <tbody>
                        <tr key={student._id}>
                            <td>{student._id}</td>
                            <td>{student.first_name}</td>
                            <td>{student.last_name}</td>
                            <td>{student.gpa}</td>
                            <td>{student.enrolled.toString()}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
            </div>

        </React.Fragment>

    )

}

export default Search;
