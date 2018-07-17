import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import DBTools from './DBTools/DBTools';

const a = new DBTools().getUserByID();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
