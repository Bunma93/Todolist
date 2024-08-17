import styles from "./TodoItem.module.scss"
import {useState} from "react"
import {HiCheck, HiPencil, HiTrash} from 'react-icons/hi'
import { TodoForm } from "./TodoForm"
import { getFormattedDate } from "../utils/DateUtils"

export function TodoItem({todo,onEditTodo,onDeleteTodo}) {
    //Logic
    //check === status Done
    const [isEdit, setIsEdit] = useState(false);

    const handleToggleCheck = () => {   
        onEditTodo(todo.id, {status:!todo.status}) //handleEditTOdo(todo.id,{status:!todo.status})
    }
    const handleopenEditMode = () => {
        setIsEdit(true);
    }
    const handleDeleteTodo = () => {
        onDeleteTodo(todo.id)
    }
    let finalCheckboxStyle = todo.status ? styles.checkbox_icon_done: styles.checkbox_icon
    let taskStyle = todo.status ? styles.done : ""
    //Ui

    return (
        <>
            { !isEdit ?
            <li className={styles.todo_items_container}>
                <div className={styles.checkbox_container} onClick={handleToggleCheck}>
                    <HiCheck className={finalCheckboxStyle} />
                </div>
                <p className={taskStyle}>{todo.task}</p>
                <span className={styles.date_text}>{getFormattedDate(todo.due_date)}</span>
                <div className={styles.edit_icon} onClick={handleopenEditMode}>
                    <HiPencil/>
                </div>

                <div className={styles.delete_icon} onClick={handleDeleteTodo}>
                    <HiTrash/>
                </div>
            </li>
            :<TodoForm 
            submitText='Edit Task' 
            onSetIsShowForm={setIsEdit}
            // oldTask={todo.task}
            onEditTodo={onEditTodo}
            todo={todo}
            />
            }
        </>
    )
}