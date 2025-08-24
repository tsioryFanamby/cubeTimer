const timer = document.querySelector('.timer');
var milliSecond = document.getElementById("milliSecond");
var second = document.getElementById("second");
let toggled = false;

function spacebar(){
    document.addEventListener( 'keydown',(event) =>  {
        if( event.code === 'Space'){
            event.preventDefault();
            if(!toggled){
                timer.style.backgroundColor = 'black';
                milliSecond.textContent = '30';
                second.textContent = '60';
            }
            else{
                timer.style.backgroundColor = 'none';
                timer.style.color = ' green';
                milliSecond.textContent = '00';
                second.textContent = '00';
            }
            toggled = !toggled;
        }
    });
}
spacebar();

