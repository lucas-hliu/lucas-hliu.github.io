import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,c as k,e as r,w as l,a as d,b as i,o as p,d as s}from"./app-VZ6_zcLN.js";const c={},A=d('<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h3><p>**策略模式（Strategy Pattern）**是一种行为型设计模式，它定义了一系列算法，并将每个算法封装在独立的策略类中，使得它们可以互相替换。策略模式使得算法的变化不会影响到使用算法的客户类。</p><h3 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构</span></a></h3><ol><li><strong>策略接口</strong>：定义算法的通用接口。</li><li><strong>具体策略类</strong>：实现策略接口的不同算法。</li><li><strong>上下文类</strong>：持有一个策略对象，并在运行时决定使用哪种策略。</li></ol><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><p>假设我们有一个水果计价系统，需要计算不同水果的价格。可以通过策略模式将计算逻辑封装成独立的策略类，这样可以动态选择合适的计算策略。</p>',6),g=i("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"// 折扣类型")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"enum"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," class"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," DiscountType"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"  NoDiscount"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"  SeasonalDiscount"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"  // other discount type...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"};")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"// 上下文类")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"class"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Order"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"public:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"    Order"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(){}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    double"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," getFinalPrice"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"double"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," price"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}},"DiscountType"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," type"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        if"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," (type "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"=="),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," DiscountType::NoDiscount) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"          return"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," price;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        else"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," if"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(type "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"=="),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," DiscountType::SeasonalDiscount) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"          return"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," price "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#56B6C2"}},"*"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," 0.9"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"        //else ......")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"};")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),y=i("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"// 策略接口")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"class"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," DiscountStrategy"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"public:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    virtual"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," double"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," calculate"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"double"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," price"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," ="),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," 0"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"};")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"// 具体策略")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"class"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," NoDiscount"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," : "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"public"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," DiscountStrategy"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"public:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    double"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," calculate"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"double"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," price"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," override"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        return"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," price;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"};")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"class"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," SeasonalDiscount"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," : "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"public"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," DiscountStrategy"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"public:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    double"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," calculate"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"double"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," price"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," override"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        return"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," price "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#56B6C2"}},"*"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," 0.9"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"};")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"//other discounts...")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"// 上下文类")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"class"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Order"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    DiscountStrategy"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#56B6C2"}},"*"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," discountStrategy;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"public:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"    Order"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}},"DiscountStrategy"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"*"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," strategy"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") : "),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"discountStrategy"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(strategy) {}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    double"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," getFinalPrice"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"double"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," price"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        return"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}}," discountStrategy"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"->"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"calculate"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(price);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"};")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),B=i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"总结"),i("ul",null,[i("li",null,"策略模式可以使得算法独立于使用它的客户端而变化。"),i("li",null,"可以避免使用条件语句来选择不同的算法。"),i("li",null,"提高了代码的可扩展性，当有新的策略出现时，只需增加一个具体策略类，而不需要修改现有代码。")])],-1),o=i("p",null,"策略模式适用于需要动态选择或更换算法的场景，可以保持代码的灵活性和可扩展性，避免将多个算法逻辑硬编码到一个类中。",-1);function u(D,F){const n=h("Tabs");return p(),k("div",null,[A,r(n,{id:"32",data:[{id:"无设计模式"},{id:"策略模式"}]},{title0:l(({value:a,isActive:t})=>[s("无设计模式")]),title1:l(({value:a,isActive:t})=>[s("策略模式")]),tab0:l(({value:a,isActive:t})=>[g]),tab1:l(({value:a,isActive:t})=>[y]),_:1}),B,o])}const C=e(c,[["render",u],["__file","3 strategy_pattern.html.vue"]]),v=JSON.parse('{"path":"/design/3%20strategy_pattern.html","title":"策略模式","lang":"zh-CN","frontmatter":{"title":"策略模式","order":2,"category":["架构设计"],"tag":["c++","设计模式","策略模式"],"editLink":false},"headers":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1722920461000,"updatedTime":1723618625000,"contributors":[{"name":"liuheng","email":"liuheng2015@gmail.com","commits":2}]},"readingTime":{"minutes":1.64,"words":493},"filePathRelative":"design/3 strategy_pattern.md","localizedDate":"2024年8月6日","excerpt":"<h3>概述</h3>\\n<p>**策略模式（Strategy Pattern）**是一种行为型设计模式，它定义了一系列算法，并将每个算法封装在独立的策略类中，使得它们可以互相替换。策略模式使得算法的变化不会影响到使用算法的客户类。</p>\\n<h3>结构</h3>\\n<ol>\\n<li><strong>策略接口</strong>：定义算法的通用接口。</li>\\n<li><strong>具体策略类</strong>：实现策略接口的不同算法。</li>\\n<li><strong>上下文类</strong>：持有一个策略对象，并在运行时决定使用哪种策略。</li>\\n</ol>\\n<h3>示例</h3>\\n<p>假设我们有一个水果计价系统，需要计算不同水果的价格。可以通过策略模式将计算逻辑封装成独立的策略类，这样可以动态选择合适的计算策略。</p>"}');export{C as comp,v as data};