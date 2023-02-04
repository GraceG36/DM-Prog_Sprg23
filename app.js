//Created by Grace Garrand
//2-3-2023 (Yay...my bday!)


function changeImage() {
    let displayImage = document.getElementById('image1')
    if(displayImage.src.match('images/Girl.jpg')) {
        displayImage.src = 'images/Disintagrated_Girl.png'
    } else {
        displayImage.src = 'images/Girl.jpg'
    }
}
function msgText() {
    alert("Click on the picture to see the girl start to disinagrate!")
}


const girl = {hairType:'curly',
 shirtType:'striped',
 pantType:'jeans' ,
 nailColor:'black',
 fullDescript: function() { 
    return this.hairType + " " + this.shirtType;
}};

fullDescript()
msgText()
