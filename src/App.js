import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarScroll from './components/Navbar';
import Home from './components/home';
import FormGroup from './components/contact';

function App() {
  return (
    <div className="App">
      <NavbarScroll />
      <Home />
      <FormGroup />
    </div>
  );
}

export default App;
