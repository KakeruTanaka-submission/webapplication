
function changeCheckbox(id,arr){
    if ($(id).prop('checked')){
        $.each(arr, function(i,value) {
            $("#"+value).prop("checked", true);         
        })
    }else{
        $.each(arr, function(i,value) {
            $("#"+value).prop("checked", false);
        })
    }
}
//補助機能のラジオボタンに対応するチェックボックスを全て未選択にする
function del(){
    $.each(all, function(i,value){$("#"+value).prop("checked", false);});
}
//送信ボタンを押したときチェックボックスが全て未選択の場合アラートを出す
$(function() {
    $('form').submit(function() {
      // もしチェックボックスが空欄だったら
      if($('.abl:checked').val() == null) {
          // 警告を出す
          alert('アビリティが未選択です');
          // 処理を中断
          return false;
      }
    });
});
//補助機能のボタンに対応するチェックボックスのidを配列に格納
var none = ["ability13","ability14","ability41","ability42"];
var leader = ["ability1","ability2","ability11","ability12","ability13","ability14","ability41","ability42"];
var vocal = ["ability3","ability4","ability11","ability12","ability13","ability14","ability41","ability42"];
var center = ["ability9","ability10","ability11","ability12","ability13","ability14","ability41","ability42"];
var dance= ["ability5","ability6","ability11","ability12","ability13","ability14","ability41","ability42"];
var visual = ["ability7","ability8","ability11","ability12","ability13","ability14","ability41","ability42"];
var team1 = ["ability43","ability44","ability45"];
var team2 = ["ability46","ability47","ability48","ability49","ability50"];
var team3 = ["ability51","ability52","ability53","ability54","ability55"];
var team4 = ["ability56","ability57","ability58"];
var team5 = ["ability59","ability60","ability61"];
var team6 = ["ability62","ability63","ability64","ability65"];
//補助機能のラジオボタンに対応するチェックボックスのidを配列に格納
var all = ["ability1","ability2","ability3","ability4","ability5","ability6","ability7","ability8","ability9","ability10","ability11","ability12","ability13","ability14","ability15","ability16"];

$("#reset").on("click",function(){
    $(".abl").prop("checked", false);
    $(".check_box").prop("checked", false);
})
//ラジオボタン
$('#none').on("click",function(){del();changeCheckbox('#none',none);});
$('#sa-le').on("click",function(){del();changeCheckbox('#sa-le',leader);});
$('#sa-vo').on("click",function(){del();changeCheckbox('#sa-vo',vocal);});
$('#sa-ce').on("click",function(){del();changeCheckbox('#sa-ce',center);});
$('#sa-da').on("click",function(){del();changeCheckbox('#sa-da',dance);});
$('#sa-vi').on("click",function(){del();changeCheckbox('#sa-vi',visual);});
//チェックボックス
$('#sa-team1').change(function(){changeCheckbox('#sa-team1',team1);});
$('#sa-team2').change(function(){changeCheckbox('#sa-team2',team2);});
$('#sa-team3').change(function(){changeCheckbox('#sa-team3',team3);});
$('#sa-team4').change(function(){changeCheckbox('#sa-team4',team4);});
$('#sa-team5').change(function(){changeCheckbox('#sa-team5',team5);});
$('#sa-team6').change(function(){changeCheckbox('#sa-team6',team6);});