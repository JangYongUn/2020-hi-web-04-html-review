/************ 전역 변수 ***********/
var $listWrap = $(".list-wrap");
var tag = '<h2>추가내용</h2>';

/************ 이벤트 등록 ***********/
$('#btAppend').click(onAppend);
$('#btPrepend').click(onPrepend);
$('#btRemove').click(onRemove);
$('#btEmpty').click(onEmpty);
$('#btHtml').click(onHtml);
$('#btText').click(onText);
$('#btReset').click(onReset);

/*********** 이벤트 콜백 ***********/
function onAppend(){
    $listWrap.append(tag);
    $(tag).appendTo($listWrap);
}

function onPrepend(){
    $listWrap.prepend(tag);
    $(tag).prependTo($listWrap);
}

function onRemove(){
    $listWrap.remove();
}

function onEmpty(){
    $listWrap.empty();
}

function onHtml(){
    $listWrap.html('<h1>Hello</h1>');
}

function onText(){
    $listWrap.text('<h1>Hello</h1>');
}

function onReset(){
    console.log($listWrap);
    $('.container').html('<div class="list-wrap text-center"><div>=====기준=====</div></div>')
    console.log($listWrap);
    $listWrap = $(".list-wrap");
}
