import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Details } from './components/Details'
import { BackIcon } from './components/Backicon'

const Detailsection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ThinnerCard = styled(Details)`
  width: 300px;
  min-height:500px;
  margin-top: 100px;
`
export const DetailsPage = () => {
  const [card, setCard] = useState([])
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  const { cardID } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(
      `http://localhost:8080/cards/${cardID}`
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

  console.log(addLike)

  return (
    <div className="page">
      <Link className="back" to="/flippingcards">
        <BackIcon /> Back
      </Link>
      <Detailsection>
        <ThinnerCard
          coverImage={card.image}
          photographer={card.image_by}
          header={card.header}
          title={card.title}
          secondaryText={card.thought}
          infoLink={card.info_link}
          likes={card.hearts} />
      </Detailsection>
    </div>
  )
}