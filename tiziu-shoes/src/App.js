import logo from './logo.svg';
import './App.css';
import Layout from './components/pages/Layout/Layout';
import Products from './components/pages/Home/Products/Products.js'
import Cart from './components/pages/Home/Products/Cart.js';

function App() {
  return (
    <div className="App">
     <div className='Header'>
        <h1>Tiziu Shoes</h1>
     </div>
      <Products />
      
    
    </div>
    
  );
}

export default App;
