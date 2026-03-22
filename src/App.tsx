import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header.tsx'
import Home from './components/home.tsx'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <Container className="py-4">
      <Header/>
      <Home/>
    </Container>
  )
}

export default App
