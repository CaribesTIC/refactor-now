import{_ as s,c as a,o as n,N as e}from"./chunks/framework.752867af.js";const d=JSON.parse('{"title":"Métodos que reciben parámetros","description":"","frontmatter":{},"headers":[],"relativePath":"tuto/refactor-b.md"}'),o={name:"tuto/refactor-b.md"},l=e(`<h1 id="metodos-que-reciben-parametros" tabindex="-1">Métodos que reciben parámetros <a class="header-anchor" href="#metodos-que-reciben-parametros" aria-label="Permalink to &quot;Métodos que reciben parámetros&quot;">​</a></h1><p>Aquí debe hacerse una notable distinción entre parámetros, variables de uso temporal y propiedades de clase. Y esta distinción, está dada por la finalidad de cada una:</p><ul><li>Las <strong>variables de uso temporal</strong> , como hemos visto antes, están destinadas a definir un valor concreto al cual se hará referencia solo en el ámbito donde se haya definido.</li><li>Las <strong>propiedades de clase</strong>, son características inherentes al objeto a las cuales se hará referencia desde diversos ámbitos.</li><li>Y finalmente, <strong>los parámetros</strong>, serán valores adicionales, que no pueden ser considerados propiedades del objeto pero que sin embargo, son requeridos para que una acción, modifique las propiedades de un objeto.</li></ul><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">validateUser</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">username</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">pass</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">username </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pepe</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">pass </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>En el ejemplo anterior, claramente los parámetros <code>$username</code> y <code>$pass</code>, deberían ser propiedades del objeto <code>User</code> puesto que son características intrínsecas al objeto. Como regla general, los parámetros deben ser evitados toda vez que sea posible, reemplazándolos por propiedades de clase:</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">validateUser</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($this-&gt;</span><span style="color:#A6ACCD;">username </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pepe</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#A6ACCD;">pass </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,6),p=[l];function t(r,c,D,i,y,F){return n(),a("div",null,p)}const A=s(o,[["render",t]]);export{d as __pageData,A as default};