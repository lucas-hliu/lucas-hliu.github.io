import{u as Y,f as se,g as te,h as B,i as ae,P as le,t as re,j as ue,k as E,l as q,m as ie,n as M,p as t,q as ne,R as $,s as oe,v as ce,x as ve,C as pe,y as he,z as de,A as ye,B as me,D as ge,E as _,F as fe,G as He,H as ke,I as j,J as I,K as Re}from"./app-BknDfDpx.js";const we=["/","/algo/1%20array_and_list.html","/algo/2%20queue_and_stack.html","/algo/3%20hash_map.html","/algo/","/books/share_books.html","/design/1%20design_patterns.html","/design/2%20observer_pattern.html","/design/3%20strategy_pattern.html","/design/","/interview/1%20c__basic.html","/interview/2%20process.html","/interview/3%20thread.html","/interview/","/sideline/","/404.html","/books/"],Qe="SEARCH_PRO_QUERY_HISTORY",g=Y(Qe,[]),qe=()=>{const{queryHistoryCount:a}=_,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=a=>we[a.id]+("anchor"in a?`#${a.anchor}`:""),_e="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=_,f=Y(_e,[]),xe=()=>{const a=U>0;return{enabled:a,resultHistory:f,addResultHistory:l=>{if(a){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,U-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},be=a=>{const l=pe(),r=B(),x=he(),i=E(0),R=q(()=>i.value>0),d=de([]);return ye(()=>{const{search:y,terminate:b}=me(),H=ge(c=>{const k=c.join(" "),{searchFilter:S=h=>h,splitWord:C,suggestionsFilter:P,...m}=l.value;k?(i.value+=1,y(c.join(" "),r.value,m).then(h=>S(h,k,r.value,x.value)).then(h=>{i.value-=1,d.value=h}).catch(h=>{console.warn(h),i.value-=1,i.value||(d.value=[])})):d.value=[]},_.searchDelay-_.suggestDelay);M([a,r],([c])=>H(c),{immediate:!0}),fe(()=>{b()})}),{isSearching:R,results:d}};var Ce=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),x=B(),i=ae(le),{enabled:R,addQueryHistory:d,queryHistory:y,removeQueryHistory:b}=qe(),{enabled:H,resultHistory:c,addResultHistory:k,removeResultHistory:S}=xe(),C=R||H,P=re(a,"queries"),{results:m,isSearching:h}=be(P),u=ue({isQuery:!0,index:0}),v=E(0),p=E(0),O=q(()=>C&&(y.value.length>0||c.value.length>0)),D=q(()=>m.value.length>0),L=q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=L.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<L.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},A=e=>e.map(s=>Re(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=He[e.index]||"$content",[n,Q=""]=ke(s)?s[x.value].split("$content"):s.split("$content");return e.display.map(o=>t("div",A([n,...o,Q])))}return e.display.map(s=>t("div",A(s)))},w=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>R?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),b(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{w()}},()=>[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(n=>A(n)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),S(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(D.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=L.value.contents[p.value];d(a.queries.join(" ")),k(s),r.push(F(s)),w()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),w())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!D.value:!O.value}],id:"search-pro-results"},a.queries.length?h.value?t(ne,{hint:i.value.searching}):D.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},n)=>{const Q=v.value===n;return t("li",{class:["search-pro-result-list-item",{active:Q}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((o,ee)=>{const T=Q&&p.value===ee;return t($,{to:F(o),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{d(a.queries.join(" ")),k(o),w()}},()=>[o.type==="text"?null:t(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?t("div",{class:"content-header"},o.header):null,t("div",W(o))])])})])})):i.value.emptyResult:C?O.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Ce as default};