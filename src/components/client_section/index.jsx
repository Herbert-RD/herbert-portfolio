import {Component} from './style.js';
import manacube_logo from '../../assets/images/manacube_logo.png'
import atheris_games_logo from '../../assets/images/atheris_games_logo.png'
import ninja_studios_logo from '../../assets/images/ninja_studios_logo.png'
import mythical_network_logo from '../../assets/images/mythical_network_logo.png'

export function ClientSection(){
  return (
    <Component>
      <h2>Clients</h2>
      <div className="clients-wrapper">
        <button><img src={manacube_logo} alt="" /></button>
        <button><img src={atheris_games_logo} alt="" /></button>
        <button><img src={ninja_studios_logo} alt="" /></button>
        <button><img src={mythical_network_logo} alt="" /></button>
      </div>
    </Component>

  )
}