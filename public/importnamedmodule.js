import {months,YEAR,User} from './exportnamedmodule.js';
import * as everything from './exportnamedmodule.js';
import {YEAR as yy} from './exportnamedmodule.js';
export function displayOnConsole(){

console.log(months);
console.log(YEAR);
console.log(new User("sabbir"));

console.log(everything.months);
console.log(everything.YEAR);
console.log(new everything.User("amit"));

console.log(yy);

}