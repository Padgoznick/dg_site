const btnz_mm=[
    eval('document.getElementById("ab_m")'),
    eval('document.getElementById("vi_m")'),
    eval('document.getElementById("me_m")'),
    eval('document.getElementById("co_m")')
]
const hamb= document.getElementById('ham_btn');
const p_m= document.getElementById('p_m');
const m_c= document.getElementById('m_c');
hamb.addEventListener('click', async ()=>{
    if (!hamb.style.transform || hamb.style.transform == "rotate(0deg)"){
        hamb.style.transform= "rotate(90deg)";
        hamb.style.left= "86vw";
        hamb.style.marginTop= "5px";
        p_m.style.display="block";
        p_m.style.animation= "p_m_a 0.5s ease-in-out";
        p_m.style.animationFillMode= "forwards";
        m_c.style.animation= "m_c_t 0.2s ease-in-out";
        m_c.style.animationFillMode= "forwards";
        return
    }
    hamb.style.transform= "rotate(0deg)";
    hamb.style.left= "87vw";
    p_m.style.animation= "p_m_a_r 0.5s ease-out";
    m_c.style.animation= "m_c_t_r 0.2s ease-in-out";
    m_c.style.animationFillMode= "forwards";
    await new Promise(resolve => setTimeout(()=>{
        p_m.style.display="none";
    }, 500))
    hamb.style.marginTop= "0px";
    return
})