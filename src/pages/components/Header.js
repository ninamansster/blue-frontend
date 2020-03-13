import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Headersection = styled.header`
  /* background-image: url(https://images.unsplash.com/photo-1489537235181-fc05daed5805?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80); */
  background-image: url(https://images.unsplash.com/photo-1545163143-6083ece28229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80);
  object-fit: fill;
  /* width: 100%; */
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SuperHeader = styled.h1`
  font-size:40px;
  display: block;
  font-family: "Roboto";
  font-weight: bolder;
  color: #ff8b3e;
  padding: 10px 10px 50px 10px;
`
const SuperText = styled.p`
  font-size: 20px;
  margin: 0px;
  padding: 120px 5px;
  
`
const SuperSteward = styled.h2`
  font-size:30px;
  display: block;
  font-family: "Roboto";
  font-weight: bolder;
  color: #ff8b3e;
`
const SuperWrapper = styled.div`
  display:flex;
  flex-direction: row;
  text-align: center; 
  justify-content: space-between;
`


export const Header = () => {
  return (

    <Headersection>
      <section>
        <SuperHeader> Small tips and efforts for blue planet doing</SuperHeader>
        <SuperWrapper>
          <div>
            <Link to="/flippingcards">
              <div className="deck">
                <SuperText>Get inspiration from the cards </SuperText>
              </div>
            </Link>
          </div>
          <SuperSteward> Anyone can a planet Steward </SuperSteward>
        </SuperWrapper>
      </section>
    </Headersection>
  )
}