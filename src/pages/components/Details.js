import React from 'react'
import styled from 'styled-components/macro'
import { HeartCount } from './HeartCount'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  background-color: white;
  margin-bottom: 20px;
`
const Header = styled.h1`
  margin: 0px;
  font-size: 30px;
  color: grey;
`
const Title = styled.h1`
  margin: 50px, 0px;
  font-size: 24px;
  color: black;
`
const SecondaryText = styled.p`
  margin: 0px;
  font-size: 14px;
  color: #6b6b6b;
  margin: 10px 10px 20px 0px;
  
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
const CardWrapper = styled.div`
  box-sizing: border-box;
  width: 280px;
`
const Photographer = styled.p`
  font-size: 8px;
  color: #6b6b6b;
  text-align: left;
  padding:10px 0px 0px 20px;
`
const LinkTo = styled.a`
  font-size: 12px;
  color: #6b6b6b;
  text-decoration: underline;
  text-decoration-color: #6b6b6b;
  margin: 20px 0px;
  display: inline;
`
const Likes = styled.p`
  font-size: 12px;
  color: black;
`
const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

export const Details = ({
  header,
  title,
  secondaryText,
  coverImage,
  photographer,
  className,
  infoLink,
  likes
}) => (

    <Container className={className}>
      {coverImage && <CoverImage src={coverImage} />}
      {photographer && <Photographer>{photographer}</Photographer>}
      <Content>
        <TitleBar>
          <CardWrapper>
            {header && <Header>{header}</Header>}
            {title && <Title>{title}</Title>}
            {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
            {infoLink
              && <LinkTo
                href={infoLink}>{infoLink}
              </LinkTo>}
            <LikeWrapper>
              <HeartCount />
              {likes && <Likes>{likes}</Likes>}
            </LikeWrapper>
          </CardWrapper>
        </TitleBar>
      </Content>
    </Container>
  )

