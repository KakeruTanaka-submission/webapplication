@extends('app.template')
@section('style')
@parent
<link  rel="stylesheet" href= "{{asset('/css/style_app-1.css')}}">
<link  rel="stylesheet" href= "{{asset('/css/ablImage.css')}}">
@endsection
@section('script')
<script src="{{ asset('/js/script_app-1.js') }}"></script>
@endsection
@section('contents')
<main>
    <p>application</p>
    <!--▼選択補助機能-->
    <div id="selectionAid">
        <input type="radio" name="r" class="check_box" id="none" />
        <label class="label" for="none">不一致</label>
        <input type="radio" name="r" class="check_box" id="sa-le" />
        <label class="label" for="sa-le">leader</label>
        <input type="radio" name="r" class="check_box" id="sa-vo" />
        <label class="label" for="sa-vo">vocal</label>
        <input type="radio" name="r" class="check_box" id="sa-ce" />
        <label class="label" for="sa-ce">center</label>
        <input type="radio" name="r" class="check_box" id="sa-da" />
        <label class="label" for="sa-da">dance</label>
        <input type="radio" name="r" class="check_box" id="sa-vi" />
        <label class="label" for="sa-vi">visual</label>
        <input type="checkbox" class="check_box" id="sa-team1" />
        <label class="label" for="sa-team1">ｲﾙﾐﾈ</label>
        <input type="checkbox" class="check_box" id="sa-team2" />
        <label class="label" for="sa-team2">ｱﾝﾃｨｰｶ</label>
        <input type="checkbox" class="check_box" id="sa-team3" />
        <label class="label" for="sa-team3">放ｸﾗ</label>
        <input type="checkbox" class="check_box" id="sa-team4" />
        <label class="label" for="sa-team4">ｱﾙｽﾄ</label>
        <input type="checkbox" class="check_box" id="sa-team5" />
        <label class="label" for="sa-team5">ｽﾄﾚｲ</label>
        <input type="checkbox" class="check_box" id="sa-team6" />
        <label class="label" for="sa-team6">ﾉｸﾁﾙ</label>
        <input type="checkbox" class="check_box" id="reset" />
        <label class="label" for="reset">リセット</label>
    </div>
    <!--▼メインフォーム-->
    <form action='/app-support' method='POST'>
        @csrf
    @for ($i=1; $i < 66; $i++)
        <input type='checkbox' class='abl' id='ability{{$i}}' name='abl[]' value='ability{{$i}}'>
    @endfor
        <br>
        <input type='submit' id='button' value='決　定'>
    </form>
</main>
@endsection