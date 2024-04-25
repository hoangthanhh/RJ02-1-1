import { Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Product from './component/Product';
import Carts from './component/Carts';

function App() {
  return (
    <div className='text-center mt-20'>
      <nav>
        <ul className='text-2xl p-0'>
          <li className='inline text-[25px] border-2 border-gray-900 rounded-sm px-20 py-8'>
            <Link to={"/"}>Home</Link>
          </li>
          <li className='inline text-[25px] border-2 border-gray-900 rounded-sm px-20 py-8'>
            <Link to={"/product"}>Product</Link>
          </li>
          <li className='inline text-[25px] border-2 border-gray-900 rounded-[1px] px-20 py-8'>
            <Link to={"/carts"}>Carts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/carts' element={<Carts />} />
      </Routes>
    </div>
  );
}

export default App;
