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
            setItemsLeft(pendingTaskList.length + 1);
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
                <p className="h-75 mx-auto mt-5 title">Todos</p>
            </div> 
            <div className="bg-white">
                <div className="d-flex mx-auto inputDiv">
                    <input type="text" onChange={e => setInputValue(e.target.value)} 
                        onKeyDown={e => {if (e.key === "Enter")addToPendingTask();}} value={inputValue} className="ms-5 mt-5 mb-3"
                        placeholder="What needs to be done?"/>
                </div> 
                <div className="mt-5 listHolder">
                    <div id="visualPendingTasks" className="col-12">
                        {pendingTaskList.map((item, index) => (
                        <div className="d-flex justify-content-between taskContainer"  key={index}>
                            <h2 className="ms-5 mt-2" >{item.label}</h2>
                            <div className="ms-auto">
                                <h1 className="closer me-3" onClick={() => removeToDoItem(item.label)}>X</h1>
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