import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, ThemeProvider ,CssBaseline, Switch,} from '@mui/material';
import UserLogin from './Components/UserLogin';
import Catageory from './Components/Catageory'
import Home from './Components/Home';
import Product from './Components/Product';
import ForgotPassword from './Components/ForgotPassword';
import AddCatagory from './Components/AddCatagory';
import AddProduct from './Components/AddProduct';
import EditCategory from './Components/EditCategory';
import EditProduct from './Components/EditProduct';

function App() {
  return (
    <Container maxWidth={"xl"}>
      <br></br>

  
    <CssBaseline />
      <BrowserRouter>
 
      <Routes>

      <Route path="/" element={<UserLogin/>} > </Route>
    <Route path="/Catageory" element={<Catageory />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Product" element={<Product />} />
    <Route path="/ForgotPassword" element={<ForgotPassword />} />
    <Route path="/AddCatagory" element={<AddCatagory />} />
    <Route path="/AddProduct" element={<AddProduct />} />
    <Route path="/EditCategory/:id" element={<EditCategory />} />
    <Route path="/EditProduct/:id" element={<EditProduct />} />
    {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
    </Switch> */}
    
    </Routes>
    
    </BrowserRouter>
  
    
    </Container>
  );
}

export default App;
