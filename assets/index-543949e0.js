import{u as e,c as t,o,a as n,b as s,n as i,p as c,d as a,r,e as l,f as d,g as A,h as u,i as g,j as m,k as h,l as p,m as v,A as f,q as I}from"./vandor-2b298193.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const E=(e,t)=>{const o=e.__vccOpts||e;for(const[n,s]of t)o[n]=s;return o},w={name:"",setup(){const o=e();return{openUrl:e=>{window.open(e)},screenWidth:t((()=>o.state.screenWidth))}},components:{},methods:{},mounted(){},unmounted(){}},S=e=>(c("data-v-6d12e1ac"),e=e(),a(),e),k={class:"footer"},U={class:"item"},C=S((()=>s("div",{class:"title"},"Summit Information",-1))),Q=S((()=>s("div",{class:"list"},"May 29 - May 31, 2024",-1))),B=S((()=>s("div",{class:"list"},"Palace of Fine Arts, San Francisco, CA, 94123",-1))),y=S((()=>s("div",{class:"list"},"genaix@gptdao.ai",-1))),R={class:"item"},N=S((()=>s("div",{class:"title"},"Contact Us",-1))),O=S((()=>s("div",{class:"list"},"We sincerely invite you to join us, bring your creativity and ideas, and explore the future of generative AI together. Please contact us for more information.",-1))),L={class:"list"},b=S((()=>s("div",{class:"bottom"}," Copyright 2024 GPTDAO. All rights reserved ",-1)));const K=E(w,[["render",function(e,t,c,a,r,l){return o(),n("div",k,[s("div",{class:i(["info",a.screenWidth>600?"":"mb"])},[s("div",U,[s("div",null,[C,Q,B,y,s("div",{class:"list h",onClick:t[0]||(t[0]=e=>a.openUrl("https://linktr.ee/gptdao"))},"Contact us")])]),s("div",R,[s("div",null,[N,O,s("div",L,[s("img",{onClick:t[1]||(t[1]=e=>a.openUrl("https://www.gptdao.ai/")),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAABOhJREFUWEfNmH1MlVUcxz/nChYvklriFKyteNvYlF7MtUjsxRKwaEo2W4IFLmhuSUsvrtSFNQFb1NaCJjnRNrOgiZMXZ01xbL25QhcNhNpShKRUJF5KLvfUuec+u1y493kuK7bOn8/5/X7n+5zf6/cIJrPelPMIIg1IARYiuA1JhMuEoA/JBeAsglOMUMeroidQ8yIgwVKZgsQOLEcQFJCOxAk0AGXYxRdWOuZAdskYbLyH4DErQ6b7kkYEG9kifvIn5x9IsXwWwQcIQv8VCENZMoAkn0LxkS97voEUy9exsf0/ATDeiGQndjHB9kQgJbIIwbYpAWEYdVJEodgx9gxvIModNg5MKQgPmHVj3eQBUirvQNKCIDxQIOHBMC8cpISeARh0BKrpkhtklCS2ik6d/cYqkQ0IVliZuukGyE+Cp+NhUSQItwWnhLO9cLANKlqg/7qVJUByDLtwnanNlMiHEXxupZoZB+XL4ZYxefRVt76R+6I82r2DkH8cPuuwsujaX8YW0WQAOYog3Uxt82IoSYFLQ7CjGXYmw4gTEvfiqlztORBkg23NUJQMc0LA3gS7v7UAI2nALtIEumx3IbD5U1kVC9UZ0NILaTWQHAWfZsDLJ6DstNZ6ZTHsXgarDoO6pbrVkBQJa45A9TkTMBIHDm4VlMpcYI8/0Yjp0LkBVAzcWQU9g7AvFbISIboCuge05vxw6MqDqh/guUaYFwbfZUOQgJhKuPaXKZhcQYncj2CdP7Et92qXZNXBgR+1lHKDiouEvd5a53I14IQP9ffsRNiXBltPQfHXpkAOKCAqZRf5E/s+C6JmwPz3wSFhug2GCuBwB2Qe8daqyYCMGAgp0/GjbqPnRbjwB9y13xTIGeWay8BsX2JhQdC/CQ61wTNHtUSUckE+vHMaCk54a5U9CJvugehyuOh22cePw1PxEPEuDI74BdOnbmTUX6DGzYL2XLj6J1wa1EamT4PbZ8LlYfhtyNvwnFC4OQR+7oPro3ovMhRmh0BcJXRc9QNE4gwIyJVh6HUfOlkgc8Ng1o0Quwc6+8yAlEqFc6YvkRnBcO0l7Zq1btcsmAHn8wJ3zcGVsCbB0jVXrIM1W8eFEazBNhgugNpOWF3rDb/6CXgy1hOsSrY7H7oGdOr7XZIzlulbuAR2LYX19VDVOiZ98aSpcUBbju4Z8ePSV1XY0m+s0zcHQaU/MdXkOnN16qq/+tWioO1vhfUNuqC1ZOtupuLDogluMEr8ebOhWDW7T/65dlXi02vgfneJ33wS3nL3koK74e2HtLu+vOgp8Zm1Fs1PDdkOoo2mV48g1eTyUBW2eKnOnu3N8MYD4HBqN6gm1fo8qJh4zd305oYG3PTqsIuVGoiiC3DSDIjaU82v4lFQ9cJY6u9tApbM93z7fUiPAabNzhCXPKLoxtjBSI38lrRBNcG8JFibAAsjNQi1jMHoUDuUt1g0OQ+IRuzC5QkPEMVhptEChFndjLEfpkbFMD2lqS5sUsInmlT0QpBkcJ3/4fBsYJ5KTuNxyQRu45tgTSW38cFpvGNkvBc15SyfDL0wjS3JEJIXJkc5DYua6ygSbkkzLEAcw8lGg8P4kg3sWULRDSgAUs2GbK8D1FAMxxGUKLpglYmBATGsqIk/mHQkS90PNQuQ7hFC0I/kF9dDDTThoH4yDzV/A0h3y0A9iXHMAAAAAElFTkSuQmCC",alt:""}),s("img",{onClick:t[2]||(t[2]=e=>a.openUrl("https://twitter.com/GPTDAOGLOBAL")),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAABJdJREFUWEfNmG9M1VUYxz/nAskfIyPXoEBr+ALeKOYQ/8SfLZDUS8s2HBR/XmR/bGytOb1oo8IshLl6YWXOXhSgoSxdQ0ASlqBmRgr4xtg0h6K2NtQpKMWFU+cefsK9/C73d1Va583vxXn+fM/vec7zPN8j8Gd9JKMIZAWQCsxFMBtJuMuE4AaSS8AZBG0MUc+74qpV88KSYIVMReIAMhAEWtKRjACNwKc4RIsvncmBlMk52PgMQaYvQ5PuSw4hKGKDOO9NzjuQrTIPwU4EofcFwlCW9CNZS7GoNrNnDmSrLMXGew8EgKcRyYc4xATbE4GUy80ISqYEhGF0hM0Ui/fH+3AHosJho2pKQYyByR8fpjEgFTIWSSeC6f8JEBhgmAQ2inP69hurXDYieN4TRMzDEOARwL+G4erA5HCfnA5BNhiRcPGWF1lJEw7h8qldlMvnEDSbiRcnQVmK+87QMKTWwIkr5g5y4mC3HWwC3joMOzonBZ3GBtFqADmIYKWZuA34fhXY50D9eWjugZLFMDAE8yuh7467Vko0NGVDcCBU/AKOVh+BljTiECsEumz3IlA+TdejwXAqH9R3QRXER0DdS9D4O2Ttx1VC1YqLgOMvQ0QI1JyFVw6O7XmFI3HiZJagQq4BdvlK0MRIOJoLZ/tg0W4oXQqOJNjUBmUn4fFQOJkHTz0CbZcgsxYGh31ZHd2XrBGUy0oE+VZU1ibAFxmwq0vH/sccWPwE2PfDlmdhQST81gdL9sD1QSsW7wKpUkDUlZ1nVW2PHXLjobBB50tnIcwMAfFvYv55GxZWQc9Nq9buAulSoekDIqyqhgVBez7MDoekaogKg0PZ+votrIZf/7BqyU3uhvojw5MlqpnZ+Mc0mN5bkFgF6xOhZAl8cBxKf7oHIJKRewKiXL0+F3ZmQm035NbBD9mQNguW1UJLj59gXEAq5HVghj+q0wKgZTUsjdZab7fA3m7oKIAAGyR87bvyevi75neyqmJTkwXZcXDtDvT26/qR8i2EBELzajh2GdL3glNaPJ6ky6/rq8xuS4N1iTDohIx9Ok9OFUD/EDxTCW/Ogy3JUPYzbDpqGYjr+r6K4CsrKkXzYXu6bmQqL/Z1a62sWN0Gmi7oSquq7rKnwf4dNF6wYpnXjBJ/0ddQ/EIsHFilG9n6I7Ct3d3Bx8mwcRGUHIMvO6GjUIcq4Rv917wuNWQ7iTaaXgOC5d6EVXlvzYGQIPi8A4pM+nSg0PmRHAPbT+t+pP7Kicu6Uw8ZDcnTiaQeh7BrIIouwBEzIKp3tOfBzFCoOwcvHvDeyCLD4HQBRHmMVp+0wzpT64AkXdGN8YORGvkn0IaIYAh/SEO80g9/ezvZ6CnGyxsHU5fHtOwrmuEQrkiMAVEcJgA1woRZSq/7FVL0QpBgcJ3/4fBsnHAqOc1YrCZwG3OCNZXcxoTTuOeIZ8w15dzxwOiF5DaSN/yjnAYozXUUCZ9AM/zKVUUbRigyOIyZrrVnCUU34B1gueXZRQ3FcBhBuaILvoBbA2JYURN/ECuRKKajHmpikKMjhOAmEjWJnAFacdLgz0PNP5aHe0B/SvktAAAAAElFTkSuQmCC",alt:""}),s("img",{onClick:t[3]||(t[3]=e=>a.openUrl("https://www.linkedin.com/company/92606371/admin/feed/posts/")),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAA2VJREFUWEfNmFuITVEYx3/fMYy7YRSTezwoYcijkCEMD4o8yLyMmSY1biWH5DIjcaYkmkh4QSmKiBmTS5h4kUIkGuQWuYwThmHOnE/r7LM7czmz1zmdc2Q97v2t//rtb6211/dfQjJtl+aRRSEwE5iEMAqlf0RCCKK8AR4i3KKFS2yR94nKS0KBVToTxQ/MRchKqI8SBmqBffjlmq2PN8huHYePaoR5NiHP98plhHI2yvOu4roG2aMrEA4j9E4Jwu2s/EBZxSY5GU8vPsgercDHtrQAdBRRduKXTtqdQQJaibA1IxCuaJhKNsn2tmO0BzHT4eNERiFiMEVtpykGUqVjUe4j9P0nINBEK/lslgZn97stoLUI870gBmbD9z8Q0jShKnX4JTKmAxLQAoSrXvIHZkP5VHj1DQpOw4tgmmBgFhvlpgtyEWFhV9ImE19Wg0TzV3EbdtxJE4hSi18KBee3/RbB15V0lsDLMhjez4lYdgHOPE0bSIgQI4UqLQGO2GTH5kDpJHjwCU49sUUn+V4pEQJ6HKHI1jW7W2xl/2klcpD08IEvOl3mmVnDU4bA4F7w7gc8/mxTjb5XThgQs2Un27o8KYbxuU7U4nNwvgFql8L8Mc6ztdegaAJMGxpTqn/rxDY2W9SVB2ZqvgCDUgVpaoE+3TurHHsIJXU2dYImI61eC9WVsGXExB1/BA1BKJ4Iowc4PRt/QW61NSPhtIGcfQZLzjsDTh8G9ctjgw88AMHfHjBK2EzNVyDHljxbRjbcgL13HZXcnvB5dUwx7yB8aPIcoTFti3Xdddh/zxksJxu+rkkCJLJYE9y+toykCBLZvisRjqY6NSmBQKn7i39tK4ozlhFTZIcY7h56NQgLvLKSQZBL+GWRA2LsAtzwAjG/7azosRhshuZWMKdydtRcmDrF/NRMM6JD+sTUPjY5R0LcpswxdqNtYWRK/tRsg22hdXxvbIZfIjMRAzEephv3gTbfkqxyEvHGXgj5rtf5D4tn92My6WncMeJ4m/gGK5PeJo6nab9GOk6vYzkPpc1eKD9RypKznC6U43WMCfe0GdYlamxDmHLXw8SLT+xawtgNWA8sSKR2iQykhIArCAFjF2ywiYG4Kqbi785ClBnRi5oRaLSEEL6hvIpc1MBNQtQkc1HzF06/XkC3ReABAAAAAElFTkSuQmCC",alt:""})])])])],2),b])}],["__scopeId","data-v-6d12e1ac"]]),M=""+new URL("../static/png/gptdaoLogo2.0cd97fc3.png",import.meta.url).href,T=""+new URL("../static/png/genaisummit.fb268707.png",import.meta.url).href,D=""+new URL("../static/png/microsoftAI.4a7fa4a4.png",import.meta.url).href,Y={name:"",setup(){const o=e(),n=r("");l();window.addEventListener("scroll",(()=>{const e=document.querySelectorAll("section");let t=window.scrollY+100;e.forEach((e=>{t>=e.offsetTop&&t<=e.offsetTop+e.offsetHeight&&(n.value=e.id)}))}));const s=t((()=>o.state.screenWidth));return{activeSection:n,scrollToSection:e=>{const t=document.getElementById(e);console.log(t.offsetTop),t&&window.scrollTo({top:t.offsetTop-80,behavior:"smooth"})},openHandle:()=>{window.open("https://www.eventbrite.com/e/genai-summit-san-francisco-2024-tickets-796934722207")},screenWidth:s}},components:{},methods:{},mounted(){},unmounted(){}},W=e=>(c("data-v-06b2fb6a"),e=e(),a(),e),H={class:"header"},G={class:"logo-content"},F=W((()=>s("div",{class:"logo2"},[s("img",{src:M,alt:""})],-1))),J={key:0,class:"logo3"},P=[W((()=>s("img",{src:T,alt:""},null,-1)))],X={class:"nav-list"},j={key:0},x={key:1},Z={key:2},q={key:3},V={key:4},z={key:5},_=W((()=>s("div",{class:"logo"},[s("img",{src:D,alt:""})],-1))),$={key:6};const ee=E(Y,[["render",function(e,t,c,a,r,l){return o(),n("div",H,[s("div",G,[F,a.screenWidth>600?(o(),n("div",J,P)):d("",!0)]),s("div",X,[s("ul",null,[a.screenWidth>600?(o(),n("li",j,[s("a",{to:null,onClick:t[0]||(t[0]=e=>a.scrollToSection("section1")),class:i({active:"section1"===a.activeSection})},"HOME",2)])):d("",!0),a.screenWidth>600?(o(),n("li",x,[s("a",{to:null,onClick:t[1]||(t[1]=e=>a.scrollToSection("section2")),class:i({active:"section2"===a.activeSection})},"SPEAKERS",2)])):d("",!0),a.screenWidth>600?(o(),n("li",Z,[s("a",{to:null,onClick:t[2]||(t[2]=e=>a.scrollToSection("section3")),class:i({active:"section3"===a.activeSection})},"SPONSORS",2)])):d("",!0),a.screenWidth>600?(o(),n("li",q,[s("a",{to:null,onClick:t[3]||(t[3]=e=>a.scrollToSection("section4")),class:i({active:"section4"===a.activeSection})},"SCHEDULE",2)])):d("",!0),a.screenWidth>600?(o(),n("li",V,[s("a",{href:"https://linktr.ee/gptdao",target:"_black",class:i({active:"section5"===a.activeSection})},"CONTACT",2)])):d("",!0),a.screenWidth>600?(o(),n("li",z,[s("a",{href:"https://sv2023.genaisummit.ai/",target:"_black",class:i({active:"section6"===a.activeSection})},"PREVIOUS EVENT",2)])):d("",!0),_,a.screenWidth>600?(o(),n("li",$,[s("button",{onClick:t[4]||(t[4]=(...e)=>a.openHandle&&a.openHandle(...e))},"Buy Tickets")])):d("",!0)])])])}],["__scopeId","data-v-06b2fb6a"]]),te={class:"main-app"},oe={class:"f-header"},ne={class:"main-router"};const se=E({name:"App",setup(){const t=e();return A((()=>{window.onresize=()=>{t.commit("setScreenWidth",document.body.clientWidth)}})),{}},components:{Header:ee,Footer:K},methods:{},async created(){}},[["render",function(e,t,i,c,a,r){const l=ee,d=g("router-view"),A=K;return o(),n("div",te,[s("div",oe,[u(l)]),s("div",ne,[u(d)]),u(A)])}],["__scopeId","data-v-4e0f0259"]]),ie=m({state:()=>({lang:localStorage.getItem("lang")||"en",screenWidth:document.body.clientWidth}),mutations:{setLang(e,t){localStorage.setItem("lang",t),e.lang=t},setScreenWidth(e,t){e.screenWidth=t}}});let ce=localStorage.getItem("lang");if(!ce){let e=navigator.language;e=e.toLocaleLowerCase(),ce="-1"!=e.indexOf("zh")?"zh":"en"}localStorage.setItem("lang",ce);const ae=h({legacy:!1,locale:ce,messages:{zh:{},en:{}}}),re={},le=function(e,t,o){if(!t||0===t.length)return e();const n=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if(e=function(e,t){return new URL(e,t).href}(e,o),e in re)return;re[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!o)for(let o=n.length-1;o>=0;o--){const s=n[o];if(s.href===e&&(!t||"stylesheet"===s.rel))return}else if(document.querySelector(`link[href="${e}"]${s}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":"modulepreload",t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t?new Promise(((t,o)=>{i.addEventListener("load",t),i.addEventListener("error",(()=>o(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},de=[{path:"/",name:"index",component:()=>le((()=>import("./Index-81a694a2.js")),["./Index-81a694a2.js","./vandor-2b298193.js","../static/css/vandor.57086042.css","../static/css/Index.2e14cb44.css"],import.meta.url)}],Ae=p({history:v(),routes:de});f.init({offset:-100,duration:1500,delay:600,anchorPlacement:"center-bottom"});const ue=I(se);ue.use(ie),ue.use(ae),ue.use(Ae),ue.mount("#app");export{E as _};
