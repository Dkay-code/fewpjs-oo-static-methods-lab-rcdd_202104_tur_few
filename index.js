class Formatter {
  static capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
 }

 static sanitize(string) {
   return string.replace(/[^A-Za-z0-9-']+/g, '');
 }

 static titleize(string){
   if string[0]{
     return string.charAt().toUpperCase();
   }
   else if (string === 'a' || string === 'an' || string === 'but' || string === 'of' || string === 'and' || string === 'for' || string === 'at' || string === 'by' || string === 'from)'){
     return string;
   } else {
     return string.charAt().toUpperCase();
   }
 }
}
