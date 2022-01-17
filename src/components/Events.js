import Event from "./Event";
import { PageDefault } from "../styles/Page";
import { useEffect, useState } from "react";

// TODO
// import { events } from "../testData/data"
// replace with a fetch request



function Events(props) {
    const [dateNow, setDateNow] = useState()

    useEffect(() => {
        var date = new Date(); 
        var isoString = date.toISOString().split('T')[0]
        setDateNow(isoString)
        console.log(dateNow)
    }, []);

    return (
        <PageDefault display={'flex'} flexDirection={'row'}>
            {/* FILTER BY DATE */}
            {/* work on checking date higher/lower value. Could have a true/false state to manage? */}
            {props.events.filter(e => e.date >= dateNow).map(filteredE => (

                    <Event id={filteredE.id} key={filteredE.id} onClick={props.onClick} event={filteredE.event} date={filteredE.date}/>
            ))}
            {/* NO FILTER */}
            {props.events.map((e)=>{
                return (

                    <Event id={e.id} key={e.id} onClick={props.onClick} event={e.event} date={e.date}/>

                 );})}
        </PageDefault>
    );
}

export default Events;