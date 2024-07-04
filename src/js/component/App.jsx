import React, { useState } from "react";


export const App = () => {
    let pendingListArray = [];
    let completedListArray = [];
    const[inputValue, setInputValue] = useState('');
    const[pendingTaskList, setPendingTaskList] = useState(pendingListArray);
    const[completedTaskList, setCompletedTaskList] = useState(completedListArray);
    
    const addToPendingTask = () => {
        if (inputValue !== "") {
            setPendingTaskList((prevPendingTaskList) => [...prevPendingTaskList, inputValue]);
            setInputValue('');
        }
    };

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
                                <h3>{item}</h3>
                                <div className="me-1 ms-auto">
                                    <h1>X</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="completedList" className="col-6">
                    <div className="d-flex">
                        <h2 className="mx-auto">Completed</h2>
                    </div>
                    <div id="visualCompletedTasks">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};