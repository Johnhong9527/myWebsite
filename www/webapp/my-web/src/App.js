import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null
    }
  }

  componentDidMount() {
    const apiUrl = `http://localhost:3000/api`;
    fetch(apiUrl).then((resq) => {
      console.log(resq);
      if (resq.status !== 200) throw new Error('fail to get response with status:' + resq.status);
      resq.json().then((resqJson) => {
        console.log(resqJson);
        console.log(123)
        this.setState({
          info: resqJson
        });
      }).catch((err) => {
        this.setState({
          info: null
        });
      })
    }).catch((err) => {
      this.setState({
        info: null
      })
    })
  }

  render() {
    if (!this.state.info) return <div>暂无数据{this.state.info}</div>
    const {info} = this.state;
    return (
      <div>{info}</div>
    )
  }

  /*render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }*/
}

export default App;
