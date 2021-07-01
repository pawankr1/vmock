import React, {useState,useEffect} from 'react';
import './App.css';

const Member=(props)=> {
  const [memberDetails,updateMemberDetails] = useState(props.memberDetails);
//   useEffect(()=>{
//     fetch(props.url)
//     .then(data=>data.json())
//     .then(res=>{
//         if(res.name){
//             updateMemberDetails(res)
//         }
//     })
//   },[])
  return (
    <div>
        <img src={memberDetails.avatar_url} />
        <div>
            <p>{memberDetails.name || memberDetails.login}</p>
            <p>{memberDetails.login}</p>
        </div>
    </div>
  );
}

export default Member;
