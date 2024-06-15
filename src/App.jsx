import  {Routes, Route, Link, BrowserRouter} from 'react-router-dom'

import Work from './pages/Work';
import Home from './pages/Home';

function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
    <Route path='/Work' element={<Work />}></Route>
  </Routes>

    </BrowserRouter>

  );
}

export default App;
