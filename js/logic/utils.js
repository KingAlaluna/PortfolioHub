export function liRender(data) {
  return data.map(e => {
    return `<li>${e}</li>`;
  }).join('');
}


export function liObjectsRender(data) {
  return data.map(e => {
    const {
      name,
      data,
    } = e;
    
    if (data.length == 0) {
      return;
    }
    
    return `
      <li>
        <h3>${name}:</h3>
        <ol>${
          data.map(e => {
            return `<li>${e}</li>`;
          }).join('')
        }</ol>
      </li>
    `;
  }).join('');
}
