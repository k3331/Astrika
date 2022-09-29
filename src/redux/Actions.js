 export const DELETE = (id) =>{
  return{
    type:'DELETE_POST',id:id
  }
 }

 export const ADD = (Data) =>{
   console.log('Add action is called',Data)
    return{type:'ADD',payload:Data}
    
 }


 