(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db8edd8e"],{2070:function(n,e,a){},"3e5c":function(n,e,a){"use strict";var t=a("e5cc"),r=a.n(t);r.a},"68cc":function(n,e,a){"use strict";var t=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{ref:"markdown-it-vue-container",staticClass:"markdown-body"})},r=[],i=a("d4cd"),o=a.n(i),s=a("362d"),c=a.n(s),u=a("cf2b"),l=a.n(u),g=a("4bb9"),d=a.n(g),h=a("be03"),f=a.n(h),m=a("746a"),p=a.n(m);a("0d6d"),a("456d"),a("ac6a"),a("3b2b");function v(n,e){var a,t;if(n.attrIndex){var r=n.attrs[n.attrIndex("href")][1];for(a=0;a<e.length;++a)if(t=e[a],!t.pattern||new RegExp(t.pattern).test(r))return t}}function w(n,e){var a,t;if(n.attrIndex){var r=n.attrs[n.attrIndex("src")][1];for(a=0;a<e.length;++a)if(t=e[a],t.href=r,!t.pattern||new RegExp(t.pattern).test(r))return t}}function k(n,e,a){Object.keys(a).forEach((function(t){var r,i=a[t];"className"===t&&(t="class"),r=e[n].attrIndex(t),r<0?e[n].attrPush([t,i]):e[n].attrs[r][1]=i}))}function b(n,e){e=e?Array.isArray(e)?e:[e]:[],Object.freeze(e);var a=n.renderer.rules.link_open||this.defaultRender;n.renderer.rules.link_open=function(n,t,r,i,o){var s=v(n[t],e),c=s&&s.attrs;return c&&k(t,n,c),a(n,t,r,i,o)};var t=n.renderer.rules.image||this.defaultRender;n.renderer.rules.image=function(n,a,r,i,o){var s=w(n[a],e),c=s&&s.attrs;return c.onclick="window.open('".concat(s.href,"', '_blank')"),c&&k(a,n,c),t(n,a,r,i,o)}}b.defaultRender=function(n,e,a,t,r){return r.renderToken(n,e,a)};var L=b,x=(a("efe0"),a("1020")),y=a.n(x),A=a("79b5"),C=a.n(A),j=a("e55c"),R=a.n(j),M=a("ee8c"),S=a.n(M),_=a("b65b"),E=a.n(_),D=a("f0f8"),z=a.n(D),I=a("1fe5"),H=a.n(I),J=a("af9a"),O=a.n(J),B=a("332f"),T=a.n(B),$=a("9510"),F=a.n($),Y=a("0209"),q=a.n(Y),V=a("98af"),N=a.n(V),G=a("2907"),P=a.n(G),W=a("de09"),K=a.n(W),Q=a("26bc"),U=a.n(Q),X=a("2a39"),Z=a.n(X),nn=a("0b22"),en=a.n(nn),an=a("8ca5"),tn=a.n(an),rn=a("82cb"),on=a.n(rn),sn=a("6a51"),cn=a.n(sn),un=a("9bf2"),ln=a.n(un),gn=a("2ce7"),dn=a.n(gn),hn=a("7c46"),fn=a.n(hn),mn=a("1f8a"),pn=a.n(mn),vn=a("8d6d"),wn=a.n(vn),kn=a("a941"),bn=a.n(kn),Ln=a("9f7f"),xn=a.n(Ln),yn=a("40f4"),An=a.n(yn),Cn=a("9b32"),jn=a.n(Cn),Rn=a("ecfe"),Mn=a.n(Rn),Sn=a("01ac"),_n=a.n(Sn),En=a("485f"),Dn=a.n(En),zn=a("508e"),In=a.n(zn),Hn=a("5a3e"),Jn=a.n(Hn),On=a("f45a"),Bn=a.n(On),Tn=a("1f64"),$n=a.n(Tn),Fn=a("2265"),Yn=a.n(Fn),qn=a("b7aa"),Vn=a.n(qn),Nn=a("3f38"),Gn=a.n(Nn),Pn=a("f9f0"),Wn=a.n(Pn),Kn=a("4108"),Qn=a.n(Kn),Un=a("af44"),Xn=a.n(Un),Zn=a("0215"),ne=a.n(Zn),ee=a("4396"),ae=a.n(ee),te=a("b3c5"),re=a.n(te),ie=a("f492"),oe=a.n(ie),se=a("5ad2"),ce=a.n(se);y.a.registerLanguage("json",ce.a),y.a.registerLanguage("handlebars",R.a),y.a.registerLanguage("htmlbars",C.a),y.a.registerLanguage("css",S.a),y.a.registerLanguage("shell",E.a),y.a.registerLanguage("bash",z.a),y.a.registerLanguage("c-like",O.a),y.a.registerLanguage("c",H.a),y.a.registerLanguage("cpp",q.a),y.a.registerLanguage("java",T.a),y.a.registerLanguage("python",F.a),y.a.registerLanguage("csharp",N.a),y.a.registerLanguage("php",P.a),y.a.registerLanguage("sql",K.a),y.a.registerLanguage("r",U.a),y.a.registerLanguage("swift",Z.a),y.a.registerLanguage("go",en.a),y.a.registerLanguage("matlab",tn.a),y.a.registerLanguage("ruby",on.a),y.a.registerLanguage("perl",cn.a),y.a.registerLanguage("objectivec",ln.a),y.a.registerLanguage("rust",dn.a),y.a.registerLanguage("dart",fn.a),y.a.registerLanguage("delphi",pn.a),y.a.registerLanguage("d",wn.a),y.a.registerLanguage("kotlin",bn.a),y.a.registerLanguage("scala",xn.a),y.a.registerLanguage("sas",An.a),y.a.registerLanguage("lisp",jn.a),y.a.registerLanguage("lua",Mn.a),y.a.registerLanguage("ada",_n.a),y.a.registerLanguage("fortran",Dn.a),y.a.registerLanguage("powershell",In.a),y.a.registerLanguage("vbscript",Jn.a),y.a.registerLanguage("vbscript-html",Bn.a),y.a.registerLanguage("groovy",$n.a),y.a.registerLanguage("julia",Yn.a),y.a.registerLanguage("julia-repl",Vn.a),y.a.registerLanguage("haskell",Gn.a),y.a.registerLanguage("actionscript",Wn.a),y.a.registerLanguage("scheme",Qn.a),y.a.registerLanguage("typescript",Xn.a),y.a.registerLanguage("fsharp",ne.a),y.a.registerLanguage("prolog",ae.a),y.a.registerLanguage("erlang",re.a),y.a.registerLanguage("erlang-repl",oe.a);var ue=function(n){n.renderer.rules.fence=function(n,e){var a,t=n[e],r=t.content.trim(),i=t.info;return a=i&&y.a.getLanguage(i)?y.a.highlight(i,r).value:y.a.highlightAuto(r).value,'<pre><code class="hljs">'.concat(a,"</code></pre>")}},le=ue,ge={attrs:{target:"_blank",rel:"noopener"}},de={throwOnError:!1,errorColor:"#cc0000"},he=null,fe={name:"Markdown",props:{content:{type:String,default:""},options:{type:Object,default:function(){return{markdownIt:{linkify:!0},linkAttributes:ge,katex:de,tasklists:he}}}},data:function(){var n=this.options.markdownIt,e=this.options.linkAttributes||ge,a=this.options.tasklists||he,t=new o.a(n).use(c.a).use(l.a).use(d.a).use(le).use(L,e).use(f.a,a).use(p.a,"warning",{validate:function(n){return"warning"===n.trim()},render:function(n,e){if(1===n[e].nesting){var a='<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-warning"><svg viewBox="64 64 896 896" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg></i>';return'<div class="markdown-it-vue-alter markdown-it-vue-alter-warning">'.concat(a)}return"</div>"}}).use(p.a,"info",{validate:function(n){return"info"===n.trim()},render:function(n,e){if(1===n[e].nesting){var a='<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-info"><svg viewBox="64 64 896 896" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg></i>';return'<div class="markdown-it-vue-alter markdown-it-vue-alter-info">'.concat(a)}return"</div>"}}).use(p.a,"success",{validate:function(n){return"success"===n.trim()},render:function(n,e){if(1===n[e].nesting){var a='<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-success"><svg viewBox="64 64 896 896" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg></i>';return'<div class="markdown-it-vue-alter markdown-it-vue-alter-success">'.concat(a)}return"</div>"}}).use(p.a,"error",{validate:function(n){return"error"===n.trim()},render:function(n,e){if(1===n[e].nesting){var a='<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-error"><svg viewBox="64 64 896 896" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></i>';return'<div class="markdown-it-vue-alter markdown-it-vue-alter-error">'.concat(a)}return"</div>"}});return{md:t}},watch:{content:{immediate:!0,handler:function(n){var e=this;this.$nextTick((function(){e.$refs["markdown-it-vue-container"].innerHTML=e.md.render(n)}))}}},methods:{use:function(n,e){this.md.use(n,e)},get:function(){return this.md}}},me=fe,pe=(a("3e5c"),a("2877")),ve=Object(pe["a"])(me,t,r,!1,null,null,null);e["a"]=ve.exports},e5cc:function(n,e,a){},f84e:function(n,e,a){"use strict";var t=a("2070"),r=a.n(t);r.a},feda:function(n,e,a){"use strict";a.r(e);var t=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("markdown",{attrs:{content:n.content}})},r=[],i=a("68cc"),o='\n# markdown-it-vue\n\n## GitHub Table of Contents\n\n[toc]\n\nNote: Only `h2` and `h3` are shown in toc.\n\n## alter\n\nMarkup is similar to fenced code blocks. Valid container types are `success`, `info`, `warning` and `error`.\n\n::: success\nYou have got it.\n:::\n\n::: info\nYou have new mail.\n:::\n\n::: warning\nYou have new mail.\n:::\n\n::: error\nStaying up all night is bad for health.\n:::\n\n## mermaid charts\n\n### mermaid Flowchart\n\n[Flowchart Syntax](http://knsv.github.io/mermaid/#flowcharts-basic-syntax)\n\n```mermaid\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n```\n\n```\nsequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->John: Hello John, how are you?\n    loop Healthcheck\n        John->John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail...\n    John--\x3eAlice: Great!\n    John->Bob: How about you?\n    Bob--\x3eJohn: Jolly good!\n```\n\n## Definition list\n\nTerm 1\n  ~ Definition 1\n\nTerm 2\n  ~ Definition 2a\n  ~ Definition 2b\n\n[Definition List Syntax](http://pandoc.org/README.html#definition-lists)\n\n\n## AsciiMath\n\nInline AsciiMath: `@(1/2[1-(1/2)^n])/(1-(1/2))=s_n@`\n\n```AsciiMath\noint_Cx^3 dx+4y^2 dy\n\n2=(((3-x)xx2)/(3-x))\n\nsum_(m=1)^oosum_(n=1)^oo(m^2 n)/(3^m(m3^n+n3^m)\n```\n\n```ASCIIMath\nphi_n(kappa) = 1/(4pi^2 kappa^2)\n int_0^oo (sin(kappa R))/(kappa R)\n del/(del R)\n[R^2 (del D_n (R))/(del R)] del R\n```\n\n[AsciiMath Documentation](http://asciimath.org/)\n\n## Subscript: H~2~O\n\nYou can also use inline math: `$H_2O$`\n\n\n## Superscript: 29^th^\n\nYou can also use inline math: `$29^{th}$`\n\n\n## Emoji: :panda_face: :sparkles: :camel: :boom: :pig:\n\n[Emoji Cheat Sheet](http://www.emoji-cheat-sheet.com/)\n\n## Fontawesome: :fa-car: :fa-flag: :fa-bicycle: :fa-leaf: :fa-heart:\n\n[All the Font Awesome icons](http://fontawesome.io/icons/)\n\n## Echarts\n\n[Documentation for Echarts](http://echarts.baidu.com)\n\nThe width and height is the size for chart container.\n\n```echarts\n{\n  "width": 500,\n  "height": 400,\n  "series": [\n    {\n      "name": "访问来源",\n      "type": "pie",\n      "radius": "55%",\n      "data": [\n        {\n          "value": 235,\n          "name": "视频广告"\n        },\n        {\n          "value": 274,\n          "name": "联盟广告"\n        },\n        {\n          "value": 310,\n          "name": "邮件营销"\n        },\n        {\n          "value": 335,\n          "name": "直接访问"\n        },\n        {\n          "value": 400,\n          "name": "搜索引擎"\n        }\n      ]\n    }\n  ]\n}\n```\n\n## code\n\n### c\n```c\n#include <stdio.h>\nint main(int argc char* argv[]) {\n  printf("Hello, World!");\n  return 0;\n}\n```\n\n![img](https://raw.githubusercontent.com/PhotonAlpha/blogs/master/images/oauth/OAuth2%E6%B3%A8%E8%A7%A3.jpg)\n\n### json\n\n```json\n{\n  "name": "markdown-it-vue"\n}\n```\n\n### javascript\n```json\nimport MarkdownItVue from \'markdown-it-vue\'\nexport default {\n  components: {\n    MarkdownItVue\n  }\n}\n```\n\n### bash\n```bash\nnpm install markdown-it-vue\n```\n\n## table\n\n| First Header  | Second Header |\n| ------------- | ------------- |\n| Content Cell  | Content Cell  |\n| Content Cell  | Content Cell  |\n\n## flowchart.js\n\n```flowchart.js\nst=>start: Start|past:>http://www.google.com[blank]\ne=>end: End:>http://www.google.com\nop1=>operation: My Operation|past\nop2=>operation: Stuff|current\nsub1=>subroutine: My Subroutine|invalid\ncond=>condition: Yes\nor No?|approved:>http://www.google.com\nc2=>condition: Good idea|rejected\nio=>inputoutput: catch something...|request\npara=>parallel: parallel tasks\n\nst->op1(right)->cond\ncond(yes, right)->c2\ncond(no)->para\nc2(true)->io->e\nc2(false)->e\n\npara(path1, bottom)->sub1(left)->op1\npara(path2, right)->op2->e\n\nst@>op1({"stroke":"Red"})@>cond({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})@>c2({"stroke":"Red"})@>op2({"stroke":"Red"})@>e({"stroke":"Red"})\n```\n\n',s={components:{Markdown:i["a"]},data:function(){return{content:o}},created:function(){},methods:{scollerTo:function(){var n=document.querySelector("#element"),e=document.querySelectorAll("h1,h2,h3,h4,h5,h6")[1];console.log(n),this.$scrollTo(e,500)},use:function(n,e){this.md.use(n,e)},get:function(){return this.md}}},c=s,u=(a("f84e"),a("2877")),l=Object(u["a"])(c,t,r,!1,null,null,null);e["default"]=l.exports}}]);