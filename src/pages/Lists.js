import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ListBack from '../components/ListBack';
import ListBox from '../components/ListBox';
import { getItems, setItems } from '../util/LocalStorage';
const Lists = ({}) => {
  const [localData, setLocalData] = useState(getItems('item'));
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [number, setNumber] = useState(Number(1));

  const defaultClient = () => {
    axios
      .get(
        `https://www.chungbuk.go.kr/openapi-json/pubdata/pubMapForest.do?pageNo=${number}`
      )
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

  useEffect(() => {
    setItems(localData);
  }, [localData]);

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
  console.log(data);
  console.log(localData, '저장');
  return (
    <>
      <Link to='/'>
        <ListBack />
      </Link>
      <ListUl>
        {data &&
          data.map((item, i) => {
            return (
              <ListBox
                localData={localData}
                setLocalData={setLocalData}
                key={i}
                item={item}
                title={item.fcNm}
                addr={item.fcAddr}
                tel={item.ref1}
              />
            );
          })}
      </ListUl>
    </>
  );
};

const ListUl = styled.ul``;

export default Lists;
