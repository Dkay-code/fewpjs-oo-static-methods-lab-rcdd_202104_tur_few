class Formatter {
  static capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
 }

 static sanitize(string) {
   return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
 }

 static titleize(string){
   let stringArr = string.split(' ');

      for(let i = 0; i < stringArr.length; i++){
        let exceptionRegex = /^.*\b(the|a|an|but|of|and|for|at|by|from)\b.*$/gm;

        if (i === 0) {
          stringArr[i] = this.capitalize(stringArr[i]);
        }
        if (exceptionRegex.test(stringArr[i])){
          stringArr[i] = stringArr[i].toLowerCase();
        }
        else {
          stringArr[i] = this.capitalize(stringArr[i]);
        }
      }
      return stringArr.join(' ');
 }
}
