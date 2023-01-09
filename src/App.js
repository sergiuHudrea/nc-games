import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Header } from './components/Header';
import { Nav } from './components/Nav'
import { AllReviews } from './components/AllReviews';
import { SingleReview } from './components/SingleReview'

function App() {
  return (
    <BrowserRouter >
    <div className="App" >
     <Header />
     <Nav />

     <Routes>
        <Route path='/' element={<AllReviews />} />
        <Route path='/reviews/:review_id' element={<SingleReview />} />
     </Routes>
    </div>
    </BrowserRouter>
    
  );
};

export default App;
