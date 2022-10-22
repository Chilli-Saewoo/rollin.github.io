import { Route, Routes } from 'react-router-dom';
import WritePage from './pages/writePage';
import SendPage from './pages/sendPage';

const App = () => {
  return (
    <Routes>
      <Route path="/write" element={<WritePage />} />
      <Route path="/send" element={<SendPage />} />
    </Routes>
  );
};

export default App;


