import {Component} from './style.js'
import close from '../../assets/icons/close.png'

export function OptionsModal(){
  return (
    <Component>
      <div id='modal'>
        <div id='button-wrapper'>
          <button><img src={close} alt="" /></button>
        </div>
        <a href="#">Artworks</a>
        <a href="#">Experience</a>
        <a href="#">Contact</a>
      </div>
    </Component>
  )
}