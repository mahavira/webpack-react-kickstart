import React, {PropTypes} from 'react'
import Header from './Header'
import style from './index.css'

const App = ({children}) =>
  <div className={style.normal}>
    <Header/>
    {children}
  </div>
App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
