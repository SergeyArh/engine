import './App.css';
import { useSelector } from 'react-redux';
import { Table } from './Table';
import { Char } from './Char';

interface RootState {
  status: 'idle' | 'pending'
}

const selectStatus = (state: RootState) => state.status;

function App() {

  const status = useSelector(selectStatus);

  if (status === 'idle') {
    return (
      <h3>Data is loading...</h3>
    )
  }

  return (
    <div className="App">
      <Table/>
      <Char/>
    </div>
  );
}

export default App;
