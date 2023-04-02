import React from 'react';
import axios from 'axios';





function Add() {
    function submit(event) {
        event.preventDefault(); // Prevents page from reloading
        submitForm();
    }

    async function submitForm() {
        const data = await axios.post('http://localhost:5678/students', {
            id: document.getElementById('sid').value,
            first_name: document.getElementById('fname').value,
            last_name: document.getElementById('lname').value,
            gpa: document.getElementById('gpa').value,
            enrolled: document.getElementById('enrolled').value
        })
        console.log(data.data);
    }
    return (
        

        <React.Fragment>
            <h1>Add Student</h1>

            <form onSubmit={submit}>
                
                <label for="sid">ID:</label>
                <input type="text" id="sid" name="sid" />

                <br></br>
                <br></br>

                <label for="fname">First Name:</label>
                <input type="text" id="fname" name="fname" />

                <br></br>
                <br></br>

                <label for="lname">Last Name:</label>
                <input type="text" id="lname" name="lname" />

                <br></br>
                <br></br>

                <label for="gpa">GPA:</label>
                <input type="text" id="gpa" name="gpa" />

                <br></br>
                <br></br>

                <label for="enrolled">Enrolled:</label>
                <select id="enrolled" name="enrolled">

                <br></br>
                <br></br>

                <option value="true">True</option>
                <option value="false">False</option>
                </select>

                <br></br>
                <button class="btn-primary" >Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Add