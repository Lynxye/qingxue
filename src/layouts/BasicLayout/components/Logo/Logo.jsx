import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import IceImg from '@icedesign/img';

import './Logo.scss';

const headLogo = require('./images/Logo.png');

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo">
        <Link to="/" className="logo-text">
          <IceImg
            height={40}
            width={120}
            src={headLogo}
            alt={"天天学"}
            type={"contain"}
          />
        </Link>
      </div>
    );
  }
}
