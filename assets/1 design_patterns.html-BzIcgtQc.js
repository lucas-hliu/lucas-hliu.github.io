import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as r,e as n}from"./app-Dle3uvRK.js";const o={},a=n('<h3 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h3><p><strong>设计模式</strong>是解决常见软件设计问题的通用解决方案。它们分为三大类：</p><ol><li><strong>创建型模式</strong>：关注对象创建，如单例模式、<a href="/design/6%20factory_pattern">工厂模式</a>。</li><li><strong>结构型模式</strong>：关注对象组合，如<a href="/design/4%20decorator_pattern">装饰器模式</a>、<a href="/design/5%20bridge_pattern">桥接模式</a>，组合模式。</li><li><strong>行为型模式</strong>：关注对象间通信，如<a href="/design/2%20observer_pattern">观察者模式</a>、<a href="/design/3%20strategy_pattern">策略模式</a>, <a href="/design/7%20chain_of_responsibility_pattern">责任链模式</a>。</li></ol><h3 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则"><span>设计原则</span></a></h3><p><strong>设计原则</strong>是指导代码设计的基本准则，如：</p><ol><li><strong>单一职责原则 (SRP)</strong></li></ol><p><strong>定义</strong>: 一个类应只有一个引起其变化的原因，即一个类只负责一项职责。</p><p><strong>目的</strong>: 提高代码的可维护性和可读性，减少类的复杂性。</p><ol start="2"><li><strong>开闭原则 (OCP)</strong></li></ol><p><strong>定义</strong>: 软件实体应对扩展开放，对修改关闭。</p><p><strong>目的</strong>: 通过抽象和接口，允许添加新功能而无需修改现有代码，减少引入新 bug 的风险。</p><ol start="3"><li><strong>里氏替换原则 (LSP)</strong></li></ol><p><strong>定义</strong>: 子类对象必须能够替换其父类对象且行为一致。</p><p><strong>目的</strong>: 保证继承层次的正确性，避免运行时错误。</p><ol start="4"><li><strong>依赖倒置原则 (DIP)</strong></li></ol><p><strong>定义</strong>: 高层模块不应依赖于低层模块，二者都应该依赖于抽象；抽象不应依赖于细节，细节应该依赖于抽象。</p><p><strong>目的</strong>: 减少模块之间的耦合性，提高系统的灵活性和可扩展性。</p><ol start="5"><li><strong>接口隔离原则 (ISP)</strong></li></ol><p><strong>定义</strong>: 不应强迫一个类依赖于它不需要的接口，接口应尽量细化。</p><p><strong>目的</strong>: 通过多个特定接口来代替单一的总接口，减少代码的复杂性，提高系统的灵活性。</p><h3 id="关于架构设计的一点思考" tabindex="-1"><a class="header-anchor" href="#关于架构设计的一点思考"><span>关于架构设计的一点思考</span></a></h3><ul><li><p>减少耦合</p><p>通过添加抽象接口层，将调用模块与实现模块进行隔离，降低耦合性。调用模块只依赖抽象接口，进行业务逻辑的实现，实现模块基于抽象接口实现具体的底层细节。</p></li><li><p>单一职责</p><p>一个模块只实现其功能的最小集，对外提供尽可能少的接口，接口应尽量细化。</p></li><li><p>隔离变化/稳定</p><p>找出系统中可预计的变化，将其隔离到相同的模块。系统需求变动导致的修改尽可能的不会扩散的稳定的模块。</p></li></ul>',22),i=[a];function s(p,l){return r(),e("div",null,i)}const d=t(o,[["render",s],["__file","1 design_patterns.html.vue"]]),h=JSON.parse('{"path":"/design/1%20design_patterns.html","title":"设计原则","lang":"zh-CN","frontmatter":{"title":"设计原则","order":2,"category":["架构设计"],"tag":["c++","设计模式","设计原则"],"editLink":false,"description":"设计模式 设计模式是解决常见软件设计问题的通用解决方案。它们分为三大类： 创建型模式：关注对象创建，如单例模式、工厂模式。 结构型模式：关注对象组合，如装饰器模式、桥接模式，组合模式。 行为型模式：关注对象间通信，如观察者模式、策略模式, 责任链模式。 设计原则 设计原则是指导代码设计的基本准则，如： 单一职责原则 (SRP) 定义: 一个类应只有一个...","head":[["meta",{"property":"og:url","content":"https://hackcpp.github.io/design/1%20design_patterns.html"}],["meta",{"property":"og:site_name","content":"程序员的白粥馆"}],["meta",{"property":"og:title","content":"设计原则"}],["meta",{"property":"og:description","content":"设计模式 设计模式是解决常见软件设计问题的通用解决方案。它们分为三大类： 创建型模式：关注对象创建，如单例模式、工厂模式。 结构型模式：关注对象组合，如装饰器模式、桥接模式，组合模式。 行为型模式：关注对象间通信，如观察者模式、策略模式, 责任链模式。 设计原则 设计原则是指导代码设计的基本准则，如： 单一职责原则 (SRP) 定义: 一个类应只有一个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-22T09:45:05.000Z"}],["meta",{"property":"article:author","content":"Mr.Hackcpp"}],["meta",{"property":"article:tag","content":"c++"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"设计原则"}],["meta",{"property":"article:modified_time","content":"2024-08-22T09:45:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计原则\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-22T09:45:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hackcpp\\",\\"url\\":\\"/portfolio.html\\"}]}"]]},"headers":[{"level":3,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[]},{"level":3,"title":"设计原则","slug":"设计原则","link":"#设计原则","children":[]},{"level":3,"title":"关于架构设计的一点思考","slug":"关于架构设计的一点思考","link":"#关于架构设计的一点思考","children":[]}],"git":{"createdTime":1722915581000,"updatedTime":1724319905000,"contributors":[{"name":"hackcpp","email":"liuheng2015@gmail.com","commits":1},{"name":"liuheng","email":"liuheng2015@gmail.com","commits":1}]},"readingTime":{"minutes":2.15,"words":646},"filePathRelative":"design/1 design_patterns.md","localizedDate":"2024年8月6日","excerpt":"","autoDesc":true}');export{d as comp,h as data};