import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Loading } from './components/Loading'
import { Details } from './components/Details'

const Detailsection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ThinnerCard = styled(Details)`
  width: 300px;
  min-height:500px;
  margin-top: 20px;
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
    return <Loading />
  }

  return (

    <Detailsection>
      <ThinnerCard
        coverImage={card.image}
        header={card.header}
        title={card.title}
        secondaryText={card.fact} />
    </Detailsection>
  )
}