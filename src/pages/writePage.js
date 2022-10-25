import React from "react";
import StartFirebase from "../firebase";
import { ref, set, get, update, remove, child } from "firebase/database";
import { Link } from 'react-router-dom';
import TextInput from "../components/TextInput";
import styledComponents from "styled-components";
import batOrange from '../img/batOrange.png';
import batPurple from '../img/batPurple.png';
import carriageOrange from '../img/carriageOrange.png';
import carriagePurple from '../img/carriagePurple.png';
import ghostOrange from '../img/ghostOrange.png';
import ghostPurple from '../img/ghostPurple.png';
import pumpkinOrange from '../img/pumpkinOrange.png';
import pumpkinPurple from '../img/pumpkinPurple.png';
import skullOrange from '../img/skullOrange.png';
import skullPurple from '../img/skullPurple.png';
import uuid from "react-uuid";
import qs from "query-string";
import HorizontalScroll from 'react-scroll-horizontal';


export class WritePage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            db: ' ',
            // UUID: ' ',
            // image: ' ',
            // nickname: ' ',
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

    render() {
      const parent  = { width: '100%', height: '100px', padding: '12px 0 0 0'}
      const child = { width: '100%', height: '100px', padding: '0 4px 0 0'}
        return (
            <div padding='24px'>
                <p style={{
                    fontSize: '24px'
                }}>To. 니쿠니쿠닉</p>
                <p style={{
                    marginTop: '24px'
                }}>작성할 롤링페이퍼의 스티커를 선택해주세요</p>
                <div id='scroll-horizontal' style={parent}>
                  <HorizontalScroll>
                    <div style={child}><img src={batOrange} style={{ marginTop: '12px', width: '70px', height: '78px', marginLeft: '14px' }} /></div>
                    <div style={child}><img src={carriageOrange} style={{ marginTop: '12px', width: '70px', height: '78px', marginLeft: '14px' }} /></div>
                    <div style={child}><img src={ghostOrange} style={{ marginTop: '12px', width: '70px', height: '78px', marginLeft: '14px' }} /></div>
                    <div style={child}><img src={pumpkinOrange} style={{ marginTop: '12px', width: '70px', height: '78px', marginLeft: '14px' }} /></div>
                    <div style={child}><img src={skullOrange} style={{ marginTop: '12px', width: '70px', height: '78px', marginLeft: '14px' }} /></div>
                    <div style={child}><img src={batPurple} style={{ marginTop: '12px', width: '70px', height: '78px', marginLeft: '14px' }} /></div>
                    <div style={child}><img src={carriagePurple} style={{ marginTop: '12px', width: '70px', height: '78px', marginLeft: '14px' }} /></div>
                    <div style={child}><img src={ghostPurple} style={{ marginTop: '12px', width: '70px', height: '78px', marginLeft: '14px' }} /></div>
                    <div style={child}><img src={pumpkinPurple} style={{ marginTop: '12px', width: '70px', height: '78px', marginLeft: '14px' }} /></div>
                    <div style={child}><img src={skullPurple} style={{ marginTop: '12px', width: '70px', height: '78px', marginLeft: '14px' }} /></div>
                  </HorizontalScroll>
                </div>
                <p style={{
                    marginTop: '36px'
                }}> 스티커에 적을 말을 작성해주세요</p>

                <input type='text' id='sender' value={this.state.message} onChange = {e => {this.setState({message: e.target.value});}}
                style={{ marginTop: '12px', width: '100%', height: '300px', marginTop: '12px',  background: '#ff7242', border: '2px solid white'}}/>
                <br></br>
                <input type='text' id='sender' value={this.state.sender} onChange = {e => {this.setState({sender: e.target.value});}}
                style={{ marginTop: '12px', width: '100%', height: '20px', marginTop: '0px',  background: '#ff7242', border: '2px solid white'}}/>
                <Link to="/send">
                    <button id = "addBtn" onClick={this.interface} style = {{ title: '완료', padding:'0px',width:'100%',height:'56px' , background:'#FF7242', marginTop:'22px',
                     textSize: '16px', textColor: '#ffffff', fontWeight: 'bold', border: '0px', radius: '8px'
                        }}>완료</button>
                </Link>
            </div>
        )
    }

    interface(event) {
        const id = event.target.id;

        if (id == 'addBtn') {
            this.insertData();
        }
        else if (id == 'namebox') {
            this.selectData();
        }
    }

    getAllInputs() {
        return {
            message: this.state.message,
            sender: this.state.sender
        }
    }

    insertData() {
        const db = this.state.db;
        const data = this.getAllInputs();

        update(ref(db, 'users/' + 'AC40BE25-BC94-421A-AB65-76491835F24A'),
            {
                notes: {
                    UUID: {
                        // image: data.image,
                        message: data.message,
                        sender: data.sender,
                        // timestamp: data.timestamp
                    }
                }
            }).then(() => { alert('데이터 추가 완료') })
            .catch((error) => { alert("데이터 추가 에러" + error) });
    }

    selectData() {
        const dbref = ref(this.state.db);
        const UUID = this.getAllInputs().UUID;

        get(child(dbref, 'users/' + UUID)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({
                    // image: this.state.image,
                    message: this.state.message,
                    sender: this.state.sender,
                    // timestamp: this.state.timestamp
                })
            }

            else {
                alert("no data found!");
            }
        })
            .catch((error) => { alert("there was an error , details" + error) })
    }

}
const Contanier = styledComponents.div`
	background-color : #f6a58d;
`;

const Text = styledComponents.div`
    font-size:20px;
	font-weight:600;
`;



// url/write?id=sldfsdlkUUID