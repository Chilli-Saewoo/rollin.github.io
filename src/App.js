import { Route, Routes } from 'react-router-dom';
import SendPage from './pages/sendPage';
import { WritePage } from './pages/writePage';
import { ref, set, get, update, remove, child} from "firebase/database";

const App = () => {
  return (
    <Routes>
      <Route path="/write/id=AF51E11A-DD3B-4F43-932E-48DD2F952FC7" element={<WritePage />} />
      <Route path="/send" element={<SendPage />} />
    </Routes>
  );
};

export default App;


