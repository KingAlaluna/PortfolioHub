import {i, url} from '../data/config.js';


const html = {
  allMyProjectsWrap: i('all-my-projects-wrap'),
};

const nameProject = 'PortfolioHub';


try {
  const json = await fetch(url.projects);
  const data = await json.json();
  
  
  data.forEach(e => {
    const section = document.createElement('section');
    section.classList.add('wrap-my-project');
    
    const {name, data} = e;
    
    const projects = data.map(e => {
      if (e.name == nameProject) {
        return;
      }
      
      const {
        name,
        status,
        type,
        urlProject,
        urlCode,
      } = e;
      
      
      return `
        <li>
          <h3>${name}</h3>
          <div class="labels-wrap">
            ${type ? `<span class="type">${type}</span>` : ''}
            ${status != 'release' ? `<span class="status ${status}">${status}</span>` : ''}
          </div>
          <a href="${urlProject}" target="_blank" rel="noopener noreferrer">Перейти на ${name}</a>
          <a href="${urlCode}" target="_blank" rel="noopener noreferrer">Глянути вихідний код</a>
        </li>
      `;
    }).join('');
    
    section.innerHTML = `
      <h2>${name}:</h2>
      <ol>${projects}</ol>
    `;
    
    html.allMyProjectsWrap.append(section);
  });
  
} catch (e) {
  console.error('Помилка в footer-copy.js', e);
}
