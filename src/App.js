import './App.css';
import Navbar from './componments/Navbar';
import Footer from './componments/footer';
import Card from './componments/Card';
import LayerSubNav from './componments/layerSubNav'; // Import LayerSubNav
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

function App() {
  return (
    <BrowserRouter> {/* Wrap your app in BrowserRouter */}
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className=""> 
        <Routes> {/* Define routes here */}
          <Route path="/" element={<Card />} /> {/* Home route */}
          <Route path="/components/layerSubNav" element={<LayerSubNav />} /> {/* Define route for LayerSubNav */}
          {/* Add other routes as needed */}
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
