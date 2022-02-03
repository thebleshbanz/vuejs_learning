import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
var list = {
  'Intro Vue' : 'intro.html',
  'Vue Instance' : 'vue_instance.html',
  'Vue Life cycle hook' : 'lifecycle_hooks.html',
}
var string  = '';

for (const property in list) {
  // console.log(`${property}: ${list[property]}`);
  string = string + `<li><a href="`+list[property]+`" target="_blank">`+property+`</a></li>\n`;
}
console.log(string);
document.querySelector('#list').innerHTML = `
  <ul>
    `+string+`
  </ul>
`