import { Heatmap } from 'react-heatmap-github'
import { exampleData } from './example-data'

function App() {
  return (
    <div className="App">
      <Heatmap values={exampleData} />
    </div>
  );
}

export default App;
