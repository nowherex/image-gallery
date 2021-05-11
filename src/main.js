let buttonsFilter = document.getElementById('my-btn-container').children;
let allCards = document.getElementsByClassName('row')
let arrayAllCards = Array.from(allCards[0].children)
let modal = document.getElementById('modal-container')
let modalCotentImg = document.getElementById('modal-content-img')
let ButtonCloseModal = document.getElementById('btn-close')
let divCardCurrentOpened = null

async function filterSelection(type, btn) {
    let showAll = arrayAllCards.forEach(div => div.style.display = "block")
    let isBtnFilterActive = btn.className.includes('active')
    let btnRemoveClassActive = btn => btn.className = 'btn'
    let allDivsWithoutId = div => !div.className.includes(type)

    if (isBtnFilterActive) {
        showAll
        btnRemoveClassActive(btn)
    } else {
        if (type === 'showAll') {
            showAll
        } else {
            arrayAllCards.filter(div => {
                if (allDivsWithoutId(div)) {
                    return div.style.display = "none"
                }

            })
        }
        Array.from(buttonsFilter).forEach(btnRemoveClassActive)
        btn.className = 'btn active'
    }
}

const addEventCLickToAllCards = div => {
    div.addEventListener('click', () => {
        let srcClickedImg = div.children[0].children[0].src
        modalCotentImg.setAttribute('src', srcClickedImg)
        modal.classList.toggle('modal_active')
        divCardCurrentOpened = div;
        divCardCurrentOpened.classList.toggle('noHover')
    })
}

const eventCloseAndRestoreModal = () => {
    divCardCurrentOpened.classList.toggle('noHover')
    modal.classList.toggle('modal_active')
}

arrayAllCards.forEach(addEventCLickToAllCards)
ButtonCloseModal.addEventListener('click', eventCloseAndRestoreModal)