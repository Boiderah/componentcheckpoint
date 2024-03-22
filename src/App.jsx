import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Name from './component/Name'
import Price from './component/Price'
import Description from './component/Description'
import Img from './component/Img'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {

  return (
    <>
        <Card style={{ width: '18rem' }}>
      <Img/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Button variant="primary">    <Price/></Button>
      </Card.Body>
    </Card>
    
    </>
  )
}

export default App
