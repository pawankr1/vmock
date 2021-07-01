import React, {useState,useEffect} from 'react';
import Member from './Member';
import './App.css';

function App() {
  const [listOfMember,updateListOfMember] = useState([]);
  const [searchValue,updateSearchValue] = useState([]);
  const [isOpenMemberdetails,updateOpenMemberdetails] = useState(false);
  const [openedMemberdetails,updateOpenedMemberdetails] = useState('');
  useEffect(()=>{
    fetch(`https://api.github.com/search/users?q=${searchValue || ''}`)
    .then(data=>data.json())
    .then(res=>{
      updateListOfMember(res.items)
    })
  },[searchValue]);
  const inputChangeHandler = (e)=>{
    updateSearchValue(e.target.value)
  }
  const handleOnClick = (html_url)=>{
    updateOpenMemberdetails(true);
    updateOpenedMemberdetails(html_url);
    fetch(html_url)
    .then(data=>data.json())
    .then(res=>{
      console.log(res);
    })
  }
  return (
    <div className="App">
      {
        isOpenMemberdetails?
        <iframe width="100%" height="500" src={openedMemberdetails}></iframe>:
        <div>
          <input placeholder='Find a member...' onChange={inputChangeHandler}/>
          {listOfMember && listOfMember.map((member,index)=>{
            return <div key ={index} onClick={()=>{handleOnClick(member.html_url)}}>
              <Member url = {member.url} memberDetails={member}/>
            </div>
          })}
        </div>
      }
    </div>
  );
}

export default App;
