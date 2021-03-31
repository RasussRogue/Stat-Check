import {Link} from "react-router-dom";
import * as React from "react";

export const Header = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/champion">Champion Page</Link>
            </li>
        </ul>
    );
}