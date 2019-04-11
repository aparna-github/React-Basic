import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Age:{this.props.age}</h1>
        <button onClick={this.props.onAgeUp}>Age-up</button>....
        <button onClick={this.props.onAgeDown}>Age-down</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    age:state.age
  }
};
const mapDispatchToProps = (dispatch) => {
  return{
  onAgeUp: () => dispatch({type:'AGE_UP'}),
  onAgeDown: () => dispatch({type:'AGE_DOWN'})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
