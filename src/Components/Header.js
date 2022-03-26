import React from 'react'

export default function Header({blok}) {
  return (
    <header>
      <h1>{blok.body[0].Title}</h1>
      <h3>{blok.body[0].Subtitle}</h3>
    </header>
  )
}
