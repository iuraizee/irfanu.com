'use client'

import React from 'react'
import Image from 'next/image'

const Card = props => {
  const { url, headline, image } = props

  return (
    <div className="card">
      <a href={url} target="_blank" rel="noreferrer">
        <div className="card-container">
          <Image
            src={image}
            alt={headline}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="card-info">
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: headline }}
          />
        </div>
      </a>
    </div>
  )
}

export default Card
