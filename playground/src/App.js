import { Heatmap } from 'react-heatmap-github'

function App() {
  const exampleData = [1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1]
  
  return (
    <div className="App">
      <Heatmap values={exampleData} />
    </div>
  );
}

export default App;
