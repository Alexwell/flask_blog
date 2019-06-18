$(document).ready(function () {

    $('#test_js').hover(function () {
        console.log('Hovered! jQuery work!');
    });

    $('#take_list').click(function () {
        console.log('test');
        requestUsersList();
    });


    function requestUsersList() {
        $.post('/request_users_list', {
            test_param_str: 'Hello from Front End',
            test_param_number: 777,
            test_param_bull: true
        }).done(function (response) {
            $('#list_container').text(response['text'])
        }).fail(function () {
            $('#list_container').text('No response from Back End')
        })
    }

});

