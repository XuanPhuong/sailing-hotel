/**
 * Created by Benjamin on 03-Aug-15.
 */
$(function() {
    $('#carousel').carouFredSel({
        width: $(window).width(),
        height: $(window).height(),
        align: false,
        items: {
            visible: 1,
            width: 'variable',
            height: 'variable'
        }
    });

    $(window).resize(function() {
        var newCss = {
            width: $(window).width(),
            height: $(window).height()
        };
        $('#carousel').css( 'width', newCss.width);
        $('#carousel').parent().css( newCss );
        $('#carousel div').css( newCss );
    }).resize();

    //$('select#fx').change(function() {
    //    $('#carousel').trigger('configuration', ['auto.fx', $('select#fx').val()]);
    //});
});