const list = document.querySelector('#list');
const inp = document.querySelector('#inp');
const f = document.querySelector('#new-task');



f.addEventListener('submit',function(e){
    
  e.preventDefault();

  if(inp.value != ''){
    
    let rmvBtn = document.createElement('button');
    rmvBtn.innerText = 'X'; 

    let newLi = document.createElement('li');
    newLi.innerText = inp.value;

    newLi.appendChild(rmvBtn);
    list.appendChild(newLi);
  }
    
  f.reset();
});

list.addEventListener("click", function(e) {

    const t = e.target.tagName;

    if (t === "LI") {
      e.target.style.textDecoration = "line-through";
    } else if (t === "BUTTON") {
      e.target.parentNode.remove();
    }
});
    
   
   
