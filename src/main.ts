import './style.css';
const algo = 'hola';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>${algo}</h1>
`;
