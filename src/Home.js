import React from 'react';
import Banner from './Banner.jpeg';
import red from './Red.jpeg';
import wission from './Wission.jpeg';
import Anedya from './Anedya.jpeg';
import './Home.css';
import What from './What.jpeg'
import Learner from './Learner';
import mission from './mission.jpeg'


function Home() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Banner} className="card-img" alt="..." />
          <div className="card-img-overlay cardover m-5 w-50">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-warning border-0 rounded-5 mb-3 btns fw-semibold fs-3">
                Explore More. <i className="bi bi-arrow-right"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <div>
      <img
            src={What}
            className="d-block w-100"
            alt="..."
          />
      </div>
      <div>
          <Learner/>
          </div>
      <div>
      <img
            src={mission}
            className="d-block w-100"
            alt="..."
          />
      </div>

      <div className="border-black company">
        <hr />
        <p className="text-muted fs-2 text-center mb-4">
          Our Supportive Organizations
        </p>
        <div className="d-flex justify-content-evenly">
          <img className="comp" src={wission} alt="" />
          <img
            className="comp"
            src="https://teckybot.com/images/teckybot%20logo.png"
            alt=""
          />
          
          <img
            className="comp"
            src="https://abtv.in/wp-content/uploads/2024/03/abtech.png"
            alt=""
          />
          <img className="comp" src={Anedya} alt="" />
          <img className="comp" src={red} alt="" />
        </div>
        <hr />
      </div>
     
    </div>
  );
}

export default Home;
