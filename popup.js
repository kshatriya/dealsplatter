function getDeals()
{
	var search = $('#search').val();
	$.ajax({
			url : 'http://dealsplatter.com/api/search.php?q='+search,
			type : 'POST',
			success: function(data) {
				$('#deals').html('');
				var result = eval('('+data+')');
				//$('#deals').html(deals);
				
				for (var i = 0; i < result.length || i <= 50; i++)
				{
					$('#deals').append('<div id="deals_'+i+'"><a href="http://dealsplatter.com/deal/'+result[i].id+'/">'+result[i]['title']+'</a></div><br/><br/>');
				}
			}
		});
}