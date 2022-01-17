import Event from "./Event";
import { PageDefault } from "../styles/Page";

// TODO
// import { events } from "../testData/data"
// replace with a fetch request



function Events(props) {

    return (
        <PageDefault display={'flex'} flexDirection={'row'}>
                {props.events.map((e)=>{
                return (

                    <Event id={e.id} key={e.id} onClick={props.onClick} event={e.event} date={e.date}/>

                );})}
        </PageDefault>
    );
}

export default Events;