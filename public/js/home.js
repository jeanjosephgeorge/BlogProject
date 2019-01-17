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
        category: $('#categoryID').val()
        
    })
});

    // $('#category-id').submit(function(e){
    //     e.preventDefault();
    // })
    // $('#comment-id').submit(function(e){
    //     e.preventDefault();
    // })

    console.log('hello world');
});