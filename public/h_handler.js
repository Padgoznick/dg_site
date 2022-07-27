const positions= [
    eval('document.getElementById("im1")'),
    eval('document.getElementById("im2")'),
    eval('document.getElementById("im3")'),
    eval('document.getElementById("im4")')
]
setInterval(()=>{
    let pos_num= Math.floor(Math.random()*positions.length)
    let img_num= Math.floor(Math.random()*6)+1
    positions[pos_num].style.background= `url("./header_img/${img_num}.png")`;
    positions[pos_num].style.backgroundSize= "100% 100%";
    positions[pos_num].style.backgroundRepeat= "no-repeat";
    positions[pos_num].style.transition= "all 1s linear";
},4000)