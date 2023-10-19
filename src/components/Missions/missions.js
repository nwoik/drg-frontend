import './missions.css'
import { useState } from 'react';
import Biome from './biomes';

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
                const obj = JSON.parse(text);
                const biomes = obj["Biomes"];
                const biome_keys = Object.keys(biomes);
                console.log(Object.keys(biomes));
                console.log(Object.keys(biomes).length);
                for (let i=0; i < biome_keys.length; i++) {
                    console.log(biome_keys[i]);
                }
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
                <div className='biome-container'>
                    {/* <ul className="biome-list">
                        {missionData.map((x) => (
                            <Biome missions={x} />
                        ))}
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Missions;