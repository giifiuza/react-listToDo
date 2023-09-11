import { useState } from 'react'
import './App.css';
import Container from './Components/Container';
import Form from './Components/Form';
import Search from './Components/Search';
import Filter from './Components/Filter';

function App() {
  const [all, setAll] = useState([{
    id: 1,
    text: "Criar funcionalidade X no sistema",
    category: "Trabalho",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Ir para a academia",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Estudar React",
    category: "Estudos",
    isCompleted: false,
  },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");


  const addTodo = (text, category) => {
    const newTodo = [
      ...all,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setAll(newTodo);
  };

  const removeTodo = (id) => {
    const newTodos = [...all]
    const filteredTodos = newTodos.filter(all =>
      all.id !== id ? all : null
    );
    setAll(filteredTodos)
  };

  const completeTodo = (id) => {
    const newTodos = [...all];
    newTodos.map((all) => all.id === id ? (all.isCompleted = !all.isCompleted) : all);
    setAll(newTodos)
  };

  return (
    <div className='app'>
      <h1>To do list</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter 
      filter = {filter}
      setFilter = {setFilter}
      />
      <div className='todo-list'>
        {all
          .filter((all) => 
          filter ==="all" 
          ? true 
          : filter === "Completed" 
          ? all.isCompleted
          : !all.isCompleted
          )
          .filter((all) =>
            all.text.toLowerCase().includes(search.toLowerCase()))
          .map((all) => (
            <Container key={all.id}
              all={all}
              removeTodo={removeTodo}
              completeTodo={completeTodo} />
          ))}
      </div>
      <Form addTodo={addTodo} />
    </div>
  )
}

export default App
