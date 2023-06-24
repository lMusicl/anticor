(function () {
    const StoAnti = {
        galleryPoint: null,
        galleryImage: null,
        galleryPrev: null,
        galleryNext: null,
        galleryCount: 0,

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

            //скрипт анимации при скроле
            let wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animate__animated',
                offset: 200,
                mobile: true,
                live: true
            })
            wow.init();
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
                this.feedbackPoint[i].addEventListener("click", function() {
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
            this.galleryPoint = $('.slider__points__item2');
            this.galleryImage = $('.gallery-image').eq(0);
            this.galleryPrev = $('#prev');
            this.galleryNext = $('#next');

            that = this;
            for (let i = 0; i < this.galleryPoint.length; i++) {
                this.galleryPoint[i].addEventListener("click", function() {
                    that.galleryCount = i;
                    that.galleryPoint.removeClass("active__point");
                    that.galleryPoint.eq(i).addClass("active__point");
                    that.galleryImage.attr("src", "imgs/gallery/" + (i + 1) + ".png");
                });
            }

            this.galleryPrev.click(() => {
                that.galleryPoint.eq(that.galleryCount).removeClass("active__point");
                if (that.galleryCount === 0) {
                    that.galleryCount = 9;
                } else {
                    that.galleryCount -= 1;
                }
                that.galleryPoint.eq(that.galleryCount).addClass("active__point");
                that.galleryImage.attr("src", "imgs/" + (that.galleryCount + 1) + ".png");
            })

            this.galleryNext.click(() => {
                that.galleryPoint.eq(that.galleryCount).removeClass("active__point");
                if (that.galleryCount === 9) {
                    that.galleryCount = 0;
                } else {
                    that.galleryCount += 1;
                }
                that.galleryPoint.eq(that.galleryCount).addClass("active__point");
                that.galleryImage.attr("src", "imgs/" + (that.galleryCount + 1) + ".png");
            })


            new Swiper('.swiper-container', {

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                loop: true,

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
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
                this.navElement[i].addEventListener("click", function() {
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
    }

    StoAnti.init();
})();
