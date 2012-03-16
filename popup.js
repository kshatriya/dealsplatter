function getDeals()
{
	$("body").css("overflow", "hidden");
	
	var search = $('#search').val();
	$.ajax({
			url : 'http://dealsplatter.com/api/search.php?q='+search,
			type : 'POST',
			success: function(data) {
				$('#deals').html('');
								
				var result = eval('('+data+')');
				$('#deals').append('<ul id="deal_list">');			
				for (var i = 0; i < result.length || i <= 50; i++)
				{
					$('#deal_list').append('<li><a target="_blank" href="http://dealsplatter.com/deal/'+result[i]['id']+'/">'+result[i]['title']+'</a></li>');
				}
				//$('#deals').append('</ul>');
			}
		});
//$('#deals').slimscroll({color: '#000',size: '5px'});
}