import React, { useState } from "react";


export const App = () => {
    let pendingListArray = [];
    const[inputValue, setInputValue] = useState('');
    const[pendingTaskList, setPendingTaskList] = useState(pendingListArray);
    
    const addToPendingTask = () => {
        if (inputValue !== "") {
            let taskObject = {label: inputValue, done: false}
            setPendingTaskList((prevPendingTaskList) => [...prevPendingTaskList, taskObject]);
            setInputValue('');
        }
    };

    const removeToDoItem = (task) => {
        setPendingTaskList((pendingTaskList) => {
            return pendingTaskList.filter((toDo) => toDo.label !== task)
        })
    }

    return (
        <div className="container justify-content-center">   
            <div className="d-flex">   
                <h1 className="h-75 mx-auto mt-5">To Do List!</h1>
            </div> 
            <div className="d-flex">
                <input type="text" onChange={e => setInputValue(e.target.value)} 
                    onKeyDown={e => {if (e.key === "Enter")addToPendingTask();}} value={inputValue} />
                <button onClick={addToPendingTask}>Add To List</button>
            </div> 
            <div className="d-flex justify-content-between mt-5">
                <div id="pendingList" className="col-6">
                    <div className="d-flex">
                        <h2 className="mx-auto">Pending</h2>
                    </div>    
                    <div id="visualPendingTasks">
                        {pendingTaskList.map((item, index) => (
                            <div className="d-flex"  key={index}>
                                <h3>{item.label}</h3>
                                <div className="me-1 ms-auto">
                                    <h1 onClick={() => removeToDoItem(item.label)}>X</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};