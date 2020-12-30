import React from 'react';
import './App.css';
import Preview  from './containers/Preview/Preview';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Preview />
      </header>
    </div>
  );
}

export default App;
