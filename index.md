---
layout: default
---

<head>
    <meta charset="utf-8">
    <title>{{ site.name }}</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
    <meta name="description" content="{{ site.description }}">
    <meta name="theme-color" content="#1a1a1a">
    <link rel="icon" href="/assets/icons/favicon.ico">
	<link rel="stylesheet" href="/assets/css/local/style.css">
    <style type="text/css">h1{color: #ccc; max-width: 600px; position: relative; margin: 20px auto;}.onw3d_btn{color: #eee; cursor: pointer; border:1px solid #999; padding:5px 20px; border-radius: 16px; margin-bottom:20px; display: inline-block;}</style>
{% comment %}<!-- <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png">
    <link rel="manifest" href="/manifest.json"> -->
{% endcomment %}
</head>
<body>
	<div class="clearfix header">
		<div class="main-container">
			<div class="website clearfix">
				<a href="/"><img src="assets/icons/logo.png"> {{ site.name }}</a>
			</div>
			<div class="logo">
				<div class="search-form clearfix">
					<form id="searchform1" name="searchform1" action="/" method="get">                    
						<input name="s" type="text" class="srchTxt">
						<input type="submit" class="srchBtn" value="">
					</form>
				</div>
			</div>
		</div>
	</div>
	<!--  -->
	<div class="main-container" id="main">
		<div class="popular-searches clearfix">
		    <h1>Катамаран ПВХ SEA FISHER 480</h1>
			<div class="frame-container">
				<div class="photo-box" data-model="seafisher480"></div>
				<div class="mod-nav" data-bind="template: {name: 'modnav'}"></div>
				<div class="mod3d" data-bind="template: {name: 'mod3d'}"></div>
			</div>
			<div class="btn onw3d_btn" data-model="stream300">STREAM 300 <sup style="color:#999">человек на борту</sup></div>
{% comment %}
			<ul class="clearfix first">
				<li><a href="" title="">3D Models</a></li>
				<li><a href="" title="">Тест кнопка</a></li>
				<li><a href="" title="">Воат АШЫРУК</a></li>
				<li><a href="" title="">лодка FISHER</a></li>
				<li><a href="" title="">3D TRAVEL</a></li>
				<li><a href="" title="">БАМБАРБЕА</a></li>
			</ul>
{% endcomment %}
{% comment %}
			<div class="footer-related clearfix">
				<ul class="clearfix bottom">
					<li class="hdMbN"><span>Похожие товары: </span></li>
					<li><a href="" title="">3D Boat Models</a></li>
					<li><a href="" title="">лодка FISHER</a></li>
					<li><a href="" title="">3D TRAVEL</a></li>
				</ul>
			</div>
{% endcomment %}			
		</div>
		<ul class="privacy clearfix">
			<li><a href="https://boathouse.ua" target="_blank">&copy; boathouse.ua</a></li>
			<li><a href="https://github.com/boathouse/v4" target="_blank"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> github</a></li>
		</ul>
	</div>
{% comment %}
{% for model in site.data.demo %}
    <div class="btn onw3d_btn" data-model="{{ model.model }}">{{ model.name }}</div>
{% endfor %}
{% endcomment %}


<!-- Templates (temporary) -->
<template id="mod3d">
<div class="mod-cont">
    <div class="mod-info">
        <span>Комплектация: <b class="mod-name" data-bind="text: modName"> </b> <i class="mod-price" data-bind="text: '$' + parseInt(modPrice()), visible: modPrice() > 0"></i></span> 
        <span class="more" data-bind="html: moreBtn, click: detailsMode, visible: modName() != baseName"></span>
    </div>
    <div class="mod-details">
        <ol data-bind="foreach: goodsList, visible: modName() != baseName">
            <li><span data-bind="text: name"></span> <span class="good-price" data-bind="text: '$' + parseInt(price)"></span></li>
        </ol>
        <p class="mod-info" data-bind="visible: modName() != baseName">
            <span>Стоимость: <i class="mod-price" data-bind="text: '$' + parseInt(modPrice())"></i></span>
        </p>
    </div>
</div>
</template>

<template id="modnav">
<div class="mod-list" data-bind="foreach: modsList">
    <div data-bind="class: $parent.isActive(), attr: {'data-name': name}">
        <b data-bind="text: name"></b>
    </div>
</div>
</template>

{% comment %}
    style="background-image: url(https://boathouse.ua/{{ model.icon }})"
    <!-- <script>{% include_relative assets/js/onw3d.js %}</script> -->
{% endcomment %}
    <script src="/assets/js/web/onw3d.js"></script>
</body>