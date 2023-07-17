import React, { useState } from 'react';

const TaskAdd = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    // handle adding a new task
    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            addTask(newTask);  
            setNewTask('');
        }
    };

    return (
        <div className='pa-y4'>
            <input
                type="text"
                placeholder='Enter Task Name'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default TaskAdd;
