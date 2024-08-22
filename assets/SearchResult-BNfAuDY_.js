import{u as Y,f as te,g as se,h as B,i as ae,P as le,t as re,j as ie,k as E,l as Q,m as ue,w as M,n as s,p as ne,R as $,q as oe,s as ce,v as ve,C as he,x as pe,y as de,z as ye,A as me,B as ge,D as q,E as _e,F as fe,G as ke,H as j,I,J as He}from"./app-CEttQDX4.js";const we=["/","/algo/1%20array_and_list.html","/algo/2%20queue_and_stack.html","/algo/3%20hash_map.html","/algo/4%20tree.html","/algo/","/books/","/books/share_books.html","/design/1%20design_patterns.html","/design/2%20observer_pattern.html","/design/3%20strategy_pattern.html","/design/4%20decorator_pattern.html","/design/5%20bridge_pattern.html","/design/6%20factory_pattern.html","/design/7%20chain_of_responsibility_pattern.html","/design/","/interview/1%20c__basic.html","/interview/2%20process.html","/interview/3%20thread.html","/interview/4%20c__11.html","/interview/","/other/1%20linux_commands.html","/other/2%20encrypt_string.html","/other/3%20tcp.html","/other/4%20waitpid.html","/other/5%20git.html","/other/6%20cmake.html","/other/7%20design_partten_in_work.html","/other/","/sideline/","/sideline/ollama.html","/404.html"],Re="SEARCH_PRO_QUERY_HISTORY",g=Y(Re,[]),Qe=()=>{const{queryHistoryCount:a}=q,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=a=>we[a.id]+("anchor"in a?`#${a.anchor}`:""),qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=q,_=Y(qe,[]),xe=()=>{const a=U>0;return{enabled:a,resultHistory:_,addResultHistory:l=>{if(a){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),_.value=[r,..._.value.slice(0,U-1)]}},removeResultHistory:l=>{_.value=[..._.value.slice(0,l),..._.value.slice(l+1)]}}},be=a=>{const l=he(),r=B(),x=pe(),u=E(0),H=Q(()=>u.value>0),d=de([]);return ye(()=>{const{search:y,terminate:b}=me(),f=ge(c=>{const k=c.join(" "),{searchFilter:S=p=>p,splitWord:C,suggestionsFilter:P,...m}=l.value;k?(u.value+=1,y(c.join(" "),r.value,m).then(p=>S(p,k,r.value,x.value)).then(p=>{u.value-=1,d.value=p}).catch(p=>{console.warn(p),u.value-=1,u.value||(d.value=[])})):d.value=[]},q.searchDelay-q.suggestDelay);M([a,r],([c])=>f(c),{immediate:!0}),_e(()=>{b()})}),{isSearching:H,results:d}};var Ce=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),x=B(),u=ae(le),{enabled:H,addQueryHistory:d,queryHistory:y,removeQueryHistory:b}=Qe(),{enabled:f,resultHistory:c,addResultHistory:k,removeResultHistory:S}=xe(),C=H||f,P=re(a,"queries"),{results:m,isSearching:p}=be(P),i=ie({isQuery:!0,index:0}),v=E(0),h=E(0),O=Q(()=>C&&(y.value.length>0||c.value.length>0)),D=Q(()=>m.value.length>0),L=Q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:t}=i;t===0?(i.isQuery=!e,i.index=e?c.value.length-1:y.value.length-1):i.index=t-1},G=()=>{const{isQuery:e,index:t}=i;t===(e?y.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=t+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,h.value=L.value.contents.length-1},V=()=>{v.value=v.value<m.value.length-1?v.value+1:0,h.value=0},K=()=>{h.value<L.value.contents.length-1?h.value+=1:V()},N=()=>{h.value>0?h.value-=1:J()},A=e=>e.map(t=>He(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=fe[e.index]||"$content",[n,R=""]=ke(t)?t[x.value].split("$content"):t.split("$content");return e.display.map(o=>s("div",A([n,...o,R])))}return e.display.map(t=>s("div",A(t)))},w=()=>{v.value=0,h.value=0,l("updateQuery",""),l("close")},X=()=>H?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===t}],onClick:()=>{l("updateQuery",e)}},[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),b(t)}})]))])):null,Z=()=>f?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>s($,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===t}],onClick:()=>{w()}},()=>[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(n=>A(n)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),S(t)}})]))])):null;return ue("keydown",e=>{if(a.isFocusing){if(D.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const t=L.value.contents[h.value];d(a.queries.join(" ")),k(t),r.push(F(t)),w()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=i;i.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(c.value[t].link),w())}}}}),M([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!D.value:!O.value}],id:"search-pro-results"},a.queries.length?p.value?s(ne,{hint:u.value.searching}):D.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},n)=>{const R=v.value===n;return s("li",{class:["search-pro-result-list-item",{active:R}]},[s("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((o,ee)=>{const T=R&&h.value===ee;return s($,{to:F(o),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{d(a.queries.join(" ")),k(o),w()}},()=>[o.type==="text"?null:s(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?s("div",{class:"content-header"},o.header):null,s("div",W(o))])])})])})):u.value.emptyResult:C?O.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{Ce as default};
