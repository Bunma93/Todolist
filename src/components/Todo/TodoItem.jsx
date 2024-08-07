import styles from "./TodoItem.module.scss"
import {useState} from "react"
import {HiCheck, HiPencil, HiTrash} from 'react-icons/hi'
import { TodoForm } from "./TodoForm"

export function TodoItem({el}) {
    //Logic
    const [isCheck, setIsCheck] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const handleToggleCheck = () => {   
        setIsCheck(!isCheck)
    }
    const handleopenEditMode = () => {
        setIsEdit(true)
    }
    const handleDeleteTodo = () => {
        console.log("delete");
    }
    let finalCheckboxStyle = isCheck ? styles.checkbox_icon_done: styles.checkbox_icon
    let taskStyle = isCheck ? styles.done : ""
    //Ui

    return (
        <>
            { !isEdit ?
            <li className={styles.todo_items_container}>
                <div className={styles.checkbox_container} onClick={handleToggleCheck}>
                    <HiCheck className={finalCheckboxStyle} />
                </div>
                <p className={taskStyle}>{`task`}</p>
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
            oldTask="old-task-name"
            />
            }
        </>
    )
}