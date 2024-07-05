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
                <h1 className="h-75 mx-auto mt-5 title">To Do List!</h1>
            </div> 
            <div className="d-flex mx-auto">
                <input type="text" onChange={e => setInputValue(e.target.value)} 
                    onKeyDown={e => {if (e.key === "Enter")addToPendingTask();}} value={inputValue} className="mx-auto"/>
            </div> 
            <div className="mt-5">
                <div id="pendingList" className="d-flex mx-auto">
                    <div className="d-flex col-12">
                        <h1 className="mx-auto">Pending</h1>
                    </div>    
                </div>
                <div id="visualPendingTasks" className="mx-auto col-12">
                    {pendingTaskList.map((item, index) => (
                    <div className="d-flex justify-content-between taskContainer"  key={index}>
                        <h2>{item.label}</h2>
                        <div className="ms-auto">
                            <h1 className="closer" onClick={() => removeToDoItem(item.label)}>X</h1>
                        </div>
                    </div>
                    ))}
                </div>    
            </div>
        </div>
    );
};