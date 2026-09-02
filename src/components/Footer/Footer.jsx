import "./Footer.css";
import { Clock } from "lucide-react";

const Footer = () => {

    // define the agency opening hour
    const openingHour = 9;
    // define the agency closing hour
    const closingHour = 17;
    // get the current date an time
    const now = new Date();
    // extract the current hour from the date (returns the hour between 0 and 23)
    const currentHour = now.getHours();
    // extract the current day of the week (0 = Sunday, 6 = Saturday)
    const currentDay = now.getDay();
    // check if the current day is a weekday (Monday to Friday)
    const isWeekday = currentDay >= 1 && currentDay <= 5;
    // determine if the agency is open (weekday and within operating hours)
    const isOpen = isWeekday && currentHour >= openingHour && currentHour < closingHour;

    // define the JSX to display when the agency is open
    const openElement = (
        <>
            {/* Flex container for the "open" status message */}
            <div className="message">
                {/* display clock icon */}
                <Clock className="icon" />
                <span className="status open">We are open now!</span>
            </div>
            {/* display the contact information */}
            <div style={{ marginTop: "0.5rem" }}>
                Call us at: <strong>(555) 123-4567</strong>
            </div>
        </>
    )

    // define the JSX to display whhen the agency is closed
    const closedElement = (
        <>
            {/* Flex container for the "closed" status message */}
            <div className="message">
                <Clock className="icon" />
                <span className="status closed">We are closed now.</span>
            </div>
            {/* Display the agency opening hours */}
            <div style={{ marginTop: "0.5rem" }}>
                Opening hours: Monday to Friday, {openingHour}am to {closingHour - 12}pm.
            </div>
        </>
    )

    return (
        <footer className="footer">
            {isOpen ? openElement : closedElement}
        </footer>
    )
}

export default Footer;