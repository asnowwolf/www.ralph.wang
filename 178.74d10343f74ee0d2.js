"use strict";(self.webpackChunkfreelancer_ui=self.webpackChunkfreelancer_ui||[]).push([[178],{6178:(c,r,o)=>{o.r(r),o.d(r,{BooksModule:()=>A});var l=o(6814),u=o(2098),e=o(5879),m=o(9210),d=o(2643);const i=[{path:"",component:(()=>{var n;class s{constructor(t){this.layout=t,this.content=o(3475).Z,this.layout.setTitle("\u8457\u4f5c")}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(m.P))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:1,vars:1,consts:[[1,"books",3,"content"]],template:function(t,C){1&t&&e._UZ(0,"app-markdown-viewer",0),2&t&&e.Q6J("content",C.content)},dependencies:[d.Z],styles:["[_nghost-%COMP%]{display:block}app-markdown-viewer.books[_ngcontent-%COMP%]{padding:.5em 1em}app-markdown-viewer.books[_ngcontent-%COMP%]  img{max-width:345px}"]}),s})()}];let p=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(i),u.Bz]}),s})();var g=o(7877);let A=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,p,g.A]}),s})()},3475:(c,r,o)=>{o.d(r,{Z:()=>l});const l="# \u6211\u7684\u8457\u4f5c\n\n## [\u8bd1]Rust \u7a0b\u5e8f\u8bbe\u8ba1\uff08\u7b2c\u4e8c\u7248\uff09\n\n![Rust\u7a0b\u5e8f\u8bbe\u8ba1\u7b2c\u4e8c\u7248](/assets/content/books/Rust\u7a0b\u5e8f\u8bbe\u8ba1\u7b2c\u4e8c\u7248.png)\n\n\u4f5c\u8005\uff1a[\u7f8e]\u5409\u59c6 \u2022 \u5e03\u5170\u8fea\uff08Jim Blandy\uff09[\u7f8e]\u8d3e\u68ee \u2022 \u5965\u4f26\u591a\u592b\uff08Jason Orendorff\uff09[\u7f8e]\u8389\u5965\u8bfa\u62c9 \u2022 F. S. \u5ef7\u5fb7\u5c14\uff08Leonora F. S. Tindall\uff09\n\n\u8bd1\u8005\uff1a\u6c6a\u5fd7\u6210\uff08@\u96ea\u72fc\uff09\n\n**\u7b80\u4ecb**\n\n\u672c\u4e66\u662fRust\u9886\u57df\u7ecf\u5178\u53c2\u8003\u4e66\uff0c\u7531\u4e1a\u5185\u8d44\u6df1\u7cfb\u7edf\u7a0b\u5e8f\u5458\u7f16\u5199\uff0c\u5e7f\u53d7\u8bfb\u8005\u597d\u8bc4\u3002\n\u4e66\u4e2d\u5168\u9762\u4ecb\u7ecd\u4e86Rust\u8fd9\u79cd\u65b0\u578b\u7cfb\u7edf\u7f16\u7a0b\u8bed\u8a00\u2014\u2014\u5177\u6709\u65e0\u4e0e\u4f26\u6bd4\u7684\u5b89\u5168\u6027\uff0c\u517c\u5177C\u548cC++\u7684\u9ad8\u6027\u80fd\uff0c\u5e76\u5927\u5927\u7b80\u5316\u4e86\u5e76\u53d1\u7a0b\u5e8f\u7684\u7f16\u5199\u3002\u7b2c2\u7248\u5bf9\u4e0a\u4e00\u7248\u5185\u5bb9\u8fdb\u884c\u4e86\u91cd\u7ec4\u548c\u5b8c\u5584\uff0c\u65b0\u589e\u4e86\u5bf9\u201c\u5f02\u6b65\u7f16\u7a0b\u201d\u7684\u4ecb\u7ecd\u3002\u501f\u52a9\u4e66\u4e2d\u7684\u5927\u91cf\u6848\u4f8b\uff0c\u4f60\u4e5f\u80fd\u7528Rust\u7f16\u5199\u51fa\u517c\u987e\u5b89\u5168\u6027\u4e0e\u9ad8\u6027\u80fd\u7684\u7a0b\u5e8f\u3002\u672c\u4e66\u5185\u5bb9\u5305\u62ec\u57fa\u672c\u6570\u636e\u7c7b\u578b\u3001\u6240\u6709\u6743\u3001\u5f15\u7528\u3001\u8868\u8fbe\u5f0f\u3001\u9519\u8bef\u5904\u7406\u3001crate\u4e0e\u6a21\u5757\u3001\u7ed3\u6784\u3001\u679a\u4e3e\u4e0e\u6a21\u5f0f\u7b49\u57fa\u7840\u77e5\u8bc6\uff0c\u4ee5\u53ca\u7279\u578b\u4e0e\u6cdb\u578b\u3001\u95ed\u5305\u3001\u8fed\u4ee3\u5668\u3001\u96c6\u5408\u3001\u5b57\u7b26\u4e32\u4e0e\u6587\u672c\u3001\u8f93\u5165\u4e0e\u8f93\u51fa\u3001\u5e76\u53d1\u3001\u5f02\u6b65\u7f16\u7a0b\u3001\u5b8f\u7b49\u8fdb\u9636\u77e5\u8bc6\u3002\n\n## [\u8bd1]Angular \u6743\u5a01\u6559\u7a0b\n\n![Angular\u6743\u5a01\u6559\u7a0b](/assets/content/books/Angular\u6743\u5a01\u6559\u7a0b.png)\n\n\u4f5c\u8005\uff1a[\u7f8e]\u963f\u91cc\xb7\u52d2\u7eb3\uff08Ari Lerner\uff09, [\u5df4\u897f]\u8d39\u5229\u4f69\xb7\u5e93\u91cc\uff08Felipe Coury\uff09, [\u7f8e]\u5185\u7279\xb7\u9ed8\u91cc\uff08Nate Murray\uff09, [\u5df4\u897f]\u5361\u6d1b\u65af\xb7\u5854\u6c83\u5c14\u8fbe\uff08Carlos\nTaborda\uff09\n\n\u8bd1\u8005\uff1aNice Angular\u793e\u533a\n\n**\u7b80\u4ecb**\n\n\u672c\u4e66\u582a\u79f0Angular\u9886\u57df\u7684\u91cc\u7a0b\u7891\u5f0f\u8457\u4f5c\uff0c\u6db5\u76d6\u4e86\u5173\u4e8eAngular\u7684\u51e0\u4e4e\u6240\u6709\u5185\u5bb9\u3002\u5bf9\u4e8e\u6ca1\u6709\u7ecf\u9a8c\u7684\u4eba\uff0c\u672c\u4e66\u5e73\u5b9e\u3001\u901a\u4fd7\u7684\u8bb2\u89e3\uff0c\u9012\u8fdb\u3001\u4e25\u5bc6\u7684\u7ec4\u7ec7\uff0c\u53ef\u4ee5\u8ba9\u4eba\u6beb\u65e0\u538b\u529b\u5730\u767b\u5802\u5165\u5ba4\uff0c\u8fc5\u901f\u9886\u609f\u65b0\u4e00\u4ee3Web\u5e94\u7528\u5f00\u53d1\u7684\u7cbe\u9ad3\u3002\u5982\u679c\u4f60\u6709\u76f8\u5173\u7ecf\u9a8c\uff0c\u90a3\u672c\u4e66\u5bf9Angular\u6982\u5ff5\u548c\u6280\u672f\u7ec6\u8282\u7684\u5168\u9762\u5256\u6790\uff0c\u4ee5\u53ca\u5f15\u4eba\u5165\u80dc\u3001\u5207\u4e2d\u80af\u7dae\u7684\u8bb2\u89e3\uff0c\u5c06\u5e2e\u52a9\u4f60\u5f7b\u5e95\u638c\u63e1\u8fd9\u4e2a\u6846\u67b6\uff0c\u5728\u81ea\u5df1\u804c\u4e1a\u6280\u672f\u4fee\u70bc\u4e4b\u8def\u4e0a\u66f4\u8fdb\u4e00\u6b65\u3002\n\u672c\u4e66\u7684\u8bfb\u8005\u5bf9\u8c61\u4e3a\u6240\u6709\u60f3\u8981\u7406\u89e3\u548c\u5b66\u4e60Angular\u7684\u524d\u7aef\u5f00\u53d1\u4eba\u5458\u3002\n\n## AngularJS \u6df1\u5ea6\u5256\u6790\u4e0e\u6700\u4f73\u5b9e\u8df5\n\n![AngularJS\u6df1\u5ea6\u5256\u6790\u4e0e\u6700\u4f73\u5b9e\u8df5](/assets/content/books/AngularJS\u6df1\u5ea6\u5256\u6790\u4e0e\u6700\u4f73\u5b9e\u8df5.png)\n\n\u4f5c\u8005\uff1a\u96ea\u72fc\uff0c\u7834\u72fc\uff0c\u5f6d\u5b8f\u4f1f\n\n**\u7b80\u4ecb**\n\n\u5728\u524d\u7aef\u5f00\u53d1\u4e2d\uff0c\u5982\u4f55\u5f25\u8865\u8bed\u8a00\u7684\u5148\u5929\u4e0d\u8db3\uff1f\u5982\u4f55\u5e72\u51c0\u6f02\u4eae\u5730\u89e3\u8026\uff1f\u5982\u4f55\u8bbe\u8ba1\u201c\u5c0f\u800c\u7f8e\u201d\u7684\u7c7b/\u4ee3\u7801\u5757\uff1f\u5bf9\u4e8e\u4e00\u4e2a\u201c\u6781\u5ba2\u201d\u6765\u8bf4\uff0c\u603b\u662f\u8981\u7528\u4e00\u4e9b\u6f02\u4eae\u7684\u6280\u672f\u6765\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u800cAngular\u5f53\u4e4b\u65e0\u6127\u662f\u8fd9\u7c7b\u6280\u672f\u4e4b\u4e00\u3002\u672c\u4e66\u6df1\u5165\u8bb2\u89e3AngularJS\u7684\u57fa\u672c\u6982\u5ff5\u53ca\u5176\u80cc\u540e\u7684\u539f\u7406\uff0c\u5305\u62ec\u5b8c\u6574\u7684\u5f00\u53d1\u6846\u67b6\u4e0e\u5b9e\u8df5\uff0c\u4ece\u6700\u521d\u7684\u6846\u67b6\u642d\u5efa\u5f00\u59cb\uff0c\u5feb\u901f\u8fed\u4ee3\uff0c\u9010\u6b65\u4e30\u5bcc\u9879\u76ee\u7684\u9aa8\u8089\uff0c\u5e76\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u5c55\u73b0AngularJS\u7684\u8bf8\u591a\u7279\u6027\u4e0e\u6280\u5de7\uff0c\u5185\u5bb9\u7531\u6d45\u5165\u6df1\u3001\u8bb2\u89e3\u7ec6\u817b\u3001\u5b9e\u6218\u6027\u5f3a\uff0c\u662f\u4eceAngularJS\u7684\u5c0f\u5de5\u8d70\u5411\u4e13\u5bb6\u7684\u5fc5\u5907\u53c2\u8003\u3002\n"}}]);