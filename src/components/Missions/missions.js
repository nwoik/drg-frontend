import './missions.css'

function submitData() {
    const form = document.getElementById('my-form');
    var message = form.textfield.value;

    fetch('/missions', {
        method: 'POST',
        body: message
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            response.text().then(function (text) {
                const resultDiv = document.getElementById('result-message');
                resultDiv.textContent = text;
            });
        });
}

function Missions() {
    return (
    <>
        <h1>MISSION 1: GET CHRIS A JOB</h1>
        <p>please.</p>
    </>
    )
}



export default Missions;