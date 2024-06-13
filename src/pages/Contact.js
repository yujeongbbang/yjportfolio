import React from 'react';
import { Element } from 'react-scroll';
import '../css/Main.css';
import '../css/Contact.css';

const Contact = () => (
  <Element name="contact" className="section">
  <h1 className="contact-title">Contact</h1>
  <div className="centered-content">
    <div className="about-section">
      <div className="info">
        <div className="info-item">
          <div className="icon profile-icon"></div>
          <div className="about-title">이름</div>
          <div className='about-content'>서유정</div>
        </div>
        <div className="info-item">
          <div className="icon phone-icon"></div>
          <div className="about-title">번호</div>
          <div className='about-content'>010-3924-6066</div>
        </div>
        <div className="info-item">
          <div className="icon email-icon"></div>
          <div className="about-title">이메일</div> 
          <div className='about-content'>yujeongmoroll@gmail.com</div>
        </div>
        <div className="info-item">
          <div className="icon github-icon"></div>
          <div className="about-title">깃허브</div>
          <div className='about-content'>https://github.com/yujeongbbang</div>
        </div>
      </div>
    </div>
  </div>
</Element>
);

export default Contact;
