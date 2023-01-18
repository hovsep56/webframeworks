import React, { HtmlHTMLAttributes, useState } from 'react';
import logo from './logo.svg';
import { isReturnStatement } from 'typescript';
import { text } from 'stream/consumers';
import styles from'./App.module.css'

interface item{
  name:string,
  quantity:number
}

const ShoppingList=()=>{
  const [shoplist,setshoplist] = useState<item[]>([])
  const [names,setname]= useState<string>("")
  const [quantities,setquantity]= useState<number>(0)
  const [success,setsuccess]= useState("")
  const [error,seterror]= useState("")


  
// use success and error states as a boolean by changing it's message if the string is empty ("") it means it's false.
const additem=()=>{
  if (quantities<1) {
    
    seterror("quantity has to be higher than 0")
    setsuccess("")
  }
  else{
    setshoplist([...shoplist,{name:names,quantity:quantities}]);
    setsuccess("item has been added")
    seterror("")
  }
  
}

const removeitem=(i:number)=>{
  let items = shoplist.filter((obj,index)=>index!==i)
  setshoplist(items)
  setsuccess("item has been removed")
}

//DON'T FORGET!!! success&& and error&& means that its an if statement and it will show the div when it's on true or in that case has a string message.
  return(
    <div>

      {success&& <div className={styles.success}>{success}</div>}
      {error&& <div className={styles.error}>{error}</div>}


      <div className={styles.shoppinglist}>
        <label>Name:</label>
        <input type="text" placeholder='Name' value={names} onChange={(event)=>setname(event.target.value)}></input>
        <label>Quantity:</label>
        <input type="number" placeholder='Quantity' value={quantities} onChange={(event)=>setquantity(parseInt(event.target.value))}></input>
        </div>


      <button onClick={additem}>add</button>


      <table >
        <thead>
          <th>name</th>
          <th>quantity</th>
        <th></th>
        </thead>
        <tbody>
        {shoplist.map((obj,index)=><tr><td>{obj.name}</td> <td>{obj.quantity}</td> <td><button onClick={()=>removeitem(index)}>remove</button></td></tr>)}
        </tbody>
      </table>
    </div>

    
  )
}


function App() {
  return (
    <div style={{paddingLeft:10}}>
      <ShoppingList/>
    </div>
  );
}

export default App;
