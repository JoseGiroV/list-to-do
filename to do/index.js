

const createTodo = document.getElementById('createTodo');
const addTodo = document.getElementById('addTodo');
const todoList = [];

const donTodo = () => {
    const valueinputTodo = createTodo.value;
    todoList.push(valueinputTodo)
    console.log(todoList);

    const valueinlocalStorage =JSON.stringify(valueinputTodo);
    console.log(valueinlocalStorage);

    window.localStorage.setItem('milistodo', valueinlocalStorage)

}

const getlistTodo=window.localStorage.getItem('milistodo');
const originalValue = JSON.parse(getlistTodo);

console.log(originalValue);

const listodoMap = originalValue.map ((values) => {
    document.write (values);

})

addTodo.addEventListener('click', donTodo);