function newTodo(){
  
    let name = document.getElementById('todo').value;
    let container = document.getElementById('todoContainer');



    let div = document.createElement('div');  
    let p = document.createElement('p'); 
    p.innerHTML = name;

    container.appendChild(div);  
    div.appendChild(p);   



}

