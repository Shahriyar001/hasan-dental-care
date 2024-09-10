import React from "react";
import img1 from "../../../assets/images/f1.png";
import img2 from "../../../assets/images/f2.png";
import img3 from "../../../assets/images/features.3.png";
import img4 from "../../../assets/images/colab1.jpg";

const Features = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="caroasole lg:w-1/2">
            <div className="carousel carousel-vertical rounded-box h-96">
              <div className="carousel-item h-full">
                <img className="w-full" src={img1} />
              </div>
              <div className="carousel-item h-full">
                <img className="w-full" src={img2} />
              </div>
              <div className="carousel-item h-full">
                <img className="w-full" src={img3} />
              </div>
              <div className="carousel-item h-full">
                <img className="w-full" src={img4} />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">
              Main Features And Collaboration
            </h1>
            <p className="py-6">
              Welcome to our feature showcase! Here, you can get a glimpse of
              the core functionalities and essential sections that make our
              platform user-friendly and efficient. Whether you're navigating
              the Dashboard for an overview of your activities, scheduling an
              Appointment with just a few clicks, learning more About Us and our
              commitment to quality care, or meeting our dedicated Developers
              Team who brought this platform to life — everything is designed
              with your convenience in mind. Dive in and discover how we’ve
              tailored this experience to cater to all your dental care needs!
            </p>
            <button className="btn disabled btn-primary">
              Scroll on the picture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
