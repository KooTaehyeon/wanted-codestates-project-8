import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ListBox = ({
  localData,
  setLocalData,
  item,
  title,
  addr,
  tel,
  memo,
  homeData,
  setHomeData,
}) => {
  const [modalCk, setModelCk] = useState(false);
  const [istrue, setIstrue] = useState(false);
  const modelClick = (e) => {
    if (!modalCk) {
      setModelCk(true);
    } else {
      setModelCk(false);
    }
    if (memo > 1) {
      setIstrue(true);
    }
  };
  return (
    <>
      <ListLi onClick={modelClick}>
        <p>{title}</p>
        <p>{addr}</p>
        <p>{tel}</p>
        <Messsage>{memo}</Messsage>
      </ListLi>
      {modalCk ? (
        <Modal
          localData={localData}
          setLocalData={setLocalData}
          setHomeData={setHomeData}
          homeData={homeData}
          item={item}
          modalCk={modalCk}
          setModelCk={setModelCk}
          title={title}
          addr={addr}
          tel={tel}
          memo={memo}
          istrue={istrue}
        />
      ) : null}
    </>
  );
};
const ListLi = styled.li`
  max-width: 388px;
  border-radius: 6px;
  padding: 21px;
  margin: 20px auto;
  box-shadow: rgb(140 141 146 / 25%) 3px 3px 8px 1px;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  transition: all 0.3s ease 0s;
  cursor: pointer;
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
  color: blue;
  font-weight: bold;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export default ListBox;
