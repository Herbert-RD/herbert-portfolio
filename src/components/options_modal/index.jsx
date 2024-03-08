import {Overlay, Component} from './style.js'
import close from '../../assets/icons/close.png'
import menu from '../../assets/icons/menu.png'
import {useState} from 'react';

export function OptionsModal(){
  const [modal, setModal] = useState(false)


  function toggleModal(){
    setModal(!modal);
  }

  return (

    <Component>
      <button onClick={toggleModal}>
        <img src={menu} alt="" />
      </button>

      {modal && 
        <Overlay onClick={toggleModal}>
          <div id='modal'>
            <div id='button-wrapper'>
              <button onClick={toggleModal}><img src={close} alt="" /></button>
            </div>
            <a href="#">Artworks</a>
            <a href="#">Experience</a>
            <a href="#">Contact</a>
          </div>
        </Overlay>
      }
    </Component>
  )
}