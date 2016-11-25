import React from 'react';
import Card from '../Card/Card';

const projects = [
  {
    title: 'Yahoo! TW/HK Homepage',
  },
];

const Projects = () => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }}>
    {projects.map((project, index) => <Card {...project} key={index}/>)}
  </div>
);

export default Projects;

// <div>
//   <h3>Projects</h3>
//   <ul>
//     <li>Yahoo! TW/HK Homepage</li>
//     <li>Yhaoo! TW Video</li>
//     <li>Yahoo! TW News iOS</li>
//     <li>Yahoo! TW/HK Mobile Web</li>
//     <li>Yahoo! TV Scheduling Editorial Tool</li>
//     <li>Chrome Extension for daily developing</li>
//     <li>CLI for daily developing</li>
//   </ul>
// </div>
