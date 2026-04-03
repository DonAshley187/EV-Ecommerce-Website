import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/JSX/Navbar';
import Home from './Components/JSX/Home';
import About from './Components/JSX/About';
import Contact from './Components/JSX/Contact';
import ProductComparison from './Components/JSX/ProductComparison';
// import PreBook from './Components/JSX/PreBook';
import PreBookForm from './Components/JSX/Form';
import SE03Lite from './Components/JSX/SE03Lite';
import SE03 from './Components/JSX/SE03';
import SE03Max from './Components/JSX/SE03Max';
import Footer from './Components/JSX/Footer';
import ThankYou from './Components/JSX/Thankyou';
import Rentals from './Components/JSX/Rentals';
import './App.css'; // Assuming you have some global styles

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/comparison" element={<ProductComparison />} />
                    {/* <Route path="/pre-book" element={<PreBook />} /> */}
                    <Route path="/prebook-form" element={<PreBookForm />} />
                    <Route path="/rentals" element={<Rentals/>} />
                    <Route path="/thankyou" element={<ThankYou />} />
                    <Route path="/se03-lite" element={<SE03Lite />} />
                    <Route path="/se03" element={<SE03 />} />
                    <Route path="/se03-max" element={<SE03Max />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
