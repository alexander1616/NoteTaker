import { render } from "@testing-library/react";
import React, { useState, useEffect, Fragment } from "react";
//components

import InputEvent from "./InputEvent";
import ListEvents from "./ListEvents";

function ShowEvents(props) {
    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(`http://localhost:5000/events/${props.eventId}`)
            let data = await response.json()
        }
        fetchData()
    }, [])

render()

    return (
        <Fragment>
            <div className="container">
                <InputEvent />
                <ListEvents />
            </div>

        </Fragment>
    );
}

export default ShowEvents;