let imgArr=[
    "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/291f71468a6eff71.jpg?q=50",
    "https://www.linkpicture.com/q/slede11.png",
    "https://www.linkpicture.com/q/slide3_5.png",
    "https://www.linkpicture.com/q/slide2_6.png",
    ""
]

let image= document.getElementById("imageSlider");
let count=0; 
image.innerHTML=null
count++
if(count==imgArr.length-1){
    count=0
}
let div=document.createElement("div");
let img=document.createElement("img");
img.src=imgArr[count]
div.append(img)
image.append(div)
setInterval(() => {
    image.innerHTML=null
    count++
    if(count==imgArr.length-1){
        count=0
    }
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=imgArr[count]
    div.append(img)
    image.append(div)
   
}, 2000);
