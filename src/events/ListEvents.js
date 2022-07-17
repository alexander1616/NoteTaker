import React, { Fragment, useEffect, useState } from "react";

import EditEvent from "./EditEvent";

const ListEvents = () => {

    const [events, setEvents] = useState([]);

    //delete event function

    const deleteEvent = async (eventId) => {
        try {
            const deleteEvent = await fetch(`http://localhost:5000/events/${eventId}`, {
                method: "DELETE"
            });       

           setEvents(events.filter(Events => Events.eventId !== eventId));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getEvents = async() => {
        try {
            const response = await fetch("http://localhost:5000/events/");
            const jsonData = await response.json();

           setEvents(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getEvents();
    }, []);

    return <Fragment>
        <table className="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {Events.map(Events => (
                    <tr key={Events.eventId}>
                        <td>{Events.eventTitle}</td>
                        <td>
                            <EditEvent Events={Events} />
                            </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteEvent(Events.eventId)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default ListEvents;