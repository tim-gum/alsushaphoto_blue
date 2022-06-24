// Проверка на корректное заполнение
"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('telegram-form')
    form.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault()

        let error = formValidate(form)

        if (error === 0) {
            // Telegram send massege
            const TOKEN = "5424335217:AAECsus0b66kybVdOaJ2SAbNNSQgpogefzo"
            const CHAT_ID = "-746698692"
            const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
            // const success = document.getElementById('success')


            document.getElementById('telegram-form').addEventListener('submit', function(e) {
                e.preventDefault()


                let message = `<b>Reservation</b>\n`
                message += `first name: <b> ${ this.firstName.value } </b>\n`
                message += `second name: <b> ${ this.lastName.value } </b>\n`
                message += `phone: <b> ${ this.phone.value } </b>\n`
                message += `instagram: <b> ${ this.instagramName.value } </b>\n`
                message += `preferences: <b> ${ this.preferences.value } </b>\n`

                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                })
                .then((res) => {
                    this.firstName.value = ""
                    this.lastName.value = ""
                    this.phone.value = ""
                    this.instagramName.value = ""
                    this.preferences.value = ""

                    form.reset()
                    const popupActive = document.querySelector('.popup.open')
                    popupActive.classList.remove('open')

                    const popUpConferm = document.querySelector('.popup_confirm')
                    popUpConferm.classList.add('open')
                    setTimeout(() => popUpConferm.classList.remove('open'), 2000)

                    // success.innerHTML = "Reservation done!"
                    // success.style.display = "block"
                })

            })
        } else {
            alert('Please, enter your information!')
        }
    }   

    function formValidate(form) {
        let error = 0
        let formReq = document.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input)


            if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input)
                error++
            } else {
                if (input.value === '') {
                    formAddError (input)
                    error++
                }
            }
        }

        return error
    }
    
    function formAddError(input) {
        input.parentElement.classList.add('._error')
        input.classList.add('_error')
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('._error')
        input.classList.remove('_error')
    }

})






































