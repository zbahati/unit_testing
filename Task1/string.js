function stringLength(string){
  if(string.length > 0 && string.length < 10 ){
     return true;
  }
  return false;
}

module.exports = stringLength;