import './App.css';
import Page from './components/Page';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import EventForm from './components/forms/EventForm';
import { PageDefault } from './styles/Page';


function App() {
  return (
    <div className="App">
      <PageDefault flexDirect={"column"} display={"flex"}>
        <header>
        <h1>Community Map</h1>
        </header>
      </PageDefault>
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
