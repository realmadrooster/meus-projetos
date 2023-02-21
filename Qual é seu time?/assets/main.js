


//img.setAttribute('id','foto');
function calculaTime(){
    const trocaFoto = document.querySelector('.fotopadrao')
    const fotoTime = document.querySelector('.fotoTime');
    var img=document.createElement('img');
    
    const perguntaUm = document.getElementsByName('p1');
    if (perguntaUm[1].checked){
        alert('galoo');
        trocaFoto.setAttribute('src','assets/imagens/galotime.jpg')
        img.setAttribute('src','assets/imagens/galo.jpg');
        
    }else{
        alert('Cruzeiro');
        trocaFoto.setAttribute('src','assets/imagens/cruzeiro.jpeg')
        img.setAttribute('src','assets/imagens/cruzeiro2.jpeg');
    }
    fotoTime.style.textAlign='center'
    fotoTime.appendChild(img);
}
