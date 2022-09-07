import React from 'react'
import styles from './HangMan.module.css'
import useGamePlay from '../context/gamePlayContext'

export default function HangMan() {
  const { wrongGuessNbr } = useGamePlay()
  return (
    <div className={styles.container}>
      <section className={styles.hangman}>
        {wrongGuessNbr <= 5 ? <div className={styles.head}></div> : ''}
        {wrongGuessNbr <= 4 ? <div className={styles.body}></div> : ''}
        {wrongGuessNbr <= 3 ? <div className={styles.arm1}></div> : ''}
        {wrongGuessNbr <= 2 ? <div className={styles.arm2}></div> : ''}
        {wrongGuessNbr <= 1 ? <div className={styles.leg1}></div> : ''}
        {wrongGuessNbr === 0 ? <div className={styles.leg2}></div> : ''}
        <div className={styles.scafhold}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </div>
  )
}
