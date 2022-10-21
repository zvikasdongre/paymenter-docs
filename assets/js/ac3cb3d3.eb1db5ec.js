"use strict";(self.webpackChunkpaymenterdocs=self.webpackChunkpaymenterdocs||[]).push([[94],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},195:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5,description:"How to setup the webserver for Paymenter."},i="Webserver configuration",c={unversionedId:"installation/webserver-configuration",id:"installation/webserver-configuration",title:"Webserver configuration",description:"How to setup the webserver for Paymenter.",source:"@site/docs/installation/webserver-configuration.md",sourceDirName:"installation",slug:"/installation/webserver-configuration",permalink:"/docs/installation/webserver-configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/webserver-configuration.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"How to setup the webserver for Paymenter."},sidebar:"tutorialSidebar",previous:{title:"Setting up the config",permalink:"/docs/installation/edit-config"},next:{title:"Congratulations! \ud83c\udf89",permalink:"/docs/installation/congratulations"}},l={},s=[{value:"Apache",id:"apache",level:2},{value:".htaccess",id:"htaccess",level:3},{value:"Nginx",id:"nginx",level:2},{value:"nginx.conf",id:"nginxconf",level:3},{value:"Problems?",id:"problems",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webserver-configuration"},"Webserver configuration"),(0,a.kt)("h2",{id:"apache"},"Apache"),(0,a.kt)("h3",{id:"htaccess"},".htaccess"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apache"},"<VirtualHost *:80>\n    ServerName paymenter.org\n    ServerAlias www.paymenter.org\n    DocumentRoot /var/www/paymenter/public\n    <Directory /var/www/paymenter/public>\n        AllowOverride All\n        Require all granted\n    </Directory>\n</VirtualHost>\n")),(0,a.kt)("h2",{id:"nginx"},"Nginx"),(0,a.kt)("h3",{id:"nginxconf"},"nginx.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 80;\n    server_name paymenter.org;\n    root /var/www/paymenter/public;\n\n    index index.php;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        include snippets/fastcgi-php.conf;\n        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;\n    }\n}\n")),(0,a.kt)("p",null,"Be sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"paymenter.org")," with your domain name."),(0,a.kt)("p",null,"Fix the permmisions of paymenter with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chown -R www-data:www-data /var/www/paymenter\n")),(0,a.kt)("h2",{id:"problems"},"Problems?"),(0,a.kt)("p",null,"Ask for help on our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paymenter"},"GitHub repository"),", or our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/xB4UUT3XQg"},"Discord server")))}u.isMDXComponent=!0}}]);