import styles from './TodoForm.module.scss'
import React, {useState} from 'react'

//TodoForm => call in 2 Mode
//Mode-1 : Add
//Mode-2 : Edit
export function TodoForm({onSetIsShowForm, submitText, oldTask}) {
    //Logic secion
    const [task,SetTask] = useState(oldTask || '');
    const [isError, setIsError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        //validate
        if(task.trim() === '') {
            setIsError(true);
            return;
        }
        //จบ Add-mode
        onSetIsShowForm(false);
    }
    const handleClickCancle = (e) => {
        console.log("Cancle")
        // onSetIsAddMode?.(false);
        // onSetIsEditMode?.(false);

        onSetIsShowForm(false);
    }

    const handleChangeInput = (e) => {
        console.log(e.target.value);
        SetTask(e.target.value);
        setIsError(false);
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
            {isError &&<p className={styles.todo_error}>Task name is required</p>}
            <div className={styles.todo_form_buttons}>
                <button type='button' onClick={handleClickCancle}>Cancle</button>
                <button type="submit">{submitText}</button>
            </div>
        </div>
    </form>
    )
}