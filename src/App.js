import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import DeepDives from './components/DeepDives/deepdives';
import Missions from './components/Missions/missions';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/deepdives' element={<DeepDives />}/>
          <Route path='/missions' element={<Missions />}/>
        </Routes>
      </Router>
    </>
  );
}

{/* <script>
        function submitData() {
            const form = document.getElementById('my-form');
            var message = form.textfield.value;

            fetch('/textfieldmessage', {
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
    </script> */}
export default App;
