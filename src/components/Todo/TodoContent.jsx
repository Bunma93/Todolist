import { useState } from 'react';
import { AddTodo } from './AddTodo'
import { TodoHeader } from './TodoHeader'
import { TodoList } from './TodoList';
import mockData from '../../data/todos.json';


export function TodoContent(){
    const [todos, setTodos] = useState(mockData);
    console.log(todos);
    return (
    <main className='content'>
        <TodoHeader/>
        <AddTodo/>
        <TodoList todos={todos}/>
    </main>
    );
}