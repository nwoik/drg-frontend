import './missions.css'
import { useState } from 'react';
function Missions() {
    const [missionData, setMissionData] = useState(null)

    function getData() {
        fetch('http://localhost:8080/missions', {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            response.text().then(function (text) {
                // console.log(text)
                const obj = JSON.parse(text);
                console.log(obj.length);
                for (let i=0; i < obj.length; i++) {
                    console.log(obj[i]);
                }
                console.log("HIYAHIYAHIYAHIYA");
                setMissionData(text);
            });
        });
    }

    return (
        <div onLoad={getData()}>
            <div>
                <h1>MISSION 1: GET CHRIS A JOB</h1>
                <p><i>please.</i></p>
                <div>{missionData}</div>
            </div>
        </div>
    )
}

export default Missions;