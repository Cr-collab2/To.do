import { useState } from "react"
import { Fragment } from "react/cjs/react.production.min"
import { BsBrightnessHigh } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

import { List } from "../List";

import { Container, Task } from "./style"
export function TaskList({darkMode, setDarkMode}){

    // Pega a tarefa no inpunt
    const [newTaskTitle, setNewTaskTitle] = useState('')


    // Array com todas as Tarefas em geral 
    const [task, setTask] = useState(()=>{
       
            const historySearch2 = localStorage.getItem('@List');
        
            if (historySearch2) {
              return JSON.parse(historySearch2);
            }
            return [];
         
      })
    

    const [id, setId] = useState(1)
    // Id que vai se gerado cada vez que criar uma nova tarefa 

    const [all , setAll] = useState(true);
    const [completed, setCompleted] = useState(false)
    const [active, setActive] = useState(false)

     console.log(task)

   //  Cria uma nova Tarefa 
    function handleCreateNewTask(){
        // cria um id novo para usuario 
        setId(Math.floor(Math.random()* 1000))

        //  verifica se o valor digitado pelo usuario é diferente de vazio
        if(newTaskTitle === undefined || newTaskTitle === null || newTaskTitle ===''){
            alert('Digite Sua Tarefa')
            return false
        }
        

        // Cria um objeto  com três valores o id  da tarefa o texto da tarefa e se ela ta completa 
        const itemLists = ()=>{
            return {
                id: id,
                title: newTaskTitle,
                isComplete: false
            }
        }


        //  crio uma variavel para colocar os valores existentes 
        var taskNew = [...task]
        
        // Adiciono um novo valor nessa variavel 
        taskNew.push(itemLists())

        // seto no local storage e no  array de lista um novo array comm valores antigos e os novos 
        localStorage.setItem('@List', JSON.stringify(taskNew))
        setTask(taskNew)

        // zero o inunt do usuario 
        setNewTaskTitle('')
    }

   //  Finaliza uma  Tarefa 
     function handleToggleTaskCompletion(id){
         
         let selectedTask = task.filter((tas)=>{
             return tas.id === id
         })

         if(selectedTask[0].isComplete === false){
             selectedTask[0].isComplete = true
         }else{
            selectedTask[0].isComplete = false
         }

         

         localStorage.setItem('@List', JSON.stringify([...task]))
         setTask([...task])
         console.log(task)
     }

   //  Cria uma nova Tarefa  Remove uma Tarefa
     function removeTask(id){
        task.filter((t,i) =>{ 
       
       
            if(t.id === id)   {
               task.splice(i, 1);
               localStorage.setItem('@List', JSON.stringify([...task]))
               setTask([...task])
            } 
    
        });
     }

    //  Remove todas as tasks comletas 
     function removeTaskComplete(){
      const task2 =  task.filter((t,i) =>{ 
     
          return t.isComplete === false    
  
      });
             localStorage.setItem('@List', JSON.stringify([...task2]))
             setTask([...task2])
     
   }


     
   return(
      <Fragment>
           <Container darkMode={darkMode}>
             <div>  <h1>TODO</h1>   <a className='close'  onClick={()=>{ setDarkMode(!darkMode) }}>{ darkMode === false ?  <BsBrightnessHigh size="30" color="#FFFF" /> : < BsMoon size="30" color="#FFFF" /> }</a> </div>

             <input type="text" value={newTaskTitle}  onChange={(event) => setNewTaskTitle(event.target.value)} 
             onKeyUp={(event) => {
                  if( event.key === "Enter" ){  
                    handleCreateNewTask()
                  } else{
                       return false
                  }    
                    
             }}  placeholder="Criar a sua nova tarefa"/>
       </Container>

       <Task>
           <ul>
             {
                 all === true ? 
                 < List task={task} handleToggleTaskCompletion={handleToggleTaskCompletion} removeTask={removeTask}/>
                 : completed === true ? 
                 <List task={task.filter((tarefa)=> { return  tarefa.isComplete === true; })} handleToggleTaskCompletion={handleToggleTaskCompletion} removeTask={removeTask}/>
                 : active === true ? 
                 <List task={task.filter((tarefa)=> { return tarefa.isComplete === false})} handleToggleTaskCompletion={handleToggleTaskCompletion} removeTask={removeTask}/>
                 :
                 <List task={task} handleToggleTaskCompletion={handleToggleTaskCompletion}  removeTask={removeTask}/>

             }

               <li className="funcionalidades"> 
                   <span> {task.length} itens </span>  
                    <a  onClick={()=>{ 
                        setAll(true)
                        setActive(false)
                        setCompleted(false)
                             
                     } }> Todos </a>

                    <a onClick={()=> {
                        setCompleted(false)
                        setAll(false)
                        setActive(true)     
                        } } > Ativos </a>

                    <a onClick={()=> {
                         setAll(false)
                         setActive(false)
                         setCompleted(true) 
                        
                    }}> Completos</a>   
                    <a 
                    onClick={()=>{
                      removeTaskComplete()
                    }}> Limpar Completos</a>   
                </li>
           </ul>
       </Task>
      </Fragment>
   )

}