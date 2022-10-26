import { Route, Routes, useEffect, useState } from 'react-router-dom';
import SendPage from './pages/sendPage';
import { WritePage } from './pages/writePage';
import { ref, set, get, update, remove, child} from "firebase/database";

const App = () => {
  
  return (
    <Routes>
      <Route path='/write/id=28C9D618-4D7A-48EE-B86E-79B597BF0E1B' element={<WritePage />} />
      <Route path='/send'  element={<SendPage />} />
    </Routes>
  );
};

export default App;


