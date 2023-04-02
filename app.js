
$('#inp').keypress(function (e) {
   
    if (e.which === 13) {
        const todoText = $('#inp').val();
        $('#list').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`);
        $('#inp').val("");
    }
   
})


$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed')
});

$('#list').on('click', 'span', function (e) {
    
    $(this).parent().fadeOut(700, function () {
        $(this).remove();
    });

    e.stopPropagation();
});

$('#plus').click(function () {
    $('#inp').fadeToggle();
})