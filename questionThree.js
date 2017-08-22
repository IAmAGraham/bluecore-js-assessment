function awesomeTree(height){
  var top = "ø"
  var arr = [];
  for (i=1; i<=height; i++){
    var space = Array(height=i+1).join(' ');
    arr.push(space + Array(2*1).join('*') + space);
  }
  return arr.join('\n');
}



function awesomeTree(height){
  var top = "ø"
  var firstBranch = "*|*"
  if (height === 1){
    var smallTree =
  }
}
