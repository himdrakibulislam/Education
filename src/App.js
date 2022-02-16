import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/footer/Footer';
import Home from './components/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './components/services/services';
import Course from './components/courses/Courses'
import About from './components/about/About'
import NotFound from './components/notfound/NotFound';
function App() {
  return (
    <Container>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home></Home>}/>
        <Route path='/course' element={<Course></Course>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/services' element={<Services></Services>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </Container>
  );
}

export default App;
