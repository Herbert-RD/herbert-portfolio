import {Component} from './style.js'
import close from '../../assets/icons/close.png'
import {useState} from 'react';


export function OptionsModal(){


  const [modalVisible, setModalVisible] = useState(true)
  
  return (
    <Component id="modal-component" style={{display: modalVisible ? "flex" : "none"}}>
      <div id='modal' >
        <div id='button-wrapper'>
          <button onClick={() => setModalVisible(modalVisible ? false : true)}><img src={close} alt="" /></button>
        </div>
        <a href="#">Artworks</a>
        <a href="#">Experience</a>
        <a href="#">Contact</a>
      </div>
    </Component>
  )
}