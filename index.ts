// Import stylesheets
import './style.scss';

const id = (ID: string) => document.getElementById(ID);

id('siQuieres').onmouseenter = ()=>{
  id('siQuieres').innerHTML = 'Si quiero!'
  id('acepto').innerHTML = 'No quiero'
}
id('acepto').onmouseenter = ()=>{
  id('siQuieres').innerHTML = 'No quiero'
  id('acepto').innerHTML = 'SI quiero!'

}
id('acepto').onclick = ()=> alert('Sabia que aceptarias <3 te amooo')
id('siQuieres').onclick = ()=> alert('Aunque lo pensastes sabia que aceptarias <3 te amooo')

// Write TypeScript code!
//const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;