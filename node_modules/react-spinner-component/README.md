<p align="center">
  <h1 align="center">React Spinner Component</h1>
</p>

A library for loading screen specifically for React js.

# react-spinner-component
A library of React components created using `npx create-react-app`.
## Installation
Run the following command:
`npm install react-spinner-component`
# Browser Support

![Chrome](http://icons.iconarchive.com/icons/google/chrome/48/Google-Chrome-icon.png) | ![Firefox](https://support.cdn.mozilla.net/static/sumo/img/favicon.ico) | ![IE](https://www.msccruises.co.uk/wcsstore/MSCB2CStoreFrontAssetStore//images/icon_ie.png) | ![Safari](https://aplweb.sercomtel.com.br/sistemas/areaCliente/img/logoSafari.png) | ![Opera](https://www.webcomponents.org/assets/opera.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 10+ ✔ | Latest ✔ | Latest ✔ |

## Installation

`react-spinner-component` is available via [npm](https://www.npmjs.com/package/react-spinner-component)

Using npm:
```bash
$ npm install react-spinner-component --save
                    Or
npm i react-spinner-component --save OR npm install react-spinner-component --save
```
## Usage

Import `react-spinner-component` in  in the root module(`App.js`):
```typescript
// Import library module
import {ReactLoadingView} from 'react-spinner-component';
```
Now use in your template
```html
<ReactLoadingView
          loading={true}
          bgColor='#f1f1f1'
          spinnerColor='#E88634'
          textColor='#676767'
          textStyle='100'
          logoSrc='https://cdn-images-1.medium.com/max/512/1*6kK9j74vyOmXYm1gN6ARhQ.png'
          LoaderView='line-scale'
          customheight='100%'
          text='Let Fire Up the React' 
          customClassAdd = 'class'
      >
 //Your Entire DOM
 // Code
</ReactLoadingView>
```
## React Spinner Component usage

- `loading`  Make ite True or False
- `bgColor`  Loading Screen Color 
- `spinnerColor`  Spinner Color
- `textColor`  Text Color
- `textStyle`  Text Style (In css we use font-weight same like that)
- `logoSrc`  Your Logo Path
- `LoaderView`  Loader View is the third party Dependence (React-Spinkit), you can pass the name of the Spinkit Spinners name. You can find in this URL: https://kyleamathews.github.io/react-spinkit/
- `customheight`  Set Custom Height for the entire view
- `text`  You can enter the custom text
- `customClassAdd`  Add Specfic Class name to the Spinner

## React Spinner Component

```html
<ReactLoadingView
          loading={true}
          bgColor='#f1f1f1'
          spinnerColor='#E88634'
          textColor='#676767'
          textStyle='100'
          logoSrc='https://cdn-images-1.medium.com/max/512/1*6kK9j74vyOmXYm1gN6ARhQ.png'
          LoaderView='line-scale'
          customheight='100%'
          text='Let Fire Up the React' 
          customClassAdd = 'class'
      >
 //Your Entire DOM
 // Code
</ReactLoadingView>
```
## Versioning

react-spinner-component will be maintained under the Semantic Versioning guidelines.
Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit http://semver.org.

## Creator

#### [Sukhjeet Singh](mailto:sukhjeetsingh81@gmail.com)
- [@GitHub](https://github.com/sukhjeet81)

## Future Plan

- Make more customize
- Try to remove React-Spinkit dependence
- And suggestion are welcome by mails.
- Git repository for the issues and suggestion.  

## Credits

 Inspired by [React-Spinkit](https://github.com/danielcardoso/load-awesome)
 Help by [Nikunj Jariwala, Yuvraj Chauhan]

 ## License

#### The MIT License (MIT)

