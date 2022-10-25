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
import pumpkinBackOrange from '../img/pumpkinBackOrange.png';
import batBackOrange from '../img/batBackOrange.png';
import carriageBackOrange from '../img/carriageBackOrange.png';
import ghostBackOrange from '../img/ghostBackOrange.png';
import skullBackOrange from '../img/skullBackOrange.png';
import pumpkinBackPurple from '../img/pumpkinBackPurple.png';
import batBackPurple from '../img/batBackPurple.png';
import carriageBackPurple from '../img/carriageBackPurple.png';
import ghostBackPurple from '../img/ghostBackPurple.png';
import skullBackPurple from '../img/skullBackPurple.png';

import uuid from "react-uuid";
import qs from "query-string";
import styles from '../App.css';


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
      const clickSticker = event => {
        const active = document.querySelector(".selected");
        active.classList.remove("selected");
        active.classList.add("notSelected")
        const target = event.target.nodeName === "IMAGE" ? event.target : event.target.parentNode;
        target.classList.add("selected");
        target.classList.remove("notSelected");
        const sticker = document.querySelector("#"+target.id+"Sticker_TextArea");
        const shownSticker = document.querySelector(".isShown")
        shownSticker.classList.remove("isShown")
        shownSticker.classList.add("isHidden")
        sticker.classList.add("isShown")
        sticker.classList.remove("isHidden")
        
      };

        return (
            <div class='container'>
                <p class="title">To. 니쿠니쿠닉</p>
                <p class="titleToSelect">작성할 롤링페이퍼의 스티커를 선택해주세요</p>
                <div className="tags">
                    <div id="pumpkinOrange" className="tag selected"><img src={pumpkinOrange} class="sticker" onClick={clickSticker} /></div>
                    <div id="batOrange" className="tag notSelected"><img src={batOrange} class="sticker" onClick={clickSticker} /></div>
                    <div id="carriageOrange" className="tag notSelected"><img src={carriageOrange} class="sticker" onClick={clickSticker} /></div>
                    <div id="ghostOrange" className="tag notSelected"><img src={ghostOrange} class="sticker" onClick={clickSticker} /></div>
                    <div id="skullOrange" className="tag notSelected"><img src={skullOrange} class="sticker" onClick={clickSticker} /></div>
                    <div id="pumpkinPurple" className="tag notSelected"><img src={batPurple} class="sticker" onClick={clickSticker} /></div>
                    <div id="batPurple" className="tag notSelected"><img src={carriagePurple} class="sticker" onClick={clickSticker} /></div>
                    <div id="carriagePurple" className="tag notSelected"><img src={ghostPurple} class="sticker" onClick={clickSticker} /></div>
                    <div id="ghostPurple" className="tag notSelected"><img src={pumpkinPurple} class="sticker" onClick={clickSticker} /></div>
                    <div id="skullPurple" className="tag notSelected"><img src={skullPurple} class="sticker lastSticker" onClick={clickSticker} /></div>
                </div>
                <p class="titleToWrite"> 스티커에 적을 말을 작성해주세요</p>
                <img id="pumpkinOrangeSticker_TextArea" class="sticker_TextArea isShown" src={pumpkinBackOrange}></img>
                <img id="batOrangeSticker_TextArea" class="sticker_TextArea isHidden" src={batBackOrange}></img>
                <img id="carriageOrangeSticker_TextArea" class="sticker_TextArea isHidden" src={carriageBackOrange}></img>
                <img id="ghostOrangeSticker_TextArea" class="sticker_TextArea isHidden" src={ghostBackOrange}></img>
                <img id="skullOrangeSticker_TextArea" class="sticker_TextArea isHidden" src={skullBackOrange}></img>
                <img id="pumpkinPurpleSticker_TextArea" class="sticker_TextArea isHidden" src={pumpkinBackPurple}></img>
                <img id="batPurpleSticker_TextArea" class="sticker_TextArea isHidden" src={batBackPurple}></img>
                <img id="carriagePurpleSticker_TextArea" class="sticker_TextArea isHidden" src={carriageBackPurple}></img>
                <img id="ghostPurpleSticker_TextArea" class="sticker_TextArea isHidden" src={ghostBackPurple}></img>
                <img id="skullPurpleSticker_TextArea" class="sticker_TextArea isHidden" src={skullBackPurple}></img>

                <div style={{display: 'table', margin: 'auto', width: '100%'}}>
                    <textarea type='text' id='sender' value={this.state.message} onChange = {e => {this.setState({message: e.target.value});}}/>
                    <div class='fromContainer'>
                        <p class='fromTitle'>From.</p>
                        <input class='fromBody' type='text' id='sender' value={this.state.sender} onChange = {e => {this.setState({sender: e.target.value});}}/>
                    </div>
                </div>
                <Link to="/send">
                    <button id = "addBtn" onClick={this.interface}>완료</button>
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