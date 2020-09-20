//root階層検索
function test(){
    let local = window.location;
    let myArray = local.pathname.split('\/');
    let root = "root";//ルートディレクトリ名を指定
    let indeg;
    myArray.reverse();
    for( var i=0; i<=myArray.length; i++) {
        if( myArray[i]  == root ) break;
        indeg = i;
    }
    let r = '../'.repeat(indeg);
    return r
 };

var rootDir = test();

$(document).ready(function(){
  document.body.innerHTML = document.body.innerHTML.replace(/{jsroot}/g, rootDir);
});

/*ライトボックス*/
var luminousTrigger = document.querySelector('.luminous');
if( luminousTrigger !== null ) {
  new Luminous(document.querySelector("a"));
}

/*
function loadScript(url) {
var script = document.createElement("script");
script.type = 'text/javascript';
script.src = rootDir+"include/ar_test.js";

if ( script.readyState ) {
    script.onreadystatechange = function() {
      if ( script.readyState === 'loaded' || script.readyState === 'complete' ) {
        script.onreadystatechange = null;
        callback();
      };
    };
  } else {
    script.onload = function() {
      callback();
    };
  };

  document.getElementsByTagName('head')[0].appendChild(script);

};
console.log(loadScript());
*/


// 画像のロールオーバー
$(function(){
	$('.rolloverImage img').hover(function(){
		$(this).attr('src',$(this).attr('src').replace('_bf','_af'));
	},function(){
		$(this).attr('src',$(this).attr('src').replace('_af','_bf'));
	});
});

/*モーダル*/
$(function(){
  var mdlBtn = $('.js-imageModal'),
      overlayOpacity = 0.8;
      fadeTime = 500;
  mdlBtn.on('click',function(e){
    e.preventDefault();
    var setMdw = $(this),
        setImgPath = $(this).children().attr('src'),
        setHref = setMdw.attr('href'),
        setSource = $(setHref).html(),
        wdHeight = $(window).height();

        $('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">×</div><div id="contWrap"><img src="'+ setImgPath + '" class="modalImage" /></div></div>');
        $('#mdOverlay, #mdWindow').css({display:'block',opacity:'0'});
        $('#mdOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);
        $('#mdWindow').stop().animate({opacity:'1'}, fadeTime);

        $('#mdOverlay, .mdClose, .modalImage').on('click', function(){
          $('#mdWindow, #mdOverlay').stop().animate({opacity:'0'}, fadeTime, function(){
              $('#mdOverlay, #mdWindow').remove();
          });
        });
  });
});



/*Sidebarインラインフレームの高さ取得 */
window.addEventListener('message', function(e) {
var iframe1 = $("#header");
var iframe2 = $("#sidebar");
var iframe3 = $("#footer");
var eventName = e.data[0];
var data = e.data[1];
switch(eventName) {
    case 'setHeight1':
        iframe1.height(data);
        break;
    case 'setHeight2':
        iframe2.height(data);
        break;
    case 'setHeight3':
        iframe3.height(data);
        break;
    }
}, false);




