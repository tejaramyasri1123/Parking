import { render, screen, fireEvent } from '@testing-library/react';
import ListingHome from './ListingHome'; // Adjust path as needed
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom'; // Wrap with Router for Link to work


// Mocking the context value
const mockUser = { name: 'John Doe', email: 'john@example.com' };

describe('ListingHome Component', () => {
  
  it('renders ListingHome component correctly', () => {
    render(
      <Router>
        <UserContext.Provider value={{ user: mockUser }}>
          <ListingHome />
        </UserContext.Provider>
      </Router>
    );

    // Test that the correct heading is rendered
    expect(screen.getByText(/List your space on park vue/i)).toBeInTheDocument();
    expect(screen.getByText(/Turn Your Empty Space into Cash:/i)).toBeInTheDocument();
    expect(screen.getByText(/List Your Parking Spot/i)).toBeInTheDocument();

    // Test that the Get Started button is rendered
    const getStartedButton = screen.getByRole('button', { name: /Get Started/i });
    expect(getStartedButton).toBeInTheDocument();
  });

  it('navigates to listing page when Get Started button is clicked', () => {
    render(
      <Router>
        <UserContext.Provider value={{ user: mockUser }}>
          <ListingHome />
        </UserContext.Provider>
      </Router>
    );

    // Simulate click on Get Started button
    const getStartedButton = screen.getByRole('button', { name: /Get Started/i });
    fireEvent.click(getStartedButton);

    // Check if the navigation occurs (URL changes to /listingpage)
    expect(window.location.pathname).toBe('/listingpage');
  });

  it('renders Hostingprocess and Listingsfeatures components', () => {
    render(
      <Router>
        <UserContext.Provider value={{ user: mockUser }}>
          <ListingHome />
        </UserContext.Provider>
      </Router>
    );

    // Test that Hostingprocess and Listingsfeatures components are rendered
    expect(screen.getByText(/Hosting Process/i)).toBeInTheDocument(); // assuming there is text within Hostingprocess component
    expect(screen.getByText(/Features/i)).toBeInTheDocument(); // assuming there is text within Listingsfeatures component
  });


  it('renders Bgimage component with correct props', () => {
    render(
      <Router>
        <UserContext.Provider value={{ user: mockUser }}>
          <ListingHome />
        </UserContext.Provider>
      </Router>
    );

    // Check if Bgimage component is rendered and has correct content
    const bgImageText = screen.getByText(/Having Stress With parking?/i);
    expect(bgImageText).toBeInTheDocument();
    expect(screen.getByText(/Book on park Vue/i)).toBeInTheDocument();
  });
});
