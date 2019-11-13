export const loadState = () => {
    const data = localStorage.getItem('state');
    try{
 if (data ===null ) {
        return null
    }
    else {
        return (JSON.parse(data))
    }
 }
    
    catch(error){
        alert(error);
        return null
    }
   }
 export const saveState = (state) => {
     try{
    let data = JSON.stringify(state);
    localStorage.setItem('state',data)
    console.log('saved successfuly')
 }
     catch(error){
         alert(error);

     }
}