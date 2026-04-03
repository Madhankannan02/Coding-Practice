const heartBtn = document.querySelectorAll(".favorite-icon");

heartBtn.forEach(btn => {btn.addEventListener("click", handleClick)
});

function handleClick(event){

  const clickedBtn = event.currentTarget;

  if(clickedBtn.classList.contains('filled')){
    clickedBtn.classList.remove('filled');
    clickedBtn.innerHTML = "&#9825;";
  } else {
    clickedBtn.classList.add('filled');
    clickedBtn.innerHTML = "&#10084;";
  }
}