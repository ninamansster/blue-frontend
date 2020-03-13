import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Headersection = styled.header`
  background-image: url(https://images.unsplash.com/photo-1489537235181-fc05daed5805?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80);
  object-fit:cover;
  width: 100%;
  height: auto;
`
const SuperHeader = styled.h1`
  font-size:40px;
  font-family: "Roboto";
  font-weight: bolder;
  color: #253f57;

`

export const Header = () => {
  return (

    <Headersection>
      <section>
        <SuperHeader> Small tips and efforts for blue planet doing</SuperHeader>
        <div>
          <Link to="/flippingcards">
            <div className="deck">
              <p>Get inspo to be a planet steward </p>
            </div>
          </Link>
        </div>
      </section>
      Blue Doing
    </Headersection>
  )
}