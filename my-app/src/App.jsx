import { Container } from "./components/Container.jsx";
import { Message } from "./components/Message.jsx";
import { Greeting } from "./components/Greeting.jsx";
import './App.css';

function App() {
  return (
     <Container>
       <Greeting name="Іван"/> 
       <Message text="ksdfjngsfdasmvbsdpoamdpaosdfmgsdfg"/>
     </Container>
  );
}

export default App;
