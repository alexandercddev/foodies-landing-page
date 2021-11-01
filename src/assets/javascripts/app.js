/** 
 *  @author alexandercddev
 *  @description Foodies Landing page replica with HTML, SASS
 *  @date 25/octubre/2021 
**/

document.addEventListener('DOMContentLoaded', () => { 
    document.getElementById('year').append(new Date().getFullYear());
    document.querySelectorAll('svg[data-src]').forEach( svg => { 
        fetch(svg.dataset.src)
        .then(respuesta => respuesta.text())
        .then(xml => svg.innerHTML = xml); 
    });
});

document.getElementById('btn-send-mail').addEventListener('click', (e) => {
    const mail = document.getElementById('emailSend').value;
    const subject = 'Subscribe';
    const body = mail;
    window.open(`mailto:arturochi2@hotmail.com?subject=${subject}&body=${body}`); 
});

document.getElementById('btn-get-code').addEventListener('click', (e) => {
    alert('ALEXANDERCDDEV')
});