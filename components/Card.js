'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'

const Card = props => {
  const { url, headline, image } = props

  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="card">
      <a href={url} target="_blank" rel="noreferrer">
        <div className="card-container">
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--color-background)',
              opacity: !isLoaded ? 1 : 0,
              transition: 'var(----transition-timing-base) ease-in-out',
            }}
          >
            {!isLoaded && <Loader2 className="spinner" />}
          </div>
          <Image
            src={image}
            alt={headline}
            fill
            style={{ objectFit: 'cover' }}
            onLoad={() => setIsLoaded(true)}
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
