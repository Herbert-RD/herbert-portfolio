import {Component} from './style.js'
import close from '../../assets/icons/close.png'
import {useState} from 'react';


export function OptionsModal(){

  // function closeModal(event){
  //   const Component = document.getElementById('modal-component')
  //   Component.style.display = "none"
  // }

  const [modalVisible, setModalVisible] = useState(false)
  
  return (
    <Component id="modal-component" style={{display: modalVisible ? "none" : "flex"}}>
      <div id='modal' >
        <div id='button-wrapper'>
          <button><img src={close} alt="" onClick={() => setModalVisible(modalVisible ? false : true)}/></button>
        </div>
        <a href="#">Artworks</a>
        <a href="#">Experience</a>
        <a href="#">Contact</a>
      </div>
    </Component>
  )
}