import React from 'react';
import styled from 'styled-components';

const ListPlus = () => {
  return (
    <Buttons>
      <i className='fas fa-plus-circle fa-3x'></i>
    </Buttons>
  );
};
const Buttons = styled.button`
  border: none;
  background-color: white;
  position: relative;
  margin-top: 50px;
  left: 42%;
`;

export default ListPlus;
