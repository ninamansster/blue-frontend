import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { BackIcon } from './components/Backicon'
import { HeartCount } from './components/HeartCount'

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
// http://localhost:8080/cards/${cardID}

export const DetailsPage = () => {
  const [card, setCard] = useState({})
  const [updatedCard, setUpdatedCard] = useState()
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
  }, [cardID, updatedCard])

  if (loading) {
    return <h1>Cards are loading slow today</h1>
  }

  const addLike = (likedId) => {
    if (card.cardID === +likedId) {
      card.hearts += 1
      setCard(card)
      setUpdatedCard(card)
    }
  }

  // console.log(card)

  return (
    <div className="page">
      <Link className="back" to="/flippingcards">
        <BackIcon /> Back
      </Link>
      <div className="Detailsection">
        <div className="ThinnerCard">
          <div className="Container">
            {card.image && <img className="CoverImage" src={card.image} alt="Specific for the card" aria-label="inspirational theme" />}
            {card.image_by && <p className="Photographer">{card.image_by}</p>}
            <div className="Content">
              <div className="TitleBar">
                <div className="CardWrapper">
                  {card.header && <h1 className="Header">{card.header}</h1>}
                  {card.title && <h1 className="Title">{card.title}</h1>}
                  {card.thought && <p className="SecondaryText">{card.thought}</p>}
                  {card.info_link && <LinkTo href={card.info_link}>{card.info_link}</LinkTo>}
                  <LikeWrapper>
                    <HeartCount
                      addLike={addLike} />
                    <Likes>x {card.hearts}</Likes>
                  </LikeWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}