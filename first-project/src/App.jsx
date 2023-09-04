import { useState } from 'react'
import './App.css';

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


  return (
    <div className='app'>
      <h1>To do list</h1>
      <div className='todo-list'>
        {all.map((all) => (
          <div className='todo'>
            <div className="content">
              <p>{all.text}</p>
              <p className="category">({all.category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>x</button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App
