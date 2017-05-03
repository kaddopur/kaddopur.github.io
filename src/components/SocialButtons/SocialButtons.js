import React from 'react';
import './SocialButton.css';

const sites = {
  facebook: 'https://www.facebook.com/chaoju.huang',
  twitter: 'https://twitter.com/kaddopur',
  instagram: 'https://www.instagram.com/kaddopur/',
  linkedin: 'https://www.linkedin.com/in/chaoju',
};

const SocialButton = props => (
  <a className="SocialButton" href={sites[props.site]} target="_blank" rel="noopener">
    <i className={`fa fa-${props.site}`} aria-hidden="true" /><br />
    <span className="indicator" />
  </a>
);

const SocialButtons = () => (
  <div className="SocialButtons">
    <SocialButton site="facebook" />
    <SocialButton site="twitter" />
    <SocialButton site="instagram" />
    <SocialButton site="linkedin" />
  </div>
);

export default SocialButtons;
