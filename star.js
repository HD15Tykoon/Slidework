var scroller = document.querySelector('.scroller');
var headers = document.getElementsByTagName('header');
var logo = document.getElementsByClassName('logo');
var TextArea = document.getElementsByClassName('sweetText')[0];

document.addEventListener('scroll', () => {
    let scrolled = document.scrollingElement.scrollTop;          //On Scroll set the document's Scroll from top property;
    let logoText = document.getElementsByClassName('logoText');  //Text Inside the actual logo
    let headerHeight = 20; //                                    Actual height of header in vh
    let logoHeight = 10; //                                      Actual height of logo in vh
    let logoWidth = 26; //                                       Actual width of logo in vh

    if (scrolled >= 5) {
        if (scrolled <= 50) {
            document.getElementsByClassName('companyName')[0].style.marginLeft = -scrolled - 10 + 'px';
        }
        $('.companyName').animate({
            display: 'none',
            opacity: '0'
        }, 1);
    } else {
        $('.companyName').animate({
            margin: '0px',
            display: 'inline',
            opacity: '1'
        }, 1);
    }
    if (scrolled <= 400) {
        headerHeight -= scrolled / 50;
        logoHeight -= scrolled / 80;
        logoWidth -= scrolled / 30;
        headers[0].style.height = headerHeight + 'vh';
        headers[0].style.background = 'rgba(10,10,15,'+scrolled/500+')';
        $('.logo').css({
            height: logoHeight + 'vh',
            width: logoWidth + 'vh'
        });
        document.getElementsByClassName('sweetText')[0].style.transform = 'translateY('+scrolled/4+'%)';
        logo[0].style.background = 'rgb('+scrolled/2+','+scrolled/2+','+scrolled/2+')';
        logoText[0].style.fontsize = (scrolled / 150) + 'vh';
    }
});