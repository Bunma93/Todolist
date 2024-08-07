import styles from './TodoForm.module.scss'
import React, {useState} from 'react'

export function TodoForm() {
    //Logic secion
    const [task,SetTask] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit")
    }
    const handleClickCancle = (e) => {
        console.log("Cancle")
    }

    const handleChangeInput = (e) => {
        console.log(e.target.value);
        SetTask(e.target.value);
    }
    //UI section
    return (
    <form className={styles.todo_form_container} onSubmit={handleSubmit}>
        <input 
            className={styles.todo_form_input} 
            placeholder='Task Name' 
            value={task} 
            onChange={handleChangeInput}/>
        <div className={styles.todo_form_footer}>
            <p className={styles.todo_error}>Title is required</p>
            <div className={styles.todo_form_buttons}>
                <button type='button' onClick={handleClickCancle}>Cancle</button>
                <button type="submit">Add task</button>
            </div>
        </div>
    </form>
    )
}