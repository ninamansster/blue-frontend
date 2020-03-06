import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  background-color: white;
  margin-bottom: 20px;
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
  width: 300px;
  height: 500px;
  border-radius: 6px 6px 0 0;
`
const Content = styled.div`
  padding: 20px;
`
export const Details = ({ title, secondaryText, coverImage, className }) => (
  <Container className={className}>
    {coverImage && <CoverImage src={coverImage} />}
    <Content>
      <TitleBar>
        <div>
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </div>
      </TitleBar>
    </Content>
  </Container>
)

