import React, {useEffect, useState} from "react";
import StartFirebase from "../firebase";
import { ref, set, push, get, update, remove, child, onValue, getDatabase } from "firebase/database";
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
import styles from "../App.css"


export class WritePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            db: ' ',
            // UUID: ' ',
            image: ' ',
            // nickname: ' ',
            message: ' ',
            sender: ' ',
            data: ' '
            
        }
        this.interface = this.interface.bind(this)
    }

    componentDidMount() {
        this.setState({
            db: StartFirebase()
        });
    }

    render() {
        const parent = { width: '100%', height: '100px', padding: '12px 0 0 0' }
        const child = { width: '100%', height: '100px', padding: '0 4px 0 0' }

        const clickSticker = event => {
            const active = document.querySelector(".selected");
            active.classList.remove("selected");
            active.classList.add("notSelected")
            const target = event.target.nodeName === "IMAGE" ? event.target : event.target.parentNode;
            target.classList.add("selected");
            target.classList.remove("notSelected");
            const sticker = document.querySelector("#" + target.id + "Sticker");
            const shownSticker = document.querySelector(".isShown")
            shownSticker.classList.remove("isShown")
            shownSticker.classList.add("isHidden")
            sticker.classList.add("isShown")
            sticker.classList.remove("isHidden")

        };

        const db = StartFirebase();
        var data;
        var link = document.location.href.split("=");
        
        const CountRef = ref(db, 'users/' + link[1] + '/nickname');
        onValue(CountRef, (snapshot) => {
            data = snapshot.val();
            console.log(data);
        });

        return (
            <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
                <p style={{
                    fontSize: '24px'
                }}>To. {data}</p>
                <p style={{
                    marginTop: '24px'
                }}>작성할 롤링페이퍼의 스티커를 선택해주세요</p>
                <div className="tags" style={parent}>
                    <div id="0" className="tag selected" style={child}><img src={pumpkinOrange} style={{ marginTop: '12px', width: '50px', height: '55px', marginLeft: '14px' }} onClick={clickSticker} /></div>
                    <div id="1" className="tag notSelected" style={child}><img src={batOrange} style={{ marginTop: '12px', width: '50px', height: '55px', marginLeft: '14px' }} onClick={clickSticker} /></div>
                    <div id="2" className="tag notSelected" style={child}><img src={carriageOrange} style={{ marginTop: '12px', width: '50px', height: '54px', marginLeft: '14px' }} onClick={clickSticker} /></div>
                    <div id="3" className="tag notSelected" style={child}><img src={ghostOrange} style={{ marginTop: '12px', width: '50px', height: '55px', marginLeft: '14px' }} onClick={clickSticker} /></div>
                    <div id="4" className="tag notSelected" style={child}><img src={skullOrange} style={{ marginTop: '12px', width: '50px', height: '55px', marginLeft: '14px' }} onClick={clickSticker} /></div>
                    <div id="5" className="tag notSelected" style={child}><img src={batPurple} style={{ marginTop: '12px', width: '50px', height: '55px', marginLeft: '14px' }} onClick={clickSticker} /></div>
                    <div id="6" className="tag notSelected" style={child}><img src={carriagePurple} style={{ marginTop: '12px', width: '50px', height: '55px', marginLeft: '14px' }} onClick={clickSticker} /></div>
                    <div id="7" className="tag notSelected" style={child}><img src={ghostPurple} style={{ marginTop: '12px', width: '50px', height: '55px', marginLeft: '14px' }} onClick={clickSticker} /></div>
                    <div id="8" className="tag notSelected" style={child}><img src={pumpkinPurple} style={{ marginTop: '12px', width: '50px', height: '55px', marginLeft: '14px' }} onClick={clickSticker} /></div>
                    <div id="9" className="tag notSelected" style={child}><img src={skullPurple} style={{ marginTop: '12px', width: '50px', height: '55px', marginLeft: '14px' }} onClick={clickSticker} /></div>
                </div>
                <p style={{
                    marginTop: '0px'
                }}> 스티커에 적을 말을 작성해주세요</p>
                <img id="pumpkinOrangeSticker" class="sticker isShown" src={pumpkinBackOrange} style={{ marginTop: '12px', width: '100%', height: '100%' }}></img>
                <img id="batOrangeSticker" class="sticker isHidden" src={batBackOrange} style={{ marginTop: '12px', width: '100%', height: '100%' }}></img>
                <img id="carriageOrangeSticker" class="sticker isHidden" src={carriageBackOrange} style={{ marginTop: '12px', width: '100%', height: '100%' }}></img>
                <img id="ghostOrangeSticker" class="sticker isHidden" src={ghostBackOrange} style={{ marginTop: '12px', width: '100%', height: '100%' }}></img>
                <img id="skullOrangeSticker" class="sticker isHidden" src={skullBackOrange} style={{ marginTop: '12px', width: '100%', height: '100%' }}></img>
                <img id="pumpkinPurpleSticker" class="sticker isHidden" src={pumpkinBackPurple} style={{ marginTop: '12px', width: '100%', height: '100%' }}></img>
                <img id="batPurpleSticker" class="sticker isHidden" src={batBackPurple} style={{ marginTop: '12px', width: '100%', height: '100%' }}></img>
                <img id="carriagePurpleSticker" class="sticker isHidden" src={carriageBackPurple} style={{ marginTop: '12px', width: '100%', height: '100%' }}></img>
                <img id="ghostPurpleSticker" class="sticker isHidden" src={ghostBackPurple} style={{ marginTop: '12px', width: '100%', height: '100%' }}></img>
                <img id="skullPurpleSticker" class="sticker isHidden" src={skullBackPurple} style={{ marginTop: '12px', width: '100%', height: '100%' }}></img>

                <div style={{ display: 'table', margin: 'auto', width: '100%' }}>
                    <textarea type='text' id='sender' value={this.state.message} onChange={e => { this.setState({ message: e.target.value }); }}
                        style={{
                            position: 'relative', top: '-350px', left: '14%', marginTop: '12px', width: '70%', height: '200px',
                            background: 'transparent', border: '0', maxlength: '10', fontSize: '1.25em', outlineColor: '#000000', color: '#101010'
                        }} />
                    <div style={{ position: 'relative', top: '-350px', left: '20%', display: 'flex', backgroundColor: 'transparent', alignItems: 'end' }}>
                        <p style={{ backgroundColor: 'transparent', color: '#202020', fontSize: '1.25em' }}>From.</p>
                        <input type='text' id='sender' value={this.state.sender} onChange={e => { this.setState({ sender: e.target.value }); }}
                            style={{ marginTop: '0px', width: '52%', height: '20px', background: 'transparent', border: '0px', borderBottom: '1px solid #202020', color: '#202020', fontSize: '1.25em' }} />
                    </div>
                </div>
                <Link to="/send/id=E65EC073-56D0-4DF7-992B-FE9008A74278">
                    <button id="addBtn" onClick={this.interface} style={{
                        position: 'relative', top: '-250px', title: '완료', padding: '0px', width: '100%', height: '56px', background: '#FF7242',
                        marginTop: '22px', fontSize: '1em', textColor: '#000000', fontWeight: 'bold', border: '0px', borderRadius: '8px'
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
        const date = new Date().toUTCString();
        var link = document.location.href.split("=");
        console.log(link)


        push(ref(db, 'users/' + link[1] + '/notes'),
            {
                image: parseInt(document.querySelector(".selected").id),
                message: data.message,
                sender: data.sender,
                timestamp: date

            }).then(() => { alert('데이터 추가 완료') })
            .catch((error) => { alert("데이터 추가 에러" + error) });
    }

}



// url/write?id=sldfsdlkUUID