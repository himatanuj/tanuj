
  function play(){
    // let audio = document.getElementById('audio');
    // audio.play();
    document.getElementById('value').innerHTML = '';
    // document.getElementById('dice').classList.add('dice-animation');

    
   
    setTimeout(()=>{
        let diceNumber = Math.floor(Math.random()*6);
        document.getElementById('value').innerHTML = diceNumber;
       


    }, 2000)

    setTimeout(()=>{
        document.getElementById('dice').classList.remove('dice-animation');
    }, 4000) 
  
  }


