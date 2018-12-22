import React, { Component }    from 'react';
// 個別のコンポーネントからStoreの情報にアクセス
import { connect }             from 'react-redux';
import { addToDo, removeToDo } from './actions';
import logo                    from './logo.svg';
import './App.css';

class App extends Component {
  // コンポーネント内でのみ使用するstate変数
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }
  render() {
    const input                       = this.state;
    const { onAddToDo, onRemoveToDo } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ul>
          { this.props.todos.map(todo => {
            return (
              <li key={ todo }>
                <span>{ todo }</span>
                <button onClick={ () => onRemoveToDo(todo) }>remove</button>
              </li>
            );
          }) }
        </ul>
        <input type="text" onChange={ e => this.setState({ input: e.target.value }) }/>
        <button onClick={ () => onAddToDo(input) }>Add</button>
      </div>
    );
  }
}

// store を props に反映
const mapStateToProps = state => {
  return {
    todos: state.todos.list
  };
};

// 1つのオブジェクトを返す関数。引数としてdispatchがあるから、actionをdispatchできる
const mapDispatchToProps = dispatch => {
  return {
    onAddToDo(todo) {
      dispatch(addToDo(todo));
    },
    onRemoveToDo(todo) {
      dispatch(removeToDo(todo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
