const text = document.querySelector('.changeP');
const change12 = document.querySelector('.change12');
const addList = document.querySelector(.addList)

const bedTime = document.querySelectorAll('.bedTime li');

change12.addEventListener('click', function(){
    text.classList.toggle('change1')
})

for(user of bedTime){
    user.addEventListener('click', function(){
        this.style.color = 'purple';
    })
}