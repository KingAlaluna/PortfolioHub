import {marked} from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

import {texts} from '../data/texts.js';


//config
//const i = (id) => document.getElementById(id);
const c = (classis) => document.querySelectorAll(`.${classis}`);

const html = {
  btn: c('btn'),
  pages: c('pages'),
  
  HTML: document.documentElement,
};

//dangerouslySetInnerHTML: { __html: window.marked.parse(props.text) },
function pagesAddText() {
  html.pages.forEach(e => {
    const dataText = e.dataset.text;
    if (dataText) {
      const standard = marked.parse(texts[dataText]);
      const noP = standard.replace(/<p>|<\/p>/g, '');
      
      e.innerHTML = (dataText == 'myProjectsShortText' ? noP : standard);
    }
  });
}
pagesAddText();


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

//const rawHtml = marked.parse(markdownText);
//const cleanHtml = rawHtml.replace(/<p>|<\/p>/g, '');
