import React from 'react'
import { useSelector } from 'react-redux'

export const RandomPage = () => {
  const card = useSelector((state) => state.cards.userCard)

  return (
    <div className="page">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}