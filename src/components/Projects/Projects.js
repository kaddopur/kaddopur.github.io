import React from 'react';
import Card from '../Card/Card';
import './Projects.css';

const projects = [
  {
    title: 'Yahoo! TW/HK Homepage',
    content: '',
    cover: '/img/yahoo_tw_hk_homepage.png',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: 'Yhaoo! TW Video',
    content: '',
    cover: '/img/yahoo.png',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: 'Yahoo! TW News iOS',
    content: '',
    cover: '/img/yahoo.png',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: 'Yahoo! TW/HK Mobile Web',
    content: '',
    cover: '/img/yahoo.png',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: 'Yahoo! TW/HK Homepage',
    content: '',
    cover: '/img/yahoo.png',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: 'Yahoo! TV Scheduling Editorial Tool',
    content: '',
    cover: '/img/yahoo.png',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: 'Chrome Extension for daily developing',
    content: '',
    cover: '/img/yahoo.png',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: 'CLI for daily developing',
    content: '',
    cover: '/img/yahoo.png',
    link: 'https://tw.yahoo.com/',
  },
];

const Projects = () => (
  <div className="projects">
    {projects.map((project, index) => <Card {...project} key={index}/>)}
  </div>
);

export default Projects;
