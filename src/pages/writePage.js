import Button from "../components/Button";
import TextInput from "../components/TextInput";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sticker from '../img/sticker.png';

const WritePage = () => {
  return (
    <div padding='24px'>
      <p style={{ 
					fontSize: '24px'
				}}>To. 니쿠니쿠닉</p>
      <p style={{
        marginTop: '24px'
      }}>작성할 롤링페이퍼의 스티커를 선택해주세요</p>
      <div style={{
        display: 'flex'
      }}>
        <img src={sticker} style={{marginTop: '12px', width:'70px', height: '78px', marginLeft: '14px'}}/>
        <img src={sticker} style={{marginTop: '12px', width:'70px', height: '78px', marginLeft: '14px'}}/>
        <img src={sticker} style={{marginTop: '12px', width:'70px', height: '78px', marginLeft: '14px'}}/>
        <img src={sticker} style={{marginTop: '12px', width:'70px', height: '78px', marginLeft: '14px'}}/>
        <img src={sticker} style={{marginTop: '12px', width:'70px', height: '78px', marginLeft: '14px'}}/>
        <img src={sticker} style={{marginTop: '12px', width:'70px', height: '78px', marginLeft: '14px'}}/>
        <img src={sticker} style={{marginTop: '12px', width:'70px', height: '78px', marginLeft: '14px'}}/>
        <img src={sticker} style={{marginTop: '12px', width:'70px', height: '78px', marginLeft: '14px'}}/>
      </div>
      <p style={{
        marginTop: '36px'
      }}> 스티커에 적을 말을 작성해주세요</p>

      <TextInput title='' width='80%' height='300px' background='#ff7242' border='2px solid white' marginTop='12px' textSize='16px'></TextInput>
      <TextInput title='' width='80%' height='20px' background='#ff7242' border='2px solid white' marginTop='0px'></TextInput>
      <Link to="/send">
      <Button title='완료' padding='0px' width='100%' height='56px' background='#FF7242' marginTop = '22px' 
      textSize='16px' textColor = '#ffffff' fontWeight = 'bold' 
      border = '0px' radius = '8px'
       ></Button>
       </Link>
    </div>
  );
}

export default WritePage;