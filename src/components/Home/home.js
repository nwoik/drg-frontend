import './home.css'

function Home() {
    return (
        <div className='main'>
            <a href="/deepdives" id="page" className='deepdives'>
                <img src='DRG icon.png' alt=''></img>
                <h1>Deep Dives</h1> 
                <img src='DRG icon.png' alt=''></img>
            </a>
            <a href="/missions" id="page" className='missions'>
                <img src='DRG icon.png' alt=''></img>
                <h1>Missions</h1>
                <img src='DRG icon.png' alt=''></img>
            </a>
        </div>
    )
}

export default Home;