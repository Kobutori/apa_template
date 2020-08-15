//root階層検索
function test(){
    let local = window.location;
    let myArray = local.pathname.split('\/');
    let root = "build";//ルートディレクトリ名を指定
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




/*ヘッダーインクルード*/
if( document.getElementById("header") != null ){
  var componentHeader = new Vue({
    template:
    '<header class="header"><div class="site">' +
    '<a href="{jsroot}index.html">APA</a>' +
    '</div></header>' +
    '<aside class="side">' +
    '<input type="checkbox" id="hamburger">' +
    '<label class="hamburger__cl" for="hamburger">' +
    '<span class="hamburger__cl--top"></span>' +
    '<span class="hamburger__cl--middle"></span>' +
    '<span class="hamburger__cl--bottom"></span>' +
    '<span class="hamburger__cl--text">メニュー</span>' +
    '</label>' +
    '<nav class="side__nav" style="display: none;">' +
    '<ul class="sp__nav__menu">' +
    '<li class="sp__nav__menu__block"><a href="">aaaaa</a></li>' +
    '<li class="sp__nav__menu__block"><a href="">aaaaaa</a></li>' +
    '<li class="sp__nav__menu__block"><a href="">aaaaa</a></li>' +
    '<li class="sp__nav__menu__block"><a href="">aaaaa</a></li>' +
    '</ul>' +
    '</nav>' +
    '</aside>',
  });
  // 要素にマウントする
  componentHeader.$mount( '#header' );
}



