(function () {
    const StoAnti = {
        feedbackPoint: null,
        feedbackCard1: null,
        feedbackCards: null,
        feedbackCard2: null,
        feedbackCard3: null,
        feedbackCount: 1,

        burgerElement: null,
        closeElement: null,
        headerElement: null,

        init() {

            this.feedbackSlider();
            this.gallerySlider();
            this.burger();
            this.scroll();
            this.numberMask();
            this.wow();
            this.sendMessage();
            this.openForm();

        },
        //Слайдер отзывов
        feedbackSlider() {
            this.feedbackPoint = $('.slider__points__item1');
            this.feedbackCards = $('.card__input');
            this.feedbackCard1 = $('.card1').eq(0);
            this.feedbackCard2 = $('.card2').eq(0);
            this.feedbackCard3 = $('.card3').eq(0);

            that = this;
            for (let i = 0; i < this.feedbackPoint.length; i++) {
                this.feedbackPoint[i].addEventListener("click", function () {
                    that.feedbackCards.eq(that.feedbackCount).removeAttr('checked', 'checked');
                    that.feedbackCount = i;
                    that.feedbackCards.eq(that.feedbackCount).attr('checked', 'checked');
                    that.feedbackPoint.removeClass("active__point");
                    that.feedbackPoint.eq(i).addClass('active__point');

                });
            }

            this.feedbackCard1.click(() => {
                this.feedbackPoint.eq(this.feedbackCount).removeClass("active__point");
                this.feedbackCount = 0;
                this.feedbackPoint.eq(this.feedbackCount).addClass("active__point");
            })

            this.feedbackCard2.click(() => {
                this.feedbackPoint.eq(this.feedbackCount).removeClass("active__point");
                this.feedbackCount = 1;
                this.feedbackPoint.eq(this.feedbackCount).addClass("active__point");
            })

            this.feedbackCard3.click(() => {
                this.feedbackPoint.eq(this.feedbackCount).removeClass("active__point");
                this.feedbackCount = 2;
                this.feedbackPoint.eq(this.feedbackCount).addClass("active__point");
            })
        },

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
                $('.header__nav-items2').eq(0).css('display', 'none');
                $('.header__contact').eq(0).css('display', 'none');
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
        sendMessage() {
            $(".footer-form").submit(function () {
                let name = $("#name");
                let number = $("#number");
                let th = $(this);

                if(name.val() && number.val()) {
                    $.ajax({
                        type: 'POST',
                        url: 'send.php',
                        data: th.serialize(),
                        // data: 'name=' + name.val() + '&number=' + number.val(),
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
