import React from 'react';
import { Element } from 'react-scroll';
import '../css/Introduce.css';
import ProfileImage from '../assets/Photo.jpg'; // 프로필 이미지 경로

const Introduce = () => (
  <Element name="introduce" className="section">
      <h1 className="introduce-title">Introduce</h1>
    <div className="introduce-content">
      <div className="introduce-left">
        <img src={ProfileImage} alt="프로필 사진" className="profile-image" />
      </div>
      <div className="introduce-right">
        <p>
        인공지능사관학교에서 소프트웨어 개발을 시작으로 프론트엔드부터 백엔드까지 영역을 확장해 왔습니다. WebSocket을 활용한 실시간 데이터 송수신, Node.js 기반 서버 구축을 경험하며 시스템 설계 역량을 키웠으며, Raspberry Pi 및 Ubuntu 기반의 TurtleBot과 연동한 IoT 프로젝트를 통해 하드웨어와의 융합 경험도 쌓았습니다.
        </p>
        <p>
        Next.js 등 최신 기술을 배우고 적용하며, 변화하는 기술 트렌드에 맞춰 성장하고 있습니다. Keep Exploring, Keep Building, Keep Growing을 모토로, 끊임없이 배우고 도전하는 개발자가 되고자 합니다.
        </p>
      </div>
    </div>
  </Element>
);

export default Introduce;
