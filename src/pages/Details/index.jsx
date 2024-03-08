import { Container } from  "./style.js";
import { Button } from "../../components/button/index.jsx"
import { Link } from "../../components/link/index.jsx"
import { HeroSection } from "../../components/hero_section/index.jsx"
import { OptionsModal } from "../../components/options_modal/index.jsx"


export function Details(){
  return (
    <Container>


      <header>
      <div className="header-nav">
        <div><p><a href="#">HR</a></p></div>

        <OptionsModal />

        {/* <div id="nav-links">
          <Link name="Artworks"/>
          <Link name="Projects"/>
          <Link name="Contact"/>
        </div> */}
      </div>



        <HeroSection 
          image=""
          name="Herbert Richard"
          description="Are you seeking to elevate your Minecraft gaming experience with custom-built chracters or decorations? Look no further! I've playing minecraft since 2012, along my journey, I've done a lot in the game, from servers to mods, but what I really identified myself with was making 3D models to be used in the game."
          twitterLink="https://twitter.com/_HebertMC_"
          instagramLink="https://www.instagram.com/"
          pinterestLink="https://br.pinterest.com/"
        />
      </header>
      <Button name="Click-me"/>   
    </Container>
  )
}