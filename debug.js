document.body.addEventListener('keydown', (e) => {
    if (e.key == 'd') {
        alert(JSON.stringify(settings, null, 4))
    }
})