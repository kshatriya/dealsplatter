function getDeals()
{
	var search = $('#search').val();
	$.ajax({
			url : 'http://dealsplatter.com/api/search.php?q='+search,
			type : 'POST',
			success: function(data) {
				$('#deals').html('');
				$('#deals').html(data);	
			}
		});
}