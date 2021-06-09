import React, {useState} from 'react';
import { TextField, Button, Dialog } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { Alert } from '@material-ui/lab';
import DateTimePicker from './DateTimePicker';
// import './App.css';

const InputArea = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isError, setIsError] = useState(false);
  const { todoList, setTodoList } = props;

  const checkValidate = () => {
    if(!title || !content || !startDate || !startTime || !endDate || !endTime){
      return false
    }
    return true
  }

  const checkValidateDate = () => {
    if((!startDate.isAfter(endDate))) {
      return false
    }
    return true
  }

  const checkValidateTime = () => {
    if(startDate.isSame(endDate)) {
      if(!startTime.isAfter(endTime)) {
          return false
      }
    }
    return true
  }

  const saveTodoList = () => {
    if(checkValidate()){
      if(checkValidateDate()) {
        alert("시작날짜를 종료날짜보다 빠르게 수정해 주세요.")
      } else if(checkValidateTime()) {
        alert("시작시간을 종료시간보다 빠르게 수정해 주세요.")
      } else {
        console.log(title);
        console.log(content);
        console.log(startDate);
        console.log(startTime);
        console.log(endDate);
        console.log(endTime);

        setTodoList([...todoList, {title: title.trim(), content: content.trim(), startDate, startTime, endDate, endTime}]);
      }
    } else {
      setIsError(true);
    }
  }

  return <div className="input_area">
    <TextField 
      label="제목" size="normal" margin="normal" fullWidth required 
      value={title}
      onChange={(e)=> setTitle(e.target.value)} />
    <TextField
      label="상세내용" size="normal" margin="normal" fullWidth multiline
      value={content}
      onChange={(e)=> setContent(e.target.value)} />
    <DateTimePicker 
      dateLabel="시작 예정일" 
      timeLabel="시작 시간" 
      date={startDate} 
      time={startTime} 
      changeDate={setStartDate} 
      changeTime={setStartTime} />
    <DateTimePicker 
      dateLabel="종료 예정일" 
      timeLabel="종료 시간" 
      date={endDate} 
      time={endTime} 
      changeDate={setEndDate} 
      changeTime={setEndTime} />
    <Button
      variant="outlined"
      startIcon={<SaveIcon />}
      style={{float:'right'}}
      onClick={()=>saveTodoList()}
    >
      Save
    </Button>
    <Dialog
      open={isError}
      onClose={() => setIsError(false)}
    >
      <Alert variant="outlined" severity="error">
          Validation Check Error 발생!
      </Alert>
    </Dialog>
  </div>
}

export default InputArea;