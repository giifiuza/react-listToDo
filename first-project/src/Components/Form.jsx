import {React, useState} from 'react';


function Form({addTodo}) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!value || !category) return;
    addTodo(value, category)
    setCategory("")
    setValue("")
  }

  return (
    <div className='todo-form'>
      <h2>Create task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Input the task" 
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Choose an category</option>
          <option value="Trabalho">Work</option>
          <option value="Pessoal">Personal</option>
          <option value="Estudos">Studies</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default Form