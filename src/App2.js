import React, { useEffect, useRef } from "react";
import "./App.css"; // Ensure this file contains the provided Css
import C1 from './C1.jpeg'
import C2 from './C2.jpeg'
import C3 from './C3.jpeg'
import E1 from './1.jpeg'
import E2 from './2.jpeg'
import E3 from './3.jpeg'
import E4 from './4.jpeg'
import H1 from './H1.jpeg'
import H2 from './H2.jpeg'

const App2 = () => {
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
          <h1>"Building <span className="o">In</span><span className="w">di</span><span className="g">a’s</span> first Digital School for Student Innovation - one that India truly deserves "</h1>
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
      <br/>
      <br/>
    </div>
    <br/>
    <br/>
    <h1 className="p-2 m-3 text-center">Crash Courses</h1>
    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 m-4 bod1">
      
            {[{ img: C1, text: 'Linkedin Profile Optimization' }, 
              { img: C2, text: 'Introduction to IoT' }, 
              { img: C3, text: 'Design Thinking' }].map((item, index) => (
                <div className="col" key={index}>
                    <div className="card1 h-100 p-1 m-1 card1-animation">
                        <div className="card1-img-container">
                            <img src={item.img} alt={item.text} className="card1-img" />
                        </div>
                        <div className="card1-body">
                            <h5 className="card1-title">{item.text}</h5>
                            <br/>
                            <button className="btn bt btn-secondary">Launching Soon...</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <br/>
        <br/>
        <h1 className="p-2 m-3 text-center">Live Cohorts</h1>
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-2 m-3 bod1">
      
            {[{ img: H1, text: 'Pro-Active Design Thinking' }, 
              { img: H2, text: 'Problem 2 Prototype' }].map((item, index) => (
                <div className="col" key={index}>
                    <div className="card1 h-100 p-1 m-1 card1-animation">
                        <div className="card1-img-container">
                            <img src={item.img} alt={item.text} className="card1-img" />
                        </div>
                        <div className="card1-body">
                            <h5 className="card1-title">{item.text}</h5>
                            <br/>
                            <button className="btn bt btn-secondary">Launching Soon...</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default App2;