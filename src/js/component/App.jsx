import React, { useState } from "react";



export const App = () => {
    const[inputValue, setInputValue] = useState('');
    const[pendingTaskList, setPendingTaskList] = useState([]);
    
    async function fetchTodos() {
        const response = await fetch(
            'https://playground.4geeks.com/todo/users/zioraan', {
            method: "GET",
            
            }
        )
        const user = await response.json();
        setPendingTaskList(user.todos)
    }
    
    async function addToDos(AddedToDo) {
        const response = await fetch(
            'https://playground.4geeks.com/todo/todos/zioraan', {
                method: "POST",
                body: JSON.stringify(AddedToDo),
                headers: {
                "Content-Type": "application/json"
                }
    })}

    async function removeToDos(removedToDo) {
        const response = await fetch(
            `https://playground.4geeks.com/todo/todos/${removedToDo}`, {
                method: "DELETE",
                
            }
        )
        fetchTodos();
    }
    
    const addToPendingTask = (e) => {
        if (inputValue !== "") {
            e.preventDefault();
            let taskObject = {label: inputValue, is_done: false}
            addToDos(taskObject)
            setInputValue('');
            fetchTodos();
        }
    };

    return (
        <div className="container justify-content-center">   
            <button onClick={fetchTodos}>Press To Begin</button>
            <div className="d-flex">   
                <p className="h-75 mx-auto mt-5 title">Todos</p>    
            </div> 
            <div className="bg-white">
                <div className="d-flex mx-auto inputDiv">
                    <form onSubmit={addToPendingTask}>
                        <input type="text" onChange={e => setInputValue(e.target.value)} 
                            value={inputValue} className="ms-5 mt-5 mb-3" placeholder="What needs to be done?"/>
                    </form>    
                </div> 
                <div className="mt-5 listHolder">
                    <div id="visualPendingTasks" className="col-12">
                        {pendingTaskList.map((item, index) => (
                        <div className="d-flex justify-content-between taskContainer"  key={index}>
                            <h2 className="ms-5 mt-2" >{item.label}</h2>
                            <div className="ms-auto">
                                <h1 className="closer me-3" onClick={() => removeToDos(item.id)}>X</h1>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div>
                        <p className="numberLeft">{pendingTaskList.length} item left</p>
                    </div>        
                </div>    
            </div>
            <div className="firstEdge bg-white mx-auto"></div>
            <div className="secondEdge bg-white mx-auto"></div>
        </div>
    );
};