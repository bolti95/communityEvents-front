import './App.css';
import Page from './components/Page';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import EventForm from './components/forms/EventForm';
import EventInfo from './components/EventInfo';
import Submitted from './components/Submitted';
import { PageDefault } from './styles/Page';
import MainNav from './components/navs/MainNav';
import { Padding } from './styles/Padding';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Padding>
        <MainNav />
      </Padding>
      <PageDefault display={"flex"}>
      <header>
        <h1>Community Map</h1>
      </header>
      </PageDefault>
      <PageDefault display={"flex"}>
      <Routes>
        <Route exact path= "/" element={<Page />} />
        <Route exact path= "/newevent" element={<EventForm />} />
        <Route exact path= "/eventinfo/:eventName" element={<EventInfo/>} />
        <Route exact path= "/event/submitted" element={<Submitted/>} />
      </Routes>
      </PageDefault>
      </BrowserRouter>
    </div>
  );
}

export default App;
