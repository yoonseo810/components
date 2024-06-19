import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
import { produce } from 'immer';

const types = {
  INCREMENT_COUNT: 'increment',
  DECREMENT_COUNT: 'decrement',
  SET_VALUE_TO_ADD: 'change-value-to-add',
  ADD_VALUE: 'add-value-to-count',
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case types.DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case types.SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case types.ADD_VALUE:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: types.INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: types.DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: types.SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: types.ADD_VALUE,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={state.valueToAdd || ''}
          onChange={handleChange}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
