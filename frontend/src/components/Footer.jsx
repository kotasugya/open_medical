import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footerBar: {
    width: '100%',
    height: '150px',
    backgroundColor: '#F2F2F2',
    position: "absolute",
    bottom: 0,
  },
  title: {
    textAlign: 'center',
    marginTop: '25px',
    fontSize: '20px'
  },
  menuList: {
    '& ul': {
      display: 'flex',
      justifyContent: 'center',
      listStyle: 'none',
      margin: '20px',
      '& li': {
        fontSize: '14px',
        marginRight: '30px',
        marginLeft: '30px',
        color: 'lightglay',
      },
    },
  },
  copyRight: {
    textAlign: 'center',
    fontSize: '13px',
    color: 'lightglay',
  }
}));

export const Footer = ()=> {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className={classes.footerBar}>
        <div className={classes.title}>openmedical</div>
        <div className={classes.menuList}>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>お問い合わせ</li>
          </ul>
        </div>
        <div className={classes.copyRight}>Copyright © 2021 Sugya.</div>
      </div>
    </div>
  )
}