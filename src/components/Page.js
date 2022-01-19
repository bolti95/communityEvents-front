import { useState, useEffect } from 'react';
import { PageDefault } from '../styles/Page';
import Map from './Map';
import Events from './Events';
import DatePicker from "react-date-picker";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Row} from "../styles/blocks/Grid"
import { Padding } from '../styles/Padding';

const url = [
    'http://localhost:5000/events/display',
    ]

function Page(props) {
    const [events, setEvents] = useState();
    const [showInfo, setShowInfo] = useState(false);
    const [eName, setEventName] = useState('');
    const [ePosLng, setEposLng] = useState(0);
    const [ePosLat, setEposLat] = useState(0);
    const [dateValue, onChangeDate] = useState(new Date());
    const [apiCalled, setApiCalled] = useState(false);
    const [showBy, setShowBy] = useState("calendar");

    useEffect(() => {
        console.log(showInfo)
        setShowInfo(showInfo)
        setEposLng(ePosLng)
        setEposLat(ePosLat)
        axios({
                  method: 'get',
                  url: url[0],
               })
          .then((response) => {
                  console.log(response)
                //   setEvents(response.data)
                const eventsList = [response]
                const eventsData = eventsList[0].data
                setEvents(eventsData);
                setApiCalled(true)
              })
          .catch(error => console.log(`Error: ${error}`))


    }, []);
    const callback = () => {
        console.log('callback function')
        
    }
    const getInfo = (e) => {
        const eventIdLat = events[e.target.getAttribute('id')].lat
        const eventIdLng = events[e.target.getAttribute('id')].lng
        const eventName = events[e.target.getAttribute('id')].eventTitle
        setEposLat(eventIdLat)
        setEposLng(eventIdLng)
        setEventName(eventName)
        if (showInfo === false) {
        setShowInfo(true) 
      } 
    }
    const selectArchive = () => {
        onChangeDate(new Date())
        setShowBy("archive")
    }
    const selectCalendar = () => {
        onChangeDate(new Date())
        setShowBy("calendar")
    }
    const format = dateValue.toISOString().substring(0, 10)

    return (
    <PageDefault display={'flex'} flexDirection={'column'}>
        <Padding>
            <p>
                Community Events Ltd. Community Event Map displaying community events.
            </p>
        </Padding>
        {apiCalled 
        ? 
            <>
                <div>
                    <p>
                        Want to add an event? 
                    </p>
                    <Padding>
                        <button>
                            <Link to="/newevent">Click here</Link>
                        </button>
                    </Padding> 
                </div>
                <Padding>
                    <Map    
                        centerLat={53.45369120169616} 
                        centerLng={-2.2660735287002414}
                        positionLat={53.45184113070764}
                        positionLng={-2.263217758839349}
                        // ePos for use in getInfo event
                        ePosLat={ePosLat}
                        ePosLng={ePosLng}
                        hasMarkers ={true}
                        showInfo={showInfo}
                        closeClick={(e) => setShowInfo(false)}
                        events={events}
                        eventName={eName}
                    />
                </Padding>
                {/* <Datetime onClick={getDateTimeSelected}/> */}
                <Row>
                <Padding>
                    <button onClick={(e) => selectCalendar(e)}>
                        Calendar
                    </button>
                </Padding>
                <Padding>
                    <button onClick={(e) => selectArchive(e)}>
                        Archive
                    </button>
                </Padding>
                </Row>
                {showBy === "calendar" ?
                <div>
                    <h2>
                        Event Calendar
                    </h2>
                    <p>
                        Use the calendar to filter events by date.
                    </p>
                    <div style={{padding: "20px 10px"}}>
                        <DatePicker onChange={onChangeDate} value={dateValue} minDate={new Date()}/>
                    </div>
                    <Events onClick={getInfo} events={events} showBy={showBy} selectedDate={format}/> 
                </div>
                : 
                <div>
                    <h2>
                        Event Archive
                    </h2>
                    <p>
                        The entire history of all community events.
                    </p>
                    <Events onClick={getInfo} events={events}/>   
                </div>
                }

            </>  
        : 
            <>
                Loading!!
            </>
        }
    
      </PageDefault>
    );
  }
  
export default Page;


// const events = 
// [
//   { 
//         id: 0, 
//         community: "Newcastle Coders",
//         event: "Test1",
//         date: "20-05-2022",
//         image: "",
//         positionLat: 53.45369120169616,
//         positionLng: -2.2660735287002414   
//     },
//     { 
//         id: 1,
//         community: "Manchester Dojo",
//         event: "testing",
//         date: "01-01-2022",
//         image: "",
//         positionLat: 53.49369120169616,
//         positionLng: -2.1660735287002414    
//     },
//     { 
//         id: 2,
//         community: "London Loves Coding",
//         event: "test2",
//         date: "05-02-2022",
//         image: "",
//         positionLat: 53.55369120169616,
//         positionLng: -2.5660735287002414
//     },
//     { 
//         id: 3,
//         community: "Coders United",
//         event: "testingAgain",
//         date: "15-01-2022",
//         image: "",
//         positionLat: 53.45369120169616,
//         positionLng: -2.3660735287002414
//     },
// ]