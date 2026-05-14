import {i, url} from '../../data/config.js';
import {liRender, liObjectsRender} from '../utils.js';


const html = {
  aboutMeWrap: i('about-me-wrap'),
};


try {
  const json = await fetch(url.aboutMe);
  const data = await json.json();
  
  
  data.forEach(e => {
    const {
      name,
      data,
    } = e;
    
    const section = document.createElement('section');
    section.className = 'about-me-wrap';
    
    section.innerHTML = `
      <h2>${name}</h2>
      <ol>${data[0].name ? liObjectsRender(data) : liRender(data)}</ol>
    `;
    
    html.aboutMeWrap.append(section);
  });
} catch (e) {
  console.error('Помилка в about-me.js', e);
}
