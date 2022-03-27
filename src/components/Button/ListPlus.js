import React from 'react';
import styled from 'styled-components';

const ListPlus = ({ LinkBool, ListLink }) => {
  return (
    <Buttons>
      {LinkBool ? <i className='fas fa-plus-circle fa-3x' /> : null}
      <i className='fas fa-arrow-alt-circle-up fa-3x' />
    </Buttons>
  );
};
const Buttons = styled.button`
  border: none;
  background-color: white;
  position: relative;
  margin: 50px 0px;
  left: 42%;
  cursor: pointer;
  padding-bottom: 10px;
`;

export default ListPlus;
