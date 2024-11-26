import React from "react";
import kc1 from "../src/assets/kc1.jpeg";
import kc2 from "../src/assets/kc2.jpeg";
import kc3 from "../src/assets/kc3.jpeg";
import r1 from "../src/assets/r1.jpeg";
import r2 from "../src/assets/r2.png";
import r3 from "../src/assets/r3.jpeg";
import nl1 from "../src/assets/nl1.jpg";
import nl2 from "../src/assets/nl2.jpeg";
import nl3 from "../src/assets/nl3.jpeg";
import './App.css';
function KnowledgeCenter() {
  return (
    <div className="mt-4 p-3">
      <h1 className="display-6 text-center bg-white text-primary">
        "Your Digital Library for Innovation and Insights"
      </h1>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success fs-4 mt-2">Latest Updates</button>
      </div>

      {/* Latest Updates Section */}
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 m-4">
        {[kc1, kc2, kc3].map((img, index) => (
          <div className="col" key={index}>
            <div className="card h-100 p-1 m-0 card1-animation">
              <img src={img} alt={`Knowledge Center ${index + 1}`} />
              <div className="card-body">
                <button className="btn btn-secondary">
                  {["Blockchain Innovation", "Innovation Lab", "Startup India"][index]}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resources Section */}
      <div className="d-flex justify-content-center">
        <button className="btn btn-success fs-4 mt-2">Resources</button>
      </div>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 m-4">
        {[r1, r2, r3].map((img, index) => (
          <div className="col" key={index}>
            <div className="card h-100 p-1 m-0 card1-animation">
              <img src={img} alt={`Resource ${index + 1}`} height={200} />
              <div className="card-body">
                <button className="btn btn-secondary">
                  <a
                    href={[
                      "https://nasscom.in/knowledge-center/publications/emerging-technology-hubs-india",
                      "https://blog.thepienews.com/2022/02/the-soaring-dreams-of-small-cities-rise-in-study-abroad-aspirants-from-tier-2-and-3-indian-cities/",
                      "https://blog.thepienews.com/2022/02/the-soaring-dreams-of-small-cities-rise-in-study-abroad-aspirants-from-tier-2-and-3-indian-cities/",
                    ][index]}
                    target="blank"
                    className="text-decoration-none text-white"
                  >
                    Know more...
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletters Section */}
      <div className="d-flex justify-content-center">
        <button className="btn btn-success fs-4 mt-2">News Letters</button>
      </div>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 m-4">
        {[nl1, nl2, nl3].map((img, index) => (
          <div className="col" key={index}>
            <div className="card h-100 p-1 m-0 card1-animation">
              <img src={img} alt={`Newsletter ${index + 1}`} height={200} />
              <div className="card-body">
                <button className="btn btn-secondary">
                  <a
                    href={[
                      "https://blume.vc/reports/indus-valley-annual-report-2024",
                      "https://blume.vc/reports/indus-valley-annual-report-2024",
                      "https://www.antler.co/academy/how-to-get-startup-ideas",
                    ][index]}
                    target="blank"
                    className="text-decoration-none text-white"
                  >
                    Know more...
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KnowledgeCenter;
