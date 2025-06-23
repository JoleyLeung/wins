import React from "react";
import "../styles/Home.css";
import "../App.css";
import EventsImages from "../../public/event_album/Events.json";
import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
declare global {
  interface Window {
    bootstrap: any;
  }
}

function EventCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselElement = carouselRef.current;

    if (carouselElement && window.bootstrap?.Carousel) {
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 2000,
        wrap: true,
      });
      return () => carousel.dispose(); // cleanup
    }
  }, []);

  return (
    <div id="myCarousel" className="carousel slide " ref={carouselRef}>
      <div className="carousel-inner">
        {EventsImages.map((event, index) => (
          <div
            className={`carousel-item ${
              index === 0 ? "active text-black" : " text-black"
            }`}
            key={index}
          >
            <div className="text-center smolheader smolmarginleft smolmarginright">
              <h3>{event.eventname}</h3>
            </div>
            <div className="text-center">
              <img
                height="400px"
                src={`event_album/${event.eventpicture}`}
                className="xd-block"
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
}
export default EventCarousel;
