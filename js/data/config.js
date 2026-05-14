export const i = (id) => document.getElementById(id);
export const c = (classis) => document.querySelectorAll(`.${classis}`);

export const html = {
  btn: c('btn'),
  pages: c('pages'),
  
  HTML: document.documentElement,
};

const baseUrl = 'https://my-projects-and-about-me-api.kvses0417.workers.dev/';
export const url = {
  projects: `${baseUrl}projects`,
  projectsDetails: `${baseUrl}projects-details`,
  aboutMe: `${baseUrl}about-me`,
};
