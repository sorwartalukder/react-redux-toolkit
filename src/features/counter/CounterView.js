import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

function CounterView() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter App</h1>
            <h3>Counte: {count}</h3>
            <div className="btn">
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>IncreseBy5</button>
            </div>
        </div>
    );
}

export default CounterView;
