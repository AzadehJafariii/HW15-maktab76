import { Component } from 'react';
import Information from './Countries';

class App extends Component {
  render() {
    return (
      <main>
        <section className="container">
          <div className="cardTitle">
            <h3 className="topTitle">Countries Information</h3>
            <div className="underline"></div>
          </div>
          <Information />
        </section>
      </main>
    );
  }
}

export default App;
