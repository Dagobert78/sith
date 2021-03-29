$(function(){
    
   let currentPhoto = 0;
    let imagesData = [
        {
            photo: 'images/darth-raven.jpg',
            title: 'Darth Raven',
            description: 'Revan hagyatéka egy holokron, amit később Darth Bane talál meg és ez alapján jön létre a Kettő Szabálya.'
        },
        {
            photo: 'images/darth-nihilus.jpg',
            title: 'Darth Nihilus',
            description: 'Másik nevén az "Éhség Nagyura". A Sith Triumvirátus tagja. Bolygókat falt fel, hogy csökkentse éhségét.'
        },
        {
            photo: 'images/darth-bane.png',
            title: 'Darth Bane',
            description: 'A kettő szabályának megalkotója: "Egyszerre mindig csak kettő létezhet, egy mester és egy tanítvány. Sem több, sem kevesebb. Az egyik, hogy birtokolja a hatalmat, a másik, hogy sóvárogjon a hatalom után!"'
        },
        {
            photo: 'images/darth-plagueis.jpeg',
            title: 'Darth Plagueis',
            description: 'Eredeti neve Hego Damask, a muun fajhoz tartozó férfi. Az örök élet lehetőségét kutatta a midikloriánok irányításával'
        },
        {
            photo: 'images/palpatine.jpg',
            title: 'Darth Sidious',
            description: 'A Naboo-n született, Sheev Palpatine néven. Mestere, Darth Plagueis, segítségével főkancellárrá válsztják a klónok háborújának idején. Ezen az estén öli meg mesterét.'
        },
        {
            photo: 'images/darth_vader.jpg',
            title: 'Darth vader',
            description: 'Született Anakin Skywalker. Későbbi források megerősítették, hogy majdani mestere, Darth Sidious, egy erőgömböt hozott létre az anyjában a midikloriánok segítsével, és így termékenyítette meg a nőt.'
        },
        {
            photo: 'images/darth-maul1.jpg',
            title: 'Darth Maul',
            description: 'Apja zabrak, anyja Éjnővér volt, aki Palpatinnak adta gyermekét, hogy mágia nélkül nőljön fel. Palpatin fegyvernek nevelte a gyereket, aki később az alvilág egyik feje lett.'
        },
        
    ];
        
    let loadPhoto = (photoNumber) => {
        $('#photo').attr('src', imagesData[photoNumber].photo);
        $('#photo-title').text(imagesData[photoNumber].title);
        $('#photo-description').text(imagesData[photoNumber].description);

    }

    loadPhoto(currentPhoto);

    $('#left').click(() => {
        if(currentPhoto>0){
            currentPhoto--;
        }   else {
            currentPhoto = imagesData.length-1
        }
        loadPhoto(currentPhoto);
    })

    $('#right').click(() => {
        if(currentPhoto<imagesData.length-1){
            currentPhoto++;
        }   else{
            currentPhoto = 0;
        }
        loadPhoto(currentPhoto);
    })

    imagesData.forEach((item, index) => {
        $('#thumbnails').append(`<div class="thumbnail" data-number="${index}">
                                    <img src="${item.photo}" data-number="${index}" alt="">
                                </div>`)
        $('.thumbnail').click((event) => {
            let betolt = parseInt($(event.target).attr('data-number'))
            loadPhoto(betolt)
        })                        
    })

    imagesData.forEach((item, index) => {
        $('#thumbnails').append(`<div class="title" data-number="${index}">${item.title}</div>`)
        })

    $('.thumbnail').mouseover((event) => {
        let betolt = parseInt($(event.target).attr('data-number'))

       let offst = $(`.thumbnail[data-number=${betolt}]`).offset().top -35
       let offsl = $(`.thumbnail[data-number=${betolt}]`).offset().left -15

        $(`.title[data-number=${betolt}]`).css('position', 'absolute')

        $(`.title[data-number=${betolt}]`).show().offset({top:offst, left:offsl})
    })

    $('.thumbnail').mouseout((event) => {
        let elvesz = parseInt($(event.target).attr('data-number'))
        $(`.title[data-number=${elvesz}]`).hide() 
    })  


})