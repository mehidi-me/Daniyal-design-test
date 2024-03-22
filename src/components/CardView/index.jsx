
'use client'
import Slider from "react-slick";
function CardView() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    responsive: [
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
    ]
  }
  return (
    <section className="card-view">
        <div className="container">
         
            <Slider {...settings}>
            <div>
            <div className="card-view-item">
              <div className="icon">
                <img src="./icons/card-view-icon.svg" alt="" />
              </div>
              <h3>Affordable Auto Insurance</h3>
              <p>
                USA Underwriters offers affordable rates on quality coverage.
              </p>
            </div>
            </div>
            <div>
            <div className="card-view-item">
              <div className="icon">
                <img src="./icons/card-view-icon.svg" alt="" />
              </div>
              <h3>Accidents Can Add Up</h3>
              <p>
                Accidents and infractions can linger long after the fines are
                paid and the car is repaired.
              </p>
            </div>
            </div>
            <div>
            <div className="card-view-item">
              <div className="icon">
                <img src="./icons/card-view-icon.svg" alt="" />
              </div>
              <h3>Price Conscious</h3>
              <p>
                Price conscious consumers choose USA Underwriters for affordable
                auto insurance solutions.
              </p>
            </div>
            </div>
            </Slider>
            
          
        </div>
      </section>
  )
}

export default CardView