import React from "react";
import {
  decrement,
  increment,
} from "../../Redux/Features/counterSlice/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center gap-4 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="text-xl font-bold">{count}</span>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <h1 className="text-2xl font-semibold"></h1>
    </div>
  );
}
