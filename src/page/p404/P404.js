import React from 'react'
import { Link } from 'react-router-dom'

export default function P404() {
  return (
    <div>
          <p>Oups cette page n'existe pas</p>
          <Link to="/">Retourner a l'accueil</Link>
    </div>
  )
}
