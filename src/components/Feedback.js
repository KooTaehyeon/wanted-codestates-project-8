import React, { useRef } from 'react';
import styled from 'styled-components';
const Feedback = ({ textCk, feedCk }) => {
  const faadText = [
    '메모를적어주세요',
    '수정되었습니다',
    '삭제되었습니다',
    '저장되었습니다',
  ];
  console.log(feedCk);
  return (
    <FeedbackBox style={!feedCk ? { display: 'none' } : { display: 'block' }}>
      {faadText[textCk]}
    </FeedbackBox>
  );
};

const FeedbackBox = styled.div`
  position: fixed;
  top: 5%;
  left: 42%;
  border: 1px solid blue;
  width: 200px;
  height: 30px;
  background-color: blue;
  color: #fff;
  z-index: 10;
  padding: 30px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
export default Feedback;
