import Event from "./Event";
import { PageDefault } from "../styles/Page";
import { useState } from "react";
import moment from "moment";


function Events(props) {
    // const [formattedDate, setFormattedDate] = useState(new Date())
    console.log(props.selectedDate, props.showBy)
    console.log(props.events[0].eventDate)
    // if (props.showBy === "calendar") {

        // setFormattedDate(format)
    // } else {
    //     console.log("what dooo")
        // setFormattedDate(new Date())
    // }

    // props.events.eventDate === props.selectedDate 
    // e.eventDate.substring(0, 10)
    return (
        <>
            {props.showBy === "calendar" 
            ? 
            <PageDefault display={'flex'} flexDirection={'row'}>
                {props.events.map((e, index) =>{                
                return (
                    
                    <div key={e._id} >
                    {props.selectedDate === e.eventDate.substring(0, 10) 
                    ? 
                    <Event id={index} lat={e.lat} lng={e.lng} onClick={props.onClick} event={e.eventTitle} date={e.eventDate.substring(0, 10) }/>
                    :
                    <></>
                    }
                    </ div>
                 );})
                 }
            </PageDefault>
            :
            <PageDefault display={'flex'} flexDirection={'row'}>
                  {/* {props.events.filter(e => (e.date.replace(/\D/g, "") - dateNow) > 0).map(filteredE => (
                    <Event id={filteredE.id} key={filteredE.id} onClick={props.onClick} event={filteredE.event} date={filteredE.date}/>
                ))} */}
                {/* NO FILTER */}
                {props.events.map((e, index) =>{
                
                return (
                    <div key={e._id} >
                        <Event id={index} lat={e.lat} lng={e.lng} onClick={props.onClick} event={e.eventTitle} date={e.eventDate.substring(0, 10)}/>
                    </ div>
                 );})}
                </PageDefault> 
            }
                
            {/* :
            null           
            } */}
        </>        
    );
}

export default Events;


// import Event from "./Event";
// import { PageDefault } from "../styles/Page";
// import { Suspense, useEffect, useState } from "react";

// TODO
// import { events } from "../testData/data"
// replace with a fetch request



// function Events(props) {
//     const totalEvents = props.events[0].date.replace(/\D/g, "")
//     console.log(totalEvents)
//     const [dateNowDay, setDateNowDay] = useState()
//     const [dateNowMonYr, setDateNowMonYr] = useState()

//     useEffect(() => {
//         var date = new Date(); 
//         var isoString = date.toISOString().split('T')[0]
//         var localeDate = date.toLocaleDateString("en-US")
//         var newLocaleDate = localeDate.replace(/\D/g, "");

//         var dateObj = new Date();
//         var day = dateObj.getUTCDate();
//         var month = dateObj.getUTCMonth() + 1;
//         var year = dateObj.getUTCFullYear();

//         if (month < 10) {
//             var dateTotalDay = (`${day}` + '0' + `${month}${year}`).substring(0, 2)
//             var dateTotalMonYr = (`${day}` + '0' + `${month}${year}`).substring(3)
//         } else {
//             var dateTotalDay = (`${day}${month}${year}`).substring(0, 2)
//             var dateTotalMonYr = (`${day}${month}${year}`).substring(3)
//         }

//         console.log(dateNowMonYr.substring(0, 1))


//         setDateNowDay(dateTotalDay)
//         setDateNowMonYr(dateTotalMonYr)
//     }, []);
//     console.log(dateNowMonYr)
//     return (
//         <>
//             {/* {dateNowDay ? */}
//                 <PageDefault display={'flex'} flexDirection={'row'}>
//                   {/* {props.events.filter(e => (e.date.replace(/\D/g, "") - dateNow) > 0).map(filteredE => (
//                     <Event id={filteredE.id} key={filteredE.id} onClick={props.onClick} event={filteredE.event} date={filteredE.date}/>
//                 ))} */}
//                 {/* NO FILTER */}
//                 {props.events.map((e)=>{
//                 return (
//                     <>
//                     {
//                     // e.date.replace(/\D/g, "") > `${dateNowDay} + ${dateNowMonYr}` ?
//                     // && e.date.replace(/\D/g, "").substring(2) > dateNowMonYr || e.date.replace(/\D/g, "").substring(0, 2) <= dateNowDay && e.date.replace(/\D/g, "").substring(2) > dateNowMonYr 
//                     <Event id={e.id} key={e.id} onClick={props.onClick} event={e.event} date={e.date}/>
//                     // : <></>
//                     } 
//                     </>
//                  );})}
//                 </PageDefault> 
//              {/* :
//             null           
//             }  */}
//         </>        
//     );
// }

// export default Events;





