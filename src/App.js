import { Route, Routes } from 'react-router-dom';
import SendPage from './pages/sendPage';
import { WritePage } from './pages/writePage';
import { ref, set, get, update, remove, child} from "firebase/database";

const App = () => {
  return (
    <Routes>
      <Route path="/write" element={<WritePage />} />
      <Route path="/send" element={<SendPage />} />
    </Routes>
  );
};

export default App;


