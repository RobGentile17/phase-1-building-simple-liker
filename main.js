// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartClicked = document.querySelectorAll(".like-glyph")

function likingMessage(event) {
  const heart = event.target
  mimicServerCall()
    .then(function (){
      if(heart.innerHTML === EMPTY_HEART) {
        heart.innerHTML = FULL_HEART
        heart.className = "activated-heart"
      }else{
        heart.innerHTML = EMPTY_HEART;
        heart.className = "activated-heart"
      }
    })
    .catch(function() {
      const modal = document.getElementById("modal")
      console.log(modal)
      modal.classList.remove ("hidden")
      //modal.innerHTML = error
      setTimeout(() => modal.classList = "hidden" , 3000)

    })
  
}
for (const glyph of heartClicked) {
  glyph.addEventListener("click", likingMessage)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
