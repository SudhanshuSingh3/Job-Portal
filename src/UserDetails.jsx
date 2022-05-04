import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderView from "./header";
export default function UserDetails() {
  const [selectuser, setSelectUser] = useState({});
  const [rejectuser,setRejectuser]=useState({})

  const params = useParams();

  // console.log(userList[id].name)

  useEffect(() => {
    const id = Number(params.id);
    const userList = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < userList.length; i++) {
      if (id === userList[i].id) {
        setSelectUser(userList[i]);
      }
      
    }
    console.log(userList[id-1].id);
  }, []);
  function set() {
    const id = Number(params.id);
    const usersList = JSON.parse(localStorage.getItem("users"));
    let selectedList = JSON.parse(localStorage.getItem("selected"));
    // localStorage.setItem("selected",JSON.stringify([params]))
    console.log(selectedList);
    if (selectedList == null) {
      localStorage.setItem("selected", JSON.stringify([usersList[id-1]]));
    } else {
      
      selectedList.push([usersList[id-1]]);
      localStorage.setItem("selected", JSON.stringify(selectedList));
    }
  }

  function reject() {
    const id = Number(params.id);
    const usersList = JSON.parse(localStorage.getItem("users"));
    let rejectList = JSON.parse(localStorage.getItem("rejected"));
    // localStorage.setItem("selected",JSON.stringify([params]))
    console.log(rejectList);
    if (rejectList == null) {
      localStorage.setItem("rejected", JSON.stringify([usersList[id-1]]));
    } else {
      
      rejectList.push([usersList[id-1]]);
      localStorage.setItem("rejected", JSON.stringify(rejectList));
    }
  }
  // console.log("LN: 43",);
  return (
    <>
      <HeaderView />
      <p>{selectuser.name}</p>
      <p>{selectuser.username}</p>

      <p>{selectuser.email}</p>
      <button onClick={set}>Selected</button>
      <button onClick={reject}>
        Rejected
      </button>
      {/* <button onClick={(id)=>{setSelectUser(id)}}>Select</button> */}
    </>
  );
}
