
//adding a todo

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo =>{
    const html = `
     <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delet"></i>
     </li>
    `
    list.innerHTML += html;

}

addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    
    if(todo.length){

        generateTemplate(todo);
        addForm.reset();
    }
});

// deleting a todo

list.addEventListener('click', e =>{

    if(e.target.classList.contains('delet')){

      // e.target.parentElement.classList.add('d-none');

      e.target.parentElement.remove();

      // console.log(e.target.parentElement.classList);

    }
});


// searching & filtering

const filterTodos = (term) => {

    Array.from(list.children)
    .filter((child) => !child.textContent.toLowerCase().includes(term))
    .forEach( (child) => child.classList.add('filtered'));


    Array.from(list.children)
    .filter((child) => child.textContent.toLowerCase().includes(term))
    .forEach( (child) => child.classList.remove('filtered'));

};

//keyup event

search.addEventListener('keyup', (e) => {

    //prevent default action
    e.preventDefault();

    let term = search.value.trim().toLowerCase();
    filterTodos(term);

});

