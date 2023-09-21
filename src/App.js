import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarScroll from './components/Navbar';
import Home from './components/home';
import FormGroup from './components/contact';
import About from './components/about';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      <NavbarScroll />
      <Home />
      <About />
      <FormGroup />
      <Register />
    </div>
  );
}

export default App;
