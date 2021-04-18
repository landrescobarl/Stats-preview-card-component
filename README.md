# Frontend Mentor - Stats preview card component solution

Esta es una solución al [Desafío del componente de tarjeta de vista previa de estadísticas en Frontend Mentor] (https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

  - Construir un componente de la tarjeta y hacer que se parezca lo más posible al diseño.

### The challenge

- Ver el diseño óptimo según el tamaño de la pantalla de su dispositivo

### Screenshot

![screenshot-projec](./screenshot.png)

### Links

- Solution URL:  [https://github.com/landrescobarl/frontendmentor_io]
- Live Site URL: [https://prevew-card-component.netlify.app/]

## My process

### Built with

- Figmma pre-diseño [ https://www.figma.com/file/MFripvWVsjmiqxi953po6f/Untitled?node-id=0%3A1 ]
- Marcado semántico HTML5
- Propiedades personalizadas de CSS
- Caja flexible
- Sass proprocesador de CSS
- Flujo de trabajo móvil primero
- [React] (https://reactjs.org/) - Biblioteca JS
- [Babel] - compilador de JavaScript


### What I learned

- Imprementar React a un sitio web y aplicar los conceptos basicos de este, entenidendo su siclo de renderizacion mediante el DOM HTML.
[https://es.reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project]


- Utilizar Babel como herramientas para convertir sintaxis JSX a código ECMAScript para ser interpretado por el navegador.
[https://es.reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project]

```
En la terminal, ve a la carpeta que contiene tu proyecto:

npm init -y (si falla, aquí está como arreglarlo)

npm install babel-cli@6 babel-preset-react-app@3

Ejecuta el preprocesador de JSX - Babel

npx babel --watch src --out-dir . --presets react-app/prod

```

- CSS: Mediante display Grid y una de su propiedades, centrar un objeto
- CSS: Crear una gradinte 

```
{
  display: grid;
  place-items: center;
}

{
   background-image: linear-gradient(var(--color), var(--color));
}

```

## Author

- Sitio web - [https://landrescobarl.github.io/] 
- Mentor de frontend - [@yourusername] (https://www.frontendmentor.io/profile/yourusername)
- Twitter - @IAndresEscobarI] 
