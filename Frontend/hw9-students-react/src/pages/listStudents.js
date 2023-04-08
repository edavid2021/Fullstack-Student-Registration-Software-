import React, { useState } from 'react';
import axios from 'axios';

function List() {
    const [studentData, setStudentData] = useState([]);
    function submit(event) {
        event.preventDefault(); // Prevents page from reloading
        submitForm();
    }

    async function submitForm() {
        const data = await axios.get('http://3.139.64.182:5678/students').then((response) => { setStudentData(response.data) });
        console.log(data);
    }

    return (
        <React.Fragment>
            <div className="container">
                <h1 class="text-center">List Students</h1>
            </div>

            <div className="container">
                <form onSubmit={submit}> {/*onSubmit is a function that is called when the form is submitted*/}
                    <button class="btn btn-primary btn-lg" type="submit">List</button>
                </form>
            </div>

            <br></br>
            <br></br>

            <div className="container">
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
            </div>
        </React.Fragment>

    )

}

export default List;