//Created by Grace Garrand
//2-3-2023 (Yay...my bday!)

let text1 = "This girl wears a blank shirt";

function adder(hr1, hr2) {
    console.log(hr1 / hr2);
}

function changeImage() {
    let displayImage = document.getElementById('image1')
    if(displayImage.src.match('images/Girl.jpg')) {
        displayImage.src = 'images/Disintagrated_Girl.png'
    } else {
        displayImage.src = 'images/Girl.jpg'
    }
}
function msgText() {
    alert("Click on the picture to see the girl start to disintegrate!")
}

const girl = {
 hairType:'curly hair,',
 shirtType:'a striped shirt,',
 pantType:'blue jeans' ,
 nailColor:'black nail polish.',
};

function myFunction() {
  let text = document.getElementById("demo").innerHTML; 
  document.getElementById("demo").innerHTML =
  text.replace("blank", "striped");
} 


document.getElementById("demo").innerHTML= text1;
document.getElementById("demo1").innerHTML = 'This girl is sporting' + " " + girl.hairType +
 " " + girl.shirtType + " "+ girl.pantType + " " + 'and' + " "+ girl.nailColor;

 adder(1.53, 1.59);

 console.log(myFunction)
 console.log(msgText)
 console.log(changeImage)
 console.log(girl)
 console.log(text1)
msgText()
