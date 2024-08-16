import React from 'react'
import Styles from '../styles/Card.module.css'

const Card = ({ fan }) => {
  return (
    <div className={Styles.card}>
    <h4>¡La super hinchada de <em className={Styles.team}>{fan.team}</em>!</h4>
    <h4>
      Agradece tu aguante {" "} <span role="img" aria-label="heart">❤️</span>
      <em className={Styles.name}>{fan.name}</em><span role="img" aria-label="heart">❤️</span>
    </h4>
  </div>
  )
}

export default Card