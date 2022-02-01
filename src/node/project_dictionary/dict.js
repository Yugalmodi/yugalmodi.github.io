$(document).ready(function(){
    $('#submit').click(function(){
        $('#list').html('Searching the word');
        $.post('/getData', {'word':$('#word').val()})
          .done(handelSuccess)
          .fail(handleError)
          .always(handleFinal);
    }); 

    function handelSuccess(searchdata){
        console.log('handelSuccess' +searchdata.data.length);
        var result='';
        if(searchdata.data.length<=0) result+='Word "<b>'+$('#word').val()+'</b>" not found in dictionary';
        $.each(searchdata.data, function(index, value){
            result += (index+1)+"(n.) :: "+ value.definition+'<br><br>';
        });
        $('#list').html(result);
    }
    function handleError(xhr, status, err){
        console.log(err);
        $('#list').html('Oops!! Find some error in Server');
    }
    function handleFinal(){
        console.log('ajax request done');
    }
});