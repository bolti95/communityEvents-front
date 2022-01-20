import { render, screen, mount, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from "../components/Page";
import Events from "../components/Events";

test("Events accepts event props", () => {
        const showBy = "calendar"
        const getInfo = () => {
            console.log("hello")
        }
        const events = [{
            firstName: "Tom",
            lastName: "Blob",
            contactEmail: "tomtom@example.com",
            eventTitle: "Yoga Class",
            eventDescription: "Nice relaxed class, for beginners",
            lat: 53.4820262,
            lng: -2.2330507,
            eventDate: "2022-01-20T00:00:00.000+00:00",
            eventTime: "12.00"
        }]
        render(<Page><Events getInfo={getInfo} events={events} /></Page>)
        waitFor(() => expect(getByText("Tom")).toBeInTheDocument());
        // const wrapper = mount(<Events getInfo={getInfo} events={events} />)
        // expect(wrapper.props().events[0]).toEqual(events[0]);
});