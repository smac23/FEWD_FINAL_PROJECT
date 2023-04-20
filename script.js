const sellMenuList = document.querySelector(".sell-types")
const sellMenuButton = document.querySelector(".menu-item1")

sellMenuButton.addEventListener ('mouseenter', showSellMenu)

function showSellMenu () {
    sellMenuList.classList.add('show')
}

sellMenuList.addEventListener ('mouseleave', hideSellMenu)

function hideSellMenu () {
    sellMenuList.classList.remove('show')
}

const chatbotTrigger = document.querySelector(".chatbot-trigger")
const chatbotPopup = document.querySelector (".chatbot-popup")
const cancelButton = document.querySelector ("#close-button")

chatbotTrigger.addEventListener ('click', showChatbotPopup)
cancelButton.addEventListener ('click',hideChatbotPopup)

function showChatbotPopup () {
    chatbotPopup.classList.remove('hide')
}

function hideChatbotPopup () {
    chatbotPopup.classList.add('hide')
}