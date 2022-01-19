import { render, screen } from '@testing-library/react';
import Page from "../components/Page";

test('renders Page', () => {
    const PageText = "Community Events Ltd. Community Event Map displaying community events."
    render(<Page/>)
    expect(screen.getByText(PageText)).toBeInTheDocument();
        // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found
    // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
    // fireEvent.click(screen.getByLabelText(/show/i))
    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    // expect(screen.getByText(testMessage)).toBeInTheDocument()
  });
  