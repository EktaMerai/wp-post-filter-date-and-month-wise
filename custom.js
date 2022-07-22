jQuery('.arc_click').click(function(e) {
	e.preventDefault();
	console.log("arc click");
	
	jQuery('.arc_click.active_month').removeClass('active_month');
    jQuery(this).addClass('active_month');
    
	
	var cat_id = jQuery(this).attr("data-cat");
	var year = jQuery(this).attr("data-year");
	var month_nub = jQuery(this).attr("data-month_nub");
	var month_str = jQuery(this).attr("data-month_str");
    jQuery.ajax({
        type: 'POST',
        url: '/wp-admin/admin-ajax.php',
        dataType: 'html',
        data: {  cat_id:cat_id,year:year,month_nub:month_nub,month_str:month_str,'action': 'tab_filter' },
        success: function(res) {
           jQuery('.filter_data_res').html(res);
        }
    })
});				
