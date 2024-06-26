import React, { useEffect } from "react";
import "./Review.css";

// Icons
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

// image
import car1 from "../../Assets/baner1.png";
import car2 from "../../Assets/baner3.png";
import car3 from "../../Assets/baner2.png";
import user1 from "../../Assets/user.jpg";

// Import Aos for animation and scroll reveal
import Aos from "aos";
import "aos/dist/aos.css";

const Review = () => {
  // Lets Initialise Aos and set the default animation duration

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="review section">
      <div className="secContainer container">
        <div data-aos="fade-up" className="secHeading flex">
          <h3 className="secTitle">Recent Review</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        {/* review container */}
        <div className="reviewContainer grid">
          {/* single review */}
          <div data-aos="fade-up"  className="singleReview grid">
            <div className="imgDiv">
              <img src={car1} alt="Review img" />
            </div>

            <h5 className="reviewTitle">2023 Cadillac</h5>
            <span className="desc">
              Good cars are safe, fast, affrodable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Zara Nelson</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
          {/* single review */}
          <div data-aos="fade-up"  className="singleReview grid">
            <div className="imgDiv">
              <img src={car2} alt="Review img" />
            </div>

            <h5 className="reviewTitle">2023 Cadillac</h5>
            <span className="desc">
              Good cars are safe, fast, affrodable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Zara Nelson</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
          {/* single review */}
          <div data-aos="fade-up"  className="singleReview grid">
            <div className="imgDiv">
              <img src={car3} alt="Review img" />
            </div>

            <h5 className="reviewTitle">2023 Cadillac</h5>
            <span className="desc">
              Good cars are safe, fast, affrodable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Zara Nelson</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
