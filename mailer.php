<?php
 
	// 只处理 POST 请求
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		// 获取表单字段并删除空白
		$name = trim($_POST["name"]);
		$email = trim($_POST["email"]);
		$message = trim($_POST["message"]);
 
		// 检查要发送邮件的数据
		if ($name == "" OR $email == "" OR $message == "") {
			// 设置一个400（错误请求）响应代码并退出
			http_response_code(400);
			echo "Oops! All fields are required. Please try again";
			exit;
		}
 
		// 设置收件人的电子邮件地址
		// 请修改为你自己的接受邮件地址
		$recipient = "sabrina.jiang813@gmail.com";
 
		// 设置电子邮件的主题
		$subject = "Personal Website message from $name ";
 
		// 建立电子邮件内容
		$email_content = "Name: $name\n";
		$email_content .= "Email: $email\n\n";
		$email_content .= "Message:\n$message\n";
 
		// 建立电子邮件标头
		$email_headers = "From: $name <$email>";
 
		// 发送邮件
		if (mail($recipient, $subject, $email_content, $email_headers)) {
			// 设置200（成功）响应代码
			http_response_code(200);
			echo "Thank you for your message.";
		} else {
			// 设置500（内部服务器错误）响应代码
			http_response_code(500);
			echo "Oops，something is wrong. Your message can not be sent.";
		}
 
	} else {
		// 不是一个POST请求，设置一个403（禁止）响应代码
		http_response_code(403);
		echo "There is a mistake. Please try again.";
	}
 
?>