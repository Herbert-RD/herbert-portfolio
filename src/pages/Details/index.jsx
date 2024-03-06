import { Container } from  "./style.js";
import { Button } from "../../components/button/index.jsx"


export function Details(){
  return (
    <Container>
      <h1>Hello World</h1>
      <span>Binho Marabales</span>

      <Button id="myButton" name="Click-me" />
      <Button id="myButton" name="Click-me" />

      <Button id="myButton" name="Click-me" />

      <Button id="myButton" name="Click-me" />

        
    </Container>
  )
}