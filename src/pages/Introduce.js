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
          안녕하세요! 신입 개발자를 꿈꾸는 서유정입니다. 개발에 대한 열정을 가지고 있으며, 인공지능사관학교를 수료하면서 체계적인 학습을 통해 기술적인 기초를 다졌습니다.
        </p>
        <p>
          주로 프론트엔드 개발을 담당하였지만, Socket.io를 활용한 양방향 실시간 채팅방 구현과 Node.js 서버 구축 등 다양한 백엔드 기술에도 관심을 가지고 학습하고 적용할 수 있는 능력을 갖추고 있습니다.
        </p>
        <p>
          최근에는 다양한 스킬을 위해 Next.js에 대해서 학습하고 있으며, 지속적으로 학습하고 성장하면서 더 나은 코드를 작성하기 위해 노력하겠습니다.
        </p>
      </div>
    </div>
  </Element>
);

export default Introduce;
