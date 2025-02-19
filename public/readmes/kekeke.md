# **Kekeke** 🎂
**– AI 추천 및 드로잉 기술을 활용한 주문 제작 케이크 플랫폼**   

![kekekehome](https://github.com/user-attachments/assets/97c4dd9b-33b1-4e0f-a562-6da6e727054d)

## 📌 **프로젝트 개요**  
**Kekeke**는 맞춤형 케이크 주문을 위한 플랫폼입니다.  
기존에는 네이버, 인스타그램 등을 통해 케이크 가게를 찾아 카카오톡 오픈채팅으로 사업자와 서비스를 이용해야 하는 부분이 복잡했습니다. 이 프로젝트는 이러한 과정을 개선하여, 지역 기반 검색, AI 자동 분류, 실시간 채팅 등의 기능을 제공하는 통합 플랫폼을 구축하는 것을 목표로 했습니다.

## 🎯 **주요 기능**  

### 1️⃣ **위치 기반 케이크 가게 검색**  
- KakaoMap API를 활용하여 원하는 지역의 케이크 가게를 필터링  

### 2️⃣ **AI 기반 케이크 카테고리 자동 분류**  
- 판매자가 새로운 케이크 디자인을 업로드하면 ResNet50 모델을 활용하여 카테고리 자동 분류  
- Flask 서버에서 모델을 실행하고, React에서 결과를 받아 화면에 표시

![kekeke_ai](https://github.com/user-attachments/assets/debd7225-8d0d-4049-adf6-ea068c4c9efe)

### 3️⃣ **커스텀 케이크 디자인 도구**  
- Konva API를 사용하여 사용자가 원하는 케이크 디자인을 디자인을 직접 그려볼 수 있도록 구현

![kekeke_drawing](https://github.com/user-attachments/assets/a0e8fcec-7de5-48e3-baa8-17b5c27f7aea)

### 4️⃣ **실시간 채팅 기능**  
- Socket API를 활용하여 주문 시 판매자와 구매자가 실시간으로 상담 가능
- Node.js 서버를 통해 양방향 소켓 통신 구현  

![kekekechat](https://github.com/user-attachments/assets/5ee3d7ae-4553-414a-b439-61d241c69554)

### 5️⃣ **판매자 대시보드**  
- 판매자가 업로드한 케이크 및 주문 내역을 한눈에 볼 수 있도록 대시보드 UI 제공

![kekeke_admin](https://github.com/user-attachments/assets/6e1caf46-c368-47e2-b8d9-578f8fe2a22e)

## 🛠️ **기술 스택**  

### **Frontend**  
- **React.js**
- **HTML/CSS, JavaScript**
- **Konva API**

### **Backend**  
- **Node.js, Express**
- **MySQL, Firebase**
- **Socket API**

### **Machine Learning**  
- **Python, Flask**
- **ResNet50**