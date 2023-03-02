import './App.css';
import dogHatImgs from './assets/dog-hat';
import { useState } from 'react';

function App() {
  const [dogHat, setDogHat] = useState(dogHatImgs[1]);
  console.log(dogHat)

  return (
    <div className="App">
      <h1>Dog-Hat-O-Matic</h1>
      <img id="dog" src={dogHat}/>
      <br></br>
      <button onClick={() => setDogHat(dogHat === dogHatImgs[1] ? dogHatImgs[0] : dogHatImgs[1])}>
        Dog with hat {dogHat === dogHatImgs[1] ? "on" : "off"}!
      </button>
    </div>
  );
}

export default App;