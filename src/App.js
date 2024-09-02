import logo from './logo.svg';
import './App.css';
import ItemCard from './component/ItemCard';
import NavBar from './component/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemCard item = "book" amount = {2}/>
    </div>
  );
}

export default App;
