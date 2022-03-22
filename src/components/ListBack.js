import React from 'react';
import styled from 'styled-components';

const ListBack = (props) => {
  return (
    <Btns>
      <i className='fas fa-angle-left' />
      &nbsp;뒤로가기
    </Btns>
  );
};
const Btns = styled.div`
  width: 100%;
  height: 40px;
  margin: 20px 10px;

  & i {
    margin-left: 10px;
  }
`;

export default ListBack;
