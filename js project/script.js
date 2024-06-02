const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')

buttons.forEach((button)=>{
    // console.log(button)
   button.addEventListener('click',function(e){
    console.log(e)                    // event like mouse event 
    console.log(e.target)                      // from where event comes from  like if we click brown box event come fromm brown box
      if(e.target.id === "Grey"){
        body.style.backgroundColor= e.target.id
       h1.style.color=e.target.id
      }
      else if(e.target.id ==="White"){
        body.style.backgroundColor = e.target.id
       h1.style.color=e.target.id
      }
      else if(e.target.id ==="Blue"){
        body.style.backgroundColor = e.target.id
       h1.style.color=e.target.id
      }
      else if(e.target.id ==="Yellow"){
        body.style.backgroundColor = e.target.id
       h1.style.color=e.target.id
      }
      else if(e.target.id ==="Purple"){
        body.style.backgroundColor = e.target.id
       h1.style.color=e.target.id
      }
   })
});
