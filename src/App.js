import './assets/css/App.css';
import Header from './components/Header';
import ToDoForm from './components/Form';
import ToDoBoard from './components/ToDoBoard'

function App() {
  return (
    <>
    <Header />
    <ToDoForm />
    <ToDoBoard />
    </>
  );
}

export default App;
