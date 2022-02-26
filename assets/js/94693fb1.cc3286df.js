"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[947],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(y,u(u({ref:t},l),{},{components:n})):r.createElement(y,u({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7421:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),u=["components"],i={title:"Docusaurus",sidebar_position:88},c=void 0,s={unversionedId:"docusaurus",id:"docusaurus",title:"Docusaurus",description:"Doc Only Layout",source:"@site/docs/docusaurus.md",sourceDirName:".",slug:"/docusaurus",permalink:"/wiki/docusaurus",tags:[],version:"current",sidebarPosition:88,frontMatter:{title:"Docusaurus",sidebar_position:88},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/wiki/"},next:{title:"Tutorial Intro",permalink:"/wiki/tutorial/intro"}},l={},p=[{value:"Doc Only Layout",id:"doc-only-layout",level:2},{value:"Deploying to GitHub Pages",id:"deploying-to-github-pages",level:2},{value:"Bash",id:"bash",level:3},{value:"Batch",id:"batch",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"doc-only-layout"},"Doc Only Layout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const config = {\n  // ...\n  presets: [\n    [\n      'classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        docs: {\n          routeBasePath: '/',\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n        blog: false,\n        pages: false,\n        theme: {\n          customCss: require.resolve('./src/css/custom.css'),\n        },\n      }),\n    ],\n  ],\n  // ...\n};\n")),(0,a.kt)("h2",{id:"deploying-to-github-pages"},"Deploying to GitHub Pages"),(0,a.kt)("h3",{id:"bash"},"Bash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GIT_USER=kohyuk91 yarn deploy\n")),(0,a.kt)("h3",{id:"batch"},"Batch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},'cmd /C "set "GIT_USER=kohyuk91" && yarn deploy"\n')))}f.isMDXComponent=!0}}]);