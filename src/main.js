let buttonsFilter = [...document.getElementById('btn-container').children];
let allCards = [...document.getElementsByClassName('flexcontainer').item(0).children]
let modal = document.getElementById('modal-container')
let modalCotentImg = document.getElementById('modal-content-img')
let ButtonCloseModal = document.getElementById('btn-close')
let divCardCurrentOpened = null

async function filterSelection(type, btn) {
    let showAllCards = allCards.forEach(card => card.style.display = "block")
    let isBtnFilterActive = btn.className.includes('active')
    let btnRemoveClassActive = btn => btn.className = 'btn'
    let allDivsWithoutType = card => !card.className.includes(type)

    if (isBtnFilterActive) {
        showAllCards
        btnRemoveClassActive(btn)
    } else {
        if (type === 'showAll') {
            showAllCards
        } else {
            allCards.filter(card => {
                if (allDivsWithoutType(card)) {
                    return card.style.display = "none"
                }

            })
        }
        buttonsFilter.forEach(btnRemoveClassActive)
        btn.className = 'btn active'
    }
}
const toggleHoverCard = () => divCardCurrentOpened.classList.toggle('noHover')
const toggleModalClassActive = () => modal.classList.toggle('modal_active')
const getSrcCard = card => card.children[0].children[0].src


const addEventCLickToAllCards = card => {
    card.addEventListener('click', () => {
        divCardCurrentOpened = card; // save current card opened for restore hover after.
        toggleHoverCard()
        modalCotentImg.setAttribute('src', getSrcCard(card))
        toggleModalClassActive()


    })
}

const eventCloseAndRestoreModal = () => {
    modalCotentImg.removeAttribute('src')
    toggleHoverCard() // restore effect hover to card
    toggleModalClassActive()
}

allCards.forEach(addEventCLickToAllCards)
ButtonCloseModal.addEventListener('click', eventCloseAndRestoreModal)