'use strict';

const closeModal = document.querySelector('#closeModal');
const overlay = document.querySelector('#overlay')

function buildQuote (theQuote) {
    const modalContent = document.querySelector('#modal p');
    modalContent.innerText = theQuote
    toggleModal()
}

function toggleModal() {
    const overlay = document.querySelector('#overlay')
    overlay.classList.toggle('visible');
}

document.addEventListener("DOMContentLoaded", function () {

    closeModal.addEventListener('click', function () {
        toggleModal();
    })

    fetch('https://api.chucknorris.io/jokes/random?category=dev')
        .then(response => {
            return response.json();
        })
        .then(data => {
            buildQuote(data.value)
        })
        .catch(error => {
            console.error("ERROR", error)
            return error
        });

    overlay.addEventListener('click', function () {
        toggleModal()
    })

    document.addEventListener('keydown', function (event) {
        console.log("The key pressed is ", event.key)
        if (event.key === "Escape") {
            toggleModal()
        }
    })
})