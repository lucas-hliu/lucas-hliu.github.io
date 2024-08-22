import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,a as n}from"./app-CEttQDX4.js";const l={},t=n(`<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h3><p>责任链模式（Chain of Responsibility Pattern）是一种行为设计模式，它允许多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合。该模式将这些对象连成一条链，并沿着这条链传递请求，直到有对象处理它为止。</p><h3 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构</span></a></h3><p>责任链模式的核心思想是将请求沿着一条链传递，每个链上的对象都有机会处理请求。如果当前对象无法处理该请求，则将其传递给下一个对象，直到找到能够处理请求的对象。</p><p>这个模式主要包括以下几个部分：</p><ul><li><strong>处理者（Handler）</strong>：接口或抽象类，定义了处理请求的抽象方法，同时维护一个指向下一个处理者的引用。</li><li><strong>具体处理者（Concrete Handler）</strong>：实现了处理者接口，负责处理具体的请求。</li><li><strong>请求</strong>：需要沿着责任链传递的请求。</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuKfCAYufIamkKKZEIImkLl3qIIrBzKZCIyb9BLAevj8koyzCKIXEBV5BhIY12ciWgz5Io80mDBcqgs5crIgKPG9DJynHIChFpu6g24ejB4qjBj78p2jHI4ciBDRaqaKrA0zX1LSj5nUAIsngzFJq549I4tDzKXDJKejWubOAJzVDUzwtGG6RSj_4lCHq8jMwP1Qb9fVaOr6CgbfBLzSEDP2i59vrBtqsfnEe4XA4cAu4XYE-W538BqijAifCIGLw6s84cij9re_k6n8CS4ZDIm6c2m00" alt=" 类图"><p>下面是一个用 C++ 实现的请假流程处理的责任链模式示例。这个示例模拟了请假请求根据天数由不同级别的领导审批的场景。</p><div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" data-title="cpp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;iostream&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;memory&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 抽象处理者类</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> LeaveHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">protected:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    std::shared_ptr</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">LeaveHandler</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nextHandler;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 设置下一个处理者</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> setNextHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(std::</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">shared_ptr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">LeaveHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">handler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        nextHandler </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> handler;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 处理请假请求的虚函数</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    virtual</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> bool</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> handleRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> days</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// Team Leader 处理类</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> TeamLeaderHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> LeaveHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    bool</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> handleRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> days</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">override</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (days </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            std::cout </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Team Leader approved &quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> days </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; days leave.&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nextHandler </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> nullptr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> nextHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">handleRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(days);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// Manager 处理类</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ManagerHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> LeaveHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> handleRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> days</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">override</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (days </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#A626A4;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> days </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            std::cout </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Manager approved &quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> days </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; days leave.&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nextHandler </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> nullptr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            nextHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">handleRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(days);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// Director 处理类</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> DirectorHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> LeaveHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> handleRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> days</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">override</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (days </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            std::cout </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Director approved &quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> days </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; days leave.&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nextHandler </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> nullptr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            nextHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">handleRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(days);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 创建处理者对象</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    std::shared_ptr</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">LeaveHandler</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> teamLeader </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> std::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make_shared</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">TeamLeaderHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    std::shared_ptr</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">LeaveHandler</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> manager </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> std::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make_shared</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ManagerHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    std::shared_ptr</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">LeaveHandler</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> director </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> std::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make_shared</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">DirectorHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 设置责任链</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    teamLeader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setNextHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(manager);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    manager</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setNextHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(director);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 发送不同天数的请假请求</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> leaveDays1 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  // 由 Team Leader 处理</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> leaveDays2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  // 由 Manager 处理</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> leaveDays3 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // 由 Director 处理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    teamLeader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">handleRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(leaveDays1);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    teamLeader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">handleRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(leaveDays2);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    teamLeader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">handleRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(leaveDays3);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上述代码后，输出结果如下：</p><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Team Leader approved 2 days leave.</span></span>
<span class="line"><span>Manager approved 5 days leave.</span></span>
<span class="line"><span>Director approved 10 days leave.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3><ul><li><strong>请求处理链</strong>：例如在 Web 服务器中，处理请求的各个过滤器（Filter）构成了一条责任链，每个过滤器负责处理特定类型的请求。</li><li><strong>事件处理系统</strong>：在图形用户界面（GUI）中，事件处理链可以使用责任链模式，将事件沿着组件树传递，直到某个组件处理该事件。</li><li><strong>日志处理</strong>：在日志框架中，多个日志处理器（如控制台日志、文件日志、远程日志等）可以组成责任链，依次处理日志信息。</li></ul><div class="hint-container tip"><p class="hint-container-title">总结</p><p>责任链模式通过将请求沿着一条链传递，实现了请求的解耦处理。它使得请求的发送者和接收者之间不再紧耦合，增强了系统的灵活性和可扩展性。在某些需要链式处理请求的场景中，责任链模式非常有用，但也需要注意链条过长带来的性能问题。</p></div>`,15),e=[t];function h(k,p){return a(),i("div",null,e)}const A=s(l,[["render",h],["__file","7 chain_of_responsibility_pattern.html.vue"]]),g=JSON.parse('{"path":"/design/7%20chain_of_responsibility_pattern.html","title":"责任链模式","lang":"zh-CN","frontmatter":{"title":"责任链模式","order":2,"category":["架构设计"],"tag":["c++","设计模式","责任链模式"],"editLink":false,"description":"概述 责任链模式（Chain of Responsibility Pattern）是一种行为设计模式，它允许多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合。该模式将这些对象连成一条链，并沿着这条链传递请求，直到有对象处理它为止。 结构 责任链模式的核心思想是将请求沿着一条链传递，每个链上的对象都有机会处理请求。如果当前对象无法处理该请...","head":[["meta",{"property":"og:url","content":"https://hackcpp.github.io/design/7%20chain_of_responsibility_pattern.html"}],["meta",{"property":"og:site_name","content":"程序员的白粥馆"}],["meta",{"property":"og:title","content":"责任链模式"}],["meta",{"property":"og:description","content":"概述 责任链模式（Chain of Responsibility Pattern）是一种行为设计模式，它允许多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合。该模式将这些对象连成一条链，并沿着这条链传递请求，直到有对象处理它为止。 结构 责任链模式的核心思想是将请求沿着一条链传递，每个链上的对象都有机会处理请求。如果当前对象无法处理该请..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-22T09:45:05.000Z"}],["meta",{"property":"article:author","content":"hackcpp"}],["meta",{"property":"article:tag","content":"c++"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"责任链模式"}],["meta",{"property":"article:modified_time","content":"2024-08-22T09:45:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"责任链模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-22T09:45:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"hackcpp\\",\\"url\\":\\"https://github.com/hackcpp\\",\\"email\\":\\"liuheng2015@gmail.com\\"}]}"]]},"headers":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}],"git":{"createdTime":1724319905000,"updatedTime":1724319905000,"contributors":[{"name":"hackcpp","email":"liuheng2015@gmail.com","commits":1}]},"readingTime":{"minutes":3.14,"words":943},"filePathRelative":"design/7 chain_of_responsibility_pattern.md","localizedDate":"2024年8月22日","autoDesc":true,"excerpt":"<h3>概述</h3>\\n<p>责任链模式（Chain of Responsibility Pattern）是一种行为设计模式，它允许多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合。该模式将这些对象连成一条链，并沿着这条链传递请求，直到有对象处理它为止。</p>\\n<h3>结构</h3>\\n<p>责任链模式的核心思想是将请求沿着一条链传递，每个链上的对象都有机会处理请求。如果当前对象无法处理该请求，则将其传递给下一个对象，直到找到能够处理请求的对象。</p>\\n<p>这个模式主要包括以下几个部分：</p>\\n<ul>\\n<li><strong>处理者（Handler）</strong>：接口或抽象类，定义了处理请求的抽象方法，同时维护一个指向下一个处理者的引用。</li>\\n<li><strong>具体处理者（Concrete Handler）</strong>：实现了处理者接口，负责处理具体的请求。</li>\\n<li><strong>请求</strong>：需要沿着责任链传递的请求。</li>\\n</ul>"}');export{A as comp,g as data};
