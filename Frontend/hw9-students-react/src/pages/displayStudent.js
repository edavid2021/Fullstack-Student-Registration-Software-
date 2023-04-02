import React, {useState} from 'react';
import axios from 'axios';

function Display() {
    const [studentData, setStudentData] = useState({});
        function submit(event) {
            event.preventDefault(); // Prevents page from reloading
            submitForm();
        }
    
        async function submitForm() {
            const data = await axios.get('http://localhost:5678/students/' + document.getElementById('sid').value).then((response) => { setStudentData(response.data) });
            console.log(data);
        }
    
        return (
            <React.Fragment>
                <h1>Display Student</h1>
                <form onSubmit={submit}>
                    <label for="sid">ID:</label>
                    <input type="text" id="sid" name="sid" />
                    <br></br>
                    <br></br>
                    <button type="submit">Display</button>
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
                    {studentData._id&&<tbody>
                        {
                        <tr key={studentData._id}>
                            <td>{studentData._id}</td>
                            <td>{studentData.first_name}</td>
                            <td>{studentData.last_name}</td>
                            <td>{studentData.gpa}</td>
                            <td>{studentData.enrolled.toString()}</td>
                        </tr>
                        }
                    </tbody>}
                </table>

            </React.Fragment>
    
        )

}

export default Display;