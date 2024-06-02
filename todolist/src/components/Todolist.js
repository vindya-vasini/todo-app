import React,{useState} from 'react'
import  './styletodo.css'

export default function Todolist() {
  const [value,setvalue]=useState('')
  const [items,setItems]=useState([])

  const additems=(e)=>{
    e.preventDefault()
    if(value.trim() !== ' '){
      setItems([...items,value])
      setvalue('')
    }
  }
  const removeitem=(index)=>{
    const na=[...items]
    na.splice(index,1)
    setItems(na)
  }


  return (
    <div>
      <h1>TODOLIST</h1>
    <div className='box'>
      <h4>ADD YOUR TODO</h4>
        <input type="text" value={value} onChange={e=> setvalue(e.target.value)}></input>
        <button onClick={additems}>ADD</button>
        <ol>
          {items.map((item,index) =>(
            <li key={index}>{item}
            <button onClick={()=>removeitem(index)}>Del</button>
            </li>
          ))}
        </ol>
    </div>
    </div>
  )
}
