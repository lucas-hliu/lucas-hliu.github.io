import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o,a as e}from"./app-BR1Yca2h.js";const r="/assets/tcp_state_transition-BavNRkEA.jpg",i={},l=e('<p>TCP连接的状态图（TCP Connection State Diagram）展示了TCP协议在建立连接、传输数据、关闭连接过程中可能的状态及其转换。了解这些状态对于网络调试、性能优化和网络编程都非常有帮助。</p><h3 id="tcp状态图解释" tabindex="-1"><a class="header-anchor" href="#tcp状态图解释"><span>TCP状态图解释</span></a></h3><p>在TCP连接的生命周期中，有多个状态，以下是主要的TCP连接状态及其转换：</p><ol><li><p><strong>CLOSED</strong>: 初始状态，表示套接字没有被使用或已经关闭。</p></li><li><p><strong>LISTEN</strong>: 服务器套接字正在监听连接请求。这个状态通常由服务器处于被动打开（Passive Open）状态时进入。</p></li><li><p><strong>SYN-SENT</strong>: 客户端在发送SYN（同步）包后进入这个状态，等待服务器的SYN-ACK。表示主动打开（Active Open）的一端已经发送了连接请求。</p></li><li><p><strong>SYN-RECEIVED</strong>: 服务器在接收到客户端的SYN包后，发送SYN-ACK，并进入这个状态，等待客户端的ACK确认。</p></li><li><p><strong>ESTABLISHED</strong>: 表示连接已经建立，数据可以在客户端和服务器之间双向传输。这个是正常的数据传输状态。</p></li><li><p><strong>FIN-WAIT-1</strong>: 连接的主动关闭方（通常是客户端）发送FIN（结束）包后进入这个状态，等待对方的ACK。</p></li><li><p><strong>FIN-WAIT-2</strong>: 主动关闭方接收到ACK后，进入这个状态，等待对方发送FIN包。</p></li><li><p><strong>CLOSE-WAIT</strong>: 被动关闭方接收到FIN包后，进入这个状态，等待应用程序关闭连接。</p></li><li><p><strong>CLOSING</strong>: 在极少见的情况下，双方同时发送FIN包时会进入这个状态，等待对方的ACK。</p></li><li><p><strong>LAST-ACK</strong>: 被动关闭方在发送ACK并等待对方确认后进入这个状态。</p></li><li><p><strong>TIME-WAIT</strong>: 主动关闭方在发送最后的ACK后，进入这个状态，确保对方收到了ACK，防止旧数据包干扰，保持这个状态2倍的最大报文段寿命时间（通常是2分钟）。</p></li><li><p><strong>CLOSED</strong>: 所有资源释放后，连接彻底关闭，返回到初始状态。</p></li></ol><h3 id="状态转换图" tabindex="-1"><a class="header-anchor" href="#状态转换图"><span>状态转换图</span></a></h3><p>以下是TCP连接状态的转换图：</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="状态转换的简要说明" tabindex="-1"><a class="header-anchor" href="#状态转换的简要说明"><span>状态转换的简要说明</span></a></h3><ul><li><strong>CLOSED</strong> 到 <strong>LISTEN</strong>： 服务器调用<code>listen()</code>函数进入<code>LISTEN</code>状态，准备接受连接。</li><li><strong>SYN-SENT</strong>： 客户端调用<code>connect()</code>后发送SYN包，进入<code>SYN-SENT</code>状态。</li><li><strong>SYN-RECEIVED</strong>： 服务器接收到SYN包后，回复SYN-ACK，并进入<code>SYN-RECEIVED</code>状态。</li><li><strong>ESTABLISHED</strong>： 双方都接收到对方的确认包后，进入<code>ESTABLISHED</code>状态，开始数据传输。</li><li><strong>FIN-WAIT-1</strong>： 主动关闭方发送FIN包后进入<code>FIN-WAIT-1</code>状态。</li><li><strong>CLOSE-WAIT</strong>： 被动关闭方接收到FIN包后进入<code>CLOSE-WAIT</code>状态，等待应用程序关闭连接。</li><li><strong>LAST-ACK</strong>： 被动关闭方在发送ACK包后进入<code>LAST-ACK</code>状态，等待最后的确认。</li><li><strong>TIME-WAIT</strong>： 主动关闭方在发送最后的ACK包后进入<code>TIME-WAIT</code>状态，确保对方接收并释放资源。</li></ul><h3 id="状态的作用" tabindex="-1"><a class="header-anchor" href="#状态的作用"><span>状态的作用</span></a></h3><ul><li><strong>LISTEN</strong>： 服务器等待连接请求的状态。</li><li><strong>SYN-SENT</strong>/<strong>SYN-RECEIVED</strong>： 建立连接时的握手状态，确保双方都准备好通信。</li><li><strong>ESTABLISHED</strong>： 连接已建立，数据可以传输。</li><li><strong>FIN-WAIT-1</strong>/<strong>FIN-WAIT-2</strong>/<strong>CLOSE-WAIT</strong>/<strong>LAST-ACK</strong>/<strong>TIME-WAIT</strong>： 连接关闭时的状态，确保所有数据正确传输，并正确关闭连接。</li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>TCP连接状态图详细展示了从连接建立到数据传输，再到连接关闭的整个过程。理解这些状态对于调试网络问题、优化应用程序性能、设计健壮的网络服务非常重要。通过分析TCP连接的状态，可以识别出哪些连接处于非正常状态，并采取相应的措施来修复或优化。</p>',13),s=[l];function p(a,c){return o(),n("div",null,s)}const T=t(i,[["render",p],["__file","3 tcp.html.vue"]]),d=JSON.parse('{"path":"/other/3%20tcp.html","title":"tcp 连接状态","lang":"zh-CN","frontmatter":{"title":"tcp 连接状态","order":2,"category":["其他"],"tag":["tcp"],"editLink":false,"description":"TCP连接的状态图（TCP Connection State Diagram）展示了TCP协议在建立连接、传输数据、关闭连接过程中可能的状态及其转换。了解这些状态对于网络调试、性能优化和网络编程都非常有帮助。 TCP状态图解释 在TCP连接的生命周期中，有多个状态，以下是主要的TCP连接状态及其转换： CLOSED: 初始状态，表示套接字没有被使用或已...","head":[["meta",{"property":"og:url","content":"https://hackcpp.github.io/other/3%20tcp.html"}],["meta",{"property":"og:site_name","content":"程序员的白粥馆"}],["meta",{"property":"og:title","content":"tcp 连接状态"}],["meta",{"property":"og:description","content":"TCP连接的状态图（TCP Connection State Diagram）展示了TCP协议在建立连接、传输数据、关闭连接过程中可能的状态及其转换。了解这些状态对于网络调试、性能优化和网络编程都非常有帮助。 TCP状态图解释 在TCP连接的生命周期中，有多个状态，以下是主要的TCP连接状态及其转换： CLOSED: 初始状态，表示套接字没有被使用或已..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-20T02:01:07.000Z"}],["meta",{"property":"article:author","content":"hackcpp"}],["meta",{"property":"article:tag","content":"tcp"}],["meta",{"property":"article:modified_time","content":"2024-08-20T02:01:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tcp 连接状态\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-20T02:01:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"hackcpp\\",\\"url\\":\\"https://github.com/hackcpp\\",\\"email\\":\\"liuheng2015@gmail.com\\"}]}"]]},"headers":[{"level":3,"title":"TCP状态图解释","slug":"tcp状态图解释","link":"#tcp状态图解释","children":[]},{"level":3,"title":"状态转换图","slug":"状态转换图","link":"#状态转换图","children":[]},{"level":3,"title":"状态转换的简要说明","slug":"状态转换的简要说明","link":"#状态转换的简要说明","children":[]},{"level":3,"title":"状态的作用","slug":"状态的作用","link":"#状态的作用","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1724119267000,"updatedTime":1724119267000,"contributors":[{"name":"hackcpp","email":"liuheng2015@gmail.com","commits":1}]},"readingTime":{"minutes":3.23,"words":970},"filePathRelative":"other/3 tcp.md","localizedDate":"2024年8月20日","autoDesc":true,"excerpt":"<p>TCP连接的状态图（TCP Connection State Diagram）展示了TCP协议在建立连接、传输数据、关闭连接过程中可能的状态及其转换。了解这些状态对于网络调试、性能优化和网络编程都非常有帮助。</p>\\n<h3>TCP状态图解释</h3>\\n<p>在TCP连接的生命周期中，有多个状态，以下是主要的TCP连接状态及其转换：</p>\\n<ol>\\n<li>\\n<p><strong>CLOSED</strong>: 初始状态，表示套接字没有被使用或已经关闭。</p>\\n</li>\\n<li>\\n<p><strong>LISTEN</strong>: 服务器套接字正在监听连接请求。这个状态通常由服务器处于被动打开（Passive Open）状态时进入。</p>\\n</li>\\n<li>\\n<p><strong>SYN-SENT</strong>: 客户端在发送SYN（同步）包后进入这个状态，等待服务器的SYN-ACK。表示主动打开（Active Open）的一端已经发送了连接请求。</p>\\n</li>\\n<li>\\n<p><strong>SYN-RECEIVED</strong>: 服务器在接收到客户端的SYN包后，发送SYN-ACK，并进入这个状态，等待客户端的ACK确认。</p>\\n</li>\\n<li>\\n<p><strong>ESTABLISHED</strong>: 表示连接已经建立，数据可以在客户端和服务器之间双向传输。这个是正常的数据传输状态。</p>\\n</li>\\n<li>\\n<p><strong>FIN-WAIT-1</strong>: 连接的主动关闭方（通常是客户端）发送FIN（结束）包后进入这个状态，等待对方的ACK。</p>\\n</li>\\n<li>\\n<p><strong>FIN-WAIT-2</strong>: 主动关闭方接收到ACK后，进入这个状态，等待对方发送FIN包。</p>\\n</li>\\n<li>\\n<p><strong>CLOSE-WAIT</strong>: 被动关闭方接收到FIN包后，进入这个状态，等待应用程序关闭连接。</p>\\n</li>\\n<li>\\n<p><strong>CLOSING</strong>: 在极少见的情况下，双方同时发送FIN包时会进入这个状态，等待对方的ACK。</p>\\n</li>\\n<li>\\n<p><strong>LAST-ACK</strong>: 被动关闭方在发送ACK并等待对方确认后进入这个状态。</p>\\n</li>\\n<li>\\n<p><strong>TIME-WAIT</strong>: 主动关闭方在发送最后的ACK后，进入这个状态，确保对方收到了ACK，防止旧数据包干扰，保持这个状态2倍的最大报文段寿命时间（通常是2分钟）。</p>\\n</li>\\n<li>\\n<p><strong>CLOSED</strong>: 所有资源释放后，连接彻底关闭，返回到初始状态。</p>\\n</li>\\n</ol>"}');export{T as comp,d as data};
