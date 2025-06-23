import React from "react";
import "../styles/Events.css";
import "../App.css";
import EventsImages from "../../public/event_album/Events.json";

function Events() {
  return (
    <div>
      <br></br>
      <div className="aligncenter mediumheader">
        <span>See Our Past Events!</span>{" "}
      </div>

      <br></br>
      {EventsImages.map((event, index) => (
        <div className="line">
          <div className="flex-event">
            <div className="marginleft marginright">
              <img width="400px" src={`event_album/${event.eventpicture}`} />
            </div>
            <div>
              <div className=" smolheader "> {event.eventname}</div>
              <div className=" date "> {event.eventdate}</div>
              <div
                className="text"
                dangerouslySetInnerHTML={{ __html: event.eventdescription }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
// (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
export default Events;
