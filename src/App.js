import logo from './logo.svg';
import './App.css';
import NavBar from './CommonComponents/NavBar';
import HomePageHeader from './Components/HomePageHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import WriteBlog from './Pages/WriteBlog';
import Footer from './CommonComponents/Footer';
import BlogDetails from './Pages/BlogDetails';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/write-blog' element={<WriteBlog/>}/>
    <Route path='/blog-details/:id' element={<BlogDetails/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    
    </>
 
  );
}

export default App;
