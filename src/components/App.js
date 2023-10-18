
import '../styles/app.css';
import NavBar from './navbar';
import {Routes, Route} from 'react-router-dom'
import Properties from './properties';
import AddProperty from './addproperty';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
          
       
      </header>
    </div>
  );
}

export default App;
