import { Route, Routes } from 'react-router-dom';
import AddProduct from './Pages/Admin/AddProduct';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<AddProduct/>}>

      </Route>
     </Routes>
    </div>
  );
}

export default App;
