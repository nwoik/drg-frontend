import './missions.css'

function Missions() {
    function GetData() {
        fetch('http://localhost:8080/missions', {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            response.text().then(function (text) {
                return (<div>{text}</div>)
            });
        });
    }

    return (
        <div>
            <div>
                <h1>MISSION 1: GET CHRIS A JOB</h1>
                <p><i>please.</i></p>
                <GetData />
            </div>
        </div>
    )
}

export default Missions;