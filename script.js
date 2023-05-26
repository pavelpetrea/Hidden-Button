let n = 3;
let winningButton;
const onClick = function func() {
  winningButton = winningButton ? winningButton : Math.floor(Math.random() * n);
  if (winningButton == this.id) {
    alert("Congratulations! You've guessed the button!")
  } else {
    alert("You may try again!")
  }
}
for (let i = 1; i <= n; ++i) {
  const buton = document.createElement("button")
  document.querySelector("body").appendChild(buton)
  buton.id = i
  buton.innerText = i;
  buton.addEventListener("click", onClick);
}

function generateButtons() {
    let number = parseInt(document.getElementById("number").value);
    let container = document.getElementById("container-buttons");
    container.innerHTML = '';
    
    let winningButton = Math.floor(Math.random() * number) + 1;

    for (let i = 1; i <= number; i++) {
      let button = document.createElement("button");
      button.innerText = i;
      button.addEventListener('click', function() {
        if (winningButton === i) {
          alert("Congratulations! You've guessed the button!");
        } else {
          alert("You may try again!");
        }
      });
      container.appendChild(button);
    }
  }