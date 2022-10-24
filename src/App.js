import { Route, Routes } from 'react-router-dom';
import WritePage from './pages/writePage';
import SendPage from './pages/sendPage';
import { Test } from './pages/testPage';

const App = () => {
  return (
    <Routes>
      <Route path="/write" element={<WritePage />} />
      <Route path="/send" element={<SendPage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default App;


