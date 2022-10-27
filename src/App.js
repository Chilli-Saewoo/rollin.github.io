import { Route, Routes } from 'react-router-dom';
import SendPage from './pages/sendPage';
import { WritePage } from './pages/writePage';
import { ref, set, get, update, remove, child} from "firebase/database";


const App = () => {
  const category = document.location.href.split("=")[1]
  const writePath = "/write/id="+ category 
  const sendPath = "/send/id=" + category
  return (
    <Routes>
      <Route path={writePath} element={<WritePage />} />
      <Route path={sendPath} element={<SendPage />} />
    </Routes>
  );
};

export default App;


