import React from 'react';
import { Route } from 'react-router-dom';
import WritePage from './pages/writePage';

const App = () => {
  return (
    <>
      <Route component={WritePage} path="/write"/>
    </>
  );
};

export default App;