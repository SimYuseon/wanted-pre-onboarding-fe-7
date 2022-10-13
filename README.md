# 원티드 프리온보딩 프론트엔드 - 선발 과제

"원티드 프리온보딩 프론트엔드 코스" 선발 과제 제출용 저장소
 #### 🥰 지원자 심유선 🥰

## 주요 기능
### 1. Login / SignUp
#### 1) 유효성검사 및 조건만족시 버튼 활성화 ✅
  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
#### 2) 로그인 API를 호출후 올바른 응답을 받았을 때 `/todo` 경로로 이동 ✅
  - 응답받은 JWT는 로컬 스토리지에 저장
#### 3) 로그인 여부에 따른 리다이렉트 처리 ✅
 - 토큰이 있는경우 `/` 페이지 접속시 `/todo` 경로로 리다이렉트
 - 토큰이 없는경우  `/todo`페이지 접속시 `/` 경로로 리다이렉트

### 2. Todo
#### 1)  조회 / 추가 ✅
- 투두 리스트 내용 및 완료 여부 표시
- 입력창과 추가 버튼이 있고, 추가버튼 클릭시 입력창의 내용이 새로운 투두 리스트로 추가

#### 2)  삭제 / 수정 ✅
 - 수정버튼존재, 해당 버튼을 누르면 수정모드가 활성화, 내용 수정가능
 - 수정모드, 제출버튼과 취소버튼이 표시되며 수정 내용 제출 및 취소가능
 - 삭제버튼이 존재, 해당 버튼을 누르면 투두 리스트 삭제
  
## 프로젝트 설치 및 실행 ✨

#### 1) Clone

```
$ git clone 
```

#### 2) 프로젝트 패키지 설치

```plaintext
$ yarn install
```

#### 3) 프로젝트 실행

```plaintext
$ yarn start
```
---
### 기술스택
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=#61DAFB&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Axios</title><path d="M11.0683 2.89968V22.2973l-2.11399 1.70265V7.8638H4.975l6.0933-4.96412zM14.93426 0v15.76724H19.025l-6.20044 5.08865V1.4689L14.93426 0z"/></svg>
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
---

