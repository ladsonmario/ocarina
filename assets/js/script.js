document.body.addEventListener('keyup', (e)=>{
    playSound(e.code.toLowerCase());    
});

document.querySelector('.mode-area .button').addEventListener('click', ()=>{
    if(document.body.classList.contains('dark')) {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        document.querySelector('.list').classList.remove('dark');
        document.querySelector('.list').classList.add('light');        
        document.querySelector('.mode-area .button').style.justifyContent = 'flex-end';
        document.querySelector('.mode-area .button').style.backgroundColor = '#444444';                
        document.querySelector('.container').style.backgroundColor = '#ffffff';
        document.querySelectorAll('.instruction-button div').forEach(e => {
            e.style.backgroundColor = '#000000';
        });
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        document.querySelector('.list').classList.remove('light');
        document.querySelector('.list').classList.add('dark');        
        document.querySelector('.mode-area .button').style.justifyContent = 'flex-start';
        document.querySelector('.mode-area .button').style.backgroundColor = '#333333';
        document.querySelector('.container').style.backgroundColor = '#333333';        
        document.querySelectorAll('.instruction-button div').forEach(e => {
            e.style.backgroundColor = '#ffffff';
        });
    }
});

document.querySelector('.instruction-button').addEventListener('click', ()=>{   
    document.querySelector('.instruction-button').style.display = 'none';
    setTimeout(()=>{
        document.querySelector('.list').style.left = '0px';
    }, 200);
});

document.querySelector('.menu-closer').addEventListener('click', ()=>{
    document.querySelector('.list').style.left = '-400px';    
    setTimeout(()=>{
        document.querySelector('.instruction-button').style.display = 'flex';        
    }, 500);
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;        
        
    
    if(song !== '') {       
        let songArray = song.split('');        
        let zeldasLullaby = 'awdawd';
        let eponaSong = 'wadwad';
        let sariaSong = 'sdasda';
        let songOfStorms = 'lswlsw';
        let sunSong = 'dswdsw';
        let songOfTime = 'dlsdls';
        let minuetOfForest = 'lwadad';
        let boleroOfFire = 'slsldsds';
        let serenadeOfWater = 'lsdda';
        let requiemOfSpirit = 'lsldsl';
        let nocturneOfShadow = 'addlads';
        let preludeOfLight = 'wdwdaw';
        if(song == zeldasLullaby) {
            new Audio('./midia/ok.wav').play();
            setTimeout(()=>{
                new Audio('./midia/Ocarina_Zeldas_Lullaby.mp3').play();
            }, 1000);            
        } else if(song == eponaSong) {            
            new Audio('./midia/ok.wav').play();
            setTimeout(()=>{
                new Audio('./midia/Ocarina_Eponas_Song.mp3').play();
            }, 1000);           
        } else if(song == sariaSong) {            
            new Audio('./midia/ok.wav').play();
            setTimeout(()=>{
                new Audio('./midia/Ocarina_Sarias_Song.mp3').play();
            }, 1000);           
        } else if(song == songOfStorms) {            
            new Audio('./midia/ok.wav').play();
            setTimeout(()=>{
                new Audio('./midia/Ocarina_Song_of_Storms.mp3').play();
            }, 1000);           
        } else if(song == sunSong) {            
            new Audio('./midia/ok.wav').play();
            setTimeout(()=>{
                new Audio('./midia/Ocarina_Suns_Song.mp3').play();
            }, 1000);           
        } else if(song == songOfTime) {            
            new Audio('./midia/ok.wav').play();
            setTimeout(()=>{
                new Audio('./midia/Ocarina_Song_of_Time.mp3').play();
            }, 1000);           
        } else if(song == minuetOfForest) {            
            new Audio('./midia/ok.wav').play();
            setTimeout(()=>{
                new Audio('./midia/Minuet_of_Forest.mp3').play();
            }, 1000);           
        } else if(song == boleroOfFire) {            
            new Audio('./midia/ok.wav').play();
            setTimeout(()=>{
                new Audio('./midia/Bolero_of_Fire.mp3').play();
            }, 1000);           
        } else if(song == serenadeOfWater) {            
            new Audio('./midia/ok.wav').play();
            setTimeout(()=>{
                new Audio('./midia/Serenade_of_Water.mp3').play();
            }, 1000);           
        } else if(song == requiemOfSpirit) {            
            new Audio('./midia/ok.wav').play();
            setTimeout(()=>{
                new Audio('./midia/Requiem_of_Spirit.mp3').play();
            }, 1000);           
        } else if(song == nocturneOfShadow) {            
            new Audio('./midia/ok.wav').play();
            setTimeout(()=>{
                new Audio('./midia/Nocturne_of_Shadow.mp3').play();
            }, 1000);           
        } else if(song == preludeOfLight) {            
            new Audio('./midia/ok.wav').play();
            setTimeout(()=>{
                new Audio('./midia/Prelude_of_Light.mp3').play();
            }, 1000);           
        } else {
            playComposition(songArray);
        }        
    }
    
});


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);  

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300);
    }
}

function playComposition(songArray) {
    let wait = 0;


    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 300; 
    }    
    
      
}
