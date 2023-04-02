import React from 'react';
import axios from 'axios';

function Delete() {

    function submit(event) {
        event.preventDefault(); // Prevents page from reloading
        submitForm();
    }

    async function submitForm() {
        const data = await axios.delete('http://localhost:5678/students/' + document.getElementById('sid').value)
        console.log(data.data);
    }

    return (
        <React.Fragment>
            <h1>Delete Student</h1>
            <form onSubmit={submit}>
                <label for="sid">ID:</label>
                <input type="text" id="sid" name="sid" />
                <br></br>
                <br></br>
                <button type="submit">Delete</button>
            </form>
        </React.Fragment>

    )

}

export default Delete;