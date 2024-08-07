import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { AddTodo } from './AddTodo'
import { TodoHeader } from './TodoHeader'
import { TodoList } from './TodoList';
import mockData from '../../data/todos.json';


export function TodoContent(){
    const [todos, setTodos] = useState(mockData);

    const handleAddTodo = () => {
        //มี new todo
        let newTodoObj = {id:uuidv4(), task:"DoHW" ,status: false, due_date: ""}

        //สร้าง state ใหม่ ต่อจากเดิม
        //ubdate  state by newState
        // const newTodos = [newTodoObj,...todos]
        // setTodos(newTodos);

        //อีกวิธีในการอัพเดท state Callback
        setTodos(currentState=> [newTodoObj,...currentState])
    }
    return (
    <main className='content'>
        <TodoHeader/>
        <AddTodo/>
        <button onClick={handleAddTodo}>testadd</button>
        <TodoList todos={todos}/>
    </main>
    );
}