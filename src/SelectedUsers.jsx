 import HeaderView from './header'
 export default function SelectedUsers(){
     var selectList=JSON.parse(localStorage.getItem("selected"));
     var userList=JSON.parse(localStorage.getItem("users"));
    

    // let id=selectList.id-1
   
     return <>
     <HeaderView/>
      
       {selectList.id}
        {selectList.map((item)=> {
         return (<p >{item.name}</p>)
       })}



      {/* <p>{userList[id].name}</p> 
      <p>{userList[id].username}</p> 
      <p>{userList[id].email}</p>  */}
       
     </>
 }