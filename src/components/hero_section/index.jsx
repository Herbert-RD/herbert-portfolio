import { Component } from './style.js';
import hero_image from "../../assets/images/hero_image.png"

import SocialButton from "../social_button/index.jsx"

import instagram_icon from "../../assets/icons/instagram_icon.png"
import pinterest_icon from "../../assets/icons/pinterest_icon.png"
import twitter_icon from "../../assets/icons/twitter_icon.png"

export function HeroSection({name, description}) {
  return (
    <Component>
      <div className="image-side">
        <img src={hero_image} alt="Herbert Minecraft Skin" />
      </div>
      <div className="about-side">
        <p>About Me</p>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="socials">
          <SocialButton socialIcon={instagram_icon}/>
          <SocialButton socialIcon={pinterest_icon}/>
          <SocialButton socialIcon={twitter_icon}/>
        </div>
      </div>
    </Component>
  )
}