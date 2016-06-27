import React from 'react';
import ReactDOM from 'react-dom';

import Node from '../src/module';

import ButtonList from './ButtonList';

const buttons = [
  { id: 1, title: 'foo' },
  { id: 2, title: 'bar' },
  { id: 3, title: 'title' },
  { id: 4, title: 'buzz' },
  { id: 5, title: 'pop' },
]

const rootEvent = new Node({ payload: { foo: 1 } });

class App extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      selectedButton: buttons[0]
    }

    rootEvent.handle = (data) => {
      console.log(data);
      this.setState({
        selectedButton: buttons.filter(b => b.id === data.event.payload.id)[0]
      })
    }
  }

  render() {
    return (
      <div>
        <ButtonList buttons={buttons} events={rootEvent} />
        <div>
          You clicked {this.state.selectedButton.title}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
