import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
// import { Loading } from './components/Loading'
import { BackIcon } from './components/Backicon'

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
const Detailsection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ThinnerCard = styled.div`
  width: 300px;
  min-height:500px;
  margin-top: 100px;
`
// http://localhost:8080/cards/${cardID}

export const RandomPage = () => {
  const card = useSelector((state) => state.userCard.card)

  // const addLike = (likedId) => {
  //   const updatedCard = cards.map(() => {
  //     if (card.cardID === likedId) {
  //       card.hearts += 1
  //     }
  //     return card
  //   })
  //   setCards(updatedCard)
  // }

  // console.log(card)

  return (
    <div className="page">
      <Link className="back" to="/">
        <BackIcon /> Back
      </Link>
      <Detailsection>
        <ThinnerCard>
          <Container>
            {card.card.image && <CoverImage src={card.card.image} />}
            {card.image_by && <Photographer>{card.image_by}</Photographer>}
            <Content>
              <TitleBar>
                <CardWrapper>
                  {card.header && <Header>{card.header}</Header>}
                  {card.title && <Title>{card.title}</Title>}
                  {card.thought && <SecondaryText>{card.thought}</SecondaryText>}
                  {card.info_link
                    && <LinkTo
                      href={card.info_link}>
                      {card.info_link}
                    </LinkTo>}
                </CardWrapper>
              </TitleBar>
            </Content>
          </Container>
        </ThinnerCard>
      </Detailsection>
    </div>
  )
}