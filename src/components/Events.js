import Event from "./Event";
import { PageDefault } from "../styles/Page";
import { Suspense, useEffect, useState } from "react";

// TODO
// import { events } from "../testData/data"
// replace with a fetch request



function Events(props) {
    // const totalEventsDay = props.events[1].date.replace(/\D/g, "").substring(0, 2)
    // const totalEventsMon = props.events[1].date.replace(/\D/g, "").substring(2, 4)
    // const totalEventsYr = props.events[1].date.replace(/\D/g, "").substring(4)
    // console.log("day= " + totalEventsDay + " month = " + totalEventsMon + " year  = " + totalEventsYr)
    // const [dateNowDay, setDateNowDay] = useState()
    // const [dateNowMon, setDateNowMon] = useState()
    // const [dateNowYr, setDateNowYr] = useState()

    // useEffect(() => {
    //     var date = new Date(); 
    //     var isoString = date.toISOString().split('T')[0]
    //     var localeDate = date.toLocaleDateString("en-US")
    //     var newLocaleDate = localeDate.replace(/\D/g, "");

    //     var dateObj = new Date();
    //     var day = dateObj.getUTCDate();
    //     var month = dateObj.getUTCMonth() + 1;
    //     var year = dateObj.getUTCFullYear();
    //     // if (month < 10) {
    //     //     var dateTotalDay = (`${day}` + '0' + `${month}${year}`).substring(0, 2)
    //     //     var dateTotalMonYr = (`${day}` + '0' + `${month}${year}`).substring(3)
    //     // } else {
    //     if (day < 10) {
    //         var dateTotalDay = ('0'+ `${day}`)
    //         console.log(dateTotalDay)
    //     } else {
    //         var dateTotalDay = day
    //     }
    //     if (month < 10) {
    //         var dateTotalMon = ('0'+ `${month}`)
    //         return dateTotalMon
    //     } else {
    //         var dateTotalMon = month
    //     }

    //         var dateTotalYr = year
    //     // }
    //     setDateNowDay(dateTotalDay)
    //     setDateNowMon(dateTotalMon)
    //     setDateNowYr(dateTotalYr)
    // }, []);
    // console.log(dateNowDay)
    // console.log(dateNowMon)
    // console.log(dateNowYr)
    return (
        <>
            {/* {dateNow ? */}
                <PageDefault display={'flex'} flexDirection={'row'}>
                  {/* {props.events.filter(e => (e.date.replace(/\D/g, "") - dateNow) > 0).map(filteredE => (
                    <Event id={filteredE.id} key={filteredE.id} onClick={props.onClick} event={filteredE.event} date={filteredE.date}/>
                ))} */}
                {/* NO FILTER */}
                {props.events.map((e)=>{
                
                return (
                    <>
                    {/* {e.date.replace(/\D/g, "").substring(0, 2) > dateNowDay && e.date.replace(/\D/g, "").substring(2,3) > dateNowMon && e.date.replace(/\D/g, "").substring(4) >= dateNowYr
                    || e.date.replace(/\D/g, "").substring(0, 1) <= dateNowDay && e.date.replace(/\D/g, "").substring(2,3) > dateNowMon ? */}
                    <Event id={e.id} key={e.id} onClick={props.onClick} event={e.event} date={e.date}/>
                    {/* : <></>}  */}
                    </>
                 );})}
                </PageDefault> 
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





