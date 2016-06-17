// Home screen
// ===========

import React from 'react'
import Counter from '../counter'
import style from './index.scss'

export default class HomeScreen extends React.Component {
  render() {
    return <section className={style.HomeScreen}>
      <h1 className={style.heading}>
        Neob
      </h1>
      <Counter count={0} />
    </section>
  }
}
