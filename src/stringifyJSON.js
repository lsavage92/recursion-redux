// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //primative handling number and boolean
  if(typeof obj === 'number' || typeof obj === 'boolean'){
    return '' + obj;
  }
  if(typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  if(Array.isArray(obj)) {
    var elements = [];
    for( var i = 0; i < obj.length; i++ ) {
      elements.push(stringifyJSON(obj[i]));
    }
    return '[' + elements.join(',') + ']';
  }
  
  if(typeof obj === 'object') {
    if(obj === null){
      return 'null';
    }
    var properties = [];
    for( var key in obj) {
      if(typeof obj[key] === 'function' || typeof obj[key] === 'undefined'){
        continue;
      }
      properties.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + properties.join(',') + '}';
  }


};
