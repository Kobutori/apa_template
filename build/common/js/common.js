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


//header
const HeaderComp = {
    props: ['root'],
    template: `
    <header>
    <ul>
    <li><a :href="root+'index.html'">{{root}}index.html</a></li>
  </ul>
    朝起きたら{{root}}といいましょう。
    </header>`,
};

// Headerコンポーネント
new Vue({
    el: '#header',
    data: {
      root: rootDir,
    },
    components: {
      'header-component': HeaderComp
    }
});

Vue.component('my-test',{
    template: `
<header>
<ul>
<li><a :href="root+'index.html'">{{root}}index.html</a></li>
</ul>
朝起きたら{{list}}といいましょう。
</header>
    `,
    data () {
        return{
            root: rootDir,
            list: [],
        }
    },
});
new Vue({ el: '#app' });







