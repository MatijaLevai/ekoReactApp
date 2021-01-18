import React,{useState, useEffect} from 'react';
import './App.css';
const url = "https://example.com"; // site that doesn’t send Access-Control-*

function Order() {
   
    useEffect(()=>{
fetchItems();
    },[])
    
    
    
    const [items,setItems]= useState([]);
    const fetchItems=async () => {
         const data = await
        fetch('https://192.168.43.185:45456/api/addresses')
.then(response => response.text())
.then(contents => console.log(contents)).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
        console.log(data);
       // setItems(data);
    };
  return (
      <ul>
   {
   items instanceof Array?items.map(item=>(
      <li>"redni broj : "+{item.broj}+" datum : "+{item.datum}+" kurir : "+{item.kurir}+" dispečer : "+{item.centrala}</li>
   )):<li>nema</li>};
   </ul>
  );
}

export default Order;
