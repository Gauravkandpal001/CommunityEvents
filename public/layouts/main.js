$(document).ready(()=>{
    $('#deleteEvent').on('click',(e)=>{
        deleteId=$('#deleteEvent').data('delete');
        $.ajax({
            url:'/events/delete/'+deleteId,
            type:'DELETE',
            success:(result)=>{

            }
        });
        window.location ='/events';
    });
});
