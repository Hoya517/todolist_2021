# React - TODO LIST

## Material-UI
https://material-ui.com/
- Installation
```javascript
$ npm install @material-ui/core
```
- Roboto font(default font)
```javascript
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

## Material-UI pickers
https://material-ui-pickers.dev/
- Peer Library
```javascript
npm i @date-io/moment@1.x moment
```
- App.js
```javascript
import "moment/locale/ko";  // change locale

...
<MuiPickersUtilsProvider utils={DateFnsUtils}>  // use date-picker
    <Root />
</MuiPickersUtilsProvider>
```
