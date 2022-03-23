import React, { useRef } from 'react';
import styled from 'styled-components';
const Feedback = (props) => {
  const feedbeckMove = useRef(null);
  return <FeedbackBox ref={feedbeckMove}></FeedbackBox>;
  console.log(feedbeckMove);
};

const FeedbackBox = styled.div`
  position: fixed;
  top: 17%;
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
`;
export default Feedback;
