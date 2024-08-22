import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,a as l}from"./app-Bav-wHSp.js";const a={},n=l(`<p>MVVM（Model-View-ViewModel）是一种常用于前端开发中的架构模式，它将用户界面逻辑和业务逻辑进行分离，从而使代码更具可维护性和可测试性。MVVM 模式是由微软架构师 John Gossman 于 2005 年提出的，最初用于 WPF（Windows Presentation Foundation） 和 Silverlight 中，现已广泛应用于各种前端框架和工具，如 Vue.js、Angular、React+Redux 等。</p><h3 id="mvvm-的核心概念" tabindex="-1"><a class="header-anchor" href="#mvvm-的核心概念"><span>MVVM 的核心概念</span></a></h3><p>MVVM 模式由三部分组成：</p><ol><li><strong>Model（模型）</strong></li><li><strong>View（视图）</strong></li><li><strong>ViewModel（视图模型）</strong></li></ol><p>这三部分通过数据绑定（Data Binding）机制相互通信，实现界面和数据的自动同步。下面是各个部分的详细解释：</p><h4 id="_1-model-模型" tabindex="-1"><a class="header-anchor" href="#_1-model-模型"><span>1. Model（模型）</span></a></h4><p>Model 代表应用程序的数据和业务逻辑，通常是纯粹的 JavaScript 对象、类或者数据结构。它负责处理与业务逻辑相关的所有操作，如数据的获取、保存和更新等。</p><ul><li><strong>职责</strong>： <ul><li>管理应用程序的核心数据。</li><li>处理业务逻辑，如增删改查等。</li><li>与服务层（如 API）交互，获取或更新数据。</li></ul></li></ul><h4 id="_2-view-视图" tabindex="-1"><a class="header-anchor" href="#_2-view-视图"><span>2. View（视图）</span></a></h4><p>View 是用户界面（UI）的展现层，负责将 ViewModel 中的数据展示给用户。它通常由 HTML、CSS 等构建而成，负责呈现数据和处理用户的输入（如按钮点击、表单提交等）。</p><ul><li><strong>职责</strong>： <ul><li>负责界面的展示。</li><li>捕捉用户输入，并将其传递给 ViewModel。</li><li>数据绑定机制确保视图能够实时反映 ViewModel 的变化。</li></ul></li></ul><h4 id="_3-viewmodel-视图模型" tabindex="-1"><a class="header-anchor" href="#_3-viewmodel-视图模型"><span>3. ViewModel（视图模型）</span></a></h4><p>ViewModel 作为 View 和 Model 之间的桥梁，负责处理界面显示逻辑。它从 Model 中获取数据并提供给 View，还处理用户的输入，并将其传递给 Model。ViewModel 不直接操作 View，而是通过数据绑定和命令机制进行交互。</p><ul><li><strong>职责</strong>： <ul><li>提供 View 所需的数据。</li><li>响应 View 的用户操作，并将操作传递给 Model。</li><li>实现双向数据绑定，使得 View 和 Model 之间保持同步。</li></ul></li></ul><h3 id="mvvm-的工作原理" tabindex="-1"><a class="header-anchor" href="#mvvm-的工作原理"><span>MVVM 的工作原理</span></a></h3><p>MVVM 的工作原理是通过数据绑定实现视图和模型的同步。视图层（View）直接绑定到 ViewModel 中的属性，这样当 ViewModel 中的数据发生变化时，视图会自动更新。同时，视图的用户输入会通过绑定机制传递给 ViewModel，ViewModel 再更新 Model。</p><ul><li><strong>单向绑定</strong>：ViewModel 到 View 的数据流动。当 ViewModel 中的数据发生变化时，View 自动更新。</li><li><strong>双向绑定</strong>：View 到 ViewModel 的数据流动也同步。例如，用户在表单中输入数据时，ViewModel 会自动更新。</li></ul><h3 id="mvvm-与-mvc、mvp-的对比" tabindex="-1"><a class="header-anchor" href="#mvvm-与-mvc、mvp-的对比"><span>MVVM 与 MVC、MVP 的对比</span></a></h3><ul><li><p><strong>MVC（Model-View-Controller）</strong>：MVC 中，控制器（Controller）负责响应用户交互并更新模型（Model）。视图（View）观察模型，并根据模型的变化进行更新。MVC 的控制器承担了较多的业务逻辑处理工作。</p></li><li><p><strong>MVP（Model-View-Presenter）</strong>：MVP 中，Presenter 是负责视图与模型之间通信的中介，View 不直接依赖 Model。Presenter 包含了 UI 逻辑和交互逻辑，处理用户事件，并与 Model 交互。</p></li><li><p><strong>MVVM</strong>：MVVM 的核心是 ViewModel，它将 Model 和 View 进行解耦。View 和 ViewModel 通过数据绑定机制进行通信，View 只关注界面展示，ViewModel 负责处理逻辑。</p></li></ul><p><strong>对比总结</strong>：</p><ul><li><strong>解耦程度</strong>：MVVM 提高了 View 和 Model 的解耦程度，尤其在数据绑定方面更为自动化和灵活。</li><li><strong>代码维护</strong>：由于 ViewModel 仅处理与 UI 逻辑相关的部分，Model 专注于业务逻辑，这使得 MVVM 在代码的分离和维护性方面优于 MVC 和 MVP。</li><li><strong>适用场景</strong>：MVVM 更适合需要复杂数据绑定和动态 UI 更新的应用，特别是在现代前端框架（如 Vue、Angular）中应用广泛。</li></ul><h3 id="mvvm-的优缺点" tabindex="-1"><a class="header-anchor" href="#mvvm-的优缺点"><span>MVVM 的优缺点</span></a></h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点：</span></a></h4><ul><li><strong>解耦性好</strong>：View 和 Model 之间没有直接的依赖关系，二者通过 ViewModel 进行沟通，代码更具模块化。</li><li><strong>可测试性强</strong>：由于 ViewModel 独立于 View，业务逻辑和数据处理部分可以通过单元测试进行验证，而不依赖于实际的 UI。</li><li><strong>数据绑定机制</strong>：数据绑定使得 View 和 ViewModel 之间的同步更加方便，减少了手动操作 DOM 的代码。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点：</span></a></h4><ul><li><strong>学习成本高</strong>：对于初学者来说，理解 MVVM 的数据绑定和通信机制可能有一定的难度。</li><li><strong>性能问题</strong>：在复杂的场景下，大量的数据绑定可能会引起性能问题，尤其是在数据变更频繁的情况下。</li><li><strong>调试难度增加</strong>：由于数据绑定是自动化的，可能导致调试过程变得更加复杂，不易跟踪数据的流动。</li></ul><h3 id="mvvm-应用示例-使用-vue-js" tabindex="-1"><a class="header-anchor" href="#mvvm-应用示例-使用-vue-js"><span>MVVM 应用示例：使用 Vue.js</span></a></h3><p>Vue.js 是一种典型的 MVVM 框架，下面展示了一个简单的 Vue.js 示例，展示 MVVM 的工作原理。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;app&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;name&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Enter your name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Hello, {{ name }}!&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://cdn.jsdelivr.net/npm/vue@2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#app&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中：</p><ul><li><strong>Model</strong>：<code>data</code> 对象中存储的 <code>name</code> 字段。</li><li><strong>View</strong>：HTML 模板中展示数据的部分，如 <code>input</code> 和 <code>p</code> 标签。</li><li><strong>ViewModel</strong>：Vue 实例管理的数据和行为，负责与 View 的数据绑定和交互。</li></ul><p>当用户在输入框中输入数据时，<code>v-model</code> 会自动更新 <code>data</code> 中的 <code>name</code>，并且由于数据绑定，<code>{{ name }}</code> 会同步更新到页面上。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>MVVM 模式通过数据绑定机制，将 View 和 Model 进行解耦，使得前端开发中的数据管理和 UI 渲染变得更加高效。它非常适合需要频繁更新 UI 的应用，尤其在现代前端开发框架中广泛应用。虽然 MVVM 提供了很好的解耦性和可维护性，但也带来了性能和调试方面的挑战，因此在应用时需要根据具体情况权衡。</p>`,34),t=[n];function h(r,p){return e(),s("div",null,t)}const k=i(a,[["render",h],["__file","8 mvvm.html.vue"]]),g=JSON.parse('{"path":"/design/8%20mvvm.html","title":"MVVM 模式","lang":"zh-CN","frontmatter":{"title":"MVVM 模式","order":2,"category":["架构设计"],"tag":["设计模式","MVVM"],"editLink":false,"description":"MVVM（Model-View-ViewModel）是一种常用于前端开发中的架构模式，它将用户界面逻辑和业务逻辑进行分离，从而使代码更具可维护性和可测试性。MVVM 模式是由微软架构师 John Gossman 于 2005 年提出的，最初用于 WPF（Windows Presentation Foundation） 和 Silverlight 中，现...","head":[["meta",{"property":"og:url","content":"https://hackcpp.github.io/design/8%20mvvm.html"}],["meta",{"property":"og:site_name","content":"程序员的白粥馆"}],["meta",{"property":"og:title","content":"MVVM 模式"}],["meta",{"property":"og:description","content":"MVVM（Model-View-ViewModel）是一种常用于前端开发中的架构模式，它将用户界面逻辑和业务逻辑进行分离，从而使代码更具可维护性和可测试性。MVVM 模式是由微软架构师 John Gossman 于 2005 年提出的，最初用于 WPF（Windows Presentation Foundation） 和 Silverlight 中，现..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-22T14:38:31.000Z"}],["meta",{"property":"article:author","content":"hackcpp"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"MVVM"}],["meta",{"property":"article:modified_time","content":"2024-08-22T14:38:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MVVM 模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-22T14:38:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"hackcpp\\",\\"url\\":\\"https://github.com/hackcpp\\",\\"email\\":\\"liuheng2015@gmail.com\\"}]}"]]},"headers":[{"level":3,"title":"MVVM 的核心概念","slug":"mvvm-的核心概念","link":"#mvvm-的核心概念","children":[]},{"level":3,"title":"MVVM 的工作原理","slug":"mvvm-的工作原理","link":"#mvvm-的工作原理","children":[]},{"level":3,"title":"MVVM 与 MVC、MVP 的对比","slug":"mvvm-与-mvc、mvp-的对比","link":"#mvvm-与-mvc、mvp-的对比","children":[]},{"level":3,"title":"MVVM 的优缺点","slug":"mvvm-的优缺点","link":"#mvvm-的优缺点","children":[]},{"level":3,"title":"MVVM 应用示例：使用 Vue.js","slug":"mvvm-应用示例-使用-vue-js","link":"#mvvm-应用示例-使用-vue-js","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1724337511000,"updatedTime":1724337511000,"contributors":[{"name":"hackcpp","email":"liuheng2015@gmail.com","commits":1}]},"readingTime":{"minutes":5,"words":1500},"filePathRelative":"design/8 mvvm.md","localizedDate":"2024年8月22日","autoDesc":true,"excerpt":"<p>MVVM（Model-View-ViewModel）是一种常用于前端开发中的架构模式，它将用户界面逻辑和业务逻辑进行分离，从而使代码更具可维护性和可测试性。MVVM 模式是由微软架构师 John Gossman 于 2005 年提出的，最初用于 WPF（Windows Presentation Foundation） 和 Silverlight 中，现已广泛应用于各种前端框架和工具，如 Vue.js、Angular、React+Redux 等。</p>\\n<h3>MVVM 的核心概念</h3>\\n<p>MVVM 模式由三部分组成：</p>\\n<ol>\\n<li><strong>Model（模型）</strong></li>\\n<li><strong>View（视图）</strong></li>\\n<li><strong>ViewModel（视图模型）</strong></li>\\n</ol>"}');export{k as comp,g as data};
