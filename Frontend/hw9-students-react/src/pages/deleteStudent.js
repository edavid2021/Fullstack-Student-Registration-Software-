import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Delete() {
    let [res, setRes] = useState();

    function submit(event) {
        event.preventDefault(); // Prevents page from reloading
        console.log(event);
        submitForm();
        clearForm();
    }

    async function submitForm() {
        const data = await axios.delete('http://localhost:5678/students/' + document.getElementById('sid').value)
        setRes(data.data);
        console.log(data.data);
    }

    function clearForm() {
        document.getElementById('sid').value = '';
    }

    useEffect(() => {

    }, [res]);
    
    return (
        <React.Fragment>
            <div className="container">
                <h1 class="text-center">Delete Student</h1>
            </div>

            <div className="container">
                <form onSubmit={submit}>
                    
                    <div className="form-group">
                        <label for="sid"></label>
                        <input class="form-control" type="text" id="sid" name="sid" placeholder="Enter Student ID" />
                    </div>

                    <br></br>
                    
                    <button class="btn btn-primary btn-lg" type="submit">Delete</button>
                </form>
            </div>

            <div className="container">
                {res && <p>{res}</p>} {/* If res is not null, display the message */}
            </div>
        </React.Fragment>

    )

}

export default Delete;