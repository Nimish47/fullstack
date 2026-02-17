import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props); // 🔑 mandatory

    // 1️⃣ STATE
    this.state = {
      count: 0,
    };

    // 2️⃣ BINDING event handler
    this.increment = this.increment.bind(this);
  }

  // 3️⃣ NORMAL METHOD (needs bind)
  // passsed as callback =>  need to bind "this" 
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  // 4️⃣ ARROW METHOD (auto-binds this)
  // passsed as callback =>  "this" already binded at definition time
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  // 5️⃣ RENDER METHOD (required)
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
