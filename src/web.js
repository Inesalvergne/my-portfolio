console.log('hello from web.js');

// Logic for expandable cards
const webCards = document.querySelectorAll('#web-project-card')

webCards.forEach((card) => {

  const downArrow = card.querySelector('#down-arrow')

  downArrow.addEventListener('click', (event) => {
    event.preventDefault()
    const projectInfo = card.querySelector('#project-info')
    const downArrow = card.querySelector('#down-arrow')

    if(projectInfo.classList.contains('hidden')) {
      projectInfo.classList.remove('hidden')
      downArrow.remove()
      // const upArrow = `<svg id="down-arrow" class="cursor-pointer" width="20" height="20" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      // <path d="M9.98453 0.916607L19.4978 10.4033L17.2842 12.6231L9.99077 5.38952L2.71755 12.6434L0.497795 10.4299L9.98453 0.916607ZM9.99779 10.4166L19.511 19.9033L17.2975 22.1231L10.004 14.8895L2.73081 22.1434L0.511054 19.9298L9.99779 10.4166Z" fill="#009486"/>
      // </svg>`
      // downArrow.innerHTML = upArrow
    }
  })

})
