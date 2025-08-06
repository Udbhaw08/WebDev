function customeRender(reactElement,container){

/*
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children

  domElement.setAttribute('href',reactElement.href)
  domElement.setAttribute('target',reactElement.target)
  
  container.appendChild(domElement)

*/
  const domElement=document.createElement(reactElement.type)

  domElement.innerHTML = reactElement.child
  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
     domElement.setAttribute(prop,reactElement.props[prop])
  }
  container.appendChild(domElement)
}


const reactElement= {
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank',
  },
  children:'click me to visit google'
}


const mainContainer= document.querySelector('#root')

customeRender(reactElement,mainContainer)