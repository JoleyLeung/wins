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
      <br></br>
      {EventsImages.map((event, index) => (
        <div className="line">
          <div className="flex-event">
            <div>
              <img width="500px" src={`event_album/${event.eventpicture}`} />
            </div>
            <div className="marginleft">
              <div className=" smolheader "> {event.eventname}</div>
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
