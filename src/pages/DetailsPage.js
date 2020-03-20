import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { BackIcon } from './components/Backicon'
import { HeartCount } from './components/HeartCount'

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
  padding-left: 10px;
`
const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
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

export const DetailsPage = () => {
  const [card, setCard] = useState([])
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  const { cardID } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://happybluecards.herokuapp.com/cards/${cardID}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCard(json)
        setLoading(false)
        console.log(json)
      })
  }, [cardID])

  if (loading) {
    return <h1>Cards are loading slow today</h1>
  }

  const addLike = (likedId) => {
    const updatedCard = cards.map(() => {
      if (card.cardID === likedId) {
        card.hearts += 1
      }
      return card
    })
    setCards(updatedCard)
  }

  // console.log(card)

  return (
    <div className="page">
      <Link className="back" to="/flippingcards">
        <BackIcon /> Back
      </Link>
      <Detailsection>
        <ThinnerCard>
          <Container>
            {card.image && <CoverImage src={card.image} />}
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
                  <LikeWrapper>
                    <HeartCount
                      addLike={addLike}
                      style={{ background: card.hearts > 0 ? 'white' : 'black' }} />
                    <Likes>x {card.hearts}</Likes>
                  </LikeWrapper>
                </CardWrapper>
              </TitleBar>
            </Content>
          </Container>
        </ThinnerCard>
      </Detailsection>
    </div>
  )
}