$(document).ready(function() {
    $('.button').on('click', function() {
        $('.button').removeClass('active');
        $(this).toggleClass('active');
    });

    $('#pay').on('click', function() {
        let activeButton = $('.payments').find('.active')[0];
        let activeButtonId = activeButton.id;
        switch (activeButtonId) {
            case 'debit':
                let meAmt = parseInt($('.mamt').text());
                let amount = parseInt($('#amount').val());
                if(isNaN(amount)) {
                    showError('Empty amount field');
                    return; 
                }
                let aAmt = parseInt($('.aamt').text());
                if(amount > meAmt) {
                    showError('Insufficient balance');
                    return;
                }
                new Noty({
                    theme: 'bootstrap-v3',
                    type: 'info',
                    text: '<b>Submitted!<b></br><span>Id = ' + uuidv4() +'</span>',
                    timeout: false
                }).show();
                $('.mamt').text(meAmt - amount);
                $('.aamt').text(aAmt + amount);
                break;
            case 'ethereum':
                let txHash = '0x758ea36301f2046d24cff2464b28c8b70e05c54170a4cba5d6e64c2dc01b2392';
                $('.overlay').css("display", "flex").hide().fadeIn(400, 'linear');
                setTimeout(function() {
                    $('.overlay').fadeOut(400, 'linear');
                    new Noty({
                        theme: 'bootstrap-v3',
                        type: 'info',
                        text: '<b>Submitted!<b></br><span>Id = ' + txHash +'</span>',
                        timeout: false
                    }).show();
                }, 5000);
            break;
        }
    })

    resizeOverlay();

    var width = $(window).width();
    $(window).resize(function(){
        if($(this).width() != width){
            width = $(this).width();
            resizeOverlay();
        }
    });


});

uuidv4 = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

showError = function (errorMsg) {
    new Noty({
        theme: 'bootstrap-v3',
        type: 'error',
        text: '<b>Error!<b></br><span>' + errorMsg + '</span>',
        timeout: false
    }).show();
}

resizeOverlay = function() {
    $(".overlay").resize().each(function() {
        var h = $(this).parent().outerHeight();
        var w = $(this).parent().outerWidth();
        $(this).css("height", h);
        $(this).css("width", w);
    });
};