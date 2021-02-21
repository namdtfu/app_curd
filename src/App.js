import Products from './admin/Products';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Main from './main/Main';
import ProductsCreate from './admin/ProductsCreate';

function App() {
  return (
    <div className="App">

            <BrowserRouter>
              <Route path='/' exact component={Main}></Route>
              <Route path='/admin/products' exact component={Products} ></Route>
              <Route path='/admin/products/create' exact component={ProductsCreate} ></Route>
            </BrowserRouter>

    </div>
  );
}

export default App;
