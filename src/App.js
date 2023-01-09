import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Nav } from './components/Nav'
import { AllReviews } from './components/AllReviews';
import './App.css'

function App() {
  return (
    <BrowserRouter >
    <div className="App" >
     <Header />
     <Nav />

     <Routes>
        <Route path='/' element={<AllReviews />} />
     </Routes>
    </div>
    </BrowserRouter>
    
  );
};

export default App;
