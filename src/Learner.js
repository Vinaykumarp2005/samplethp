import React, { useEffect, useRef } from "react";
import "./Learner.css"; 
import A1 from './A1.jpeg'
import A2 from './A2.jpeg'
import A3 from './A3.jpeg'
import A4 from './A4.jpeg'

const Learner = () => {
  const stackRef = useRef(null);

  // Function to move the last card to the front
  const moveCard = () => {
    const stack = stackRef.current;
    const lastCard = stack.lastElementChild;

    if (lastCard && lastCard.classList.contains("carda")) {
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
      const card = e.target.closest(".carda");
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
    <div>
    <div className="appa">
      <main className="body1a">
      <div className="contenta">
          <h1>Learner's Achievements</h1>
        </div>
        <div className="stack" ref={stackRef}>
          <div className="carda">
            <img
              src={A1}
              alt=""
            />
          </div>
          <div className="carda">
            <img
              src={A2}
              alt=""
            />
          </div>
          <div className="carda">
            <img
              src={A3}
              alt=""
            />
          </div>
          <div className="carda">
            <img
              src={A4}
              alt=""
            />
          </div>
        
       
        </div>
        
      </main>
    </div>

    </div>
  );
};

export default Learner;
