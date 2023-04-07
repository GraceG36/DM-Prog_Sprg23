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