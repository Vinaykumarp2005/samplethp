import React, { useEffect, useRef } from "react";
import "./App.css"; // Ensure this file contains the provided Css
import E1 from './1.jpeg'
import E2 from './2.jpeg'
import E3 from './3.jpeg'
import E4 from './4.jpeg'

const EventsAhead = () => {
  const stackRef = useRef(null);

  // Function to move the last card to the front
  const moveCard = () => {
    const stack = stackRef.current;
    const lastCard = stack.lastElementChild;

    if (lastCard && lastCard.classList.contains("carde")) {
      lastCard.classList.add("swap");

      setTimeout(() => {
        lastCard.classList.remove("swap");
        stack.insertBefore(lastCard, stack.firstElementChild);
      }, 1200);
    }
  };

  useEffect(() => {
    const stack = stackRef.current;

    // Auto-play interval
    const autoplayInterval = setInterval(moveCard, 3000);

    // Click event for manual swapping
    const handleClick = (e) => {
      const card = e.target.closest(".carde");
      if (card && card === stack.lastElementChild) {
        card.classList.add("swap");

        setTimeout(() => {
          card.classList.remove("swap");
          stack.insertBefore(card, stack.firstElementChild);
        }, 1200);
      }
    };

    stack.addEventListener("click", handleClick);

    return () => {
      clearInterval(autoplayInterval);
      stack.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="app">
    <div className="appe">
      <main className="body1e">
      <div className="contente">
          <h1>Events Ahead</h1>
          <p>
          Your Next Big Challenge awaits here !!!
          </p>
        </div>
        <div className="stack" ref={stackRef}>
          <div className="carde">
            <img
              src={E1}
              alt=""
            />
          </div>
          <div className="carde">
            <img
              src={E2}
              alt=""
            />
          </div>
          <div className="carde">
            <img
              src={E3}
              alt=""
            />
          </div>
          <div className="carde">
            <img
              src={E4}
              alt=""
            />
          </div>
        
       
        </div>
        
      </main>
    </div>
    <h1 className="p-2 m-3 text-center">More Exclusive Events</h1>
    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 m-4 bod1">
      
            {[{ img: E1, text: 'Electronic Music Fest' }, 
              { img: E2, text: 'Cyber Punk' }, 
              { img: E4, text: 'Technology Conference 2030' }].map((item, index) => (
                <div className="col" key={index}>
                    <div className="card1 h-100 p-1 m-1 card1-animation">
                        <div className="card1-img-container">
                            <img src={item.img} alt={item.text} className="card1-img" />
                        </div>
                        <div className="card1-body">
                            <h5 className="card1-title">{item.text}</h5>
                            <br/>
                            <button className="btn bt btn-secondary">Know More...</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default EventsAhead;