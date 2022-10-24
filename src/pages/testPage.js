import React from "react";
import StartFirebase from "../firebase";
import { ref, set, get, update, remove, child} from "firebase/database";
import { Link } from 'react-router-dom';
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import styledComponents from "styled-components";

export class Test extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            db:' ',
            UUID: ' ',
            image: ' ',
            nickname: ' ',
            message: ' ',
            sender: ' '
        }
        this.interface = this.interface.bind(this)
    }

    componentDidMount() {
        this.setState({
            db: StartFirebase()
        });
    }

    render(){
        return(
            <>
                롤링페이퍼 작성
                <br></br>

                스티커를 선택해주세요
                <br></br>
                <Text input= 'text'> </Text>

                <Contanier>
                 <Text>To. nickname</Text>
                </Contanier>

                <TextInput title='' width='100%' height='500px' padding='20px'type= 'text' id='userbox' value={this.state.message} 
                onChange={e=>{this.setState({message: e.target.value});}}></TextInput>
                <br></br>

                <label> From</label>
                <input type= 'text' id='userbox' value={this.state.sender} 
                onChange={e=>{this.setState({sender: e.target.value});}}/>

                <Link to="/send">
                     <Button id="addBtn" onClick={() => this.interface} title='선택 완료' padding='20px' width='100%' background='#FFFFFF' marginTop = '40px' 
                    textSize='30px' textColor = '#000000' fontWeight = 'bold' border = '1px solid #5F5F5F' radius = '13px'>
                    </Button>
                    <button id="addBtn" onClick={this.interface}></button>
                </Link>

            </>
        )
    }

    interface(event){
        const id = event.target.id;

        if(id=='addBtn'){
            this.insertData();
        }
        else if(id=='namebox'){
            this.selectData();
        }
    }

    getAllInputs() {
        return{
            nickname: this.state.nickname,
            message: this.state.message,
            sender: this.state.sender
        }
    }

    insertData(){
        const db = this.state.db;
        const data = this.getAllInputs();

        set(ref(db, 'users/'+data.nickname),
        {
            message: data.message,
            sender: data.sender
        }).then(()=>{alert('데이터 추가 완료')})
        .catch((error)=>{alert("데이터 추가 에러"+error)});
    }

    selectData(){
        const dbref = ref(this.state.db);
        const nickname = this.getAllInputs().nickname;

        get(child(dbref, 'users/'+ nickname)).then((snapshot) => {
            if (snapshot.exists()){
                this.setState({
                    message: this.state.message,
                    sender: this.state.sender 
                })
            }

            else {
                alert("no data found!");
            }
        })
        .catch((error)=>{alert("there was an error , details" + error)})
    }
    
}
const Contanier = styledComponents.div`
	background-color : #f6a58d;
`;

const Text = styledComponents.div`
    font-size:20px;
	font-weight:600;
`;