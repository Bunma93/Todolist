import './App.scss';
import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TodoContent } from './components/Todo/TodoContent';
import mockData from './data/todos.json'

function App() {
  const [todos, setTodos] = useState(mockData);

  //Filter TOdo

  const handleFilterLists = (index) => {
    // idx == 0 : ALL
    // idx == 1 : Today
    // idx == 2 : Next 7 days

    console.log(`selected ${index}`)

    //Filter Logic : Schema for filter "2023-04-29" == YYYY-MM-DD
    if(index === 0) setTodos(mockData) // mockData === All todo
    else if (index === 1) {
      const nowObj = new Date();
      let nowStr = nowObj.toISOString().slice(0, 10);

      const filteredTodo = todos.filter(todoObj => todoObj.due_date === nowStr)
      setTodos(filteredTodo)
    } else if (index === 2) {
      const nowObj = new Date();
      let nowStr = nowObj.toISOString().slice(0, 10);

      const nextSevenDayObj = new Date(Date.now() + 7 * 24 * 60 *60 * 1000);
      let nextSevenDayStr = nextSevenDayObj.toISOString().slice(0, 10);

      const filteredTodo = mockData.filter(
        (todoObj) => todoObj.due_date >= nowStr && todoObj.due_date <= nextSevenDayStr
      );
      setTodos(filteredTodo);
    }
  } 
  return (
    <div className='container'>
        <Header/>
        <Sidebar onSelectedTab={handleFilterLists}/>
        <TodoContent todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
