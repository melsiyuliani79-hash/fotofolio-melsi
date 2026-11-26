const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target)}}),{threshold:.2});
document.querySelectorAll('.item').forEach((el,i)=>{el.style.transitionDelay=(i*80)+'ms';io.observe(el)});
