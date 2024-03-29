import React from 'react'

const Filter = ({filter, setFilter}) => {
  return (
    <div className='filter'>
        <h2>Filtar</h2>
        <div className="filter-options">
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}> 
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Incomplete">Incomplete</option>
                </select>
            </div>
            <div className='butons'>
                <p>Ordem alfabética</p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter