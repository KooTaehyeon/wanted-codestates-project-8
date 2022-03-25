import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { DataState, modalDatas } from '../atom';
import { setItems } from '../util/LocalStorage';
import { getItems } from '../util/LocalStorage';
const Modal = ({
  modalCk,
  setModelCk,
  item,
  homeData,
  setHomeData,
  istrue,
}) => {
  const [editMessage, setEditMessage] = useState(item.text);
  const [modalData, setModalData] = useRecoilState(modalDatas);
  const [myDatas, setMyDatas] = useState([]);

  useEffect(() => {
    const data = getItems('item');
    if (data) {
      setMyDatas(data);
    }
  }, []);

  const MessageChnge = (e) => {
    setEditMessage(e.target.value);
  };
  const onclick = (e) => {
    if (modalCk === true) {
      setModelCk(false);
    }
  };
  // 저장기능
  const save = (e) => {
    //모달  닫기
    if (modalCk === true) {
      setModelCk(false);
    }
    // 메모 저장
    if (myDatas) {
      console.log('home', myDatas);
      const saveData = [
        ...myDatas,
        { ...item, id: Date.now(), text: editMessage },
      ];
      setItems(saveData);
    } else {
      console.log('home', myDatas);
      const saveData = [{ ...item, id: Date.now(), text: editMessage }];
      setItems(saveData);
    }
  };

  //
  const updated = () => {
    //모달  닫기
    if (modalCk === true) {
      setModelCk(false);
    }
    // 메모 저장
    if (homeData) {
      console.log(homeData);
      console.log('item', item);
      let indexData;
      homeData.forEach((todo, index) => {
        if (todo.id === item.id) {
          //docs.google.com/spreadsheets/d/1hJjbzQQqeO2xVUTPw4lzf8Xs3OwSxcn9XDcsTbiWC0k/edit#gid=0t
          vbhttps: indexData = index;
        }
      });
      // const upDatadata = { ...item, contents: editMessage };
      // const newDatas = [ ...homeData, homeData[indexData] ];
      const allDatas = [...homeData];
      // upDatadata[indexData] = { ...item, contents: editMessage };
      const updated = allDatas.map((todo) => {
        if (todo.id === item.id) {
          todo.text = editMessage;
          return todo;
        }
        return todo;
      });
      setItems(updated);
    }
  };
  const del = () => {
    // //모달  닫기
    // if (modalCk === true) {
    //   setModelCk(false);
    // }
    // // 메모 저장
    // if (homeData) {
    //   console.log(homeData);
    //   console.log('item', item);
    //   let indexData;
    //   homeData.forEach((todo, index) => {
    //     if (todo.id === item.id) {
    //       indexData = index;
    //     }
    //   });

    //   const alldelData = [...homeData];

    //   const deletedArr = alldelData.filter((todo) => todo.id !== item.id);
    //   console.log(deletedArr);
    //   setHomeData(deletedArr);
    //   setItems(homeData);
    // }
    if (myDatas) {
      const allDatas = getItems('item');
      const deleted = allDatas.filter((todo) => todo.id !== item.id);
      console.log('deleted', deleted);
      setItems(deleted);
      setModelCk(false);
      // setMyDatas(deleted);
      setHomeData(deleted);
    }
  };

  return (
    <>
      <Bg onClick={onclick}> </Bg>
      <ModalBox>
        <ul>
          <li>
            <label htmlFor='title'>이름</label>
            <p>{item.fcNm}</p>
          </li>
          <li>
            <label htmlFor='address'>주소</label>
            <p>{item.fcAddr}</p>
          </li>
          <li>
            <label htmlFor='tel'>연락처</label>
            <p>{item.ref1}</p>
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
            {istrue === true ? (
              <>
                <div onClick={updated}>수정하기</div>
                <div onClick={del}>삭제하기</div>
              </>
            ) : (
              <div onClick={save}>저장하기</div>
            )}
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
  text-align: center;
  div {
    margin: 15px 15px 0px 15px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    display: inline-box;
    border: 1px solid blue;
    padding: 10px;
    background: blue;
    color: #fff;
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
    overflow: hidden;
    ::placeholder {
      color: gray;
    }
  }
`;

export default Modal;
