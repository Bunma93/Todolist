import { TodoItem } from './TodoItem';

export function TodoList() {
    const mockTodo = Array.from({length:100},(el,idx) => idx+1);
    return (
    <ul>
      {mockTodo.map((el)=>(
        <TodoItem key={el}/>
      ))}
    </ul>
    )
}