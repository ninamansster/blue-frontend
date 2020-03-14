import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Details } from './components/Details'
import { BackIcon } from './components/Backicon'

const Detailsection = styled.section`
  display: flex;
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
    return <h1>is loading</h1>
  }

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
          secondaryText={card.fact}
          infoLink={card.info_link}
          bookTip={card.book_tip} />
      </Detailsection>
    </div>
  )
}