// import React, { useEffect, useRef } from "react";
// import "./App.css"; // Ensure this file contains the provided Css
// import E1 from './1.jpeg'
// import E2 from './2.jpeg'
// import E3 from './3.jpeg'
// import E4 from './4.jpeg'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// const App = () => {
//   const stackRef = useRef(null);

//   // Function to move the last card to the front
//   const moveCard = () => {
//     const stack = stackRef.current;
//     const lastCard = stack.lastElementChild;

//     if (lastCard && lastCard.classList.contains("carde")) {
//       lastCard.classList.add("swap");

//       setTimeout(() => {
//         lastCard.classList.remove("swap");
//         stack.insertBefore(lastCard, stack.firstElementChild);
//       }, 1200);
//     }
//   };

//   useEffect(() => {
//     const stack = stackRef.current;

//     // Auto-play interval
//     const autoplayInterval = setInterval(moveCard, 3000);

//     // Click event for manual swapping
//     const handleClick = (e) => {
//       const card = e.target.closest(".carde");
//       if (card && card === stack.lastElementChild) {
//         card.classList.add("swap");

//         setTimeout(() => {
//           card.classList.remove("swap");
//           stack.insertBefore(card, stack.firstElementChild);
//         }, 1200);
//       }
//     };

//     stack.addEventListener("click", handleClick);

//     return () => {
//       clearInterval(autoplayInterval);
//       stack.removeEventListener("click", handleClick);
//     };
//   }, []);

//   return (
//     <div>
//     <div className="appe">
//       <main className="body1e">
//       <div className="contente">
//           <h1>Events Ahead</h1>
//           <p>
//             Welcome to La Pâtisserie Belle, where every bite is a journey
//             into the exquisite world of finely crafted pastries. Our
//             patisserie is dedicated to bringing you the most delicious and
//             beautifully designed pastries that will delight your senses and
//             elevate your taste experience. Nestled in the heart of the city,
//             our patisserie is a haven for those who appreciate the finer
//             things in life.
//           </p>
//           <button className="btnne">More Exclusive Events</button>
//         </div>
//         <div className="stack" ref={stackRef}>
//           <div className="carde">
//             <img
//               src={E1}
//               alt=""
//             />
//           </div>
//           <div className="carde">
//             <img
//               src={E2}
//               alt=""
//             />
//           </div>
//           <div className="carde">
//             <img
//               src={E3}
//               alt=""
//             />
//           </div>
//           <div className="carde">
//             <img
//               src={E4}
//               alt=""
//             />
//           </div>
        
       
//         </div>
        
//       </main>
//     </div>

//     </div>
//   );
// };

// export default App;


// const EventsAhead = () => {
//   const stackRef = useRef(null);

//   // Function to move the last card to the front
//   const moveCard = () => {
//     const stack = stackRef.current;
//     const lastCard = stack.lastElementChild;

//     if (lastCard && lastCard.classList.contains("carde")) {
//       lastCard.classList.add("swap");

//       setTimeout(() => {
//         lastCard.classList.remove("swap");
//         stack.insertBefore(lastCard, stack.firstElementChild);
//       }, 1200);
//     }
//   };

//   useEffect(() => {
//     const stack = stackRef.current;

//     // Auto-play interval
//     const autoplayInterval = setInterval(moveCard, 3000);

//     // Click event for manual swapping
//     const handleClick = (e) => {
//       const card = e.target.closest(".carde");
//       if (card && card === stack.lastElementChild) {
//         card.classList.add("swap");

//         setTimeout(() => {
//           card.classList.remove("swap");
//           stack.insertBefore(card, stack.firstElementChild);
//         }, 1200);
//       }
//     };

//     stack.addEventListener("click", handleClick);

//     return () => {
//       clearInterval(autoplayInterval);
//       stack.removeEventListener("click", handleClick);
//     };
//   }, []);

  // return (
  //   <div className="appe">
  //     <main className="body1e">
  //       <div className="contente">
  //         <h1>Events Ahead</h1>
  //         <p>
  //           Welcome to La Pâtisserie Belle, where every bite is a journey into
  //           the exquisite world of finely crafted pastries. Our patisserie is
  //           dedicated to bringing you the most delicious and beautifully
  //           designed pastries that will delight your senses and elevate your
  //           taste experience. Nestled in the heart of the city, our patisserie
  //           is a haven for those who appreciate the finer things in life.
  //         </p>
  //         <button className="btnne">More Exclusive Events</button>
  //       </div>
  //       <div className="stack" ref={stackRef}>
  //         <div className="carde">
  //           <img src={E1} alt="" />
  //         </div>
  //         <div className="carde">
  //           <img src={E2} alt="" />
  //         </div>
  //         <div className="carde">
  //           <img src={E3} alt="" />
  //         </div>
  //         <div className="carde">
  //           <img src={E4} alt="" />
  //         </div>
  //       </div>
  //     </main>
  //   </div>
  // );
// };



import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header"; // Import Header
import Home from "./Home"; // Import Home component
import EventsAhead from "./EventsAhead"; // Import EventsAhead component
import Programs from "./App2"; // Import other routes as needed
import KnowledgeCenter from "./KnowledgeCenter";
import Login from "./Login";
import Ideagpt from "./Ideagpt";
import Join from "./Join";
// import { LoginProvider } from './contexts/LoginContext';
import E1 from "./1.jpeg";
import E2 from "./2.jpeg";
import E3 from "./3.jpeg";
import E4 from "./4.jpeg";


const App = () => {
  return (
    <div>
      <Header /> {/* Place Header at the top */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/programs" element={<Programs />} />
        <Route path="/ideagpt" element={<Ideagpt />} />
        
        <Route path="/events-ahead" element={<EventsAhead />} /> {/* EventsAhead route */}
        <Route path="/knowledgecentre" element={<KnowledgeCenter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join-us" element={<Join />} />
        {/* Add more routes here */}
      </Routes>
    </div>
  );
};

export default App;