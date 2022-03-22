import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Search = (homeData, setHomeData) => {
  const options = [
    { value: 'name', label: '이름', key: 'title' },
    { value: 'address', label: '주소', key: 'addr' },
    { value: 'memo', label: '메모', key: 'memo' },
  ];
  // 셀럭트 옵션 담는 정보
  const [selectedOption, setSelectedOption] = useState(options[0]);
  // 셀렉트 옵션 담는걸 바꿔주는 함수
  const changeSelectValue = (e) => {
    const { value } = e.target;
    setSelectedOption(options[Number(value)]);
  };
  /// 셀렉트존
  const [inputValue, setInputValue] = useState(''); // input 값 상태
  //인풋

  const inputChange = (e) => {
    // input값 바꿔주는 이벤트
    setInputValue(e.target.value);
  };

  const textRemove = () => {
    // input 값 지우는 이벤트
    setInputValue('');
  };

  // 검색 필터
  useEffect(() => {
    if (selectedOption) {
      console.log('d');
      const data = homeData.filter((item) => item.fcNm === inputValue);
      setHomeData(data);
    }
  }, [inputValue]);
  console.log(selectedOption);
  return (
    <Box>
      <SelectBox onChange={changeSelectValue}>
        {options.map(({ label }, idx) => (
          <option value={idx} key={idx}>
            {label}
          </option>
        ))}
      </SelectBox>
      <Froms>
        {' '}
        <InputBox
          placeholder='검색어를 입력하세요.'
          onChange={inputChange}
          value={inputValue}
        />
        <InputRemove onClick={textRemove}>
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
