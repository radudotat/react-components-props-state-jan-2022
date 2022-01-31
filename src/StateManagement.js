import { useMachine } from '@xstate/react';
import { useReducer, useState } from 'react';
import { createMachine } from 'xstate';

function StateManagementUseState() {
  const [lightbulb, setLightbulb] = useState({ id: 1, status: 'on' });

  return (
    <div>
      Lightbulb: {JSON.stringify(lightbulb)}
      <button
        onClick={() =>
          setLightbulb({
            ...lightbulb,
            status: 'on',
          })
        }
      >
        turn on
      </button>
      <button
        onClick={() =>
          setLightbulb({
            ...lightbulb,
            status: 'off',
          })
        }
      >
        turn off
      </button>
      <button
        onClick={() =>
          setLightbulb({
            ...lightbulb,
            status: 'broken',
          })
        }
      >
        break
      </button>
    </div>
  );
}

const initialLightbulbState = { id: 1, status: 'on' };

function lightbulbReducer(lightbulb, action) {
  switch (action.type) {
    case 'turnOn': {
      return {
        ...lightbulb,
        status: 'on',
      };
    }
    case 'turnOff': {
      return {
        ...lightbulb,
        status: 'off',
      };
    }
    case 'break': {
      return {
        ...lightbulb,
        status: 'broken',
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function StateManagementUseReducer() {
  const [lightbulb, dispatch] = useReducer(
    lightbulbReducer,
    initialLightbulbState,
  );

  return (
    <div>
      Lightbulb: {JSON.stringify(lightbulb)}
      <button onClick={() => dispatch({ type: 'turnOn' })}>turn on</button>
      <button onClick={() => dispatch({ type: 'turnOff' })}>turn off</button>
      <button onClick={() => dispatch({ type: 'break' })}>break</button>
    </div>
  );
}

const lightbulbMachine = createMachine({
  id: 'lightbulb',
  initial: 'lightbulbOn',
  states: {
    lightbulbOn: {
      on: {
        TURN_OFF: 'lightbulbOff',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbOff: {
      on: {
        TURN_ON: 'lightbulbOn',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbBroken: {
      // No transitions when it is broken
    },
  },
});

function StateManagementXState() {
  const [lightbulb, send] = useMachine(lightbulbMachine, initialLightbulbState);

  return (
    <div>
      Lightbulb: {JSON.stringify({ id: 1, status: lightbulb.value })}
      <button onClick={() => send('TURN_ON')}>turn on</button>
      <button onClick={() => send('TURN_OFF')}>turn off</button>
      <button onClick={() => send('BREAK')}>break</button>
    </div>
  );
}

export default function StateManagement() {
  return (
    <div>
      <h2>useState</h2>
      <StateManagementUseState />
      <h2>useReducer</h2>
      <StateManagementUseReducer />
      <h2>XState</h2>
      <StateManagementXState />
      {/* <h2>Immer / Valtio / etc</h2>
      <StateManagementImmer /> */}
    </div>
  );
}
