function createHeart(){const a=document.createElement("div");a.classList.add("coracao");const b=document.getElementById("hearts-container");b.appendChild(a);const c=Math.random()*window.innerWidth;a.style.left=`${c}px`,setTimeout(()=>{b.removeChild(a)},6e3)}setInterval(createHeart,1500);