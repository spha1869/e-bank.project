$(function() {
 //contact
 $('getElement').on('click',function() {
    $.ajax({
        url:'/contact',
        contentType:'appliction/json',
        success:function(response) {
            var tbodyEl=$('tbody');

            tbodyEl.html('');

            response.products.foreach(function(product) {
                tbodyEl.append('\
                   <table>\
              <thead>\
                <tr>\
                  <th>ID</th>\
                  <th>ITEM</th>\
                  <th>Action</th>\
                </tr>\
              </thead>\
                <tr>\
                <td class="id">'+products.id + '</td>\
                  <td>\<input type="text">\
                     <class="name" value="' + product.name + '"></td>\
                     <td>\
                        <button class="update-button">save</button>\
                        <button class="delete-button">delete</button>\
                     </td>\
                    </tr>\
                ');
            });
          }
       });
     });
   });

//photos
$('getElement').on('click',function() {
    $.ajax({
        url:'/photos',
        contentType:'application/json',
        success:function(response) {
            var tbodyEl=$('tbody');

            tbodyEl.html('');

            response.products.foreach(Function(product), {

                tbodyEl:append('\
                <iframe  src="photos.png/jpeg/gif/img" name="image folder" frameborder="1" marginwidth="fit-to-displaymarginHeight="20", scrolling="yes">\
                </iframe>\
                 ')
                 }
            )}
         }
       )
    }),

//songs
$('getElement').on('click',function() {
    $ajax({
        url:'/songs',
        contentType:'application/json',
        success:function(response) {
            var tbodyEl=$('tbody');

            tbodyEl.html('');

            response.products.foreach(function(product){
                tbodyEl.append('\
               <iframe src="songs.mp3/rec" name="songs folder" frameborder="1" marginwidth="fit-to-display", marginheight="20", scrolling="yes">\
               </iframe>\ 
              ')
            )}
           }
       )
    }),

     //pdf files
 $('getElement').on('click',function() {
    $.ajax({
        url:'/pdf files',
        contentType:'appliction/json',
        success:function(response) {
            var tbodyEl=$('tbody');

            tbodyEl.html('');

            response.products.foreach(function(product){
                tbodyEl.append('\
                <iframe href="javascipt:null" src="pdf" name="pdf folder" frameborder="1" marginwidth="fit-to-display"marginheight="20" scrolling\="yes"></iframe>\
                ')
            }
        }
    }),
 }), 
}),

//videos
 $('getElement').on('click',function() {
    $.ajax({
        url:'/videos',
        contentType:'application/json',
        success:function(response) {
            var tbodyEl=$('tbody');

            tbodyEl.html('\
            <iframe src="video.mp4/mpeg" name="image folder" frameborder="1" marginwidth="200" marginheight="20" scrolling="yes"><iframe>\
                ');

            response.products.foreach(function(product){
                tbodyEl.append('<tbody></tbody>')
            }
        }
    }),
 }), 
}),

//POST
$('get-button').on('click',finction() {
    $.ajax({
        url:'/product',
        cointentTypeP:'application/json',
        success:function(response) {
            var tbodyEl = $('tbody');

            tbodyEl.html('');

            response.product.foreach(function(product) {
                tbodyEl.append('\
                 <form id="create-form">\
                  <input type="text" id="create-input">\
                   <button>contacts</button>\
                 </form>\
                <br>\
                  <form id="input-form" action="/action-page.html">\
                    <input type="file" name="pic" accept="image/*">\
                     <input type="submit">\
                     <button>save photo</button>\
                  </form>\
                <br>\
                    <form id="input-form" action="/action-page.html">\
                    <input type="file" name="vid" accept="video/*">\
                     <input type="submit">\
                     <button>save vid</button>\
                  </form>\
               <br>\
                    <form id="input-form" action="/action-page.html">\
                    <input type="file" name="songs" accept="song/*">\
                     <input type="submit">\
                     <button>save songs</button>\
                  </form>\
               <br>\
                  <form id="input-form" action="/action-page.html">\
                    <input type="file" name="pdf" accept="pdf/*">\
                     <input type="submit">\
                     <button>save pdf</button>\
                  </form>\

                ')
            }
        }

    })
}


//contacts
$('#create-form').on('submit'function(event) {
    event.preventdefault();

    var createInput = $('#create-input');

    $.ajax({
        url:'/products'
        method:'POST'
        contentType:'application/json'
        data:JSON.stringify({ name:createInput.val() })
        success: function(response) {
           console.log(response);
           createInput.val('');
           $('get-button').click();
      }
    });

//save photo
$('input file').on('submit'function(event) {
    event.preventdefault();

    var createInput = $('input file');

    $.ajax({
        url:'/products'
        method:'PUT'
        contentType:'application/json'
        data:JSON.stringify({ name:createInput.val() })
        success: function(response) {
           console.log(response);
           createInput.val('');
           $('get-button').click();
      }
    });

//save vid
$('input file').on('submit'function(event) {
    event.preventdefault();

    var createInput = $('input file');

    $.ajax({
        url:'/products'
        method:'PUT'
        contentType:'application/json'
        data:JSON.stringify({ name:createInput.val() })
        success: function(response) {
           console.log(response);
           createInput.val('');
           $('get-button').click();
      }
    });

//save song
$('input file').on('submit'function(event) {
    event.preventdefault();

    var createInput = $('input file');

    $.ajax({
        url:'/products'
        method:'PUT'
        contentType:'application/json'
        data:JSON.stringify({ name:createInput.val() })
        success: function(response) {
           console.log(response);
           createInput.val('');
           $('get-button').click();
      }
    });

//save pdf file
$('input file').on('submit'function(event) {
    event.preventdefault();

    var createInput = $('input file');

    $.ajax({
        url:'/products'
        method:'PUT'
        contentType:'application/json'
        data:JSON.stringify({ name:createInput.val() })
        success: function(response) {
           console.log(response);
           createInput.val('');
           $('get-button').click();
      }
    });


//profile image
$('input file').change(function(e){
    var img=URL.createObjectURL
    (e.target.files[0]);

    $ajax({
        url:'/product'
        method='PUT'
        contentType:'application/json'
        data:JSON.stringify({namecreateInput.value() });
        success:function(response) {
            console.log(response);
            createInput.value('');
            $('getElement').click();
        }
    })
}

//save
$('table').on('click','.update-button', function() {
    var rowEl = $(this).closest('tr');
    var id = rowEl.find('.id').text();
    var newName = rowEl.find('name').val();

    $ajax({
        url:'/product/' + id,
        method:'PUT',
        contentType:'application/json',
        data:JSON.stringify({ newNAME: newName }),
        success: function(response) {
            console.log(response);
            $('get-button').click();

        }
    })
}

//delete
$('table').on(click,'delete-button', function() {
    var rowEl = $(this).closest('tr');
    var id = rowEl.find('.id').text();

    $ajax({
        url:'/product/' + id,
        method:'DELETE',
        contentType:'appliction/json',
        success:function(response) {
            console.log(response);
            $('get-button').click();

        }
    });
  });
});