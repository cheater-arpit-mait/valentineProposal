let no=document.querySelector('#no');
let yes=document.querySelector('#yes');
let firstbox=document.querySelector('.bada');
let container=document.querySelector(".conatainer")
let secondbox=document.querySelector('.saidyes')

let music=document.querySelector('#music')
let mutebtn=document.querySelector('#togglemute')

music.muted=true;

mutebtn.addEventListener('click',function(){
    if (music.muted) {
        music.muted = false;
        music.play(); 
        mutebtn.innerText = "🔊 Mute";
    } else {
        music.muted = true;
        mutebtn.innerText = "🔈 Unmute";
    }
})
no.addEventListener('mouseover',function(){

    let x = Math.floor(Math.random() *600)-500;
    let y = Math.floor(Math.random() *600)-500;

    no.style.transform = `translate(${x}px, ${y}px)`;

})  
yes.addEventListener('click',function(){
    // console.log('she said yes!!')
    // firstbox.style.display='none';
    // secondbox.style.display='flex';
    // secondbox.style.backgroundColor='white'
    // secondbox.innerHTML='YOU SAID YES!!!!'
    firstbox.classList.add('fade-out');

    setTimeout(() => {
        firstbox.style.height='550px'
        firstbox.style.width='500px'
        firstbox.style.top='150px'
        firstbox.innerHTML=`<h1><span class='finaltext'>
            <span class='emoji'>🌸🤩💕</span>
            <br>Yayy  Yabiiiii said YES 💕😭
            This moment just turned into a forever memory
            You are my today, my tomorrow, and every dream in between.
            Thank you for choosing me, for loving me, for being my person.
            I’m endlessly, hopelessly in love with cutiee ❤️<br></span>

        </h1>
        `
       // firstbox.innerHTML=`<h3 class="finaltext">she said yes!!!</h3>`
        firstbox.classList.add('fade-in');
    }, 200);
   // firstbox.classList.remove('fade-out');

})

