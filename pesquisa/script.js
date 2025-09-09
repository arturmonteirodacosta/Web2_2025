function procurar(){
    let pesquisa = document.getElementById("barraPesquisa").value;
    console.log(pesquisa);
    pesquisa = pesquisa.toLowerCase();
    //console.log(pesquisa);
    let elements = document.getElementsByClassName("elementos");
    //console.log(elements);
    //console.log(elements.length);
    //console.log(elements[i].textContent.toLowerCase().includes(pesquisa));

    for(i = 0; i < elements.length; i++){
        if(!elements[i].textContent.toLowerCase().includes(pesquisa)){
            elements[i].style.display = "none";
        } else {
            elements[i].style.display = "flex";
        }
    }

}