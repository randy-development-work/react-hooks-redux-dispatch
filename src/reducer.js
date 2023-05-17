function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

let state = { count: 0 };
let action = { type: "counter/increment" };

function render() {
  document.body.textContent = state.count;
}
function dispatch(action) {
  state = changeState(state, action);
  render();
}

render();
// dispatch({ type: "counter/increment" });
// dispatch({type: "counter/increment"});

