// export {greeting,hi,doubleNumber}
        // or

export let greeting = "welcome back";

export function hi(user){
   return ` ${greeting} ${user} in javascript Module`
   
    // return 'Hello'+user;
}
export default function doubleNumber(num){
    return num * 2 ;
}
export function makeElement(element,text,background){
    let el=document.createElement(element);
    el.append(text);
    el.style.background=background;
    document.body.append(el);
}
