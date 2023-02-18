// Created by Grace Garrand


// Changing the look w/ HTML Dom

const text = document.querySelector('.changeP');
const change12 = document.querySelector('.change12');
change12.addEventListener('click', function(){
    text.classList.toggle('change1')
})

//Change color button and const

const bedTime = document.querySelectorAll('.bedTime li');
for(user of bedTime){
    user.addEventListener('click', function(){
        this.style.color = 'purple';
        
    })
}

//Adding additional list items from user input
const addList = document.querySelector('.addList');
const additionalLi = document.querySelector('.additionalLi');
const userList = document.querySelector('.bedTime')

additionalLi.addEventListener('click', function(){
    const addLi = document.createElement('LI');
    const liContent = document.createTextNode(addList.value);
    addLi.appendChild(liContent);
    userList.appendChild(addLi);
});

// Items for bedtime (Used while statement)
const bedItems = ["Toothbrush", "Pillow","Pj's","Blankets","Diffuser",
"Water", "Slippers", "A book"];

let i = 0;
let item = "";
while (bedItems[i]) {
    item += bedItems[i] + "<br>";
    i++;
}

document.getElementById("bedItem").innerHTML = item;