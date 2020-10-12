<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @section('style')
    <link  rel="stylesheet" href= "{{asset('/css/template.css')}}">        
    @show
    <!--jQuery CDN-->
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <title>application</title>
</head>
@include('components.header')
@section('menubar')
<div id="grovalnav">
    <!--ナビゲーション-->
    <div class="wiki-nav">
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="/abl-choise">APP</a></li>
            <li><a href="#">comming soon</a></li>
            <li>
                <a href="#">comming soon</a>
            </li>
            <li>
                <a href="#">comming soon</a>
            </li>
        </ul>
    </div>
</div>
@show
<body>
    @yield('contents')
    @yield('script')
</body>
@include('components.footer')
</html>