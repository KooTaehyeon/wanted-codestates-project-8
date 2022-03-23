import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getItems, setItems } from '../util/LocalStorage';
import { useRecoilState } from 'recoil';
import { DataState } from '../atom';
const Search = () => {
  const options = [
    { value: 'name', label: '이름', key: 'title' },
    { value: 'address', label: '주소', key: 'addr' },
    { value: 'memo', label: '메모', key: 'memo' },
  ];

  // 셀럭트 옵션 담는 정보
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [searchData, setSearchData] = useState(getItems('item'));
  const [reData, setReData] = useState([]);
  const [homeTrue, setHomeTrue] = useRecoilState(DataState);

  // 셀렉트 옵션 담는걸 바꿔주는 함수
  const changeSelectValue = (e) => {
    const { value } = e.target;
    setSelectedOption(options[Number(value)]);
  };
  /// 셀렉트존
  const [inputValue, setInputValue] = useState(''); // input 값 상태

  const inputChange = (e) => {
    // input값 바꿔주는 이벤트
    setInputValue(e.target.value);
  };
  const onKey = (e) => {
    if (e.key === 'Enter') {
      if (selectedOption.value === 'name') {
        const data = searchData.filter((item) =>
          item.fcNm.includes(String(inputValue))
        );
        setSearchData(data);
      } else if (selectedOption.value === 'address') {
        const data = searchData.filter((item) =>
          item.fcNm.includes(String(inputValue))
        );
        setSearchData(data);
      } else if (selectedOption.value === 'address') {
        const data = searchData.filter((item) =>
          item.fcNm.includes(String(inputValue))
        );
        setSearchData(data);
      }
    }
    setHomeTrue(!homeTrue);
  };
  // 필터용
  setTimeout(() => {
    setItems(searchData);
  }, searchData);
  const ReSet = () => {
    // input 값 지우는 이벤트
    setInputValue('');
    setItems(reData);
    setHomeTrue(!homeTrue);
  };
  // 리셋(되돌리기)용 데이터
  useEffect(() => {
    setReData(searchData);
  }, []);

  console.log(searchData);
  console.log(reData, '리셋용');

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
        />
        <InputRemove onClick={ReSet}>
          {' '}
          <i className='fas fa-undo'></i>
        </InputRemove>
      </Froms>
    </Box>
  );
};

const Box = styled.nav`
  display: flex;
  margin: 20px;
  position: relative;
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
`;

export default Search;
