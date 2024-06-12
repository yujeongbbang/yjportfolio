import React from 'react';
import { Element } from 'react-scroll';
import '../css/About.css';

const About = () => (
  <Element name="about" className="section">
    <h1 className='aboutme'>About me</h1>
    <div className="about-section">
      <div className="info">
        <div className="info-item">
          <div className="icon profile-icon"></div>
          <div className="about-title">이름</div>
          <div className='about-content'>서유정</div>
        </div>
        <div className="info-item">
          <div className="icon birth-icon"></div>
          <div className="about-title">생년월일</div> 
          <div className='about-content'>2000년 10월 23일</div>

        </div>
        <div className="info-item">
          <div className="icon phone-icon"></div>
          <div className="about-title">번호</div>
          <div className='about-content'>010-3924-6066</div>

        </div>
        <div className="info-item">
          <div className="icon address-icon"></div>
          <div className="about-title">주소</div> 
          <div className='about-content'>광주광역시 서구</div>

        </div>
        <div className="info-item">
          <div className="icon email-icon"></div>
          <div className="about-title">이메일</div> 
          <div className='about-content'>pzzzz12@naver.com</div>

        </div>
        <div className="info-item">
          <div className="icon github-icon"></div>
          <div className="about-title">깃허브</div>
          <div className='about-content'>https://github.com/yujeongbbang</div>

        </div>
      </div>
    </div>
  </Element>
);

export default About;
