import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListPlus from '../components/Button/ListPlus';
import { Link } from 'react-router-dom';
import { getItems } from '../util/LocalStorage';
import ListBox from '../components/ListBox';
import Feedback from '../components/Feedback';
import { useRecoilState } from 'recoil';
import { bool } from '../atoms';
import img from '../img/image.png';
const Home = () => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    const test = getItems('item');
    if (homeData) {
      setHomeData(test);
    } else {
      setHomeData([]);
    }
  }, []);

  // 서치부분
  const Search = () => {
    const options = [
      { value: 'name', label: '이름', key: 'title' },
      { value: 'address', label: '주소', key: 'addr' },
      { value: 'memo', label: '메모', key: 'memo' },
    ];

    // 셀럭트 옵션 담는 정보
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [searchData, setSearchData] = useState(getItems('item'));

    // 셀렉트 옵션 담는걸 바꿔주는 함수
    const changeSelectValue = (e) => {
      const { value } = e.target;
      setSelectedOption(options[Number(value)]);
    };
    /// input값
    const [inputValue, setInputValue] = useState(''); // input 값 상태
    const inputChange = (e) => {
      // input값 바꿔주는 이벤트
      setInputValue(e.target.value);
    };
    const onKey = (e) => {
      if (e.key === 'Enter') {
        if (selectedOption.value === 'name') {
          const data = homeData.map((item) => {
            if (!item.fcNm.includes(String(inputValue))) {
              item.bool = true;
            }
            return item;
          });
          setHomeData(data);
        } else if (selectedOption.value === 'address') {
          const data = homeData.map((item) => {
            if (!item.fcAddr.includes(String(inputValue))) {
              item.bool = true;
            }
            return item;
          });
          setHomeData(data);
        } else if (selectedOption.value === 'memo') {
          const data = homeData.map((item) => {
            if (!item.contents.includes(String(inputValue))) {
              item.bool = true;
            }
            return item;
          });
          setHomeData(data);
        }
      }
    };

    const ReSet = () => {
      // input 값 지우는 이벤트
      setInputValue('');
      const getReSet = getItems('item');
      const data = getReSet.map((item) => {
        if (item.bool === true) {
          item.bool = false;
        }
        return item;
      });
      setHomeData(data);
    };

    return (
      <Box>
        <SelectBox onChange={changeSelectValue}>
          {options.map(({ label }, idx) => (
            <option value={idx} key={idx}>
              {label}
            </option>
          ))}
        </SelectBox>
        <Froms onSubmit={(e) => e.preventDefault()}>
          {' '}
          <InputBox
            placeholder='검색어를 입력하세요.'
            id='search'
            type='text'
            onChange={inputChange}
            value={inputValue}
            onKeyPress={onKey}
          ></InputBox>
          <InputRemove onClick={ReSet}>
            {' '}
            <i className='fas fa-undo'></i>
          </InputRemove>
        </Froms>
      </Box>
    );
  };
  //  피드백 박스
  let [textCk, setTextCk] = useState(1);
  const [feedCk, setFeadCks] = useRecoilState(bool);
  // Link btn
  const LinkBool = true;
  return (
    <>
      <Search />
      <ListUl>
        {homeData ? (
          homeData.map((item, i) => {
            return (
              <div
                key={i}
                style={
                  item.bool === false
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <ListBox
                  homeData={homeData}
                  setHomeData={setHomeData}
                  item={item}
                  setTextCk={setTextCk}
                  dispaly={item.bool}
                />
              </div>
            );
          })
        ) : (
          <>
            <img src={img}></img>
            <div>저장된 데이터가 없습니다</div>
          </>
        )}
      </ListUl>
      <Link to='/List'>
        <ListPlus LinkBool={LinkBool} />
      </Link>
      <Feedback textCk={textCk} feedCk={feedCk} />
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;
const ListUl = styled.ul`
  div {
    text-align: center;
  }
  img {
    text-align: center;
    width: 90%;
    margin: auto;
    padding: 30px;
  }
`;

const Box = styled.nav`
  display: flex;
  margin: 20px;
`;
const SelectBox = styled.select`
  width: 88px;
  height: 38px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
`;
const Froms = styled.form`
  position: relative;
  height: 36px;
  width: 100%;
  padding: 0px 10px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
`;
const InputBox = styled.input`
  border: none;
  width: 90%;
  height: 34px;
  &:focus {
    outline: none;
  }
`;
const InputRemove = styled.div`
  padding-top: 5px;
  float: right;
  cursor: pointer;
  position: relative;
  @media screen and (max-width: 1080px) {
    float: none;
    top: -32px;
    left: 90%;
  }
`;

export default Home;
