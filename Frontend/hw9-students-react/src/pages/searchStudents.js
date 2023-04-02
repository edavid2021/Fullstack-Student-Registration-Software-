import React, { useState } from 'react';
import axios from 'axios';

function Search() {
    const [studentData, setStudentData] = useState([]);

    function submitHandler(event) {
        event.preventDefault(); // Prevents page from reloading
        submitForm();
    }

    async function submitForm() {
        const data = await axios.get('http://localhost:5678/get/'+document.getElementById('lname').value).then((response) => { setStudentData(response.data) });
    }
    return (
        <React.Fragment>
            <h1>Search Students</h1>
            <form onSubmit={submitHandler}>
                <label for="lname">Last Name:</label>
                <input type="text" id="lname" name="lname"></input>
                    <br></br>
                <button>Search</button>
            </form>
            <form>
                
            </form>
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

        </React.Fragment>

    )

}

export default Search;
