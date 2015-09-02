
	// 获取表单
	var form = $('#ajax-contact');
 
	// 获取显示消息的div
	var formMessages = $('#form-messages');
 
	// 为联系表单创建事件监听
	$(form).submit(function(e) {
		// 阻止浏览器直接提交表单
		e.preventDefault();
 
		// 序列化表单数据
		var formData = $(form).serialize();
 
		// 使用AJAX提交表单
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// 确保formMessages的div有“success”这个类
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
 
			// 设置消息文本
			$(formMessages).text(response);
 
			// 清除表单
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// 确保formMessages的div有“error”这个类
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
 
			// 设置消息文本
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! Please try again.');
			}
		});
 
	});
 