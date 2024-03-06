import {Container} from './style.js';


export function Button({ name, loading = false}){

  const handleClick = event => {
    event.currentTarget.disabled = true;
  }

  return (
    <Container disabled={loading} type='button' onClick={handleClick}>
      {loading ? 'Carregando...' : name}
    </Container>
  )
}