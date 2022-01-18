import './App.css';
import MappingOverArrays from './MappingOverArrays';
import PropsDestructuring from './PropsDestructuring';
import PropsExample from './PropsExample';
import StateExampleCounter from './StateExampleCounter';
import StateExampleForm from './StateExampleForm';
import StateNotSynchronous from './StateNotSynchronous';

function App() {
  const phone = 1231232;
  return (
    <div className="App">
      <h1>Props Example</h1>
      <PropsExample />

      <h1>State Example (simple)</h1>
      <StateExampleCounter />

      <h1>State Example (more complex)</h1>
      <StateExampleForm />
      <h1>State Not Synchronous</h1>
      <StateNotSynchronous />
      <h1>Props destructuring</h1>
      <PropsDestructuring
        name="Ana Sofia"
        color="purple"
        number={phone}
        object={{ toy: 'car', game: 'domino' }}
      />
      <h1>Mapping over arrays</h1>
      <MappingOverArrays />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
