import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Update() {
    let [res, setRes] = useState();

    function submit(event) {
        event.preventDefault(); // Prevents page from reloading
        console.log(event);
        submitForm();
        clearForm();
    }

    async function submitForm() {
        const data = await axios.put('http://localhost:5678/students/' + document.getElementById('sid').value, {
            id: document.getElementById('sid').value,
            first_name: document.getElementById('fname').value,
            last_name: document.getElementById('lname').value,
            gpa: document.getElementById('gpa').value,
            enrolled: document.getElementById('enrolled').value
        })
        setRes(data.data); //sets the response
        console.log(data.data);
    }

    //clears the form
     function clearForm() {
        document.getElementById('sid').value = '';
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('gpa').value = '';
        document.getElementById('enrolled').value = 'null';
    }

    useEffect(() => {

    }, [res]);

    return (
        

        <React.Fragment>
            <div className="container">
                <h1 className="text-center">Update Student</h1>
            </div>

            <div className="container">
                <form onSubmit={submit}>
                    
                <div className="form-group">
                    <label for="sid"></label>
                    <input class="form-control" type="text" id="sid" name="sid" placeholder="Enter Student ID" />
                </div>

                <br></br>

                <div className="form-group">
                    <label for="fname"></label>
                    <input class="form-control" type="text" id="fname" name="fname" placeholder="Enter First Name" />
                </div>

                <br></br>

                <div className="form-group">
                    <label for="lname"></label>
                    <input class="form-control" type="text" id="lname" name="lname" placeholder="Enter Last Name" />
                </div>

                <br></br>

                <div className="form-group">
                    <label for="gpa"></label>
                    <input class="form-control" type="text" id="gpa" name="gpa" placeholder="Enter GPA"/>
                </div>

                <br></br>

                <div className="form-group">    
                    <label for="enrolled"></label>
                    <select class="form-control" id="enrolled" name="enrolled">
                        <option value="null">Enrolled? Click to Select...</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>

                <br></br>
                <button class="btn btn-primary btn-lg" >Submit</button>
            </form>
            </div>

            <div className="container">
                {res && <p>{res}</p>} {/* If res is not null, display the message */}
            </div>
        </React.Fragment>
    )
}

export default Update;