import React, { useState } from 'react';
import axios from 'axios';

function List() {
    const [studentData, setStudentData] = useState([]);
    function submit(event) {
        event.preventDefault(); // Prevents page from reloading
        submitForm();
    }

    async function submitForm() {
        const data = await axios.get('http://localhost:5678/students').then((response) => { setStudentData(response.data) });
        console.log(data);
    }

    return (
        <React.Fragment>
            <h1>List Students</h1>
            <form onSubmit={submit}>
                <button type="submit">List</button>
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
                {studentData.map((student) => (
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

export default List;