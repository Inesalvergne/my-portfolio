// Logic for expandable cards
const toggleProjectInfo = (expandContent, projectInfo, card) => {
  const downArrow = expandContent.querySelector('#down-arrow');
  const upArrow = expandContent.querySelector('#up-arrow');

  if (expandContent.contains(downArrow)) {
    projectInfo.classList.remove('hidden');
    downArrow.remove();
    insertUpArrow(expandContent);
    adjustCardHeight(card, projectInfo);
  } else if (expandContent.contains(upArrow)) {
    projectInfo.classList.add('hidden');
    upArrow.remove();
    insertDownArrow(expandContent);
    card.style.height = `${390}px`; // Set default height when collapsing
  }
};

const insertUpArrow = (expandContent) => {
  const upArrowSVG = `
    <svg id="up-arrow" class="animate-bounce cursor-pointer" width="20" height="20" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.98453 0.916607L19.4978 10.4033L17.2842 12.6231L9.99077 5.38952L2.71755 12.6434L0.497795 10.4299L9.98453 0.916607ZM9.99779 10.4166L19.511 19.9033L17.2975 22.1231L10.004 14.8895L2.73081 22.1434L0.511054 19.9298L9.99779 10.4166Z" fill="#009486"/>
    </svg>`;
  expandContent.insertAdjacentHTML("beforeend", upArrowSVG);
};

const insertDownArrow = (expandContent) => {
  const downArrowSVG = `
    <svg id="down-arrow" class="animate-bounce cursor-pointer" width="20" height="20" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 22.0834L0.5 12.5834L2.71667 10.3667L10 17.6104L17.2833 10.3667L19.5 12.5834L10 22.0834ZM10 12.5834L0.5 3.08337L2.71667 0.866699L10 8.11045L17.2833 0.866699L19.5 3.08337L10 12.5834Z" fill="#009486"/>
    </svg>`;
  expandContent.insertAdjacentHTML("beforeend", downArrowSVG);
};

const adjustCardHeight = (card, projectInfo) => {
  const newHeight = card.offsetHeight + projectInfo.offsetHeight;
  card.style.height = `${newHeight}px`;
};

const webCards = document.querySelectorAll('#web-project-card');

webCards.forEach((card) => {
  const expandContent = card.querySelector('#learn-more');
  const projectInfo = card.querySelector('#project-info');

  expandContent.addEventListener('click', () => {
    toggleProjectInfo(expandContent, projectInfo, card);
  });
});
