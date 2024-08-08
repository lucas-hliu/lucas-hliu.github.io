import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,c as l,e,a as i,o as t}from"./app-BknDfDpx.js";const h={},p=i('<h2 id="进程状态" tabindex="-1"><a class="header-anchor" href="#进程状态"><span>进程状态</span></a></h2><h3 id="进程的基本状态" tabindex="-1"><a class="header-anchor" href="#进程的基本状态"><span>进程的基本状态</span></a></h3><ol><li><p><strong>新建（New）</strong>：</p><ul><li>进程正在被创建，还未进入准备就绪队列。</li></ul></li><li><p><strong>就绪（Ready）</strong>：</p><ul><li>进程已经被创建并准备好执行，等待被调度器分配 CPU 资源。</li></ul></li><li><p><strong>运行（Running）</strong>：</p><ul><li>进程正在 CPU 上执行代码。</li></ul></li><li><p><strong>阻塞（Blocked）</strong>：</p><ul><li>进程无法继续执行，正在等待某个事件（如 I/O 完成、资源可用）发生。</li></ul></li><li><p><strong>终止（Terminated）</strong>：</p><ul><li>进程已完成执行或因某种原因被强制终止，系统将其从内存中移除。</li></ul></li></ol><h3 id="进程状态之间的转换" tabindex="-1"><a class="header-anchor" href="#进程状态之间的转换"><span>进程状态之间的转换</span></a></h3><p>进程在其生命周期内可以在不同状态之间进行转换，以下是常见的状态转换路径：</p><ol><li><p><strong>新建 → 就绪</strong>：</p><ul><li>当进程创建完成，分配了必要的资源后，就会进入就绪状态，等待调度器的调度。</li></ul></li><li><p><strong>就绪 → 运行</strong>：</p><ul><li>调度器选择一个就绪的进程并将其分配给 CPU，进程进入运行状态。</li></ul></li><li><p><strong>运行 → 就绪</strong>：</p><ul><li>如果运行中的进程的时间片耗尽，或者由于其他更高优先级的进程需要 CPU，则该进程被挂起并返回到就绪队列中，等待下一次调度。</li></ul></li><li><p><strong>运行 → 阻塞</strong>：</p><ul><li>当进程执行 I/O 操作或等待某个事件发生（如等待信号、等待资源）时，进程进入阻塞状态，CPU 被释放给其他就绪进程。</li></ul></li><li><p><strong>阻塞 → 就绪</strong>：</p><ul><li>当等待的事件发生（如 I/O 完成或资源可用），阻塞的进程会被移回就绪队列，等待再次被调度。</li></ul></li><li><p><strong>运行 → 终止</strong>：</p><ul><li>当进程完成其任务或被强制终止时，进程进入终止状态，系统将其从内存中清除。</li></ul></li></ol><h3 id="状态转换示意图" tabindex="-1"><a class="header-anchor" href="#状态转换示意图"><span>状态转换示意图</span></a></h3>',7),k=i(`<h2 id="僵尸进程" tabindex="-1"><a class="header-anchor" href="#僵尸进程"><span>僵尸进程</span></a></h2><p><strong>僵尸进程</strong>（Zombie Process）是在 UNIX 或类 UNIX 系统（如 Linux）中，子进程终止后，其父进程没有及时调用 <code>wait()</code> 或 <code>waitpid()</code> 函数回收子进程的退出状态信息，从而导致的进程状态。</p><p>具体来说，当一个子进程结束时，它的所有资源（如内存、文件描述符等）都会被操作系统回收，但它的进程描述符（即进程控制块，包含退出状态信息等）仍然保留在系统中。这是为了允许父进程能够获取子进程的退出状态。当父进程调用 <code>wait()</code> 或 <code>waitpid()</code> 获取子进程的退出状态后，僵尸进程的进程描述符才会被完全清除。</p><h3 id="僵尸进程的影响" tabindex="-1"><a class="header-anchor" href="#僵尸进程的影响"><span>僵尸进程的影响</span></a></h3><ul><li><strong>资源占用</strong>：虽然僵尸进程不会占用内存或 CPU，但它会占用一个进程表项（即进程描述符）。在系统中，进程表项的数量是有限的，如果有大量僵尸进程存在，可能会导致系统无法创建新进程。</li><li><strong>系统管理的麻烦</strong>：大量僵尸进程可能会让系统管理者难以管理和监控系统状态。</li></ul><h3 id="如何避免产生僵尸进程" tabindex="-1"><a class="header-anchor" href="#如何避免产生僵尸进程"><span>如何避免产生僵尸进程？</span></a></h3><p>避免产生僵尸进程的关键在于确保父进程能够及时处理子进程的退出状态。以下是几种常用的方法：</p><ol><li><p><strong>及时调用 <code>wait()</code> 或 <code>waitpid()</code></strong>：</p><p>父进程在适当的时机调用 <code>wait()</code> 或 <code>waitpid()</code> 函数，以获取并处理子进程的退出状态，从而防止僵尸进程的产生。</p><div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" data-title="cpp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">pid_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 子进程代码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    exit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 父进程代码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    wait</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // 等待子进程结束并回收资源</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>使用 <code>SIGCHLD</code> 信号处理子进程的结束</strong>：</p><p>当子进程结束时，父进程会收到 <code>SIGCHLD</code> 信号。父进程可以在信号处理程序中调用 <code>wait()</code> 或 <code>waitpid()</code> 以回收子进程的资源。</p><div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" data-title="cpp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;iostream&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;sys/wait.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;unistd.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;signal.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> sigchld_handler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> signum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 等待所有已终止的子进程</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">waitpid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, WNOHANG) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 注册 SIGCHLD 信号处理程序</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    signal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(SIGCHLD, sigchld_handler);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pid_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 子进程代码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        exit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 父进程代码</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 父进程继续执行其任务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        pause</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // 等待信号（例如 SIGCHLD）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>将子进程的父进程设置为 <code>init</code> 进程（或 systemd）</strong>：</p><p>如果父进程在子进程结束前退出，子进程会被 <code>init</code> 进程（PID 为 1 的进程）接管。<code>init</code> 进程会自动调用 <code>wait()</code> 回收子进程的资源，避免僵尸进程的产生。可以通过调用 <code>fork()</code> 后使父进程退出，子进程被 <code>init</code> 接管。</p><div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" data-title="cpp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">pid_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 父进程退出</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    exit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 子进程继续执行</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 此时子进程的父进程是 init 进程</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>采用 <code>double fork()</code> 技术</strong>：</p><p>父进程通过 <code>fork()</code> 创建一个子进程，子进程再 <code>fork()</code> 创建一个孙子进程，然后子进程立即退出，父进程只需等待子进程的退出状态，孙子进程则由 <code>init</code> 进程接管。</p><div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" data-title="cpp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">pid_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 第一个子进程</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pid_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pid2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (pid2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 孙子进程</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 在此处执行需要守护的任务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        exit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 第一个子进程退出</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        exit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 父进程等待第一个子进程退出</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    wait</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3><p>僵尸进程是因父进程未及时处理子进程的退出状态而产生的。通过及时调用 <code>wait()</code> 系列函数、处理 <code>SIGCHLD</code> 信号、使用 <code>init</code> 进程接管孤儿进程或采用 <code>double fork()</code> 技术，可以有效避免僵尸进程的产生。在实际开发中，选择适当的方法管理子进程的生命周期，对于保持系统的稳定性和资源利用率至关重要。</p>`,10);function d(r,c){const s=n("Mermaid");return t(),l("div",null,[p,e(s,{id:"mermaid-151",code:"eJwrLkksSXXJTEwvSszlUgCCaK1YBV1dO4Vn0zY83b3LSuFpx2wg/WL/7OcrusEKIBJgNU83bHy+e5WVAkQWovLpup5nHRPAKiHSYJUv9k94sbAHqHJD89Ndy5BMg0iA1bycsfvpwnlWCs/Xdj7d1/pkV/eT3dvAaiASKDZCZJHsQjIHpubZ9G0vp2953tn+omH60w179V8sWv2sa9HT3gXoGp7v7ni2dhHcG2BDQaoh4mDVECZYNTCAuADtm6JT"}),k])}const o=a(h,[["render",d],["__file","2 process.html.vue"]]),y=JSON.parse('{"path":"/interview/2%20process.html","title":"进程编程","lang":"zh-CN","frontmatter":{"title":"进程编程","order":2,"category":["面试题"],"tag":["c++","多进程","进程通信"]},"headers":[{"level":2,"title":"进程状态","slug":"进程状态","link":"#进程状态","children":[{"level":3,"title":"进程的基本状态","slug":"进程的基本状态","link":"#进程的基本状态","children":[]},{"level":3,"title":"进程状态之间的转换","slug":"进程状态之间的转换","link":"#进程状态之间的转换","children":[]},{"level":3,"title":"状态转换示意图","slug":"状态转换示意图","link":"#状态转换示意图","children":[]}]},{"level":2,"title":"僵尸进程","slug":"僵尸进程","link":"#僵尸进程","children":[{"level":3,"title":"僵尸进程的影响","slug":"僵尸进程的影响","link":"#僵尸进程的影响","children":[]},{"level":3,"title":"如何避免产生僵尸进程？","slug":"如何避免产生僵尸进程","link":"#如何避免产生僵尸进程","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]}],"git":{"createdTime":1722909680000,"updatedTime":1723100792000,"contributors":[{"name":"liuheng","email":"liuheng2015@gmail.com","commits":1}]},"readingTime":{"minutes":5.02,"words":1506},"filePathRelative":"interview/2 process.md","localizedDate":"2024年8月6日","excerpt":"<h2>进程状态</h2>\\n<h3>进程的基本状态</h3>\\n<ol>\\n<li>\\n<p><strong>新建（New）</strong>：</p>\\n<ul>\\n<li>进程正在被创建，还未进入准备就绪队列。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>就绪（Ready）</strong>：</p>\\n<ul>\\n<li>进程已经被创建并准备好执行，等待被调度器分配 CPU 资源。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>运行（Running）</strong>：</p>\\n<ul>\\n<li>进程正在 CPU 上执行代码。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>阻塞（Blocked）</strong>：</p>\\n<ul>\\n<li>进程无法继续执行，正在等待某个事件（如 I/O 完成、资源可用）发生。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>终止（Terminated）</strong>：</p>\\n<ul>\\n<li>进程已完成执行或因某种原因被强制终止，系统将其从内存中移除。</li>\\n</ul>\\n</li>\\n</ol>"}');export{o as comp,y as data};