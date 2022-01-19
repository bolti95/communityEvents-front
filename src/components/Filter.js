const Filter = (props) => {
    // get full list of dates
    const dates = props.events.date

    const filteredDates = dates.filter(d => new Date(d) - new Date() > 0);

}

export default Filter; 