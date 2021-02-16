function main() {
  let userScore = 0
  let computerScore = 0
  const userScore_span = document.getElementById('user-score')
  const computerScore_span = document.getElementById('computer-score')
  const scoreBoard_div = document.querySelector('.score-board')
  const result_p = document.querySelector('.result > p')
  const rock_div = document.getElementById('r')
  const paper_div = document.getElementById('p')
  const scissors_div = document.getElementById('s')
  function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
  }
  function convertToWord(letter) {
    if (letter === 'r') return 'rock'
    if (letter === 'p') return 'paper'
    return 'scissors'
  }

  function win(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub()
    const smallCompWord = 'comp'.fontsize(3).sub()
    const userChoice_div = document.getElementById(userChoice)
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    
    
      userChoice
    )}${smallUserWord}  beats  ${convertToWord(
      computerChoice
    )}${compWord} You win!`
    result_p.innerHTML = `${convertToWord( document.getElementById(userChoice).classList.add('green-glow')
   setTimeout(function () 
      setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300)
      if (userChoice).classList.remove('green-glow')
  }

  function lose(userChoice, computerChoice) {
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUserWord = 'user'.fontsize(3).sub()
    const smallCompWord = 'comp'.fontsize(3).sub()
    result_p.innerHTML = `${convertToWord(
      userChoice
    )}${smallUserWord}  loses to  ${convertToWord(
      computerChoice
    )}${compWord} You lost`
  }

  function draw(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub()
    const smallCompWord = 'comp'.fontsize(3).sub()
    result_p.innerHTML = `${convertToWord(
      userChoice
    )}${smallUserWord}  loses to  ${convertToWord(
      computerChoice
    )}${compWord} it's a draw`
  }

  function game(userChoice) {
    const ComputerChoice = getComputerChoice()
    switch (userChoice + ComputerChoice) {
      case 'rp':
      case 'pr':
      case 'sp':
        win(userChoice, computerChoice)
        break
      case 'rp':
      case 'pr':
      case 'sr':
        lose(userChoice, computerChoice)
        break
      case 'rr':
      case 'pp':
      case 'ss':
        draw(userChoice, computerChoice)
        break
    }
  }
  rock_div.addEventListener('click', function () {
    game('rock')
  })

  paper_div.addEventListener('click', function () {
    game('p')
  })

  scissors_div.addEventListener('click', function () {
    game('scissors')
  })
}

document.addEventListener('DOMContentLoaded', main)
