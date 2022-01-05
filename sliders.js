var slider = document.getElementById('FocalSlider');
noUiSlider.create(slider, {
    start: [15, 25, 35, 65, 85],
    connect: false,
    range: {
        'min': 0,
        'max': 100
    }
});



slider.noUiSlider.on('update', function (values, handle) {
    pos = slider.noUiSlider.getPositions();
    settings.principle.Fl = pos[2]
    settings.object.x = pos[1]
    settings.principle.Fr = pos[3]
    settings.principle.F2l = pos[0]
    settings.principle.F2r = pos[4]
    drawStuff(settings.object, settings.lens, settings.principle)
});

