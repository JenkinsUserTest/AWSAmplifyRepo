import User from './defaultexportmodule.js';
function displayOnConsole(){
var user=new User("pavan");
console.log(user);
}
//export default displayOnConsole;
export {displayOnConsole as dc};