import * as React from "react";
import * as ReactDOM from "react-dom";


import { Persons } from "./components/person";
import { Champions } from "./components/champion";


class Hello extends React.Component {

    render() {
        return (
            <div>
                <Persons />
                <Champions/>
            </div>
        )
    }
}
ReactDOM.render(
    <Hello />,
    document.getElementById("example")
);