import React, {Component} from 'react'
import style from './index.css'

export default class Header extends Component {
  render() {
    return (
      <header className={style.normal}>
        <h2 className={style.logo}>Hello</h2>
        <div className={style.search}>
        </div>
      </header>
    )
  }
}
