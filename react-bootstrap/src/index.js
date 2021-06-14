/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Reacttable} from './table';
import FormSelect from './FormSelect';
import {systempriority, 
  systemtaskbuckets, 
  systemfrequency, 
  systemfinancecategory, 
  systeminputtaskfinancecategory, 
  systeminputtaskconfig, 
  systemtaskstatus, 
  inputtasks, 
  systemtaskhistory} from './datastore';
import {TaskGet} from './TasksAPI';
import Navigation from './Navigation';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordions from './Accordion';


//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
//ReactDOM.render(<Navigation id="11" />, document.getElementById("root"));
ReactDOM.render(<Accordions id="10" />, document.getElementById("accordion"));
//ReactDOM.render(<Reacttable id="1" data={systempriority} />, document.getElementById("systempriority"));
//ReactDOM.render(<Reacttable id="2" data={systemtaskbuckets} />, document.getElementById("systemtaskbuckets"));
//ReactDOM.render(<Reacttable id="3" data={systemfrequency} />, document.getElementById("systemfrequency"));
//ReactDOM.render(<Reacttable id="4" data={systemfinancecategory} />, document.getElementById("systemfinancecategory"));
//ReactDOM.render(<Reacttable id="5" data={systeminputtaskfinancecategory} formname="systeminputtaskfinancecategory"/>, document.getElementById("systeminputtaskfinancecategory"));
//ReactDOM.render(<Reacttable id="6" data={systeminputtaskconfig} formname="systeminputtaskconfig" />, document.getElementById("systeminputtaskconfig"));
//ReactDOM.render(<Reacttable id="7" data={systemtaskstatus} />, document.getElementById("systemtaskstatus"));
ReactDOM.render(<Reacttable id="8" data={inputtasks} formname="inputtasks"/>, document.getElementById("inputtasks"));
//ReactDOM.render(<Reacttable id="9" data={systemtaskhistory} />, document.getElementById("systemtaskhistory"));
ReactDOM.render(<FormSelect id="10" />, document.getElementById("dropdowns"));
ReactDOM.render(<TaskGet />, document.getElementById('inputtasks'));
*/

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
