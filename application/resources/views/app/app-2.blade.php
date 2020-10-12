@extends('app.template')
@section('style')
@parent
<link  rel="stylesheet" href= "{{asset('/css/style_app-2.css')}}">
<link  rel="stylesheet" href= "{{asset('/css/ablImage.css')}}">
<link  rel="stylesheet" href= "{{asset('/css/changeImage.css')}}">
@endsection
@section('script')
<!--コントローラーから送られた配列をjsへ-->
<script>var abl = @JSON($abl);</script>
<script src="{{ asset('/js/script_app-2.js') }}"></script>
@endsection
@section('contents')
<main>
    <p>application</p>
    <div id="contents">
        <div id="left">
            <!--▼リセットボタン-->
            <div id="selectionAid">
                <input type="checkbox" class="check_box" id="reset" />
                <label class="label" for="reset">リセット</label>
            </div>
            <!--▼チェックボックス-->
            <div id="avility">
            @foreach ($abl as $value)
                <input type='checkbox' class='abl' id={{$value}} name='abl[]' value={{$value}}>
            @endforeach
            </div>
        </div>
        <div id="right">
            <!--▼テーブル-->
            <div id="table">
                <div id="vocal-area">
                    <div class="attribute"><p>vocal</p><hr noshade><p class="num" id="vocalNum"></p></div>
                    <div class="imagecontena" id="vocal-img"></div>
                </div>
                <div id="dance-area">
                    <div class="attribute"><p>Dance</p><hr noshade><p class="num" id="danceNum"></p></div>
                    <div class="imagecontena" id="dance-img"></div>
                </div>
                <div id="visual-area">
                    <div class="attribute"><p>Visual</p><hr noshade><p class="num" id="visualNum"></p></div>
                    <div class="imagecontena" id="visual-img"></div>
                </div>
                <div id="mental-area">
                    <div class="attribute"><p>Mental</p><hr noshade><p class="num" id="mentalNum"></p></div>
                    <div class="imagecontena" id="mental-img"></div>
                </div>
                <div id="ssr-area">
                    <div class="attribute"><p>SSR</p><hr noshade><p class="num" id="ssrNum"></p></div>
                    <div class="imagecontena" id="ssr-img"></div>
                </div>
                <div id="either-area">
                    <div class="attribute"><p>either</p><hr noshade><p class="num" id="eitherNum"></p></div>
                    <div class="imagecontena" id="either-img"></div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection