import './App.css';
import List from './components/List';

function App() {
  const tasks = ['Snorkelling','Caving','Trekking','Waterfall Rappelling','Skydiving','Scuba diving','Rafting','Hot Air Ballooning']
  return (
    <List tasks={tasks}/>
  );
}

export default App;
