import HeaderView from './header'
export default function RejectedUsers(){
    var rejectedList=JSON.parse(localStorage.getItem("rejected"));
     var userList=JSON.parse(localStorage.getItem("users"));
     

    let id=rejectedList.id-1
    
    console.log(id)
     return <>
     <HeaderView/>
     
        {rejectedList.map((item)=> {
         return (<p >{item.name}</p>)
       })} 
      
       
     </>
}