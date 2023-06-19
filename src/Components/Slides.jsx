import React from 'react'

import img1 from '../img/provider.jpg';
import img2 from '../img/appointment.jpg';
import img3 from '../img/conception.jpg';
import img4 from '../img/menstruation.jpg';


const Slides = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel container" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3" className="active"></li>
        </ol>
        <div className="carousel-inner">
          {/* slide1 */}
            <div className="carousel-item active ">
                <img className="d-block w-100 slide" src={img1} alt="First slide"/>
                <div className="carousel-caption d-none d-md-block innercontent">
                    <h3>Find a Provider</h3>
                    <button className="btnslide">Meet Our Team</button>
                </div>
            </div>
            {/* slide2 */}
            <div className="carousel-item">
                <img className="d-block w-100 slide" src={img2} alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block innercontent">
                    <h3>Book an Appointment</h3>
                    <button>Schedule</button>
                </div>
            </div>
            {/* slide3 */}
            <div className="carousel-item">
                <img className="d-block w-100 slide" src={img3} alt="Third slide"/>
                <div className="carousel-caption d-none d-md-block innercontent">
                    <h3>Preparation of Conception</h3>
                    <button>Information</button>
                </div>
            </div>
            {/* slide 4 */}
            <div className="carousel-item">
                <img className="d-block w-100 slide" src={img4} alt="Fourth slide"/>
                <div className="carousel-caption d-none d-md-block innercontent">
                    <h3>Doubts about Menstruation</h3>
                    <button>Clear Doubts</button>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>

    </div>
  )
}

export default Slides