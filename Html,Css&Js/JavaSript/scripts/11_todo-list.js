const todolist=[];
rendertodolist();
function rendertodolist(){
      let todolistHTML= '';

      for(let i =0; i<todolist.length;i++){
        const todo =todolist[i];
        const html=`<p>${todo}</p>`;
        todolistHTML+= html;
      }

      document.querySelector('.js-todo-list').innerHTML=todolistHTML;

      };


function addTodo(){
  const inputElement=document.querySelector('.js_name_input');
  const name =inputElement.value;
  todolist.push(name);
  console.log(todolist);

  inputElement.value ='';//name add karne ke baad input box khali ho jayega
   rendertodolist();
}

//main idea of javascript

//save the data
//generate the html
// //make it interactive