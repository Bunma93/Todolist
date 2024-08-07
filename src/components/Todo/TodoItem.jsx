import styles from "./TodoItem.module.scss"
import {HiCheck, HiPencil, HiTrash} from 'react-icons/hi'

export function TodoItem({el}) {

    return (
        <li className={styles.todo_items_container}>
            <div className={styles.checkbox_container}>
                <HiCheck className={styles.checkbox_icon} />
            </div>
            <p className={styles.done}>{`task`}</p>
            <div className={styles.edit_icon}>
                <HiPencil/>
            </div>

            <div className={styles.delete_icon}>
                <HiTrash/>
            </div>
        </li>
    )
}