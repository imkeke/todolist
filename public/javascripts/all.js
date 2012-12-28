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
      if (res.succ) {
        if ($('tbody').find('tr').length) {
          var id = parseInt($('tbody').find('tr').last().data('id')) + 1;
        } else {
          var id = 0;
        }
        var html = $('<tr data-id="'+id+'"><td>'+id+'</td><td>'+res.data+'</td><td><a href="javascript:;" class="btn btn-mini btn-primary h-del">已完成</a></td></tr>');
        $('tbody').append(html);
        _this.prev().val('');
      }
    });
  });

  $('body').on('click', '.h-del', function() {
    var _this = $(this);
    $.ajax({
      url: '/del',
      type: 'POST',
      dataType: 'json',
      data: {
        item: _this.parent().prev().text()
      }
    }).done(function(res) {
      if (res.succ) {
        window.location.reload();
      }
    });
  });
});
