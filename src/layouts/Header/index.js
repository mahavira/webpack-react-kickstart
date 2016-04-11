import React, {Component} from 'react'
import style from './index.css'

import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

export default class Header extends Component {
  render() {
    return (
      <header className={style.normal}>
        <h2 className={style.logo}>SoHoEr</h2>
        <div className={style.search}>
          <TextField
            hintText="搜索自由职业人"
            style={{height:40}}
            hintStyle={{bottom:7}}
            underlineStyle={{bottom:0}}
          />
          <FlatButton label="浏览" style={{marginLeft:10}} primary={true}/>
          <FlatButton label="如何去工作" primary={true}/>

        </div>
        <div>
          <RaisedButton
            label="登录"
            style={{marginRight:10}}
          />
          <RaisedButton primary={true} label="成为自由职业人"/>
        </div>
      </header>
    )
  }
}
