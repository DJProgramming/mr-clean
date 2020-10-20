// import React, { setGlobal, useGlobal } from 'reactn';
import { setGlobal } from 'reactn';

export interface Global {
  theme: string;
}

setGlobal({ theme: 'alt' });

// export const Store: React.FC = () => {
//   return (
//     <span id="store"></span>
//   );
// }

// // function reducer(state: any, action: any) {
// //   switch (action.type) {
// //     case 'toggleTheme':
// //       return { theme: action.value };  
// //     default:
// //       break;
// //   }
// // }

// // function reducer(state, action) {
// //   switch (action.type) {
// //     case 'reset':
// //       return { count: 0 };
// //     case 'increment':
// //       return { count: state.count + 1 };
// //     case 'decrement':
// //       return { count: state.count - 1 };
// //   }
// // }

// // function Counter() {
// //   const [ state, dispatch ] = useGlobal(reducer);
// //   const reset = () => dispatch({ type: 'reset' });
// //   const increment = () => dispatch({ type: 'increment' });
// //   const decrement = () => dispatch({ type: 'decrement' });
// //   return (
// //     <>
// //       Count: {state.count}
// //       <button onClick={reset}>Reset</button>
// //       <button onClick={increment}>+</button>
// //       <button onClick={decrement}>-</button>
// //     </>
// //   );
// // }