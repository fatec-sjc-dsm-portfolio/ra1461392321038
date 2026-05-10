import './style.css'

const typingElement = document.querySelector('.typing-text')
const homeContainer = document.querySelector('.home-container')

if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname + window.location.search)
}

if (typingElement && homeContainer) {
  const text = 'Yuri Braga'
  let index = 0
  let isDeleting = false

  function typeWriter() {
    if (!isDeleting && index < text.length) {
      typingElement.textContent += text.charAt(index)
      index += 1
      window.setTimeout(typeWriter, 150)
      return
    }

    if (!isDeleting && index === text.length) {
      isDeleting = true
      window.setTimeout(typeWriter, 2000)
      return
    }

    if (isDeleting && index > 0) {
      typingElement.textContent = text.substring(0, index - 1)
      index -= 1
      window.setTimeout(typeWriter, 100)
      return
    }

    if (isDeleting && index === 0) {
      isDeleting = false
      window.setTimeout(typeWriter, 500)
    }
  }

  window.addEventListener('load', () => {
    homeContainer.style.opacity = '0'
    homeContainer.style.transform = 'translateY(30px)'

    window.setTimeout(() => {
      homeContainer.style.transition = 'opacity 1s ease, transform 1s ease'
      homeContainer.style.opacity = '1'
      homeContainer.style.transform = 'translateY(0)'
    }, 100)

    window.setTimeout(typeWriter, 1000)
  })
}