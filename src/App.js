import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import styled from 'styled-components';
import Lists from './pages/Lists';
import { RecoilRoot } from 'recoil';
const App = () => {
  return (
    <AppBox>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/list' element={<Lists />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </AppBox>
  );
};

const AppBox = styled.div`
  width: 28%;
  margin: auto;
`;

export default App;
