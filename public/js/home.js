$(function(){
    $('#author-id').submit(function(e){
        e.preventDefault();

        $.post('/author', {
            fname: $('#fnameID').val(),
            lname: $('#lnameID').val(),
            bio: $('#bioID').val(),
            imagepath: $('#imageID').val()

        });
    })
    // $('#blog-id').submit(function(e){
    //     e.preventDefault();
    // })
    // $('#category-id').submit(function(e){
    //     e.preventDefault();
    // })
    // $('#comment-id').submit(function(e){
    //     e.preventDefault();
    // })

    console.log('hello world');
});