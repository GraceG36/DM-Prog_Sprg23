const pic1Contents = {
    hands:"forming the rim",
    pot:"being shaped",
    tool:"rib",
    material: ["clay", "water", "love"]
};


document.getElementById("test").innerHTML = (pic1Contents.material);

const tools = ["Rib", "Wire tool", "Clay", "Bucket","Wheel"]

document.getElementById("tools").innerHTML = tools ;

document.getElementById("singleTool").innerHTML = tools[2];

tools.push("Cottage Cheese. Check this out, I added an item! ");

document.getElementById("addedItem").innerHTML = tools ;
