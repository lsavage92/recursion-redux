// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  var nodes = [];

  node = node || document.body;

  //if node.classname is the same as className
  if( node.classList.indexOf(className) >= 0 ){
    //push to nodes array
    nodes.push(node);
  }

  // iterate through children
  for( var i = 0; i < node.children.length; i++ ) {
    // call getElementsByClassName on children, concat those results to nodes
    nodes.concat(getElementsByClassName(className, node.children[i]));
  }
  
  return nodes;
};
