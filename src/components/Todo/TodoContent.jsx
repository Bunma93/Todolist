import styles from './Todocontent.module.scss'
import {HiCheck, HiPencil, HiTrash} from 'react-icons/hi'

export function TodoContent(){
    const mockTodo = Array.from({length:100},(el,idx) => idx+1);

    const now = new Date();
    const options = {
        weekday: 'short',
        // year: 'numeric',
        month: 'short',
        day: 'numeric',
      };
    console.log(now.toLocaleDateString('en-US',options))

    return (
    <main className='content'>

    {/* Todoheader */}
    <div className={styles.header}>
        <h1>Inbox</h1>
        <p>{now.toLocaleDateString('en-US',options)}</p>
    </div>

    {/* Addtodo */}
    <div className={styles.add_todo}>
        <span>+</span>
        <h3>Add task</h3>
    </div>
    {/* To do form */}
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

    <ul>
      {mockTodo.map((el)=>(
        <li className={styles.todo_items_container} key={el}>
            <div className={styles.checkbox_container}>
                <HiCheck className={styles.checkbox_icon} />
            </div>
            <p className={styles.done}>{`item-${el}`}</p>
            <div className={styles.edit_icon}>
                <HiPencil/>
            </div>

            <div className={styles.delete_icon}>
                <HiTrash/>
            </div>
        </li>
      ))}
    </ul>
  </main>
    );
}