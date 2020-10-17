This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# SATO Challenge with Sato Component Library

## Node Version
10.22 is recommended. Newer versions might have problems with Gulp.

## In case of "Node Sass could not find a binding for your current environment: Windows 64-bit with Node.js 10.x"
`npm rebuild node-sass`

## To Start
`npm i`

`npm run token-build`

`npm run storybook`

`npm start`

### Design Tokens
The components use our desing tokens that reside in `./src/designTokens`. It's a good place to look for color codes etc ;)

### Fonts

The components use Telefon fonts. The following fonts should be included into an application: 

* Telefon Web Black
* Telefon Web Bold
* Telefon Web
* Lato-Regular

### Code

Add `MuiThemeProvider` into project root. `theme` from sato-components is an object containing four different color schemes, namely `morning`, `day`, `evening`, and `night`. 

Code Stub has already been provided for you in App.js

```jsx
import React from 'react';
import Button from './components/Button'
import './App.css';
import theme from './theme';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme.evening)}>
      <Button variant={'contained'} color={'primary'}>Click</Button>
    </MuiThemeProvider>
  );
}

export default App;
```

#### Icons

Icons are SVG components and can be used as any React component. They reside in icons -folder. 

```jsx
import React from 'react';
import PersonFilled from './icons/PersonFilled';
 

function App() {
 return (
   <PersonFilled />
 );
}

export default App;
```

## Challenge

Clone this repo and create the challenge in the clone. Then send it back to me either at ville.virta@sato.fi or just add raitzer1@hotmail.com as contributor in your github repo.

The challenge is to take the provided design (below) and replicate it. We don't want you to spend too much time on this, maybe an hour or two. So please stop at max two hours and return what you have created.

You can, and should, use the provided Components library, which you can easily check out using `npm start storybook` . This will help you out a lot since most of the components are already created

*note:* You don't need to add any google maps integration, just a placeholder image is fine!

*note:* Right now we're only looking to get the composition done, no need for special functionality, unless you really want to. We are not going to be using your code, these are purely for this challenge.

*note:* The card design at the bottom might be tricky. In the component library there is no full equivalent. You can either try to recreate it, or just do it as a normal Card with Media

*note:* You can use any images you want, no need to look exactly like the one below. We're not providing any images here.

*note:* You can use lorem ipsum as text, or generate your own text.

#Good Luck!

![Image of Yaktocat](./static/Find%20a%20home%20-%20Area%20-%201440.png)


