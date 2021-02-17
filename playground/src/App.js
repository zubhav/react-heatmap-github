import { Heatmap } from 'react-heatmap-github'
import { exampleData, allTypes, randomData } from './example-data'

function App() {
  return (
    <div className="App">
      <h2>Palette</h2>
      <Heatmap values={allTypes} />

      <br/>

      <h2>Example with just 0s and 1s</h2>
      <Heatmap values={exampleData} />

      <br/>
      
      <h2>Example with random values between 0-9</h2>
      <Heatmap values={randomData} />
    </div>
  );
}

export default App;
