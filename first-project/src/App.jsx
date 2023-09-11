import { useState } from 'react'
import './App.css';
import Container from './Components/Container';
import Form from './Components/Form';

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

  const addTodo = (text, category) => {
    const newTodo = [
      ...all ,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
    },
  ];

  setAll(newTodo);
};

  return (
    <div className='app'>
      <h1>To do list</h1>
      <div className='todo-list'>
        {all.map((all) => (
          <Container key={all.id} all= {all}/>
        ))}
      </div>
      <Form addTodo={addTodo}/>
    </div>
  )
}

export default App
