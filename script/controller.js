class controller{
    constructor(){
        this.initialize();
    }
    initialize(){
        var voto1 = 0;
        var voto2 = 0;

        onload = () =>{

            
            document.querySelector('#voto1').onclick = ()=> botao();
            document.querySelector('#voto2').onclick = ()=> botao2();
          
            atualizaDisplay1();
            atualizaDisplay2();
        };
    
        const botao = ()=>{
            if(voto1 == 0){

                voto1 = 1;
                atualizaDisplay1();
            }else{
                voto1 = voto1 +1;
                atualizaDisplay1();
            }
                
        };
        const botao2 = () =>{
           if(voto2 == 0){
               voto2 = 1;
               atualizaDisplay2();
           }else{
            voto2 = voto2 +1;
            atualizaDisplay2();
           }
        }
        const atualizaDisplay1 = ()=>{
            document.querySelector('#resultado-1').innerText = voto1;
        };
        const atualizaDisplay2 = ()=>{
            document.querySelector('#resultado-2').innerText = voto2;
        };
        // 
    }
}