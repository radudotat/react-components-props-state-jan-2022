import './App.css';
import CheckBoxControlledComponentExample from './CheckBoxControlledComponentExample';
import ChildrenProp from './ChildrenProp';
import ClassComponentsIntoFunctionComponents from './ClassComponentsIntoFunctionComponents';
import ControlledComponentsAndForms from './ControlledComponentsAndForms';
import DerivingState from './DerivingState';
import HardCodedUserList from './HardCodedUserList';
import LiftingStateUpAndConditionalRendering from './LiftingStateUpAndConditionalRendering';
import MappingOverArrays from './MappingOverArrays';
import PropDrilling from './PropDriling';
import PropsDestructuring from './PropsDestructuring';
import PropsExample from './PropsExample';
import RandomUserList from './RandomUserList';
import ReactAntipatterns from './ReactAntipatterns';
import StateExampleCounter from './StateExampleCounter';
import StateExampleForm from './StateExampleForm';
import StateManagement from './StateManagement';
import StateNotSynchronous from './StateNotSynchronous';
import StylePropVsCSSmodulesFilesVsCSSinJS from './StylePropVsCSSmodulesFilesVsCSSinJS';

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

      <h1>Lifting state up and conditional rendering</h1>
      <LiftingStateUpAndConditionalRendering />

      <h1>Controlled Components and forms</h1>
      <ControlledComponentsAndForms />

      <h1>Class Components into Function Components</h1>
      <ClassComponentsIntoFunctionComponents user={undefined} />

      <h1>Style prop vs CSS modules files vs CSS-in-JS</h1>
      <StylePropVsCSSmodulesFilesVsCSSinJS />

      <h1>React Antipatterns</h1>
      <ReactAntipatterns />

      <h1>CheckBox Controlled Component Example</h1>
      <CheckBoxControlledComponentExample />

      <h1>Hardcoded User List</h1>
      <HardCodedUserList />

      <h1>Random User List</h1>
      <RandomUserList />

      <h1>Deriving State</h1>
      <DerivingState />

      <h1>Prop Drilling</h1>
      <PropDrilling />

      <h1>...vs. Children Prop</h1>
      <ChildrenProp />

      <h1>State Management</h1>
      <StateManagement />

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
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
