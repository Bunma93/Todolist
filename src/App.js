import './App.scss';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className='container'>
        {/* Header */}
        <Header/>

        {/* Sidebar */}
        <Sidebar/>

        {/* Main */}
        <main className='content'>content</main>
    </div>
  );
}

export default App;
