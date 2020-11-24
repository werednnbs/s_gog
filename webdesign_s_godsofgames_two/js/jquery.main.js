// Created by Wered $

// Slider
$(document).ready(function()
{

var t=setInterval(function(){avanzar();},3000);

	$('#button_slider_one').click(function()
	{
		var size = $('#slider').find('.image_slider').size();
		$('#slider').find('.image_slider').each(
			function(index,value)
			{
				$(value).slideUp();
				if($(value).hasClass('i_visible'))
				{
					$(value).removeClass('i_visible');
					$($('#slider').find('.image_slider').get(0)).slideDown();
					$($('#slider').find('.image_slider').get(0)).addClass('i_visible');	
					return false;
				}
				else
				{
					$(value).removeClass('i_visible');
					$($('#slider').find('.image_slider').get(0)).slideDown();
					$($('#slider').find('.image_slider').get(0)).addClass('i_visible');
					return false;
				}
		});
	});

	$('#button_slider_two').click(function()
	{
		var size = $('#slider').find('.image_slider').size();
		$('#slider').find('.image_slider').each(
			function(index,value)
			{
				$(value).slideUp();
				if($(value).hasClass('i_visible'))
				{
					$(value).removeClass('i_visible');
					$($('#slider').find('.image_slider').get(1)).slideDown();
					$($('#slider').find('.image_slider').get(1)).addClass('i_visible');	
					return false;
				}
				else
				{
					$(value).removeClass('i_visible');
					$($('#slider').find('.image_slider').get(1)).slideDown();
					$($('#slider').find('.image_slider').get(1)).addClass('i_visible');
					return false;
				}
		});
	});

	$('#button_slider_tree').click(function()
	{
		var size = $('#slider').find('.image_slider').size();
		$('#slider').find('.image_slider').each(
			function(index,value)
			{
				$(value).slideUp();
				if($(value).hasClass('i_visible'))
				{
					$(value).removeClass('i_visible');
					$($('#slider').find('.image_slider').get(2)).slideDown();
					$($('#slider').find('.image_slider').get(2)).addClass('i_visible');
					return false;
				}
				else
				{
					$(value).removeClass('i_visible');
					$($('#slider').find('.image_slider').get(2)).slideDown();
					$($('#slider').find('.image_slider').get(2)).addClass('i_visible');
					return false;
				}
		});
	});


	// Info news
	$('#menu_one_notice').click(function()
	{
		var size = $('#info_notice').find('.element_notice').size();
		$('#info_notice').find('.element_notice').each(
			function(index,value)
			{
				$(value).slideUp();
				if($(value).hasClass('n_visible'))
				{
					$(value).removeClass('n_visible');
					$($('#info_notice').find('.element_notice').get(0)).slideDown();
					$($('#info_notice').find('.element_notice').get(0)).addClass('n_visible');
					return false;
				}
		});
	});

	$('#menu_two_notice').click(function()
	{
		var size = $('#info_notice').find('.element_notice').size();
		$('#info_notice').find('.element_notice').each(
			function(index,value)
			{
				$(value).slideUp();
				if($(value).hasClass('n_visible'))
				{
					$(value).removeClass('n_visible');
					$($('#info_notice').find('.element_notice').get(1)).slideDown();
					$($('#info_notice').find('.element_notice').get(1)).addClass('n_visible');	
					return false;
				}
				else
				{
					$(value).removeClass('n_visible');
					$($('#info_notice').find('.element_notice').get(1)).slideDown();
					$($('#info_notice').find('.element_notice').get(1)).addClass('n_visible');
					return false;
				}
		});
	});

	$('#menu_tree_notice').click(function()
	{
		var size = $('#info_notice').find('.element_notice').size();
		$('#info_notice').find('.element_notice').each(
			function(index,value)
			{
				$(value).slideUp();
				if($(value).hasClass('n_visible'))
				{
					$(value).removeClass('n_visible');
					$($('#info_notice').find('.element_notice').get(2)).slideDown();
					$($('#info_notice').find('.element_notice').get(2)).addClass('n_visible');	
					return false;
				}

		});
	});

	// Info Social
	$('#menu_one_social').click(function()
	{
		var size = $('#info_social').find('.element_social').size();
		$('#info_social').find('.element_social').each(
			function(index,value)
			{
				$(value).slideUp();
				if($(value).hasClass('s_visible'))
				{
					$(value).removeClass('s_visible');
					$($('#info_social').find('.element_social').get(0)).slideDown();
					$($('#info_social').find('.element_social').get(0)).addClass('s_visible');
					return false;
				}
		});
	});

	$('#menu_two_social').click(function()
	{
		var size = $('#info_social').find('.element_social').size();
		$('#info_social').find('.element_social').each(
			function(index,value)
			{
				$(value).slideUp();
				if($(value).hasClass('s_visible'))
				{
					$(value).removeClass('s_visible');
					$($('#info_social').find('.element_social').get(1)).slideDown();
					$($('#info_social').find('.element_social').get(1)).addClass('s_visible');	
					return false;
				}
		});
	});

	// Info media
	$('#menu_one_media').click(function()
	{
		var size = $('#info_media').find('.element_media').size();
		$('#info_media').find('.element_media').each(
			function(index,value)
			{
				$(value).slideUp();
				if($(value).hasClass('m_visible'))
				{
					$(value).removeClass('m_visible');
					$($('#info_media').find('.element_media').get(0)).slideDown();
					$($('#info_media').find('.element_media').get(0)).addClass('m_visible');
					return false;
				}
		});
	});

	$('#menu_two_media').click(function()
	{
		var size = $('#info_media').find('.element_media').size();
		$('#info_media').find('.element_media').each(
			function(index,value)
			{
				$(value).slideUp();
				if($(value).hasClass('m_visible'))
				{
					$(value).removeClass('m_visible');
					$($('#info_media').find('.element_media').get(1)).slideDown();
					$($('#info_media').find('.element_media').get(1)).addClass('m_visible');	
					return false;
				}
		});
	});

});

function avanzar()
{
		var size = $('#slider').find('.image_slider').size();
		$('#slider').find('.image_slider').each(
			function(index,value)
			{
				$(value).slideUp();
				if($(value).hasClass('i_visible'))
				{
					if(index+1<size)
					{
						$(value).removeClass('i_visible');
						$($('#slider').find('.image_slider').get(index+1)).slideDown();
						$($('#slider').find('.image_slider').get(index+1)).addClass('i_visible');
						return false;
					}
					else
					{
						$(value).removeClass('i_visible');
						$($('#slider').find('.image_slider').get(0)).slideDown();
						$($('#slider').find('.image_slider').get(0)).addClass('i_visible');
						return false;
					}
				}
		});
}