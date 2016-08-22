import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import ReadingList from '../components/ReadingList/ReadingList';

const pages = [
  {
    title: 'Projects',
    path: '/projects',
    component: Projects
  },
  {
    title: 'Skills',
    path: '/skills',
    component: Skills
  },
  {
    title: 'Reading List',
    path: '/reading-list',
    component: ReadingList
  }
];

export default pages;
