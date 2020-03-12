import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 20px;
  background: linear-gradient(145deg, white, white);
  box-shadow:  31px 31px 62px #5898cf, 
             -31px -31px 62px #76ceff;
  background-color: white;
  margin-bottom: 20px;
`
const Header = styled.h1`
  margin: 0px;
  font-size: 30px;
  color: grey;
`
const Title = styled.h1`
  margin: 0px;
  font-size: 24px;
  color: black;
`
const SecondaryText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b6b6b;
`
const TitleBar = styled.div`
  display: flex;
  align-items: center;
`
const CoverImage = styled.img`
  width:300px;
  height: 200px;
  object-fit: cover; 
  border-radius: 20px 20px 0 0;

`
const Content = styled.div`
  padding: 20px;
`

export const Details = ({ header, title, secondaryText, coverImage, className }) => (
  <Container className={className}>
    {coverImage && <CoverImage src={coverImage} />}
    <Content>
      <TitleBar>
        <div>
          {header && <Header>{header}</Header>}
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </div>
      </TitleBar>
    </Content>
  </Container>
)

