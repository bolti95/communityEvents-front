import { useState, useEffect } from 'react';
import { PageDefault } from '../styles/Page';
import Map from './Map';
import Events from './Events';
import EventForm from './forms/EventForm';
import Datetime from "react-datetime";
import DateTimePicker from "react-datetime-picker";
import { Link } from 'react-router-dom';

function Page(props) {
  // TODO 
  // Make map center load on location of user.
  // could put function in a util or homepage.
  // make events into an API call, list of all events
  const [value, onChange] = useState(new Date());
  console.log(value)
  const events = 
  [
    { 
          id: 0, 
          community: "Newcastle Coders",
          event: "Test1",
          date: "20-05-2022",
          image: "",
          positionLat: 53.45369120169616,
          positionLng: -2.2660735287002414   
      },
      { 
          id: 1,
          community: "Manchester Dojo",
          event: "testing",
          date: "01-01-2022",
          image: "",
          positionLat: 53.49369120169616,
          positionLng: -2.1660735287002414    
      },
      { 
          id: 2,
          community: "London Loves Coding",
          event: "test2",
          date: "05-02-2022",
          image: "",
          positionLat: 53.55369120169616,
          positionLng: -2.5660735287002414
      },
      { 
          id: 3,
          community: "Coders United",
          event: "testingAgain",
          date: "15-01-2022",
          image: "",
          positionLat: 53.45369120169616,
          positionLng: -2.3660735287002414
      },
  ]
    const [showInfo, setShowInfo] = useState(false);
    const [eName, setEventName] = useState('');
    const [ePosLng, setEposLng] = useState(0);
    const [ePosLat, setEposLat] = useState(0);
    const [dateTimeInput, setDateTimeInput] = useState();


    useEffect(() => {
          console.log(showInfo)
          setShowInfo(showInfo)
          setEposLng(ePosLng)
          setEposLat(ePosLat)
  });
    const callback = () => {
        console.log('callback function')
        
    }

    const getInfo = (e) => {
        const eventIdLat = events[e.target.getAttribute('id')].positionLat
        const eventIdLng = events[e.target.getAttribute('id')].positionLng
        const eventName = events[e.target.getAttribute('id')].event
        setEposLat(eventIdLat)
        setEposLng(eventIdLng)
        setEventName(eventName)
        if (showInfo === false) {
        setShowInfo(true) 
      } 
    }

    const getDateTimeSelected = () => {

    }

    return (
    <PageDefault display={'flex'} flexDirection={'column'}>
        <p>
            Community Events Ltd. Community Event Map displaying community events.
        </p>
         <Map    
            centerLat={53.45369120169616} 
            centerLng={-2.2660735287002414}
            positionLat={53.45184113070764}
            positionLng={-2.263217758839349}
            ePosLat={ePosLat}
            ePosLng={ePosLng}
            hasMarkers ={true}
            showInfo={showInfo}
            closeClick={(e) => setShowInfo(false)}
            events={events}
            eventName={eName}
        />
        {/* <Datetime onClick={getDateTimeSelected}/> */}
        <div style={{padding: "20px 10px"}}>
            <DateTimePicker onChange={onChange} value={value} minDate={new Date()}/>
        </div>
        <Events onClick={getInfo} events={events} dateTimeInput={dateTimeInput}/>   
        <p>
            Want to add an event? 
        </p> 
        <button>
            <Link to="/newevent">Click here</Link>
        </button>
            {/* <EventForm /> */}
      
      </PageDefault>
    );
  }
  
export default Page;