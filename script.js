// button for toggling theme
var themeBtn = document.getElementById('theme')

// gets and sets the theme choice from permanent storage (if it exists)
var themeChoice = window.localStorage.getItem('themeChoice')
if (themeChoice != null) {
  document.body.setAttribute('class', themeChoice)
}

// gets the hit count number from permanent storage (if it exists)
var hitCount = window.localStorage.getItem('hitCount')
if (hitCount === null) {
  hitCount = 0
}

// listener for detecting current theme and changing to opposite theme
themeBtn.addEventListener('click', function () {
  if (document.body.getAttribute('class') === 'night-theme') {
    themeChoice = 'day-theme'
    document.body.setAttribute('class', themeChoice)
    window.localStorage.setItem('themeChoice', themeChoice)
  } else {
    themeChoice = 'night-theme'
    document.body.setAttribute('class', themeChoice)
    window.localStorage.setItem('themeChoice', themeChoice)
  }
})

// increase number of site visits per reload/refresh
hitCount++

// set new hit count and update message in HTML
window.localStorage.setItem('hitCount', hitCount)
var hitMessage = 'You\'ve visited this site ' + hitCount + ' time(s)'
document.getElementById('hit').innerHTML = hitMessage
