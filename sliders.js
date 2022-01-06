var slider = document.getElementById('FocalSlider');
noUiSlider.create(slider, {
    start: 20,
    connect: true,
    range: {
        'min': 0,
        'max': 25
    }
});
var sliderHeight = document.getElementById('FocalSliderHeight');
noUiSlider.create(sliderHeight, {
    start: 50,
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }

});
sliderHeight.noUiSlider.on('update', function (values, handle) {
    pos = sliderHeight.noUiSlider.getPositions();
    settings.object.height = Math.max(5, pos[0]*4)
    drawStuff(settings.object, settings.lens, settings.principle)
});

slider.noUiSlider.on('update', function (values, handle) {
    pos = slider.noUiSlider.getPositions();
    pos[0]/=4.1
    settings.principle.Fl = 50-pos[0]
    settings.principle.Fr = 50+pos[0]
    settings.principle.F2l = 50-(pos[0]*2)
    settings.principle.F2r = 50+(pos[0]*2)
    drawStuff(settings.object, settings.lens, settings.principle)
});

var sliderObj = document.getElementById('FocalSliderOBJ');
noUiSlider.create(sliderObj, {
    start: 50,
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }

});
sliderObj.noUiSlider.on('update', function (values, handle) {
    pos = sliderObj.noUiSlider.getPositions();
    settings.object.x = Math.max(1, pos[0])
    drawStuff(settings.object, settings.lens, settings.principle)
});



              