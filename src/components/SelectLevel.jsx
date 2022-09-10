import React from 'react'
import { Select } from '@mantine/core'
import useGamePlay from '../context/gamePlayContext'

export default function SelectLevel() {
  const { difficulty, setDifficulty } = useGamePlay()

  function selectDifficulty(e) {
    const lvl = e
    setDifficulty(lvl)
  }

  return (
    <>
      <Select
        allowDeselect
        value={difficulty}
        onChange={selectDifficulty}
        label='Your favorite framework/library'
        placeholder='Pick your lvl'
        data={[
          { value: 'noob', label: 'Noob - 3-5 letters' },
          { value: 'champ', label: 'Champ - 5-10 letters ' },
          { value: 'smurf', label: 'Smurf - 10-15 letters' }
        ]}
        transition='pop-top-left'
        transitionDuration={80}
        transitionTimingFunction='ease'
      />
    </>
  )
}
