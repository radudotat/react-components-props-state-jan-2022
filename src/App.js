import './App.css';
import PropsExample from './PropsExample';
import StateExampleCounter from './StateExampleCounter';
import StateExampleForm from './StateExampleForm';

function App() {
  return (
    <div className="App">
      <h1>Props Example</h1>
      <PropsExample />

      <h1>State Example (simple)</h1>
      <StateExampleCounter />

      <h1>State Example (more complex)</h1>
      <StateExampleForm />
    </div>
  );
}

export default App;
