import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import ListPlus from '../components/ListPlus';
import { Link } from 'react-router-dom';
const Home = (props) => {
  return (
    <>
      <Search></Search>
      <ListUl>
        <ListLi>
          <p>title</p>
          <p>address</p>
          <p>tel</p>
          <Messsage>~~~</Messsage>
        </ListLi>
      </ListUl>
      <Link to='/List'>
        <ListPlus />
      </Link>
    </>
  );
};
const ListUl = styled.ul``;
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
export default Home;
