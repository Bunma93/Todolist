import './App.scss';
import { useState } from 'react';
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar';
import { TodoContent } from '../components/Todo/TodoContent';
import allTodoMock from '../data/todos.json'
import { getSevenDayRange } from '../components/utils/DateUtils';

function App() {
  const [todos, setTodos] = useState(allTodoMock);
  const [filterList, setFilterList] = useState(allTodoMock)
  //Filter TOdo

  const handleFilterLists = (index) => {
    // idx == 0 : ALL
    // idx == 1 : Today
    // idx == 2 : Next 7 days
    const [nowStr, nextSevenStr] = getSevenDayRange(); //return เป็น array
    console.log(`selected ${index}`)

    let filteredTodo = [...allTodoMock]
    //Filter Logic : Schema for filter "2023-04-29" == YYYY-MM-DD
    if (index === 1) {
       filteredTodo = allTodoMock.filter((todoObj) => todoObj.due_date === nowStr);
    } else if (index === 2) {
       filteredTodo = allTodoMock.filter(
        (todoObj) => todoObj.due_date >= nowStr && todoObj.due_date <= nextSevenStr
      );
    }
    setTodos(filteredTodo);
    setFilterList(filteredTodo)
  };

  //Search Todo
  const handleSeacrh = (searchText) => {

    const newTodo = filterList.filter((todoObj) => todoObj.task.toLocaleLowerCase().includes(searchText.
    toLocaleLowerCase()))
    setTodos(newTodo)

  }
  return (
    <div className='container'>
        <Header onSearchText={handleSeacrh}/>
        <Sidebar onSelectedTab={handleFilterLists}/>
        <TodoContent todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
