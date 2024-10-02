import{T as i,a as d,L as c,C as p,b as u}from"./CodeBox-bDgwHmXL.js";import{R as g}from"./RightSpan-BRVW249z.js";import{_}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as b,d as n,w as e,a as o,o as y,b as l}from"./app-BsKI3E0l.js";const h={__name:"01 fundamental_types.html",setup(s,{expose:r}){r();const a={get ToggleContent(){return i},get TopToggleContent(){return d},get LeftRightLayout(){return c},get ColorSpan(){return p},get CodeBox(){return u},get RightSpan(){return g}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},m=o("div",null,[o("span",{style:{color:"blue"}},"type"),l(" variable = "),o("span",{style:{color:"rgb(54, 194, 54)"}},"value"),l("; "),o("br"),o("br"),o("span",{style:{color:"blue"}},"type"),l(" variable {"),o("span",{style:{color:"rgb(54, 194, 54)"}},"value"),l("}; C++11 "),o("br"),o("br")],-1),C=o("div",null,[o("span",{style:{color:"dimgray"}},`// declare & initialize 'i'"`),o("br"),o("span",{style:{color:"blue"}},"int"),l(" i = "),o("span",{style:{color:"rgb(54, 194, 54)"}},"1"),l("; "),o("br"),o("br"),o("span",{style:{color:"dimgray"}},"// print i's value: "),o("br"),l(" cout << i << '\\n'; "),o("br"),o("br"),o("span",{style:{color:"blue"}},"int"),l(" j {"),o("span",{style:{color:"rgb(54, 194, 54)"}},"5"),l("}; "),o("br"),l(" cout << j << '\\n'; "),o("br")],-1),B=o("div",null,[o("img",{src:"https://hackingcpp.com/cpp/lang/variables_crop.svg"})],-1),A=o("hr",null,null,-1),f=o("pre",null,[o("span",{style:{color:"blue"}},"bool"),l(" b1 = "),o("span",{style:{color:"rgb(54, 194, 54)"}},"true"),l(`;
`),o("span",{style:{color:"blue"}},"bool"),l(" b2 = "),o("span",{style:{color:"rgb(54, 194, 54)"}},"false"),l(";")],-1),D=o("hr",null,null,-1),S=o("li",null,"最小的整数类型,通常只有1字节",-1),T=o("li",null," on x86/x86-64 values ∈ [-128,127]",-1),x=o("pre",null,[o("span",{style:{color:"blue"}},"char"),l(` c = 'A';  // character literal
`),o("span",{style:{color:"blue"}},"char"),l(" a = 65;   // same as above")],-1),v=o("hr",null,null,-1),F=o("span",null," n bits ⇒ values ∈ [-2(n-1), 2(n-1)-1] ",-1),R=o("pre",null,[o("span",{style:{color:"blue"}},"short"),l(` s = 7;  
`),o("span",{style:{color:"blue"}},"int"),l(`   i = 12347;
`),o("span",{style:{color:"blue"}},"long"),l(`  l1 = -7856974990L;
`),o("span",{style:{color:"blue"}},"long long"),l(`  l2 = 89565656974990LL; 
`),o("span",{style:{color:"dimgray"}},"// ' digit separator C++14"),l(`
`),o("span",{style:{color:"blue"}},"long"),l(" l3 = 512'232'697'499;")],-1),w=o("hr",null,null,-1),L=o("span",null," n bits ⇒ values ∈ [0, 2n-1] ",-1),O=o("pre",null,[o("span",{style:{color:"blue"}},"unsigned"),l(` u1 = 12347U; 
`),o("span",{style:{color:"blue"}},"unsigned long "),l(`u2 = 123478912345UL;  
`),o("span",{style:{color:"blue"}},"unsigned long long"),l(` u3 = 123478912345ULL;  
`),o("span",{style:{color:"dimgray"}},"// non-decimal literals"),l(`
`),o("span",{style:{color:"blue"}},"unsigned "),l("x = 0x4A;        "),o("span",{style:{color:"dimgray"}},"  // hexadecimal"),l(`
`),o("span",{style:{color:"blue"}},"unsigned "),l(" b = 0b10110101;  "),o("span",{style:{color:"dimgray"}},"  // binary C++14")],-1),k=o("hr",null,null,-1),E=o("li",null,"float: IEEE 754 32 bit",-1),N=o("li",null,"double: IEEE 754 64 bit",-1),z=o("li",null,"long double: 80-bit on x86/x86-64",-1),I=o("pre",null,[o("span",{style:{color:"blue"}},"float "),l(`      f  = 1.88f;
`),o("span",{style:{color:"blue"}},"double  "),l(`    d1 = 3.5e38;
`),o("span",{style:{color:"blue"}},"long double "),l(` d2 = 3.5e38L; C++11
`),o("span",{style:{color:"dimgray"}},"// ' digit separator C++14"),l(`
`),o("span",{style:{color:"blue"}},"double "),l(" d3 = 512'232'697'499.052;")],-1),P=o("hr",null,null,-1),j=o("img",{src:"https://hackingcpp.com/cs/number_representations_crop.png"},null,-1),J=o("hr",null,null,-1),q=o("li",null,"所有类型的大小都是 sizeof(char) 的整数倍",-1),M=o("li",null," char 类型的大小为1 byte",-1),U=o("pre",null,[l(`cout << sizeof(char);   // 1
cout << sizeof(bool);   // 1
cout << sizeof(short);  // 2
cout << sizeof(int);    // 4
cout << sizeof(long);   // 8
`),o("hr"),l(`
`),o("span",{style:{color:"dimgray"}},"// number of bits in a char"),l(`
cout << CHAR_BIT;       // 8
`),o("hr"),l(`
`),o("span",{style:{color:"orange"}},"char   c = 'A';"),l(`
`),o("span",{style:{color:"red"}},"bool   b = true;"),l(`
`),o("span",{style:{color:"blue"}},"int    i = 1234;"),l(`
`),o("span",{style:{color:"purple"}},"long   l = 12;"),l(`
`),o("span",{style:{color:"green"}},"short  s = 8;")],-1),V=o("img",{src:"https://hackingcpp.com/cpp/lang/fundamental_type_sizes.svg"},null,-1),H=o("br",null,null,-1),Z=o("img",{src:"https://hackingcpp.com/cpp/std/numeric_limits.png"},null,-1),W=o("br",null,null,-1),X=o("li",null,[l("a "),o("span",{style:{color:"red"}},"⊕"),l(" b: 返回 a ⊕ b 的运算结果 ")],-1),G=o("li",null,[l("a "),o("span",{style:{color:"blue"}},"⊕="),l(" b: a ⊕ b 的运算结果赋值给 a")],-1),K=o("pre",null,[l(`int a = 4;          设置变量 a 值为 4
int b = 3;          设置变量 b 值为 3
`),o("hr"),l(`
a = a `),o("span",{style:{color:"red"}},"+"),l(` b;          a: 7    add
a `),o("span",{style:{color:"red"}},"+="),l(` b;             a: 10
a = a `),o("span",{style:{color:"red"}},"-"),l(` b;          a: 7    subtract
a `),o("span",{style:{color:"blue"}},"-="),l(` b;             a: 4
a = a `),o("span",{style:{color:"red"}},"*"),l(` b;          a: 12   multiply
a `),o("span",{style:{color:"blue"}},"*="),l(` b;             a: 36
a = a `),o("span",{style:{color:"red"}},"/"),l(` b;          a: 12   divide
a `),o("span",{style:{color:"blue"}},"/="),l(` b;             a: 4
a = a `),o("span",{style:{color:"red"}},"%"),l(" b;          a: 1    remainder of division (modulo)")],-1),Q=o("hr",null,null,-1),Y=o("li",null,"变量值自增/自减1",-1),$=o("li",null,[l("前置自增/自减 "),o("span",{style:{color:"red"}},"++"),l("x / "),o("span",{style:{color:"red"}},"--"),l("x 返回自增/自减后的值")],-1),o0=o("li",null,[l("后置自增/自减 x"),o("span",{style:{color:"blue"}},"++"),l(" / x"),o("span",{style:{color:"blue"}},"--"),l(" 返回自增/自减前的值")],-1),l0=o("pre",null,[l(`int a = 4;    a: 4           
int b = 3;            b: 3
`),o("hr"),l(`
b = a`),o("span",{style:{color:"blue"}},"++"),l(`;      a: 5    b: 4
b = `),o("span",{style:{color:"red"}},"++"),l(`a;      a: 6    b: 6
b = `),o("span",{style:{color:"red"}},"--"),l(`a;      a: 5    b: 5
b = a`),o("span",{style:{color:"blue"}},"--"),l(";      a: 4    b: 5")],-1),t0=o("br",null,null,-1),n0=o("hr",null,null,-1),e0=o("hr",null,null,-1),a0=o("br",null,null,-1),r0=o("pre",null,[l("bool a = "),o("span",{style:{color:"blue"}},"true"),l(`;
bool b = `),o("span",{style:{color:"blue"}},"false"),l(`;
`),o("hr"),l(`
bool c = a `),o("span",{style:{color:"red"}},"&& "),l("b;      "),o("span",{style:{color:"dimgray"}},"// false    logical AND"),l(`
bool d = a `),o("span",{style:{color:"red"}},"||"),l(" b;      "),o("span",{style:{color:"dimgray"}},"// true     logical OR"),l(`
bool e = `),o("span",{style:{color:"red"}},"!"),l("a;          "),o("span",{style:{color:"dimgray"}},"// false    logical NOT"),l(`
`),o("hr"),l(`
`),o("span",{style:{color:"dimgray"}},"Alternative Spellings:"),l(`
bool x = a `),o("span",{style:{color:"red"}},"and"),l(" b;     "),o("span",{style:{color:"dimgray"}},"// false"),l(`
bool y = a `),o("span",{style:{color:"red"}},"or"),l(" b;     "),o("span",{style:{color:"dimgray"}}," // true"),l(`
bool z = `),o("span",{style:{color:"red"}},"not"),l(" a;       "),o("span",{style:{color:"dimgray"}},"// false")],-1),s0=o("hr",null,null,-1),i0=o("li",null,[o("span",{style:{color:"blue"}},"0"),l(" 为假 "),o("span",{style:{color:"blue"}},"false"),l(";")],-1),d0=o("li",null,[l("其他的为真 "),o("span",{style:{color:"blue"}},"true"),l(";")],-1),c0=o("pre",null,[l("bool f = 12;   "),o("span",{style:{color:"dimgray"}},"// true   (int → bool)"),l(`
bool g = 0;    `),o("span",{style:{color:"dimgray"}},"// false  (int → bool)"),l(`
bool h = 1.2;  `),o("span",{style:{color:"dimgray"}},"// true   (double → bool)")],-1),p0=o("br",null,null,-1),u0=o("hr",null,null,-1),g0=o("hr",null,null,-1),_0=o("hr",null,null,-1),b0=o("hr",null,null,-1),y0=o("hr",null,null,-1),h0=o("br",null,null,-1),m0=o("strong",null,"name",-1),C0=o("li",null,"默认情况每个枚举值映射成 0 ～ N-1",-1),B0=o("hr",null,null,-1),A0=o("div",null,[o("li",null,"必须是整数类型 (char, short, long, …)"),o("li",null,"默认是 int 类型")],-1),f0=o("br",null,null,-1),D0=o("strong",null,"Type",-1),S0=o("li",null,"变量值一旦赋值就不可以修改",-1),T0=o("li",null,"变量值可以运行时初始化",-1),x0=o("hr",null,null,-1),v0=o("li",null,"typedef OldType NewType;  C++98",-1),F0=o("hr",null,null,-1),R0=o("li",null,"通过右边表达式自动推导数据类型",-1),w0=o("li",null,"在处理复杂的模版类型时非常好用！",-1),L0=o("strong",null,"auto",-1),O0=o("strong",null,"auto",-1),k0=o("strong",null,"auto",-1),E0=o("strong",null,"auto",-1),N0=o("strong",null,"auto",-1),z0=o("hr",null,null,-1),I0=o("strong",null,"auto",-1),P0=o("strong",null,"auto",-1),j0=o("strong",null,"auto",-1);function J0(s,r,a,t,q0,M0){return y(),b("div",null,[n(t.TopToggleContent,{title:"变量定义(Variable Declarations)"},{toggle:e(()=>[n(t.LeftRightLayout,null,{"left-top":e(()=>[m]),"left-bottom":e(()=>[C]),right:e(()=>[B]),_:1})]),_:1}),A,n(t.TopToggleContent,{title:"基本数据类型(Fundamental Types)"},{toggle:e(()=>[n(t.ToggleContent,{title:"布尔类型(Booleans)"},{toggle:e(()=>[f]),_:1}),D,n(t.ToggleContent,{title:"字符类型(Characters)"},{display:e(()=>[S,T]),toggle:e(()=>[x]),_:1}),v,n(t.ToggleContent,{title:"有符号整数(Signed Integers)"},{display:e(()=>[F]),toggle:e(()=>[R]),_:1}),w,n(t.ToggleContent,{title:"无符号整数(Unsigned Integers)"},{display:e(()=>[L]),toggle:e(()=>[O]),_:1}),k,n(t.ToggleContent,{title:"浮点类型"},{display:e(()=>[E,N,z]),toggle:e(()=>[I]),_:1})]),_:1}),P,n(t.TopToggleContent,{title:"数字表示法(Number Representations)"},{toggle:e(()=>[j]),_:1}),J,n(t.TopToggleContent,{title:"类型的内存大小(Memory Sizes of Types)"},{toggle:e(()=>[n(t.LeftRightLayout,null,{"left-top":e(()=>[q,M]),"left-bottom":e(()=>[n(t.CodeBox,{link:"https://pythontutor.com/render.html#code=%23include%20%3Ciostream%3E%0Ausing%20namespace%20std%3B%20%0Aint%20main%20()%20%7B%0A%20%20cout%20%3C%3C%20sizeof(char)%20%3C%3C%20%22%5Cn%22%3B%20%20%20%2F%2F%201%0A%20%20cout%20%3C%3C%20sizeof(bool)%20%3C%3C%20%22%5Cn%22%3B%20%20%20%2F%2F%201%0A%20%20cout%20%3C%3C%20sizeof(short)%20%3C%3C%20%22%5Cn%22%3B%20%20%2F%2F%202%0A%20%20cout%20%3C%3C%20sizeof(int)%20%3C%3C%20%22%5Cn%22%3B%20%20%20%20%2F%2F%204%0A%20%20cout%20%3C%3C%20sizeof(long)%20%3C%3C%20%22%5Cn%22%3B%20%20%20%2F%2F%208%0A%0A%20%20char%20%20%20c%20%3D%20'A'%3B%0A%20%20bool%20%20%20b%20%3D%20true%3B%0A%20%20int%20%20%20%20i%20%3D%201234%3B%0A%20%20long%20%20%20l%20%3D%2012%3B%0A%20%20short%20%20s%20%3D%208%3B%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:e(()=>[U]),_:1})]),right:e(()=>[V]),_:1})]),_:1}),H,n(t.TopToggleContent,{title:"数值限制(std::numeric_limits)"},{toggle:e(()=>[Z]),_:1}),W,n(t.TopToggleContent,{title:"算数运算(Arithmetic Operations )"},{toggle:e(()=>[n(t.ToggleContent,{title:"Operators"},{display:e(()=>[X,G]),toggle:e(()=>[n(t.CodeBox,{link:"https://pythontutor.com/render.html#code=int%20main()%20%7B%0A%20%20int%20a%20%3D%204%3B%20%20%20%20%20%20%20%20%20%20%20%0A%20%20int%20b%20%3D%203%3B%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%3D%20a%20%2B%20b%3B%20%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%2B%3D%20b%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%3D%20a%20-%20b%3B%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20-%3D%20b%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%3D%20a%20*%20b%3B%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20*%3D%20b%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%3D%20a%20%2F%20b%3B%20%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%2F%3D%20b%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%3D%20a%20%25%20b%3B%20%20%20%20%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:e(()=>[K]),_:1})]),_:1}),Q,n(t.ToggleContent,{title:"自增/自减(Increment/Decrement )"},{display:e(()=>[Y,$,o0]),toggle:e(()=>[n(t.CodeBox,{link:"https://pythontutor.com/render.html#code=int%20main()%20%7B%0A%20%20int%20a%20%3D%204%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20int%20b%20%3D%203%3B%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%0A%20%20%0A%20%20b%20%3D%20a%2B%2B%3B%20%20%20%20%20%20%20%0A%20%20b%20%3D%20%2B%2Ba%3B%20%20%20%20%20%20%20%0A%20%20b%20%3D%20--a%3B%20%20%20%20%20%20%20%0A%20%20b%20%3D%20a--%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:e(()=>[l0]),_:1})]),_:1})]),_:1}),t0,n(t.TopToggleContent,{title:"比较运算(Comparisons)"},{toggle:e(()=>[n(t.ToggleContent,{title:"2路比较(2-way Comparisons)"},{display:e(()=>[l(" 比较结果为 "),n(t.ColorSpan,{data:"true"}),l(" 或者 "),n(t.ColorSpan,{data:"false"})]),toggle:e(()=>[n(t.CodeBox,{link:"https://pythontutor.com/render.html#code=int%20main()%20%7B%0Aint%20x%20%3D%2010%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Aint%20y%20%3D%205%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Abool%20b1%20%3D%20%20x%20%3D%3D%205%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Abool%20b2%20%3D%20(x%20!%3D%206)%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Abool%20b3%20%3D%20x%20%3E%20y%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Abool%20b4%20%3D%20x%20%3C%20y%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Abool%20b5%20%3D%20y%20%3E%3D%205%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Abool%20b6%20%3D%20x%20%3C%3D%2030%3B%0Areturn%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:e(()=>[o("pre",null,[l(`int x = 10;                       
int y = 5;                 result  operator
`),n0,l(`
bool b1 =  x `),n(t.ColorSpan,{data:"==",color:"red"}),l(` 5;         false   equals     
bool b2 = (x `),n(t.ColorSpan,{data:"!=",color:"red"}),l(` 6);        true    not equal       
bool b3 = x `),n(t.ColorSpan,{data:">",color:"red"}),l(` y;           true    greater     
bool b4 = x `),n(t.ColorSpan,{data:"<",color:"red"}),l(` y;           false   smaller     
bool b5 = y `),n(t.ColorSpan,{data:">=",color:"red"}),l(` 5;          true    greater/equal    
bool b6 = x `),n(t.ColorSpan,{data:"<=",color:"red"}),l(" 30;         true    smaller/equal")])]),_:1})]),_:1}),e0,n(t.ToggleContent,{title:"3路比较(3-Way Comparisons)"},{display:e(()=>[l(" 比较 2 个对象的相对顺序 ")]),toggle:e(()=>[o("div",null,[o("pre",null,[l("(a "),n(t.ColorSpan,{data:"<==>",color:"red"}),l(` b) < 0	if a < b 
(a `),n(t.ColorSpan,{data:"<==>",color:"red"}),l(` b) > 0	if a > b  
(a `),n(t.ColorSpan,{data:"<==>",color:"red"}),l(` b) == 0	if a and b are equal/equivalent  
`)])])]),_:1})]),_:1}),a0,n(t.TopToggleContent,{title:"布尔逻辑(Boolean Logic)"},{toggle:e(()=>[n(t.ToggleContent,{title:"操作符(Operators)"},{toggle:e(()=>[n(t.CodeBox,{link:"https://pythontutor.com/render.html#code=int%20main()%20%7B%0A%20%20bool%20a%20%3D%20true%3B%0A%20%20bool%20b%20%3D%20false%3B%0A%0A%0A%20%20bool%20c%20%3D%20a%20%26%26%20b%3B%0A%20%20bool%20d%20%3D%20a%20%7C%7C%20b%3B%20%20%20%20%20%0A%20%20bool%20e%20%3D%20!a%3B%20%20%20%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:e(()=>[r0]),_:1})]),_:1}),s0,n(t.ToggleContent,{title:"转化成bool(Conversion to bool)"},{display:e(()=>[i0,d0]),toggle:e(()=>[n(t.CodeBox,{link:"https://pythontutor.com/render.html#code=int%20main()%20%7B%0A%20%20bool%20f%20%3D%2012%3B%20%20%20%2F%2F%20true%20%20%20(int%20%E2%86%92%20bool)%0A%20%20bool%20g%20%3D%200%3B%20%20%20%20%2F%2F%20false%20%20(int%20%E2%86%92%20bool)%0A%20%20bool%20h%20%3D%201.2%3B%20%20%2F%2F%20true%20%20%20(double%20%E2%86%92%20bool)%20%20%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:e(()=>[c0]),_:1})]),_:1})]),_:1}),p0,n(t.TopToggleContent,{title:"位运算(Bitwise Operations)"},{toggle:e(()=>[n(t.ToggleContent,{title:"位逻辑运算(Bitwise Logic)"},{display:e(()=>[o("li",null,[l("a "),n(t.ColorSpan,{data:"&",color:"red"}),l(" b bitwise AND")]),o("li",null,[l("a "),n(t.ColorSpan,{data:"|",color:"red"}),l(" b bitwise OR")]),o("li",null,[l("a "),n(t.ColorSpan,{data:"^",color:"red"}),l(" b bitwise XOR")]),o("li",null,[n(t.ColorSpan,{data:"~",color:"red"}),l("a bitwise NOT (one's complement)")])]),toggle:e(()=>[n(t.CodeBox,{link:"https://pythontutor.com/render.html#code=%23include%20%3Ccstdint%3E%0Aint%20main()%20%7B%0A%20%20std%3A%3Auint8_t%20a%20%3D%206%3B%20%20%0A%20%20std%3A%3Auint8_t%20b%20%3D%200b00001011%3B%0A%20%20std%3A%3Auint8_t%20c1%20%3D%20(a%20%26%20b)%3B%20%20%2F%2F%202%0A%20%20std%3A%3Auint8_t%20c2%20%3D%20(a%20%7C%20b)%3B%20%20%2F%2F%2015%0A%20%20std%3A%3Auint8_t%20c3%20%3D%20(a%20%5E%20b)%3B%20%20%2F%2F%2013%0A%20%20std%3A%3Auint8_t%20c4%20%3D%20~a%3B%20%20%20%20%20%20%20%2F%2F%20249%0A%20%20std%3A%3Auint8_t%20c5%20%3D%20~b%3B%20%20%20%20%20%20%20%2F%2F%20244%0A%20%20%2F%2F%20test%20if%20int%20is%20even%2Fodd%3A%0A%20%20bool%20a_odd%20%20%3D%20a%20%26%201%3B%0A%20%20bool%20a_even%20%3D%20!(a%20%26%201)%3B%20%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:e(()=>[o("pre",null,[l(`                                      memory bits:
std::uint8_t a = 6;                   0000 0110
std::uint8_t b = 0b00001011;          0000 1011
`),u0,l(`
std::uint8_t c1 = (a `),n(t.ColorSpan,{data:"&",color:"red"}),l(` b);  // 2      0000 0010
std::uint8_t c2 = (a `),n(t.ColorSpan,{data:"|",color:"red"}),l(` b);  // 15     0000 1111
std::uint8_t c3 = (a `),n(t.ColorSpan,{data:"^",color:"red"}),l(` b);  // 13     0000 1101
std::uint8_t c4 = `),n(t.ColorSpan,{data:"~",color:"red"}),l(`a;       // 249    1111 1001
std::uint8_t c5 = `),n(t.ColorSpan,{data:"~",color:"red"}),l(`b;       // 244    1111 0100
`),g0,l(`
// test if int is even/odd:           result:
bool a_odd  = a & 1;                  0 ⇒ false
bool a_even = !(a & 1);               1 ⇒ true`)])]),_:1})]),_:1}),_0,n(t.ToggleContent,{title:"位移运算(Bitwise Shifts)"},{display:e(()=>[o("li",null,[l("x "),n(t.ColorSpan,{data:"<<"}),l(" n: 返回变量x的比特(bits)向左移动n位后的值")]),o("li",null,[l("x "),n(t.ColorSpan,{data:">>"}),l(" n: 返回变量x的比特(bits)向右移动n位后的值")]),o("li",null,[l("x "),n(t.ColorSpan,{data:"<<=",color:"red"}),l(" n: x的比特(bits)向左移动n位后的值赋值给x")]),o("li",null,[l("x "),n(t.ColorSpan,{data:">>=",color:"red"}),l(" n: x比特(bit)向右移动n位后的值赋值给x")])]),toggle:e(()=>[n(t.CodeBox,{link:"https://pythontutor.com/render.html#code=%23include%20%3Ccstdint%3E%0Aint%20main()%20%7B%0A%20%20std%3A%3Auint8_t%20a%20%3D%201%3B%0A%20%20a%20%3C%3C%3D%206%3B%20%20%2F%2F%2064%0A%20%20a%20%3E%3E%3D%204%3B%20%20%2F%2F%204%0A%20%20std%3A%3Auint8_t%20b1%20%3D%20(1%20%3C%3C%201)%3B%20%20%2F%2F%202%0A%20%20std%3A%3Auint8_t%20b2%20%3D%20(1%20%3C%3C%202)%3B%20%20%2F%2F%204%0A%20%20std%3A%3Auint8_t%20b3%20%3D%20(1%20%3C%3C%204)%3B%20%20%2F%2F%2016%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:e(()=>[o("pre",null,[l(`                                        memory bits:
std::uint8_t a = 1;                     0000 0001
`),b0,l(`
a `),n(t.ColorSpan,{data:"<<=",color:"red"}),l(` 6;  // 64                         0100 0000
a `),n(t.ColorSpan,{data:">>=",color:"red"}),l(` 4;  // 4                          0000 0100
`),y0,l(`
std::uint8_t b1 = (1 `),n(t.ColorSpan,{data:"<<"}),l(` 1);  // 2       0000 0010
std::uint8_t b2 = (1 `),n(t.ColorSpan,{data:"<<"}),l(` 2);  // 4       0000 0100
std::uint8_t b3 = (1 `),n(t.ColorSpan,{data:"<<"}),l(" 4);  // 16      0001 0000")])]),_:1})]),_:1})]),_:1}),h0,n(t.TopToggleContent,{title:"枚举类型(Enumerations)"},{toggle:e(()=>[n(t.ToggleContent,{title:"定义(Defining)"},{toggle:e(()=>[o("pre",null,[n(t.ColorSpan,{data:"enum class",color:"red"}),l(` day { mon, tue, wed, thu, fri, sat, sun };
day d = day::mon;      
d = day::tue;   `),n(t.ColorSpan,{data:"//",color:"dimgray"}),l(),n(t.RightSpan),l(`
d = wed;        `),n(t.ColorSpan,{data:"//",color:"dimgray"}),l(),n(t.RightSpan,{type:"wrong"}),l(),n(t.ColorSpan,{data:"COMPILER ERROR: 'wed' only known in day's scope",color:"red"}),l()])]),display:e(()=>[o("div",null,[o("li",null,[n(t.ColorSpan,{data:"enum class",color:"red"}),l(),m0,l(" { enumerator1, enumerator2, … enumeratorN };")]),C0])]),_:1}),B0,n(t.ToggleContent,{title:"底层数据类型(Underlying Type Of Enumerations)"},{toggle:e(()=>[o("div",null,[o("pre",null,[l(),n(t.ColorSpan,{data:"// 7 values ⇒ char should be enough",color:"dimgray"}),l(`
`),n(t.ColorSpan,{data:"enum class",color:"red"}),l(" day : "),n(t.ColorSpan,{data:"char"}),l(` {
  mon, tue, wed, thu, fri, sat, sun
};
`),n(t.ColorSpan,{data:"// less than 10,000 ⇒ short should be enough",color:"dimgray"}),l(`
`),n(t.ColorSpan,{data:"enum class",color:"red"}),l(" language_ISO639 : "),n(t.ColorSpan,{data:"short"}),l(` {
  abk, aar, afr, aka, amh, ara, arg, …
};`)])])]),display:e(()=>[A0]),_:1})]),_:1}),f0,n(t.TopToggleContent,{title:"类型系统(Type System)"},{toggle:e(()=>[n(t.ToggleContent,{title:"定义常量(Declare Constants)"},{toggle:e(()=>[o("pre",null,[l(`int i = 0;
cin >> i;
int `),n(t.ColorSpan,{data:"const",color:"red"}),l(" k = i;  "),n(t.ColorSpan,{data:'// "int constant"',color:"dimgray"}),l(`
k = 5;            `),n(t.ColorSpan,{data:"//",color:"dimgray"}),l(),n(t.RightSpan,{type:"wrong"}),l("  "),n(t.ColorSpan,{data:"COMPILER ERROR: k is const!",color:"red"})])]),display:e(()=>[D0,l(),n(t.ColorSpan,{data:"const",color:"red"}),l(" variable_name = value; "),S0,T0]),_:1}),x0,n(t.ToggleContent,{title:"类型别名(Type Aliases)"},{toggle:e(()=>[o("pre",null,[n(t.ColorSpan,{data:"using",color:"red"}),l(` real = double;
`),n(t.ColorSpan,{data:"using",color:"red"}),l(` ullim = unsigned long;
`),n(t.ColorSpan,{data:"using",color:"red"}),l(" index_vector = std::uint_least64_t;")])]),display:e(()=>[o("li",null,[n(t.ColorSpan,{data:"using",color:"red"}),l(" NewType = OldType;  C++11")]),v0]),_:1}),F0,n(t.ToggleContent,{title:"自动推导(Type Deduction: auto)"},{display:e(()=>[R0,w0]),toggle:e(()=>[o("pre",null,[l(""),L0,l(" i = 2;                   "),n(t.ColorSpan,{data:"int"}),l(`           
`),O0,l(" u = 56u;                 "),n(t.ColorSpan,{data:"unsigned int"}),l(`        
`),k0,l(" d = 2.023;               "),n(t.ColorSpan,{data:"double"}),l(`     
`),E0,l(" f = 4.01f;               "),n(t.ColorSpan,{data:"float"}),l(`   
`),N0,l(" l = -78787879797878l;    "),n(t.ColorSpan,{data:"long int"}),l(` 
`),z0,l(`
`),I0,l(" x = 0 * i;               x: "),n(t.ColorSpan,{data:"int"}),l(` 
`),P0,l(" y = i + d;               y: "),n(t.ColorSpan,{data:"double"}),l(`   
`),j0,l(" z = f * d;               z: "),n(t.ColorSpan,{data:"double"}),l()])]),_:1})]),_:1})])}const W0=_(h,[["render",J0],["__file","01 fundamental_types.html.vue"]]),X0=JSON.parse('{"path":"/coding/cpp/01%20fundamental_types.html","title":"c++ 教程：数据类型","lang":"zh-CN","frontmatter":{"title":"c++ 教程：数据类型","order":2,"category":["cpp教程"],"tag":["c++"],"description":"基本类型是所有复杂类型/数据结构（如列表、散列表、树、图......）的基本构件。","sticky":709,"head":[["meta",{"name":"keywords","content":"c++ Variable Declarations Fundamental Types"}],["meta",{"property":"og:url","content":"https://hackcpp.github.io/coding/cpp/01%20fundamental_types.html"}],["meta",{"property":"og:site_name","content":"程序员的白粥馆"}],["meta",{"property":"og:title","content":"c++ 教程：数据类型"}],["meta",{"property":"og:description","content":"基本类型是所有复杂类型/数据结构（如列表、散列表、树、图......）的基本构件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-02T08:43:07.000Z"}],["meta",{"property":"article:author","content":"Mr.Hackcpp"}],["meta",{"property":"article:tag","content":"c++"}],["meta",{"property":"article:modified_time","content":"2024-10-02T08:43:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++ 教程：数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-02T08:43:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hackcpp\\",\\"url\\":\\"/portfolio.html\\"}]}"]]},"headers":[],"git":{"createdTime":1727699484000,"updatedTime":1727858587000,"contributors":[{"name":"hackcpp","email":"liuheng2015@gmail.com","commits":6}]},"readingTime":{"minutes":13.34,"words":4001},"filePathRelative":"coding/cpp/01 fundamental_types.md","localizedDate":"2024年9月30日","excerpt":""}');export{W0 as comp,X0 as data};