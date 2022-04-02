import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ListBack from '../components/Button/ListBack';
import ListBox from '../components/ListBox';
import { useRecoilState } from 'recoil';
import { bool, numbers } from '../atoms';
import Feedback from '../components/Feedback';
import ListPlus from '../components/Button/ListPlus';
const Lists = ({}) => {
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [number, setNumber] = useState(Number(1));
  let [textCk, setTextCk] = useState(3);
  const [feedCk, setFeadCks] = useRecoilState(bool);
  const ListLink = true;

  const defaultClient = () => {
    axios
      .get(`/chungbuk/openapi-json/pubdata/pubMapForest.do?pageNo=${number}`)
      .then((res) => {
        const datas = res.data;
        if (number === 1) {
          setData(JSON.parse(datas).response);
        }
        setResult(JSON.parse(datas).response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    defaultClient();
  }, [number]);
  // 스크롤 이벤트
  const getRef = useRef(null);
  const linkClick = () => {
    getRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  //무한 스크롤
  const _infiniteScroll = useCallback(() => {
    // 스크롤 높이 값
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    // 스크롤 top 값
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    // 화면높이
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setNumber(number + 1);
      setData([...data, ...result]);
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
    return () => window.removeEventListener('scroll', _infiniteScroll, true);
  }, [_infiniteScroll]);

  return (
    <>
      <Link to='/' ref={getRef}>
        <ListBack />
      </Link>
      <ListUl>
        {data &&
          data.map((item, i) => {
            return (
              <ListBox
                key={i}
                item={item}
                title={item.fcNm}
                addr={item.fcAddr}
                tel={item.ref1}
                memo={'클릭하시면 메모 하실 수 있어요'}
                setTextCk={setTextCk}
                height={230}
              />
            );
          })}
      </ListUl>
      <div onClick={linkClick}>
        <ListPlus ListLink={ListLink} />
      </div>
      <Feedback textCk={textCk} feedCk={feedCk} />
    </>
  );
};

const ListUl = styled.ul``;

export default Lists;
