import React ,{useState,useEffect} from 'react'
import HeaderView from './header';
import { Link } from 'react-router-dom';

export default function Jobportal(){
    const [users,setUsers]=useState([])
    


   
                    
    useEffect(()=>{
         fetch("https://jsonplaceholder.typicode.com/users/")
         .then((response) => response.json())
         .then((data) => {
           localStorage.setItem("users", JSON.stringify(data));
           setUsers([...data]);
             console.log(users)
        });


        // fetch('https://jsonplaceholder.typicode.com/users')
        //             .then((response)=>response.json())
        //             .then((data)=>setUsers(data))
        // console.log(users)
        },[])
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response=>response.json())
    // .then(data=>console.log(data))
    
    return(
        <>
        <HeaderView/>
        <div>
            {users.map((item)=>
            <Link to={`details/${item.id}`} key={item.id}><p>{item.name} </p></Link>
            )}
            
           
        </div>
        </>
    )
}