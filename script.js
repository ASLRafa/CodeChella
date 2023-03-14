function menu(){
    let divmenu = document.querySelector("#divmenu").classList;
    console.log(divmenu)
    let menuul= document.querySelector("#menuul").classList
    const hidden ='hidden';
    let classe = verificalista(divmenu,hidden)
        if( classe == true){
            console.log("revelo")
            divmenu.remove(hidden)
            menuul.add('bg-roxo-hover')
            menuul.add('w-fit')
            menuul.add('h-max')
            menuul.add('p-4')
            menuul.add('rounded-l-xl')
            divmenu.add('absolute')
            divmenu.add('top-4rem')
            divmenu.add('right-0')
        }
        else{
            divmenu.add(hidden)
            console.log("escondeu")
        }

    
    console.log(divmenu)
    // bg-roxo-hover w-fit absolute top-4rem right-0 h-max p-4 rounded-l-xl 
}

function verificalista(lista, palavra){
    for(let classe of lista){
        console.log(classe)
        if(palavra == classe){
            return true;
        }
    }

}