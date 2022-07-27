const btnz_dm= [
    eval('document.getElementById("ab")'),
    eval('document.getElementById("vi")'),
    eval('document.getElementById("me")'),
    eval('document.getElementById("co")')
]
const btnz_mm=[
    eval('document.getElementById("ab_m")'),
    eval('document.getElementById("vi_m")'),
    eval('document.getElementById("me_m")'),
    eval('document.getElementById("co_m")')
]
const hamb= document.getElementById('ham_btn');
const p_m= document.getElementById('p_m');
const m_c= document.getElementById('m_c');
const arr_btn= document.getElementById('arr_btn');

btnz_dm[0].addEventListener('click',()=>{
    window.scroll({
    top: window.innerWidth/2.5, 
    left: 0, 
    behavior: 'smooth' 
    });
})
btnz_dm[1].addEventListener('click',()=>{
    window.scroll({
    top: window.innerWidth/0.89, 
    left: 0, 
    behavior: 'smooth' 
    });
})
btnz_dm[2].addEventListener('click',()=>{
    window.scroll({
    top: window.innerWidth/0.62, 
    left: 0, 
    behavior: 'smooth' 
    });
})
btnz_dm[3].addEventListener('click',()=>{
    window.scroll({
    top: document.body.scrollHeight, 
    left: 0, 
    behavior: 'smooth' 
    });
})

btnz_mm[0].addEventListener('click',()=>{
    p_m.style.display="none";
    hamb.style.transform= "rotate(0deg)";
    hamb.style.left= "87vw";
    window.scroll({
    top: window.innerWidth/2.5, 
    left: 0, 
    behavior: 'smooth' 
    });
})
btnz_mm[1].addEventListener('click',()=>{
    p_m.style.display="none";
    hamb.style.transform= "rotate(0deg)";
    hamb.style.left= "87vw";
    window.scroll({
    top: window.innerWidth/0.89, 
    left: 0, 
    behavior: 'smooth' 
    });
})
btnz_mm[2].addEventListener('click',()=>{
    p_m.style.display="none";
    hamb.style.transform= "rotate(0deg)";
    hamb.style.left= "87vw";
    window.scroll({
    top: window.innerWidth/0.62, 
    left: 0, 
    behavior: 'smooth' 
    });
})
btnz_mm[3].addEventListener('click',()=>{
    p_m.style.display="none";
    hamb.style.transform= "rotate(0deg)";
    hamb.style.left= "87vw";
    window.scroll({
    top: document.body.scrollHeight, 
    left: 0, 
    behavior: 'smooth' 
    });
})
hamb.addEventListener('click', async ()=>{
    if (!hamb.style.transform || hamb.style.transform == "rotate(0deg)"){
        hamb.style.transform= "rotate(90deg)";
        hamb.style.left= "86vw";
        hamb.style.marginTop= "2px";
        p_m.style.display="block";
        p_m.style.animation= "p_m_a 0.5s ease-in-out";
        p_m.style.animationFillMode= "forwards";
        m_c.style.animation= "m_c_t 0.2s ease-in-out";
        m_c.style.animationFillMode= "forwards";
        return
    }
    hamb.style.transform= "rotate(0deg)";
    hamb.style.marginTop= "0px";
    hamb.style.left= "87vw";
    p_m.style.animation= "p_m_a_r 0.5s ease-out";
    m_c.style.animation= "m_c_t_r 0.2s ease-in-out";
    m_c.style.animationFillMode= "forwards";
    await new Promise(resolve => setTimeout(()=>{
        p_m.style.display="none";
    }, 500))
    return
})
arr_btn.addEventListener("click",()=>{
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
        });
})

setInterval(()=>{
    if(window.innerWidth>=768){
        p_m.style.display="none";
        hamb.style.transform= "rotate(0deg)";
        hamb.style.left= "87vw";
        return
    }else{
    }
},1000)