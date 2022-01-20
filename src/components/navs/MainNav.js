import { Link } from "react-router-dom";

const MainNav = () => {
    return (
        <nav style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/newevent">Create Event</Link>
            </div>
        </nav>
    )
}

export default MainNav;