$('#submit').on('click', function (event) {
    console.log('Hello');
    event.preventDefault();

    if (validateForm()) {
        var userData = {
            name: $('#name').val().trim(),
            photo: $("#photo").val().trim(),
            scores: [
                $('#q1').val(),
                $('#q2').val(),
                $('#q3').val(),
                $('#q4').val(),
                $('#q5').val(),
                $('#q6').val(),
                $('#q7').val(),
                $('#q8').val(),
                $('#q9').val(),
                $('#q10').val(),
            ]
        };
        // console.log(userData);
        $.post('/api/friends', userData, function (data) {
            console.log(data);
            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#match-name").text(data.nameMatch);
            $("#match-img").attr("src", data.imgMatch);

            // Show the modal with the best match
            $("#results-modal").modal("toggle");

        });
    } else {
        alert('Required Fields');
    }

});

function validateForm() {
    $('.form-control').each(function () {
        // console.log('-----Form Control------')
        // console.log($(this).val());
        if ($(this).val() === '') {
            return false;
        }
    });

    $('.chosen-select').each(function () {
        // console.log('-----Chosen Select------')
        // console.log($(this).val());

        if ($(this).val() === '') {
            return false;
        }
    });
    return true;
}