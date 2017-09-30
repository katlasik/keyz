Keyz is very simple library for use in the JS enviroment. 

It exposes single immutable object containing constants 

Keyz is available as a NPM module.
You can import it as UMD module or include it from the dist folder.

You can install it from npm:

``npm install keyz --save``

Then in your code instead of hardcoding key codes like this:

```javascript
$('.input').keypress(function (e) {
  if (e.which == 13) {
     //do something
  }
});
```

You will be able to use predefined contants like `ENTER`: 

```javascript
import Keys from 'keyz'

$('.input').keypress(function (e) {
  if (e.which == Keys.ENTER) {
     //do something
  }
})
```

You can also import separate keys:

```javascript
import { PAGE_UP } from 'keyz'

$('.input').keypress(function (e) {
  if (e.which == PAGE_UP) {
     //do something
  }
})
```

