import React, { Fragment } from 'react';

import './style.css'

const Footer = (props) => (
  <Fragment>
    <div className="myFooter">
      <p className="footer-brand"></p>
      <hr/>
      <p>Hello</p>
    </div>
    <div className="copyrightInfo">© 2020 Kultura, Inc. All rights reserved.</div>
  </Fragment>
)

export default Footer;
