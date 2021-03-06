import React from 'react';
import { ListItemText, List, ListItem } from '@material-ui/core';
// import './App.css';

function ListArea(props) {
  return <div className="list_area">
    <List>
      {props.list.map((todoItem, idx) => {
        const {
          title, startDate, startTime, endDate, endTime
        } = todoItem;
        return (
          <ListItem key={idx} role={undefined} dense button>
            <ListItemText
              primary={title}
              secondary={startDate?.format('yyyy-MM-DD')+' '+startTime?.format('HH:MM')+' ~ '+endDate?.format('yyyy-MM-DD')+' '+endTime?.format('HH:MM')}
            />
          </ListItem>
        )
      })}
    </List>
  </div>
}

export default ListArea;