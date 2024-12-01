import React from "react";
import "./About.css";

const About = () => {
  return (
    <footer className="about-footer">
      <div className="about-container">
        <h2 className="about-title">About Avatar Closet</h2>
        <p className="about-text">
          <strong>Avatar Closet</strong> is a cutting-edge platform designed to
          revolutionize how you explore and try on fashion. Using our *closet-in
          try-on feature*, you can see how outfits and accessories look on your
          digital avatar before making a choice.
        </p>
        <p className="about-text">
          Whether you're experimenting with new styles, creating your digital
          persona, or just having fun, our app offers a seamless and immersive
          experience. Mix, match, and customize your avatar with a variety of
          clothing and accessories tailored to your unique preferences.
        </p>
        <p className="about-text">
          Our mission is to make digital fashion accessible, fun, and intuitive,
          empowering users to express themselves like never before.
        </p>
        <p className="about-text">
          Experience the future of fashion with <strong>Avatar Closet</strong>{" "}
          and let your imagination lead the way!
        </p>
        <p className="about-copyright">
          &copy; 2024 Avatar Closet. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default About;
