import styles from './TodoForm.module.scss'
import React, {useState} from 'react'
import PropTypes from 'prop-types';

//เราจะส่งข้อมูลถูกต้องตามชนิด Debug Code ดีขึ้น
//ถ้ามี isRequired คือจำเป็นต้องส่ง
TodoForm.propTypes = {
    submitText : PropTypes.string.isRequired,
    onSetIsShowForm : PropTypes.func.isRequired,
    onAddToDo : PropTypes.func,
    onEditTodo : PropTypes.func,
    todo : PropTypes.oneOfType([PropTypes.object]) //undifined, {id : number | string, task : string , status : boolean, due_date : string}
}

//TodoForm => call in 2 Mode
//Mode-1 : Add
//Mode-2 : Edit
export function TodoForm({onSetIsShowForm, submitText, todo, onAddToDo, onEditTodo}) {
    //Logic secion
    const [task,SetTask] = useState(todo?.task || '');
    const [isError, setIsError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        //validate
        //case 1 : notvalid
        //case 2A : valid create
        //casr 2B : valid update
        if(task.trim() === '') {
            setIsError(true);
            return;
        } else {
            //Validate ผ่าน excecute
            // onAddToDo(task); //from <TodoContent/>
            if (todo) onEditTodo(todo.id, {task});
            else onAddToDo(task);
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