(function () {
    const StoAnti = {


        burgerElement: null,
        closeElement: null,
        headerElement: null,

        init() {

            // this.feedbackSlider();
            this.gallerySlider();
            this.burger();
            this.scroll();
            this.numberMask();
            this.wow();
            this.sendFooterMessage();
            this.sendPopUpMessage();
            this.openForm();

        },
        //Слайдер отзывов


        //Слайдер фотографий
        gallerySlider() {
            new Swiper('.mySwiper', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                loop: true,

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                },
            })
        },

        //Скролы по сайту
        scroll() {
            $('#services').on('click', function () {
                $('html').animate({
                    scrollTop: $('#service').offset().top
                }, 800);
            });
            $('#reviews').on('click', function () {
                $('html').animate({
                    scrollTop: $('#feedback').offset().top
                }, 800);
            });
            $('#contacts').on('click', function () {
                $('html').animate({
                    scrollTop: $('#map').offset().top
                }, 800);
            });

            $('#go-up').on('click', function () {
                $('html').animate({
                    scrollTop: $('body').offset().top
                }, 800);
            });

            //появление кнопки вверх после прокрутки первого блока
            $(window).scroll(function(){
                if($(window).scrollTop()>500){
                    $('#go-up').fadeIn(900)
                }else{
                    $('#go-up').fadeOut(900)
                }
            });
        },

        //Нажатие на бургер и закрытие его, работа элементов навигации бургера
        burger() {
            this.burgerElement = $('#burger');
            this.closeElement = $('#close');
            this.navElement = $('.header__nav-item2');

            this.closeElement.click(() => {
                $('.header__contacts').eq(0).css('display', 'none');
                $('.header__nav-items2').eq(0).css('display', 'none');
            })
            this.burgerElement.click(() => {
                $('.header__nav-items2').css('display', 'block');
                $('.header__contacts').css('display', 'block');
            })

            for (let i = 0; i < this.navElement.length; i++) {
                this.navElement[i].addEventListener("click", function () {
                    $('.header__nav-items2').css('display', 'none');
                    $('.header__contacts').css('display', 'none');
                });
            }

            $('#services2').on('click', function () {
                $('html').animate({
                    scrollTop: $('#service').offset().top
                }, 800);
            });
            $('#reviews2').on('click', function () {
                $('html').animate({
                    scrollTop: $('#feedback').offset().top
                }, 800);
            });
            $('#contacts2').on('click', function () {
                $('html').animate({
                    scrollTop: $('#map').offset().top
                }, 800);
            });
        },

        //маска номера телефона
        numberMask() {
            $.mask.definitions['9'] = false;
            $.mask.definitions['2'] = "[0-9]";
            $(".number").mask("+375 (22) 222-22-22");
        },
        //анимация при скроле
        wow() {
            let wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animate__animated',
                offset: 200,
                mobile: true,
                live: true
            })
            wow.init();
        },
        // Отправка письма на почту
        sendFooterMessage() {
            $(".footer-form").submit(function () {
                let name = $("#name");
                let number = $("#number");
                let th = $(this);

                if(name.val() && number.val()) {
                    $.ajax({
                        type: 'POST',
                        url: 'send.php',
                        data: th.serialize(),
                        success: () => {
                            $('#success__message').fadeIn(500);
                            setTimeout(
                                () => {
                                    $('#success__message').fadeOut(500);
                                },
                                4 * 1000
                            );
                            th.trigger("reset");
                        },
                        error: () => {
                            alert('Ошибка заказа обратного звонка!')
                        }
                    });
                    return false;
                } else {
                    alert('Произошла ошибка!');
                }
            })
        },

        sendPopUpMessage() {
            $("#popUpForm").submit(function () {
                let name = $("#popup-name");
                let number = $("#popup-number");
                let th = $(this);

                if(name.val() && number.val()) {
                    $.ajax({
                        type: 'POST',
                        url: 'send.php',
                        data: th.serialize(),
                        success: () => {
                            $('#success__message').fadeIn(500);
                            setTimeout(
                                () => {
                                    $('#success__message').fadeOut(500);
                                },
                                4 * 1000
                            );
                            $('#form-pop-up').fadeOut(300);
                            th.trigger("reset");
                        },
                        error: () => {
                            alert('Ошибка заказа обратного звонка!')
                        }
                    });
                    return false;
                } else {
                    alert('Произошла ошибка!');
                }
            })
        },
        //открытие формы по кнопке/закрытие на крестик
        openForm() {
            $('#call_request').on('click', ()=> {
                $('#form-pop-up').fadeIn(700);
            })
            $('#pop-up-close').on('click', ()=> {
                $('#form-pop-up').fadeOut(300);
            })
        }
    }
    StoAnti.init();
})();
