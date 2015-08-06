/**
 * Created by Benjamin on 03-Aug-15.
 */
$(document).ready(function() {
    $('.carousel').carousel({interval: 1350});

    $('#datetimepicker6').datetimepicker({
        viewMode: 'years',
        format: 'DD/MM/YYYY'
    });
    $('#datetimepicker7').datetimepicker({
        viewMode: 'years',
        format: 'DD/MM/YYYY'
    });

    $(".dropdown-menu li a").click(function(){
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
    });
    //$("#datetimepicker6").on("dp.change", function (e) {
    //    $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    //});
    //$("#datetimepicker7").on("dp.change", function (e) {
    //    $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    //});
});