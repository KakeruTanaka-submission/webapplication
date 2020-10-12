//アビリティ画像をテーブルに追加
function output_ability_image(avlName){
    $.each(avlName,function(key,value){
        $(function(){
            for (var i=0;i<value;i++){
                $('#'+key+'-img').append('<img src="image/tableImage/'+key+'.png">');
            }
        })
    })
}
//キャラクター画像をテーブルに追加
function output_character_image(characterName){
    $.each(characterName,function(i,value){
        $(function(){
            for (var i=0;i<4;i++){
                $(characterType[value]).append('<img src="image/tableImage/'+value+'.png">');
            }
        })
    })
}
//画像の個数をテーブルに追加
function outputNum(avlName){
    $('.num').empty();
    $('#vocalNum').append(avlName['vocal']);
    $('#danceNum').append(avlName['dance']);
    $('#visualNum').append(avlName['visual']);
    $('#mentalNum').append(avlName['mental']);
    $('#ssrNum').append(avlName['ssr']);
    $('#eitherNum').append(avlName['either']);
}
//引数に対応する値を配列に格納し関数に渡す
function changeTable(avlarry){
    var avlName={vocal:0,dance:0,visual:0,mental:0,ssr:0,either:0};
    var characterName=[];
    
    if (avlarry.indexOf('ability1')!=-1){avlName['mental']+=4;}
    if (avlarry.indexOf('ability2')!=-1){avlName['mental']+=6;}
    if (avlarry.indexOf('ability3')!=-1){avlName['vocal']+=4;};
    if (avlarry.indexOf('ability4')!=-1){avlName['vocal']+=4,avlName['dance']+=1,avlName['visual']+=1;}
    if (avlarry.indexOf('ability5')!=-1){avlName['dance']+=4;}
    if (avlarry.indexOf('ability6')!=-1){avlName['vocal']+=1,avlName['dance']+=4,avlName['visual']+=1;}
    if (avlarry.indexOf('ability7')!=-1){avlName['visual']+=4;}
    if (avlarry.indexOf('ability8')!=-1){avlName['vocal']+=1,avlName['dance']+=1,avlName['visual']+=4;}
    if (avlarry.indexOf('ability9')!=-1){avlName['vocal']+=1,avlName['dance']+=1,avlName['visual']+=1,avlName['mental']+=1;}
    if (avlarry.indexOf('ability10')!=-1){avlName['vocal']+=1,avlName['dance']+=1,avlName['visual']+=1,avlName['mental']+=2;}
    if (avlarry.indexOf('ability11')!=-1){avlName['vocal']+=1,avlName['dance']+=1,avlName['visual']+=1,avlName['mental']+=2,avlName['ssr']+=1;}
    if (avlarry.indexOf('ability12')!=-1){avlName['vocal']+=1,avlName['dance']+=1,avlName['visual']+=1,avlName['mental']+=2,avlName['ssr']+=2;}
    if (avlarry.indexOf('ability13')!=-1){avlName['vocal']+=3,avlName['mental']+=3;}
    if (avlarry.indexOf('ability14')!=-1){avlName['dance']+=3,avlName['visual']+=3;}
    if (avlarry.indexOf('ability15')!=-1){avlName['either']+=8;}
    if (avlarry.indexOf('ability16')!=-1){avlName['either']+=8;}
    if (avlarry.indexOf('ability17')!=-1){avlName['either']+=3;}
    if (avlarry.indexOf('ability18')!=-1){avlName['either']+=5;}
    if (avlarry.indexOf('ability19')!=-1){avlName['either']+=3;}
    if (avlarry.indexOf('ability20')!=-1){avlName['either']+=5;}
    if (avlarry.indexOf('ability21')!=-1){avlName['either']+=4;}
    if (avlarry.indexOf('ability22')!=-1){avlName['either']+=8;}
    if (avlarry.indexOf('ability23')!=-1){avlName['vocal']+=3;}    
    if (avlarry.indexOf('ability24')!=-1){avlName['vocal']+=5;}
    if (avlarry.indexOf('ability25')!=-1){avlName['vocal']+=8;}
    if (avlarry.indexOf('ability26')!=-1){avlName['dance']+=3;}
    if (avlarry.indexOf('ability27')!=-1){avlName['dance']+=5;}
    if (avlarry.indexOf('ability28')!=-1){avlName['dance']+=8;}
    if (avlarry.indexOf('ability29')!=-1){avlName['visual']+=3;}
    if (avlarry.indexOf('ability30')!=-1){avlName['visual']+=5;}
    if (avlarry.indexOf('ability31')!=-1){avlName['visual']+=8;}
    if (avlarry.indexOf('ability32')!=-1){avlName['mental']+=3;}
    if (avlarry.indexOf('ability33')!=-1){avlName['mental']+=5;}
    if (avlarry.indexOf('ability34')!=-1){avlName['mental']+=8;}
    if (avlarry.indexOf('ability35')!=-1){avlName['vocal']+=6,avlName['mental']+=2;}
    if (avlarry.indexOf('ability36')!=-1){avlName['dance']+=6,avlName['mental']+=2;}
    if (avlarry.indexOf('ability37')!=-1){avlName['visual']+=6,avlName['mental']+=2;}
    if (avlarry.indexOf('ability38')!=-1){avlName['vocal']+=2,avlName['dance']+=2,avlName['visual']+=2,avlName['ssr']+=1;}
    if (avlarry.indexOf('ability39')!=-1){avlName['mental']+=5;}
    if (avlarry.indexOf('ability40')!=-1){avlName['either']+=3;}
    if (avlarry.indexOf('ability41')!=-1){avlName['vocal']+=1,avlName['dance']+=1,avlName['visual']+=1,avlName['mental']+=2;}
    if (avlarry.indexOf('ability42')!=-1){avlName['vocal']+=1,avlName['dance']+=1,avlName['visual']+=1,avlName['mental']+=2;}

    output_ability_image(avlName)

    //キャラクター    
    if (avlarry.indexOf('ability43')!=-1){characterName.push('character1');avlName['vocal']+=4;}
    if (avlarry.indexOf('ability44')!=-1){characterName.push('character2');avlName['dance']+=4;}
    if (avlarry.indexOf('ability45')!=-1){characterName.push('character3');avlName['visual']+=4;}

    if (avlarry.indexOf('ability46')!=-1){characterName.push('character4');avlName['mental']+=4;}
    if (avlarry.indexOf('ability47')!=-1){characterName.push('character5');avlName['visual']+=4;}
    if (avlarry.indexOf('ability48')!=-1){characterName.push('character6');avlName['dance']+=4;}
    if (avlarry.indexOf('ability49')!=-1){characterName.push('character7');avlName['vocal']+=4;}
    if (avlarry.indexOf('ability50')!=-1){characterName.push('character8');avlName['visual']+=4;}

    if (avlarry.indexOf('ability51')!=-1){characterName.push('character9');avlName['vocal']+=4;}
    if (avlarry.indexOf('ability52')!=-1){characterName.push('character10');avlName['mental']+=4;}
    if (avlarry.indexOf('ability53')!=-1){characterName.push('character11');avlName['dance']+=4;}
    if (avlarry.indexOf('ability54')!=-1){characterName.push('character12');avlName['dance']+=4;}
    if (avlarry.indexOf('ability55')!=-1){characterName.push('character13');avlName['mental']+=4;}

    if (avlarry.indexOf('ability56')!=-1){characterName.push('character14');avlName['visual']+=4;}
    if (avlarry.indexOf('ability57')!=-1){characterName.push('character15');avlName['visual']+=4;}
    if (avlarry.indexOf('ability58')!=-1){characterName.push('character16');avlName['vocal']+=4;}

    if (avlarry.indexOf('ability59')!=-1){characterName.push('character17');avlName['dance']+=4;}
    if (avlarry.indexOf('ability60')!=-1){characterName.push('character18');avlName['vocal']+=4;}
    if (avlarry.indexOf('ability61')!=-1){characterName.push('character19');avlName['mental']+=4;}

    if (avlarry.indexOf('ability62')!=-1){characterName.push('character20');avlName['visual']+=4;}
    if (avlarry.indexOf('ability63')!=-1){characterName.push('character21');avlName['vocal']+=4;}
    if (avlarry.indexOf('ability64')!=-1){characterName.push('character22');avlName['mental']+=4;}
    if (avlarry.indexOf('ability65')!=-1){characterName.push('character23');avlName['dance']+=4;}
        
    output_character_image(characterName);
    outputNum(avlName);
}
//関数output_character_imageのループ処理に使用する配列
var characterType = {'character1':'#vocal-img','character2':'#visual-img','character3':'#dance-img',
'character4':'#mental-img','character5':'#visual-img','character6':'#visual-img','character7':'#dance-img','character8':'#vocal-img','character9':'#vocal-img',
'character10':'#mental-img','character11':'#dance-img','character12':'#dance-img','character13':'#mental-img','character14':'#visual-img','character15':'#visual-img',
'character16':'#vocal-img','character17':'#dance-img','character18':'#vocal-img','character19':'#mental-img','character20':'#visual-img','character21':'#vocal-img',
'character22':'#mental-img','character23':'#dance-img'}

var not_checked_value = [];

//テーブルに画像を追加(読み込み時)
changeTable(abl);
//リセット機能
$("#reset").on("click",function(){
    $(".abl").prop("checked", false);
    $(".check_box").prop("checked", false);
    //changeTable(abl);
})

$('input[type="checkbox"]').on('click', function () {
    //配列の中身を初期化
    not_checked_value.length=0;
    //選択されていないチェックボックスのidを配列に追加
    for(var i=0;i<abl.length;i++){ 
        if ($('#'+abl[i]).prop('checked')==false){
            not_checked_value.push(abl[i]);
        }
    }
    //テーブルの画像を全て削除
    $(function (){
        $('.imagecontena').empty();
    });

    changeTable(not_checked_value);
})