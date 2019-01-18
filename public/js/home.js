$(function(){
    $('#author-id').submit(function(e){
        e.preventDefault();

        $.post('/author', {
            fname: $('#fnameID').val(),
            lname: $('#lnameID').val(),
            bio: $('#bioID').val(),
            imagepath: $('#imageID').val()

        });
    });

    $('#blog-id').submit(function(e){
        e.preventDefault();

        $.post('/blogs', {
            title: $('#blogID').val(),
            content: $('#contentID').val(),
            date_written: $('#createdateID').val(),
            private: $('#privateID').val()
        });
    });

$('#category-id').submit(function(e){
    e.preventDefault();

    $.post('/category',{
        username: $('#categoryID').val()        
    })
});


$('#comment-id').submit(function(e){
    e.preventDefault();

    $.post('/comment',{
        username: $('#usernameID').val(),
        comment: $('#commentID').val()
    })
});

});