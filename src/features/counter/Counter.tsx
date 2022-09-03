import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./couterSlice";

const Counter = () => {
  const count = useSelector(
    (state: { counter: { count: number } }) => state.counter.count
  );
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
       
        <div>
          <input
            type="text"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
          />
          <button onClick={() => dispatch(incrementByAmount(addValue))}>
            Increment by amount
          </button>
        </div>

        <div>
          <button onClick={resetAll}>RESET</button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
