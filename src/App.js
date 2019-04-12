import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <h1 className="classes.title">Age: {this.props.age}</h1>
        <Button variant="outlined" onClick={this.props.onAgeUp} color="secondary" className={classes.button}>Age-up</Button>
        &nbsp;
        <Button variant="outlined" onClick={this.props.onAgeDown} color="secondary" className={classes.button}>Age-down</Button>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP' }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN' })
  }
};
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App));
