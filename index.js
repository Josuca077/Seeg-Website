function redirectToLink () {
    window.open('https://wa.me/message/QWQXAQAV4WG2I1')
}

document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', redirectToLink)})

document.querySelectorAll('.more-info').forEach(btn => {
    btn.addEventListener('click', redirectToLink)})

document.getElementById('contact-btn').addEventListener('click', redirectToLink)