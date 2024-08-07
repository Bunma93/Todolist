import styles from './TodoForm.module.scss'

export function TodoForm() {
    return (
    <form className={styles.todo_form_container}>
        <input className={styles.todo_form_input} placeholder='Task Name' />
        <div className={styles.todo_form_footer}>
            <p className={styles.todo_error}>Title is required</p>
            <div className={styles.todo_form_buttons}>
                <button>Cancle</button>
                <button>Add task</button>
            </div>
        </div>
    </form>
    )
}