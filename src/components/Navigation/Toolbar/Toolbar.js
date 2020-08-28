import React from 'react';
import classes from './Toolbar.module.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigrationItems';

const toolBar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolBar;
