import React from 'react'
import { useState, useEffect } from 'react'
import '../assets/css/TodoList.css'

const TodoCard = () => {
    const [todo, setTodo] = useState('')
    const [list, setList] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) || []
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(list))
    }, [list])

    const addHandler = () => {
        if (todo.trim() === '') return

        const data = {
            id: todo.length + 1,
            desk: todo
        };

        setList([...list, data])
        setTodo('')
    }

    const deleteHandler = (id) => {
        const filtered = list.filter(item => item.id !== id)
        setList(filtered)
    }

    const isBtnDisabled = todo.trim().length === 0

    return (
        <div className="card todo-section">
            <h3>My Tasks</h3>

            <div className="input-group">
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    onKeyDown={(e) => e.key === 'enter' && addHandler()}
                    placeholder="Tulis tugas baru..."
                />
                <button className="btn btn-primary" onClick={addHandler} disabled={isBtnDisabled} >Add</button>
            </div>

            <ul id="todo-list" className="todo-list">
                {list.length === 0 ? (
                    <li>Tidak Ada</li>
                ) : (
                    list.map((e, index) => {
                        return (
                            <li key={index}>
                                <b>{index + 1}</b>
                                <span>{e.desk}</span>
                                <button
                                    className="btn btn-error"
                                    onClick={() => deleteHandler(e.id)}
                                >
                                    Delete
                                </button>
                            </li>
                        );
                    })

                )}


            </ul>
        </div>
    )
}

export default TodoCard