 const initState ={
  posts:[]

  
 }
 
 const Reducer =(state=initState,action) =>{
  if(action.type ==='DELETE_POST'){
     let newProj = state.posts.filter((pro) => {return pro.id !== action.id})
     return{
      ...state,
      projects:newProj
     }
  }
   if(action.type ==='ADD'){
    console.log('reducer is called',action.payload)
    return{

      ...state,

      posts:[...action.payload.data]
    }
   }

  

  return state;
 }

 export default Reducer