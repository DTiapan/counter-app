import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    //console.log(" passed counter is ", counter);

    // console.log(" handle increment event raised");
    const counters = [...this.state.counters];
    // console.log(" Counters are, ", counters);

    const index = counters.indexOf(counter);
    // console.log(" index of passed counter is ", index);

    counters[index] = { ...counter };
    //console.log(" value of counters[index] is ", ...counter);

    counters[index].value++;
    /* console.log(
      " after increment value of counters[index] is ",
      counters[index].value++
    );
*/
    this.setState({ counters });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    // console.log("Event raised", counters);
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
