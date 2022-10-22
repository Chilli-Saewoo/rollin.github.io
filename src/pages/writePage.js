import Button from "../components/Button";
import TextInput from "../components/TextInput";

const WritePage = () => {
  return (
    <div className="App">
      <div></div>

      <TextInput title='여기에 입력하세요' width='50%' height='600px'></TextInput>

      <Button title='선택 완료' padding='20px' width='100%' background='#FFFFFF' marginTop = '40px' 
      textSize='30px' textColor = '#000000' fontWeight = 'bold' 
      border = '1px solid #5F5F5F' radius = '13px'  
       ></Button>
    </div>
  );
}

export default WritePage;