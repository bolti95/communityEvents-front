import '@testing-library/jest-dom';
import { render, screen, mount } from '@testing-library/react';
import Page from "../components/Page";
import Events from "../components/Events";

//   needs a mock function to test data going into the events element
describe("Page component tests", () => {
    test("renders Page", () => {
        const PageText = "Community Events Ltd. Community Event Map displaying community events."
        render(<Page/>)
        expect(screen.getByText(PageText)).toBeInTheDocument();
    });
    test("Page accepts event props", () => {
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
        const getInfo = () => {
            console.log("something needs to be true or falsey")
        }
        // const wrapper = mount(<Events getInfo={getInfo} events={events} />)

        expect(events[0]).toEqual(events[0]);
    });

})

        // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found
    // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
    // fireEvent.click(screen.getByLabelText(/show/i))
    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    // expect(screen.getByText(testMessage)).toBeInTheDocument()
  