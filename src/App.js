import './App.css';
import Page from './components/Page';
<<<<<<< HEAD
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import EventForm from './components/forms/EventForm';
=======
>>>>>>> fca1c55c49dbe9c8085533628a20e215c7260237

function App() {
  return (
    <div className="App">
      <h1>Community Map</h1>
<<<<<<< HEAD
      <BrowserRouter>
      <Routes>
        <Route exact path= "/" element={<Page />} />
        <Route exact path= "/newevent" element={<EventForm />} />
      </Routes>
      </BrowserRouter>
=======
      <Page />
>>>>>>> fca1c55c49dbe9c8085533628a20e215c7260237
    </div>
  );
}

export default App;
