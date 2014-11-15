# mp3-length

> Calculate length of a mp3

Provides an api to calculate length of mp3 files

## Requirements

- mp3info - Use `apt-get install mp3info` to get

## Install

```
$ npm install --save mp3-length
```

## Usage

```javascript
var mp3Length = require('mp3-length');

mp3Length('file.mp3', function (err, length) {
	if (err == null) {
		console.log(length);
	}
});

```

## API

## mp3Length(filepath, callback) 

### filepath

Type: `string`

Path to the file

### callback(error, length)

Type: 'function'

Callback to be called once length is calculated

## License

MIT © [Amanpreet Singh](http://apsdehal.in)