import './App.css';
import Page from './components/Page';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import EventForm from './components/forms/EventForm';

function App() {
  return (
    <div className="App">
      <header>
      <h1>Community Map</h1>
      </header>
      <BrowserRouter>
      <Routes>
        <Route exact path= "/" element={<Page />} />
        <Route exact path= "/newevent" element={<EventForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
