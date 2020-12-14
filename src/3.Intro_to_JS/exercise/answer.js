const getFavs = () => {
  const favList = []
  const inputs = document.querySelectorAll('input')
  for (const input of inputs) {
    if (input.checked == true){
      favList.push(input.parentNode.textContent)
    }
  }
  document.querySelector('.favorites').textContent = favList.join(' ')
}

document.querySelector('button').onclick = getFavs