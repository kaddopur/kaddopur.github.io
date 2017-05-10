import React from 'react';
import './SocialButton.css';

const sites = {
  facebook: 'https://www.facebook.com/chaoju.huang',
  linkedin: 'https://www.linkedin.com/in/chaoju',
  rss: 'https://kaddopur.github.io/blog/',
  twitter: 'https://twitter.com/kaddopur',
};

const SocialButton = ({ site }) => (
  <a className="SocialButton" href={sites[site]} target="_blank" rel="noopener">
    <i className={`fa fa-${site}`} aria-hidden="true" /><br />
    <span className="indicator" />
  </a>
);

const SocialButtons = () => (
  <div className="SocialButtons">
    <SocialButton site="facebook" />
    <SocialButton site="twitter" />
    <SocialButton site="linkedin" />
    <SocialButton site="rss" />
  </div>
);

export default SocialButtons;
