$(document).ready(function() {
    $('#chat-form').submit(function(e) {
        e.preventDefault();
        
        const userInput = $('#chat-input').val();
        $('#chat-output').append(`<p><strong>You:</strong> ${userInput}</p>`);
        
        $.ajax({
            url: '/ask',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({input: userInput}),
            success: function(response) {
                $('#chat-output').append(`<p><strong>Bot:</strong> ${response.response}</p>`);
            },
            error: function(error) {
                $('#chat-output').append('<p><strong>Bot:</strong> Sorry, something went wrong.</p>');
            }
        });
        
        $('#chat-input').val('');
    });
});
