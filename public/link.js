export default function link({key, name}) {
  return `<li>
    ${key}
    ${name}
    <button 
      data-action=destroy 
      data-key=${key}>destroy</button>
  </li>`
}
