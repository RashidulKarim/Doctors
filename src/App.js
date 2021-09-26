import './App.css';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Doctors></Doctors>
      <Footer></Footer>
    </div>
  );
}

export default App;
