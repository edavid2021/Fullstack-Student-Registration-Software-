import React, {useState} from 'react';
import axios from 'axios';

function Display() {
    const [studentData, setStudentData] = useState({});
        function submit(event) {
            event.preventDefault(); // Prevents page from reloading
            submitForm();
            clearForm();
        }
    
        async function submitForm() {
            const data = await axios.get('http://3.139.64.182:5678/students/' + document.getElementById('sid').value).then((response) => { setStudentData(response.data) });
            console.log(data);
        }

    function clearForm() {
        document.getElementById('sid').value = '';
    }
    
        return (
            <React.Fragment>
                <div className="container">
                    <h1 class="text-center">Display Student</h1>
                </div>

                <div className="container">
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label for="sid"></label>
                            <input class="form-control" type="text" id="sid" name="sid" placeholder="Enter Student ID" />
                        </div>
                <br></br>
                        
                        <button class="btn btn-primary btn-lg"type="submit">Display</button>
                    </form>
                </div>

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
                </div>

            </React.Fragment>
    
        )

}

export default Display;