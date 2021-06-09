import React, {useState} from 'react';
import { Typography } from '@material-ui/core';
import ListArea from './components/ListArea';
import InputArea from './components/InputArea';

import './App.css';

function NewApp(props) {
  const [todoList, setTodoList] = useState([]);
  return <div className="App">
    <div className="header">TODO LIST</div>
    <InputArea todoList={todoList} setTodoList={setTodoList} />
    <ListArea list={todoList} />
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © 김주호 '+new Date().getFullYear()+'.'}         
    </Typography>
  </div>
}

export default NewApp;