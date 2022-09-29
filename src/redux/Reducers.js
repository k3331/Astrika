 const initState ={
  posts:[]

  
 }
 
 const Reducer =(state=initState,action) =>{
  if(action.type ==='DELETE_POST'){
     let newPost = state.posts.filter((pro) => {return pro.id !== action.id})
     return{
      ...state,
      posts:newPost
     }
  }
   if(action.type ==='ADD'){
    return{

      ...state,

      posts:[...action.payload.data]
    }
   }

  

  return state;
 }

 export default Reducer