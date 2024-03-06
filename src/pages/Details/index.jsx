import { Container } from  "./style.js";
import { Button } from "../../components/button/index.jsx"
import { Link } from "../../components/link/index.jsx"


export function Details(){
  return (
    <Container>
      <h1>Hello World</h1>
      <span>Binho Marabales</span>
      <Button name="Click-me"/>   


      <div className="header-nav">
        <div><p>HR</p></div>
        <div id="nav-links">
          <Link name="Artworks"/>
          <Link name="Projects"/>
          <Link name="Contact"/>
        </div>
      </div>
    </Container>
  )
}