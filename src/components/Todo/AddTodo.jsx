import styles from './AddTodo.module.scss'
import { useState } from "react"
import { TodoForm } from './TodoForm'

export function AddTodo() {
    //Logic
    const [isAddMode,setIsAddMode] = useState(false);

    const handleClickToAddTask = () => {
        // console.log("Open form")
        setIsAddMode(true)
    }
    //UI
    return (
        <>
            { !isAddMode ? <div className={styles.add_todo} onClick={handleClickToAddTask}>
                <span>+</span>
                <h3>Add task</h3>
            </div>
            : 
            <TodoForm submitText="Add Task" onSetIsShowForm={setIsAddMode}/>}
        </>
    )
}