//Monkey Face Section
const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')

//add event listener

closedFace.addEventListener('click',() => {
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click', () => {
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});

//Multiple Choice section

let data = [
    {name: 'John', age: '34'},
    {name: 'Lucy', age: '19'},
    {name: 'George', age: '53'},
    {name: 'Stephan',age: '24'},
    {name: 'Karlah',age: '43'},
    {name: 'Cindy',age: '30'}

];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
    
});

info.innerHTML = details.join('\n');

//Hover Section
const circle = document.querySelector('#circle')

circle.addEventListener('mouseenter', () => {
    if(!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave', () => {
    if(circle.classList.contains('hover')){
        circle.classList.remove('hover');
    }
})