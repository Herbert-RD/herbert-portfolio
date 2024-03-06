import {Container} from './style.js';


export function Button({ name, loading = false}){

  const onButtonClick = () => {
    console.log('oi')
    const myButton = document.getElementById('myButton')
    myButton.disabled = true
    
  }

  return (
    <Container id="myButton" disabled={loading} type='button' onClick={onButtonClick}>
      {loading ? 'Carregando...' : name}
    </Container>
  )
}