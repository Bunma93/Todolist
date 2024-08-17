import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { AddTodo } from './AddTodo'
import { TodoHeader } from './TodoHeader'
import { TodoList } from './TodoList';
import mockData from '../../data/todos.json';


export function TodoContent({todos, setTodos}){
    // const [todos, setTodos] = useState(mockData);
    
    //ADD-TODO
    const handleAddTodo = (newTask) => {
        //มี new todo
        let newTodoObj = {id:uuidv4(), task:newTask ,status: false, due_date: ""}

        //สร้าง state ใหม่ ต่อจากเดิม
        //ubdate  state by newState
        // const newTodos = [newTodoObj,...todos]
        // setTodos(newTodos);

        //อีกวิธีในการอัพเดท state Callback
        setTodos(currentState=> [newTodoObj,...currentState])
    }
    //UPDATE-TODO
    // UbdateValue ={task: "Newtask", status: false}
    const handleEditTodo = (todoId, updateObj) => {
        //Modify Array
        // #1 Add value
        const foundedIndex = todos.findIndex(todoObj=> todoObj.id === todoId);
        
        //Not found
        if(foundedIndex == -1) return;

        //Founded clone state เนื่องจากมันแก้ไขไม่ได้
        const newTodos = [...todos];
        // let oldTodoObj = newTodos[foundedIndex]
        // oldTodoObj.task = newTask
        newTodos[foundedIndex] = { ...newTodos[foundedIndex], ...updateObj}
        setTodos(newTodos);
    }

    const handleDelete = (todoId) => {
        // Logic : Manipulate Array
        // #1
        // const foundedIndex = todos.findIndex(todoObj => todoObj.id === todoId)
        // if(foundedIndex == -1) return;

        // const newTodos = [...todos]
        // newTodos.splice(foundedIndex,1)

        // setTodos(newTodos)

        // #2
        setTodos(curr=> curr.filter((todoObj)=> todoObj.id !== todoId))
    }

    //UI
    return (
    <main className='content'>
        <TodoHeader/>
        <AddTodo onAddToDo={handleAddTodo}/>
        <TodoList todos={todos} onEditTodo={handleEditTodo} onDeleteTodo={handleDelete}/>
    </main>
    );
}