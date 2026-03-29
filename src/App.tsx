import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header.tsx'
import Home from './components/home.tsx'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const App = () => {
  const dresses = useSelector( (state) => state.dresses.list)

  return (
    <Container className="py-4">
      <Header/>
      <Home/>
      <p>Dresses</p>
      <div>
        { dresses ?
          dresses.map( dress => (
            <p key={dress.id}>{dress.title}</p>
          ))
        :null}
      </div>
    </Container>
  )
}

export default App
