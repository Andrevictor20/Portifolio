 const abas=document.querySelectorAll(".aba");
 abas.forEach(aba=>{
    aba.addEventListener("click",function(){
        if(aba.classList.contains("selecionado")){
            return;
        }else{
         selecaba(aba)
         mostrarinfoaba(aba)
        }
    });
 });

 function selecaba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")
    aba.classList.add("selecionado")
 }

 function mostrarinfoaba(aba){
    const infoSelec =document.querySelector(".informacao.selecionado")
    infoSelec.classList.remove("selecionado")
    const idElementInfoAba = `informacao-${aba.id}`
    const infoMostrada=document.getElementById(idElementInfoAba)
    infoMostrada.classList.add("selecionado")
 }