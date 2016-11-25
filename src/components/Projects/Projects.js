import React from 'react';
import Card from '../Card/Card';
import './Projects.css';

const yahooProjects = [
  {
    title: 'Yahoo TW Homepage',
    content: 'PHP scaffold w/ Node.js components',
    cover: '/img/yahoo_tw_homepage.png',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: 'Yahoo TV',
    content: 'React/Flux app',
    cover: '/img/yahoo_tv.png',
    link: 'https://tw.video.yahoo.com/',
  },
  {
    title: 'Yahoo TW News iOS',
    content: 'TV & live streaming',
    cover: '/img/yahoo_news_ios.png',
    link: 'https://itunes.apple.com/tw/app/yahoo-qi-mo-xin-wen-zhi-bolive/id864844562?mt=8',
  },
  {
    title: 'Yahoo TW Mobile Web',
    content: 'React/Flux app',
    cover: '/img/yahoo_mobile_web.png',
    link: 'https://tw.mobi.yahoo.com/',
  },
  {
    title: 'Yahoo TV Scheduling Editorial Tool',
    content: 'React/Flux app for Yahoo TV daily schedule publishing',
    cover: '/img/yahoo_aet.png',
  },
  {
    title: 'Chrome Extension for daily developing',
    content: 'React/Redux chrome extension for quick switch modules w/ params',
    cover: '/img/yahoo_dev_tool.png',
  },
  {
    title: 'CLI for daily developing',
    content: 'CLI w/ commander.js',
    cover: '/img/yahoo_apollo_cli.png',
  },
];

const sideProjects = [
  {
    title: 'Type Instructor of Pokémon',
    content: 'React/Redux app, for mastering damages of each type',
    cover: '/img/side_type_instructor.png',
    link: 'https://kaddopur.github.io/type_instructor',
  },
  {
    title: 'URL Monster',
    content: 'React/Flux Chrome extension, for comparing/modifying urls',
    cover: '/img/side_url_monster.png',
    link: 'https://github.com/Purple-Ninja/url-monster',
  },
  {
    title: 'Bizcard Back',
    content: 'Angular app, Hanzawa Naoki style bizcard generator',
    cover: '/img/side_bizcard.png',
    link: 'https://bizcardback.herokuapp.com/',
  },
];

const Projects = () => (
  <div>
    <h2>Yahoo</h2>
    <div className="projects">
      {yahooProjects.map((project, index) => <Card {...project} key={index}/>)}
    </div>

    <h2>Side Projects</h2>
    <div className="projects">
      {sideProjects.map((project, index) => <Card {...project} key={index}/>)}
    </div>
  </div>
);

export default Projects;
