import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [todo,setTodo]=useState('')
  const [todoList,setTodoList]=useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // todoList.push(todo)

    if (todo===0){
      return;
    }

    const todoItem={
      text:todo,
      complete:false
    };

    setTodoList([...todoList,todoItem])
    setTodo("")
  }

  // DELETE
  const handleDelete = (todoId) =>{
    const filteredTodoList = todoList.filter((todo,i) => {
      return i!==todoId;
    });
    setTodoList(filteredTodoList)
  }

  // CHECKED
  const handleChecked =(index)=>{
    const editTodoList = todoList.map((todo,i)=>{
      if(index===i){
        todo.complete =!todo.complete;
      }
      return todo;
    })
    setTodoList(editTodoList)
  }

  return (
    <div className="App">
      <div className="box">
      <form className="form" onSubmit={handelSubmit}>

        <input type="text" onChange={ (e) => setTodo(e.target.value)} value={todo} />
        <div> <button type="submit" className="btn btn-primary mt-2">ADD</button>  </div>

      </form>
        <hr/>
        <h3>TO DO List :</h3>
        {

          todoList.map((toDo,i) =>{
            const classTodo = [];
            if(toDo.complete){
              classTodo.push("line")
            }

            return (
              <table class="table table-condensed table-hover">
                <tbody>
                  <tr>
                    <th>
                      <input onChange={(e) =>{handleChecked(i)}} checked= {toDo.complete} type="checkbox" />

                    </th>
                    <th className= {classTodo.join(" ")}>
                      {toDo.text}
                    </th>
                    <td><a type="submit" onClick={(e)=> handleDelete(i)} class="badge bg-danger text-wrap mt-2">Delete </a></td>
                  </tr>
                </tbody>
              </table>
            )
          }
          )
        }
      </div>
    </div>
  ); 
}

export default App;
