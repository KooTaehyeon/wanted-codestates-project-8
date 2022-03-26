import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ListBox = ({
  item,
  homeData,
  setHomeData,
  setTextCk,
  setFeadCk,
  height,
  memo,
}) => {
  const [modalCk, setModelCk] = useState(false);
  const [istrue, setIstrue] = useState(false);

  const modelClick = (e) => {
    if (!modalCk) {
      setModelCk(true);
    } else {
      setModelCk(false);
    }
    if (item.text) {
      setIstrue(true);
    }
  };
  return (
    <>
      <ListLi onClick={modelClick} height={height}>
        <p>{item.fcNm}</p>
        <p>{item.fcAddr}</p>
        <p>{item.ref1}</p>
        <Messsage>
          {item.text}
          {memo}
        </Messsage>
      </ListLi>
      {modalCk ? (
        <Modal
          setTextCk={setTextCk}
          setHomeData={setHomeData}
          homeData={homeData}
          item={item}
          modalCk={modalCk}
          setModelCk={setModelCk}
          istrue={istrue}
          setFeadCk={setFeadCk}
        />
      ) : null}
    </>
  );
};
const ListLi = styled.li`
  max-width: 400px;
  width: 100%;
  border-radius: 6px;
  padding: 21px;
  margin: 20px auto;
  box-shadow: rgb(140 141 146 / 25%) 3px 3px 8px 1px;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  height: ${(props) => props.height}px;
  & p {
    line-height: 1.5;
  }
  & p:first-child {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 14px;
  }
`;
const Messsage = styled.p`
  display: inline-block;
  max-width: 360px;
  margin-top: 18px;
  color: #00aaff;
  font-weight: bold;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export default ListBox;
