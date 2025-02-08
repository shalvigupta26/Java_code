let screen=document.getElementById('screen');
 let buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click' , (e)=> {
       let buttontext= e.target.innerText;
        console.log("btn txt" , buttontext);
        if(buttontext=='*')
        {
            buttontext='*';
            screenValue += buttontext; 
             screen.value =screenValue;

        }
        else if(buttontext=='C')
        { 
            screenValue= " ";
            screen.value = screenValue;
        }
        else if(buttontext =='=')
            {
                screen.value = eval(screenValue)
            }  

             else if( buttontext == 'del'){
                  screenValue=screenValue.slice(0, -1);
                    screen.value = screenValue;
         }
            else{
                screenValue += buttontext; 
                screen.value =screenValue;


            }
    

    })
}
 