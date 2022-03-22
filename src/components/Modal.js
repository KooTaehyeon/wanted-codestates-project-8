import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { DataState } from '../atom';
import { setItems } from '../util/LocalStorage';
import { getItems } from '../util/LocalStorage';
const Modal = ({
  localData,
  setLocalData,
  modalCk,
  setModelCk,
  item,
  title,
  addr,
  tel,
}) => {
  const [editMessage, setEditMessage] = useState('');

  const MessageChnge = (e) => {
    setEditMessage(e.target.value);
  };
  const onclick = (e) => {
    if (modalCk === true) {
      setModelCk(false);
    }
  };
  const save = () => {
    if (modalCk === true) {
      setModelCk(false);
    }

    if (localData) {
      setLocalData([...localData, { ...item, contents: editMessage }]);
    } else {
      setLocalData([{ ...item, contents: editMessage }]);
    }
  };

  // useEffect(() => {
  //   setItems(localData);
  //   console.log(localData);
  // }, [localData]);

  return (
    <>
      <Bg onClick={onclick}> </Bg>
      <ModalBox>
        <ul>
          <li>
            <label htmlFor='title'>이름</label>
            <p>{title}</p>
          </li>
          <li>
            <label htmlFor='address'>주소</label>
            <p>{addr}</p>
          </li>
          <li>
            <label htmlFor='tel'>연락처</label>
            <p>{tel}</p>
          </li>
          <li>
            <label htmlFor='massage'>메모</label>
            <textarea
              name='massage'
              cols='30'
              rows='10'
              value={editMessage}
              placeholder='내용을 입력해주세요'
              onChange={MessageChnge}
            ></textarea>
            <div onClick={save}>저장하기</div>
          </li>
        </ul>
      </ModalBox>
    </>
  );
};
const Bg = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.5);
  overflow: hidden;
  z-index: 1;
`;
const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 360px;
  min-height: 374px;
  padding: 20px;
  border-radius: 8px;
  margin: auto;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-sizing: border-box;
  z-index: 10;
  div {
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
  li {
    margin: 20px 0;
  }
  label {
    display: block;
    margin-bottom: 8px;
    color: gray;
    font-size: 15px;
  }
  p {
    padding-left: 10px;
    font-weight: bold;
    word-wrap: break-word;
  }
  textarea {
    height: 36px;
    width: 100%;
    height: 50px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 6px;
    box-sizing: border-box;
    resize: none;
    ::placeholder {
      color: gray;
    }
  }
`;

export default Modal;
