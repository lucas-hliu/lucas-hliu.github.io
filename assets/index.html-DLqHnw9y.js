import{_ as e,c as a,o as l,a as n}from"./app-BCUxywty.js";const t={},i=n('<h3 id="_1-static-关键字的作用" tabindex="-1"><a class="header-anchor" href="#_1-static-关键字的作用"><span>1. static 关键字的作用？</span></a></h3><ul><li>修饰全局变量或函数，限制作用范围，只可以在当前文件访问；</li><li>修饰局部变量，延长变量的生命周期为整个程序的生命周期，函数return 后变量不会释放；</li><li>在class中用于声明类成员或函数，类成员或函数可以直接通过类名访问无需创建对象；</li></ul><h3 id="_2-new-delete与malloc-new的区别" tabindex="-1"><a class="header-anchor" href="#_2-new-delete与malloc-new的区别"><span>2. new/delete与malloc/new的区别？</span></a></h3><ul><li>malloc/new 是c语言标准库提供的一组用于动态申请释放内存的API；</li><li>new/delete是c++语言标准库提供的一组用于动态创建/释放对象的操作符，在申请/释放内存的基础上还会额外调用构造/析构函数，是c++ RAII 实现的基础；</li><li>new = malloc + 构造函数，delete = 析构函数 + free；</li></ul><h3 id="_3-假设有数组-int-a-10-a、-a-0-与-a-这3者的区别" tabindex="-1"><a class="header-anchor" href="#_3-假设有数组-int-a-10-a、-a-0-与-a-这3者的区别"><span>3. 假设有数组 int a[10], a、&amp;a[0]与 &amp;a 这3者的区别？</span></a></h3><ul><li>a、&amp;a[0]与 &amp;a 都是一个指针代表一个内存，且值相同；</li><li>其中a 为数组名指向首元素地址即与&amp;a[0] 相同，&amp;a 为数组的指针，三者做运算时有差异： a+1 和 &amp;a[0]+1 是内存地址偏移一个元素的位置(地址值+sizeof(int))，即指向第二个元素a[1], &amp;a+1, 内存地址偏移一个数组的位置(地址值+sizeof(int)*10)</li></ul><h3 id="_4-宏与constexpr-区别" tabindex="-1"><a class="header-anchor" href="#_4-宏与constexpr-区别"><span>4. 宏与constexpr 区别?</span></a></h3><ul><li>宏用于定义常量和简单的代码片段，在预编译时期会被完整替换；</li><li>constexpr 可以取代宏的功能，用来定义常量和函数；</li><li>宏没有类型安全检查，而constexpr有</li></ul><h3 id="_5-extern-c" tabindex="-1"><a class="header-anchor" href="#_5-extern-c"><span>5. extern &quot;C&quot;</span></a></h3><ul><li>c++ 为支持函数重载引入了name mangling 技术，将重载函数重新命名成唯一的标识符，如void foo(int) 函数名被修饰成_ZfooEi, 这样 c 代码link foo 函数时会失败；</li><li>extern &quot;C&quot; 让c++ 代码编译时不使用name mangling，保持与c 语言一样的方式， 这样就可以解决c代码调用c++ 代码的存在的link 问题</li></ul><h3 id="_6-const-关键字的作用" tabindex="-1"><a class="header-anchor" href="#_6-const-关键字的作用"><span>6. const 关键字的作用？</span></a></h3><ul><li>定义常量，即被修饰变量不可以被修改；</li><li>const&amp; 用于函数穿参数</li><li>修饰成员函数表示函数体不会修改类成员（被mutable 修饰除外）</li></ul>',12),c=[i];function s(o,r){return l(),a("div",null,c)}const h=e(t,[["render",s],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"1. static 关键字的作用？","slug":"_1-static-关键字的作用","link":"#_1-static-关键字的作用","children":[]},{"level":3,"title":"2. new/delete与malloc/new的区别？","slug":"_2-new-delete与malloc-new的区别","link":"#_2-new-delete与malloc-new的区别","children":[]},{"level":3,"title":"3. 假设有数组 int a[10], a、&a[0]与 &a 这3者的区别？","slug":"_3-假设有数组-int-a-10-a、-a-0-与-a-这3者的区别","link":"#_3-假设有数组-int-a-10-a、-a-0-与-a-这3者的区别","children":[]},{"level":3,"title":"4. 宏与constexpr 区别?","slug":"_4-宏与constexpr-区别","link":"#_4-宏与constexpr-区别","children":[]},{"level":3,"title":"5. extern \\"C\\"","slug":"_5-extern-c","link":"#_5-extern-c","children":[]},{"level":3,"title":"6. const 关键字的作用？","slug":"_6-const-关键字的作用","link":"#_6-const-关键字的作用","children":[]}],"git":{"updatedTime":1722590322000,"contributors":[{"name":"liuheng","email":"liuheng2015@gmail.com","commits":3}]},"filePathRelative":"README.md"}');export{h as comp,_ as data};
