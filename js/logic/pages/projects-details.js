import {i, url} from '../../data/config.js';
import {liRender, liObjectsRender} from '../utils.js';


const html = {
  myProjectsWrap: i('my-projects-wrap'),
};


try {
  const json = await fetch(url.projectsDetails);
  const data = await json.json();
  
  
  data.forEach(e => {
    const {
      name,
      data,
      note,
    } = e;
    
    const section = document.createElement('section');
    section.className = 'projects-details-wrap';
    
    section.innerHTML = `
      <h2>${name}:</h2>
      <h3>Загальні примітки:</h3>
      <ol>${liRender(note)}</ol>
      <ol>${projectsRender(data)}</ol>
    `;
    
    html.myProjectsWrap.append(section);
  });
} catch (e) {
  console.error('Помилка в projects-details.js', e);
}



function projectsRender(data) {
  return data.map(e => {
    const {
      details,
      name,
      status,
      technologies,
      urlCode,
      urlProject,
    } = e;
    
    
    return `
      <li>
        <h2>${name}</h2>
        <h3>Статус: ${status}</h3>
        <h3>Опис:</h3>
        <ol>${liRender(details)}</ol>
        <h3>Технології:</h3>
        <ol>${liObjectsRender(technologies)}</ol>
        
        <h3>Посилання</h3>
        ${urlProject[0].name ? urlObjectsRebder(urlProject) : `<a href="${urlProject}" target="_blank" rel="noopener noreferrer">Перейти на ${name}</a>`}
        <a href="${urlCode}" target="_blank" rel="noopener noreferrer">Глянути вихідний код</a>
      </li>
    `;
  }).join('');  
}


function urlObjectsRebder(data) {
  return `<ol>${data.map(e => {
    const {
      name,
      url,
    } = e;
    
    return `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a></li>`;
  }).join('')}</ol>`;
}