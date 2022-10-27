import React from 'react';
import styles from '../App.css';
import finishImage from "../img/Finish.png"
import StartFirebase from "../firebase";
import { ref, set, get, push, update, remove, child, getDatabase, onValue } from "firebase/database";

const SendPage = () => {
  
  const db = StartFirebase();
        const link = document.location.href.split("=");
        const startCountRef = ref(db, 'users/' + link[1] + '/nickname');
        const linkToSend = "/send/id=" + link[1]
        var data
        onValue(startCountRef, (snapshot) => {
            data = snapshot.val();
        });

  return (
    <div class="send__container">
      <img class="result__image" src={finishImage}></img>
      <p class="result__text">{data}에게<br/>롤링페이퍼가 전달되었어요</p>
      <p class="result__description">앱을 설치해서 나만의 롤링페이퍼를 만들어보세요</p>
      <form action="https://testflight.apple.com/join/qtUdHgxR">
        <input class="input__testFilght" type="submit" value="테스트 플라이트 설치하기"/>
      </form>
    </div>
  );
};

export default SendPage;