$(function() {
  $('body').on('click', '.h-add', function() {
    var _this = $(this);
    $.ajax({
      url: '/add',
      type: 'POST',
      dataType: 'json',
      data: {
        item: _this.prev().val()
      }
    }).done(function(res) {
    });
  });
});
