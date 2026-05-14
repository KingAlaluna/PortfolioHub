import '../../sw-init.js';
import './footer-copy.js';
import './pages/projects-details.js';
import './pages/about-me.js';


import {html} from '../data/config.js';


function pagesDisplay(page) {
  html.pages.forEach(e => {
    const dataPage = e.dataset.page;
    if (dataPage) {
      dataPage == page ? e.classList.add('active') : e.classList.remove('active');
    }
  });
}


html.btn.forEach(e => {
  e.addEventListener('click', () => {
    const dataType = e.dataset.type;
    const dataPage = e.dataset.page;
    
    if (dataType == 'theme') {
      if (e.classList.contains('active')) {
        html.HTML.dataset.theme = 'dark';
      } else {
        html.HTML.dataset.theme = 'light';
      }
      e.classList.toggle('active');
    } else if (dataPage) {
      pagesDisplay(dataPage);
      html.btn.forEach(e => {
        const dataType = e.dataset.type;
        if (dataType != 'theme') {
          e.classList.remove('active');
        }
      });
      e.classList.add('active');
    }
  });
});
