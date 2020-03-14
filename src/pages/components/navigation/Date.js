import React from 'react'
import moment from 'moment'
import styled from 'styled-components/macro'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 20px;
  border-radius: 6px;
  background-color: lightyellow;
  text-align: left;
  margin: 15px;
`;

const Dateview = styled.h4`
  font-weight: 500;
  font-size: 13px;
  color: black;
  margin: 0px;
  padding: 10px;
`;

const Timenow = styled.h4`
  font-weight: 500;
  font-size: 16px;
  color: blue;
  margin: 0px;
  padding: 5px;
  display: inline-flex;
  align-items: center;
`;

const Worktime = styled.h4`
  font-weight: 500;
  font-size: 10px;
  color: black;
  margin: 0px;
  padding: 5px;
  display: inline-flex;
  align-items: center;
`;

export const Date = ({ text, time, today }) => {
  return (
    <Container>
      <Dateview>
        {text}
        {moment().format('MMMM Do')}
      </Dateview>
      <Timenow>
        {time}
        {moment().format('LT')}{' '}
      </Timenow>
      <Worktime>
        {today}
        {moment()
          .startOf('day')
          .fromNow()}
      </Worktime>
    </Container>
  );
};
