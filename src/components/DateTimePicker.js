import React from 'react';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
// import './App.css';

const DateTimePicker = (props) => {
  return <>
    <KeyboardDatePicker
      disableToolbar variant="inline" format="yyyy/MM/DD" margin="normal"
      KeyboardButtonProps={{
          'aria-label': 'change date',
      }}
      style = {{width: '50%'}}  
      label={props.dateLabel}
      value={props.date}
      onChange={(value)=> props.changeDate(value)} 
    />
    <KeyboardTimePicker
      margin="normal"
      variant="inline"
      KeyboardButtonProps={{
          'aria-label': 'change time',
      }}
      style = {{width: '50%'}} 
      label={props.timeLabel}
      value={props.time}
      onChange={(value)=> props.changeTime(value)} 
    />
  </>
}

export default DateTimePicker;