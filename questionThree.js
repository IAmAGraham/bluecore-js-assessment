function awesomeTree(height){
  var arr = [];
  if (arr === 0){
    return null
  } else if (arr === 1) {
      return "*|*"
  } else {
      for (i=1; i<=height; i++){
        var space = Array(height=i+1).join(' ');
        arr.push(space + "*|" + Array(2*1).join('*') + "|*" + space);
      }
      return tree = "ø" + arr.join('\n');
    }
}


// Write a function, awesomeTree(height) that logs a tree of the correct height to the console.
// For example, awesomeTree(5) should console.log() the following, as a single string:
// Pad the output with spaces so each line is the same length, with the last line having no spaces.
