import Button from "../components/Button";
import TextInput from "../components/TextInput";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WritePage = () => {
  return (
    <div>
      <div></div>
      <h1>님에게 편지를 전송해 주세요</h1>

      <TextInput title='' width='50%' height='600px'  ></TextInput>

      
       <Link to="/send">
         <Button title='선택 완료' padding='20px' width='100%' background='#FFFFFF' marginTop = '40px' 
      textSize='30px' textColor = '#000000' fontWeight = 'bold' 
      border = '1px solid #5F5F5F' radius = '13px'  
       ></Button>
       </Link>
    </div>
  );
}

export default WritePage;