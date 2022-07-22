import{_ as a,o as s,c as p,a as n}from"./app.894a0537.js";const F=JSON.parse('{"title":"\u5728JavaScript\u4E2D\u5F15\u5165\u7C7B\u578B\u7684\u63D0\u6848\uFF08\u7FFB\u8BD1\uFF09","description":"","frontmatter":{"title":"\u5728JavaScript\u4E2D\u5F15\u5165\u7C7B\u578B\u7684\u63D0\u6848\uFF08\u7FFB\u8BD1\uFF09","publishDate":"2022-03-10T00:00:00.000Z","tags":["Type","JavaScript","TypeScript"],"layout":"doc"},"headers":[{"level":2,"title":"\u8BD1\u8005\u89C1\u89E3","slug":"\u8BD1\u8005\u89C1\u89E3"},{"level":2,"title":"\u8BD1\u6587","slug":"\u8BD1\u6587"},{"level":3,"title":"\u80CC\u666F","slug":"\u80CC\u666F"},{"level":3,"title":"\u5982\u4F55\u5DE5\u4F5C","slug":"\u5982\u4F55\u5DE5\u4F5C"},{"level":3,"title":"\u8FD9\u4E2A\u63D0\u6848\u4E0D\u505A\u4EC0\u4E48","slug":"\u8FD9\u4E2A\u63D0\u6848\u4E0D\u505A\u4EC0\u4E48"},{"level":3,"title":"\u63A5\u4E0B\u6765\u7684\u4E8B","slug":"\u63A5\u4E0B\u6765\u7684\u4E8B"}],"relativePath":"blog/article/article-2022-3-10.md"}'),e={name:"blog/article/article-2022-3-10.md"},t=n(`<blockquote><p><a href="https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/" target="_blank" rel="noopener noreferrer">\u82F1\u6587\u539F\u6587\u94FE\u63A5</a> \u4F5C\u8005\u4E3ATypeScript\u56E2\u961F\u6210\u5458</p></blockquote><h2 id="\u8BD1\u8005\u89C1\u89E3" tabindex="-1">\u8BD1\u8005\u89C1\u89E3 <a class="header-anchor" href="#\u8BD1\u8005\u89C1\u89E3" aria-hidden="true">#</a></h2><p>\u9996\u5148\uFF0C\u5F53\u770B\u5230\u8FD9\u7BC7\u6587\u7AE0\u7684\u6807\u9898\u65F6\uFF0C\u6211\u5F88\u5174\u594B\uFF0C\u60F3\u5230\u7EC8\u4E8E\u6765\u4E86\uFF0C\u5C06\u6765\u4E5F\u8BB8\u6709\u673A\u4F1A\u53EF\u4EE5\u5199\u5E26\u7C7B\u578B\u7684JavaScript\u4E86\uFF0C\u6240\u4EE5\u6211\u5C31\u5F88\u60F3\u628A\u8FD9\u7BC7\u6587\u7AE0\u7FFB\u8BD1\u51FA\u6765\u3002 \u8BFB\u5B8C\u5168\u7BC7\u540E\uFF0C\u867D\u7136\u6211\u89C9\u5F97\u8FD9\u4E2A\u63D0\u6848\u6709\u79EF\u6781\u7684\u5730\u65B9\uFF0C\u4F46\u5BF9\u6B64\u6211\u4ECD\u7136\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7591\u95EE\uFF1A</p><ul><li>\u6DFB\u52A0\u4E86\u7C7B\u578B\u7684JavaScipt\u4ECD\u7136\u662FTypeScript\u7684\u5B50\u96C6\uFF0C\u6CA1\u6CD5\u505A\u5230\u50CFTypeScript\u90A3\u4E48\u5B8C\u5584\uFF08\u56E0\u4E3ATypeScript\u6709\u8BB8\u591A\u8FD0\u884C\u65F6\u529F\u80FD\uFF09</li><li>\u5373\u4F7F\u7C7B\u578B\u4F1A\u88AB\u6D4F\u89C8\u5668\u554A\uFF0Cnode\u7B49JavaScript\u8FD0\u884C\u65F6\u5B8C\u5168\u5FFD\u7565\uFF0C\u4F46\u5B9E\u9645\u5F00\u53D1\u4E2D\u6211\u4EEC\u4ECD\u7136\u5C11\u4E0D\u4E86\u6784\u5EFA\u7684\u6B65\u9AA4\uFF0C\u56E0\u4E3A\u50CFTree-Shaking\u3001\u4EE3\u7801\u538B\u7F29\u3001\u4EE3\u7801\u805A\u5408\u7B49\u4ECD\u7136\u9700\u8981\u6784\u5EFA\u5DE5\u5177\uFF0C\u6240\u4EE5\u591A\u4E00\u4E2A\u8F6C\u4E49\u7684\u6B65\u9AA4\u5E76\u4E0D\u4F1A\u9EBB\u70E6</li><li>\u7C7B\u578B\u7684\u6DFB\u52A0\u610F\u5916\u7740JavaScript\u7684\u4EE3\u7801\u91CF\u4F1A\u53D8\u7684\u5F88\u5927\uFF0C\u4F1A\u5BFC\u81F4\u524D\u7AEF\u8D44\u6E90\u53D8\u5927</li></ul><p>\u4F46\u662F\uFF0C\u65E0\u8BBA\u4F1A\u9047\u5230\u4EC0\u4E48\u56F0\u96BE\uFF0C\u6211\u90FD\u8BA4\u4E3A\u8FD9\u4E2A\u63D0\u6848\u662F\u4E2A\u79EF\u6781\u7684\u65B9\u5411\uFF0C\u662F\u53EF\u4EE5\u63A2\u7D22\u7684\u65B9\u5411\uFF0C\u4ECA\u5929\u6211\u4EEC\u7684\u524D\u7AEF\u5F00\u53D1\u4F53\u9A8C\u6B63\u662F\u7531\u4E8E\u524D\u4EBA\u7684\u4E0D\u65AD\u63A2\u7D22\u5960\u57FA\u7684\uFF0C\u5176\u4E2D\u5F88\u591A\u4E5F\u6709\u5148\u88AB\u6452\u5F03\u7684\u65B9\u6848\uFF0C\u4F46\u4E5F\u4E00\u5B9A\u4F1A\u50AC\u751F\u51FA\u66F4\u591A\u7684\u7075\u611F\u706B\u82B1\uFF0C\u5E0C\u671B\u8FD9\u4E2A\u63D0\u6848\u80FD\u591F\u88AB\u5927\u5BB6\u8BA4\u8BC6\uFF0C\u5E0C\u671BJavaScript\u8D8A\u6765\u8D8A\u597D\u7528\u3002</p><h2 id="\u8BD1\u6587" tabindex="-1">\u8BD1\u6587 <a class="header-anchor" href="#\u8BD1\u6587" aria-hidden="true">#</a></h2><p>\u4ECA\u5929\u6211\u4EEC\u5174\u594B\u7684\u5BA3\u5E03\u4E00\u4E2A\u65B0\u7684stage-0\u7684\u63D0\u6848\uFF0C\u90A3\u5C31\u662F\u7ED9JavaScript\u52A0\u4E0A\u53EF\u9009\u7684\u548C\u53EF\u53BB\u9664\u7684\u7C7B\u578B\u8BED\u6CD5\uFF0C\u65B0\u52A0\u7684\u7C7B\u578B\u8BED\u6CD5\u4E0D\u4F1A\u6539\u53D8\u5468\u56F4\u4EE3\u7801\u7684\u8FD0\u884C\uFF0C\u5B83\u4F1A\u50CF\u6CE8\u91CA\u4E00\u6837\u8FD0\u884C\uFF0C\u6211\u4EEC\u8BA4\u4E3A\u8FD9\u4E2A\u63D0\u6848\u5C06\u4F1A\u4F7FTypeScript\u5728\u5404\u79CD\u89C4\u6A21\u7684\u5F00\u53D1\u4E2D\u4FBF\u6377\u9002\u7528\uFF0C\u6211\u4EEC\u60F3\u804A\u4E00\u804A\u4E3A\u4EC0\u4E48\u6211\u4EEC\u4F1A\u63D0\u51FA\u8FD9\u4E2A\u63D0\u6848\uFF0C\u4EE5\u53CA\u8FD9\u4E2A\u63D0\u6848\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u3002</p><h3 id="\u80CC\u666F" tabindex="-1">\u80CC\u666F <a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a></h3><p>\u6700\u8FD1\u6211\u4EEC\u56E2\u961F\u5728JavaScript\u7684\u5F00\u53D1\u4E1A\u754C\u4E2D\u7684\u4E00\u4E2A\u8D8B\u52BF\u662F\u5E0C\u671B\u66F4\u5FEB\u8FED\u4EE3\u548C\u66F4\u5C11\u7684\u6784\u5EFA\u6B65\u9AA4\uFF0C\u6362\u53E5\u8BDD\u8BF4\u5C31\u662F\u5728\u5F00\u53D1\u4E2D\u201C\u66F4\u5FEB\uFF0C\u66F4\u7B80\u5355\u201C\u3002</p><p>\u67D0\u79CD\u7A0B\u5EA6\u4E0A\u6765\u8BF4\uFF0C\u73B0\u5728\u5F00\u53D1\u8FC7\u7A0B\u5DF2\u7ECF\u5728\u53D8\u7684\u66F4\u52A0\u7B80\u4FBF\u4E86\u3002\u8FD9\u662F\u56E0\u4E3A\u73B0\u4EE3\u6D4F\u89C8\u5668\u7684\u5FEB\u901F\u5F00\u53D1\u8FED\u4EE3\uFF0C\u5BF9\u8BED\u8A00\u6807\u51C6\u7684\u652F\u6301\u7A0B\u5EA6\uFF0C\u8BA9\u6211\u4EEC\u5F00\u53D1\u8005\u53EF\u4EE5\u4E0D\u901A\u8FC7\u7F16\u8BD1\u73B0\u4EE3\u7248\u672C\u7684JavaScript\u6765\u914D\u5408\u53E4\u8001\u7684\u6D4F\u89C8\u5668\u8FD0\u884C\u73AF\u5883\u3002\u53E6\u5916\u6253\u5305\u4E5F\u662F\u8FD9\u6837\u7684\uFF0C\u73B0\u4EE3\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u4F7F\u7528module\uFF0C\u6240\u4EE5\u6253\u5305\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u79CD\u4F18\u5316\u800C\u4E0D\u662F\u5FC5\u8981\u6B65\u9AA4\u4E86\uFF0C\u8FD9\u79CD\u60C5\u51B5\u8D8A\u6765\u8D8A\u666E\u904D\uFF0C\u5BF9\u4E8ETypeScript\u6765\u8BF4\uFF0C\u5982\u4F55\u8DDF\u4E0A\u8FD9\u79CD\u65F6\u4EE3\u53D8\u5316\u5462\uFF1F</p><p>\u5982\u679C\u6211\u4EEC\u56DE\u5230TypeScript\u521A\u521A\u53D1\u5E03\u76842012\u5E74\uFF0CJavaScript\u4E16\u754C\u548C\u73B0\u5728\u662F\u622A\u7136\u4E0D\u540C\u7684\u3002\u5F53\u65F6\u6211\u4EEC\u4E0D\u77E5\u9053\u8FD8\u8981\u88AB\u4F4E\u7248\u672C\u7684Interne Explorer\u5361\u4F4F\u591A\u4E45\uFF0C\u4E0D\u6E05\u695A\u6D4F\u89C8\u5668\u5BF9\u8BED\u8A00\u7684\u652F\u6301\u7279\u6027\u5982\u4F55\uFF0C\u8FD9\u8BA9\u6211\u4EEC\u5F53\u65F6\u9752\u7750\u4E8E\u4F7F\u7528\u7F16\u8BD1\u5668\u3001\u6253\u5305\u5668\u8FD9\u6837\u7684\u5DE5\u5177\u3002\u6240\u4EE5TypeScript\u80FD\u5728\u90A3\u4E2A\u5E74\u4EE3\u5FEB\u901F\u6210\u957F\uFF0C\u6BD5\u7ADF\u53CD\u6B63\u90FD\u8981\u6709\u7F16\u8BD1\u6253\u5305\u7684\u6B65\u9AA4\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u7F16\u8BD1\u4E00\u4E2A\u6709\u7C7B\u578B\u7684\u5462\uFF1F\u4F46\u662F\u968F\u7740\u65F6\u4EE3\u53D1\u5C55\uFF0C\u4E5F\u8BB8\u5C06\u6765\u4EC5\u4EC5\u53EA\u6709TypeScript\u9700\u8981\u7F16\u8BD1\u4E86\uFF0C\u5176\u5B83\u7279\u6027\u90FD\u80FD\u539F\u751F\u652F\u6301\uFF0C\u6211\u4EEC\u5E76\u4E0D\u60F3TypeScript\u6700\u540E\u6210\u4E3A\u963B\u788DJavaScript\u53D1\u5C55\u7684\u5DE5\u5177\u3002</p><p>\u4ECE\u67D0\u79CD\u7A0B\u5EA6\u6765\u8BF4\uFF0C\u73B0\u5728\u7684JavaScripts\u662F\u652F\u6301\u7C7B\u578B\u63D0\u793A\u7684\u3002\u5982\u679C\u4F60\u7528\u8FC7Visual Studio\u6216\u8005Visual Studio Code\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u7528JSDoc\u6CE8\u91CA\u7684\u65B9\u5F0F\u6765\u6807\u6CE8\u7C7B\u578B\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#676E95;font-style:italic;"> {number}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#676E95;font-style:italic;"> {number}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u50CF\u4E0A\u9762\u8FD9\u6837\u7684\u53EA\u662F\u6CE8\u91CA\uFF0C\u4E0D\u4F1A\u5E72\u6270\u5230\u4EE3\u7801\u7684\u8FD0\u884C\uFF0C\u4F46\u662F\u7F16\u8F91\u5668\u91CC\u7684TypeScript\u5374\u53EF\u4EE5\u7528\u5B83\u4EEC\u7ED9\u5F00\u53D1\u8005\u5E26\u6765\u66F4\u597D\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C\u4F60\u751A\u81F3\u53EF\u4EE5\u5728\u6587\u4EF6\u9876\u90E8\u6DFB\u52A0<code>// @ts-check</code>\u6CE8\u91CA\u6216\u8005\u901A\u8FC7TypeScript\u7F16\u8BD1\u65F6\u8BBE\u7F6E<code>checkJs</code>\u6765\u542F\u7528\u7C7B\u578B\u68C0\u67E5\uFF0C\u8FD9\u4E2A\u7279\u6027\u53EF\u4EE5\u5F88\u65B9\u4FBF\u4E0D\u901A\u8FC7\u7F16\u8BD1\u6B65\u9AA4\u5C31\u80FD\u83B7\u5F97\u4E00\u4E9BTypeScript\u7684\u7279\u6027\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u5728\u4E00\u4E9B\u5C0F\u578B\u9879\u76EE\u3001\u57FA\u672C\u7684\u7F51\u9875\u811A\u672C\u6216\u8005\u670D\u52A1\u7AEF\u4EE3\u7801\u4E2D\u4F7F\u7528\u3002</p><p>\u4F46\u662F\u4F60\u53D1\u73B0\u8FD9\u8FD8\u662F\u6709\u70B9\u5197\u957F\uFF0C\u6709\u6CA1\u4EC0\u4E48\u65B9\u6CD5\u8BA9\u6211\u4EEC\u65E2\u80FD\u8F7B\u677E\u4FBF\u6377\u7684\u7F16\u5199JavaScript\uFF0C\u53C8\u80FD\u83B7\u5F97TypeScript\u7684\u5F00\u53D1\u4F53\u9A8C\u5462\uFF0C\u542C\u8D77\u6765\u6709\u70B9\u9C7C\u548C\u718A\u638C\u4E0D\u53EF\u517C\u5F97\uFF0C\u4F46\u662F\uFF0C\u5982\u679C\u6211\u4EEC\u53EF\u4EE5\u5728JavaScript\u4E2D\u4F7F\u7528TypeScript\u7684\u7C7B\u578B\u8BED\u6CD5\uFF0C\u4F46\u662F\u8FD9\u4E9B\u8BED\u6CD5\u53C8\u50CF\u6CE8\u91CA\u4E00\u6837\u4F1A\u5728\u8FD0\u884C\u73AF\u5883\u4E2D\u88AB\u5FFD\u7565\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u56E2\u961F\u76F8\u4FE1\u8FD9\u91CC\u9762\u6709\u4E00\u4E9B\u5B9E\u73B0\u7684\u53EF\u80FD\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u6708\u6211\u4EEC\u5E0C\u671B\u80FD\u7ED9TC39\uFF08ECMAScript\u6807\u51C6\u59D4\u5458\u4F1A\uFF09\u63D0\u4EA4\u8FD9\u4E2A\u63D0\u6848\u3002</p><h3 id="\u5982\u4F55\u5DE5\u4F5C" tabindex="-1">\u5982\u4F55\u5DE5\u4F5C <a class="header-anchor" href="#\u5982\u4F55\u5DE5\u4F5C" aria-hidden="true">#</a></h3><p>\u5F53\u6211\u4EEC\u88AB\u95EE\u5230\u4EC0\u4E48\u65F6\u5019\u7C7B\u578B\u7CFB\u7EDF\u4F1A\u52A0\u5230JavaScript\u4E2D\uFF0C\u6211\u4EEC\u6CA1\u6CD5\u51C6\u786E\u7684\u7ED9\u51FA\u7B54\u590D\uFF0C\u5386\u53F2\u6765\u770B\uFF0C\u8FD9\u4E2A\u95EE\u9898\u5BF9\u5F00\u53D1\u8005\u6765\u8BF4\u4E00\u76F4\u4EE5\u6765\u90FD\u6709\u4E0D\u540C\u7684\u7B54\u6848\uFF0C\u6709\u4E9B\u4EBA\u8BA4\u4E3A\u7C7B\u578B\u5E94\u8BE5\u5B8C\u5168\u88AB\u5FFD\u7565\u6389\uFF0C\u4F46\u6709\u4E9B\u4EBA\u8BA4\u4E3A\u7C7B\u578B\u5E94\u8BE5\u8981\u6709\u4E9B\u5B9E\u9645\u610F\u4E49\uFF0C\u50CF\u662F\u5728\u8FD0\u884C\u65F6\u7684\u9A8C\u8BC1\uFF0C\u6216\u8005\u4F5C\u4E3A\u5F15\u64CE\u4F18\u5316\u7684\u63D0\u793A\uFF0C\u7B49\u7B49\u5176\u5B83\u7528\u5904\u3002\u4F46\u6700\u8FD1\u51E0\u5E74\uFF0C\u6211\u4EEC\u770B\u5230\u4E00\u4E9B\u4E0ETypeScript\u76F8\u914D\u5408\u7684\u53D1\u5C55\u8D8B\u52BF\uFF0C\u90A3\u5C31\u662F\u7C7B\u578B\u5728\u5F15\u64CE\u8FD0\u884C\u65F6\u662F\u5B8C\u5168\u5FFD\u7565\u548C\u53EF\u6D88\u9664\u7684\u3002\u6240\u4EE5\u6700\u8FD1\u8D8A\u6765\u8D8A\u591A\u7684\u6211\u4EEC\u56E2\u961F\u7684\u5F00\u53D1\u8005\u591A\u6B21\u5411\u6211\u4EEC\u63D0\u8FC7\uFF0C\u8BA9\u6211\u4EEC\u63D0\u51FA\u4E00\u79CD\u201C\u6CE8\u91CA\u578B\u7C7B\u578B\u6807\u6CE8\u201D\u7684\u63D0\u6848\u3002</p><p>\u8FD9\u4E2A\u63D0\u6848\u7684\u5177\u4F53\u60F3\u6CD5\u662F\u8FD9\u6837\u7684\uFF0CJavaScript\u4E2D\u652F\u6301\u4E00\u79CD\u53EF\u4EE5\u5B8C\u5168\u88AB\u5F15\u64CE\u5FFD\u7565\u7684\u7C7B\u578B\u8BED\u6CD5\uFF0C\u8FD9\u79CD\u8BED\u6CD5\u5728\u5F00\u53D1\u4E2D\u53EF\u4EE5\u88ABTypeScript\u3001Flow\u4EE5\u53CA\u5176\u5B83\u5DE5\u5177\u8BC6\u522B\u4F7F\u7528\u3002\u8FD9\u53EF\u4EE5\u8BA9\u6211\u4EEC\u65E2\u4FDD\u7559TypeScript\u4E2D\u4E00\u4E9B\u597D\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C\u50CF\u662F\u7C7B\u578B\u68C0\u67E5\uFF0C\u53C8\u4E0D\u9700\u8981\u901A\u8FC7\u7F16\u8BD1\u6B65\u9AA4\u3002</p><p><img src="https://sunyuu-1305462023.cos.ap-nanjing.myqcloud.com/blog/14618593506.png" alt="tac-announcement-today-proposed 1.png"> \u540C\u65F6\uFF0C\u53EF\u4EE5\u8BA9TypeScript\u548CJavaScript+Type\u5728\u8BED\u6CD5\u4E0A\u548C\u7C7B\u578B\u68C0\u67E5\u4E0A\u4FDD\u6301\u76F8\u540C\u7684\u4F53\u9A8C\uFF0C\u53EF\u4EE5\u5728\u7F16\u8F91\u5668\u4E2D\u5B9E\u65F6\u7684\u770B\u5230\u7C7B\u578B\u63D0\u793A\uFF0C\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u8FD0\u884CTypeScript\u68C0\u67E5\uFF0C\u4E5F\u53EF\u4EE5\u628ATypeScript\u8FD0\u7528\u5728CI\u6D41\u7A0B\u4E2D\uFF0C\u6700\u5927\u7684\u4E0D\u540C\u5728\u4E8E \u6211\u4EEC\u4E0D\u9700\u8981\u7F16\u8BD1\u4E86\uFF0C\u6211\u4EEC\u5C06\u5927\u5927\u964D\u4F4EJavaScript\u5F00\u53D1\u4EBA\u5458\u4F53\u9A8C\u7C7B\u578B\u7684\u95E8\u69DB\u3002</p><p><img src="https://sunyuu-1305462023.cos.ap-nanjing.myqcloud.com/blog/14618593503.png" alt="tac-announcement-checking-behavior 1.png"></p><p>\u8981\u60F3\u4E0A\u9762\u7684\u65B9\u6848\u5B9E\u73B0\uFF0CJavaScript\u81F3\u5C11\u8981\u6DFB\u52A0\u53D8\u91CF\u548C\u51FD\u6570\u7C7B\u578B\u6CE8\u91CA\u8BED\u6CD5\uFF0C\u53D8\u91CF\u53EF\u9009\u4FEE\u9970\u7B26\uFF0C\u7C7B\u578B\u58F0\u660E\u8BED\u6CD5\uFF0C\u65AD\u8A00\u8FD0\u7B97\u7B26\u7B49\u7B49\u3002\u53E6\u5916\u7684\u50CF(public, private, and protected) \u8FD9\u7C7B\u7684\u8BED\u6CD5\u4E5F\u53EF\u80FD\u88AB\u5305\u542B\uFF0C\u4F46\u8FD8\u6709\u4E00\u4E9B\u50CF\u679A\u4E3E\uFF0C\u547D\u540D\u7A7A\u95F4\u7B49\u5C31\u4E0D\u5728\u8FD9\u6B21\u7684\u63D0\u6848\u4E2D\u4E86\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u8BED\u6CD5\u6D89\u53CA\u5230\u4E00\u4E9B\u8FD0\u884C\u65F6\u884C\u4E3A\u3002\u8FD9\u4E9B\u7279\u6027\u53EF\u4EE5\u5206\u522B\u4F5C\u4E3A\u8BED\u8A00\u63D0\u6848\u63D0\u4EA4\u7ED9ECMAScript\u6807\u51C6\u59D4\u5458\u4F1A\u3002\u603B\u800C\u8A00\u4E4B\uFF0C\u6211\u4EEC\u5F53\u524D\u63D0\u6848\u7684\u76EE\u7684\u662F\u63D0\u4F9B\u4E00\u4E2ATypeScript\u7684\u5B50\u96C6\u3002</p><h3 id="\u8FD9\u4E2A\u63D0\u6848\u4E0D\u505A\u4EC0\u4E48" tabindex="-1">\u8FD9\u4E2A\u63D0\u6848\u4E0D\u505A\u4EC0\u4E48 <a class="header-anchor" href="#\u8FD9\u4E2A\u63D0\u6848\u4E0D\u505A\u4EC0\u4E48" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u6709\u5FC5\u8981\u8BB2\u8BB2\u8FD9\u4E2A\u63D0\u6848\u4E0D\u4F1A\u505A\u4EC0\u4E48\u3002 \u6211\u4EEC\u56E2\u961F\u4E0D\u5EFA\u8BAE\u5728\u6BCF\u4E2A\u6D4F\u89C8\u5668\u548CJavaScript\u8FD0\u884C\u65F6\u4E2D\u6DFB\u52A0TypeScript\u7C7B\u578B\u68C0\u67E5\uFF0C\u540C\u65F6\u6211\u4EEC\u4E5F\u4E0D\u5EFA\u8BAE\u52A0\u5165\u65B0\u7684\u7C7B\u578B\u68C0\u67E5\u5230\u6D4F\u89C8\u5668\u4E2D\uFF0C\u56E0\u4E3A\u8FD9\u4F1A\u5E26\u6765\u4E00\u7CFB\u5217\u7684\u95EE\u9898\uFF0C\u50CF\u662F\u8FD0\u884C\u65F6\u6027\u80FD\u95EE\u9898\uFF0C\u517C\u5BB9\u6027\u95EE\u9898\u7B49\u7B49\u3002\u76F8\u5BF9\u7684\u6211\u4EEC\u63D0\u51FA\u4E0ETypeScript\u517C\u5BB9\u5E76\u4E14\u53D7\u5176\u542F\u53D1\u7684\u8BED\u6CD5\uFF0C\u8FD9\u53EF\u4EE5\u88AB\u4EFB\u4F55\u7C7B\u578B\u68C0\u67E5\u5668\u4F7F\u7528\uFF0C\u800C\u4E14\u8BED\u6CD5\u5C06\u88AB\u8FD0\u884C\u65F6\u5FFD\u7565\uFF0C\u6211\u4EEC\u89C9\u5F97\u8FD9\u4E2A\u65B9\u6848\u5BF9\u5404\u65B9\u9762\u90FD\u6709\u4F18\u52BF\uFF0C\u53EF\u4EE5\u8BA9\u4EBA\u4EEC\u9009\u62E9\u81EA\u5DF1\u559C\u6B22\u7684\u7C7B\u578B\u68C0\u67E5\u5668\u3002</p><h3 id="\u63A5\u4E0B\u6765\u7684\u4E8B" tabindex="-1">\u63A5\u4E0B\u6765\u7684\u4E8B <a class="header-anchor" href="#\u63A5\u4E0B\u6765\u7684\u4E8B" aria-hidden="true">#</a></h3><p>\u57FA\u4E8E\u4EE5\u4E0A\u7684\uFF0C\u6211\u4EEC\u51C6\u5907\u5728\u8FD9\u4E2A\u6708\u7684TC39\u4F1A\u8BAE\u4E0A\u628A\u8FD9\u4E2A\u63D0\u6848\u4F5C\u4E3Astage1\u63D0\u4EA4\u4E0A\u53BB\uFF0C\u6211\u4EEC\u5C06\u5728\u6765\u81EA\u4E8EBloomberg\u7684Rob Palmer \u548C\u6765\u81EA\u4E8EIgalia\u7684Romulo Cintra\u7684\u5171\u540C\u652F\u6301\u548C\u6307\u5BFC\u4E0B\u6765\u5B8C\u5584\u8FD9\u4E2A\u63D0\u6848\u3002</p><p>\u5982\u679C\u8FD9\u4E2A\u63D0\u6848\u80FD\u4E2A\u8FDB\u5165stage1\u4E2D\uFF0C\u90A3\u4E48\u5C31\u4EE3\u8868TC39\u59D4\u5458\u4F1A\u662F\u76F8\u4FE1\u8FD9\u4E48\u505A\u662F\u6709\u4E00\u5B9A\u7684\u4EF7\u503C\u7684\u3002\u80FD\u4E0D\u80FD\u8FDB\u5165satge1\u76EE\u524D\u8FD8\u4E0D\u597D\u4E0B\u5B9A\u8BBA\uFF0C\u6211\u4EEC\u76F8\u4FE1\u5230\u65F6\u59D4\u5458\u4F1A\u4E2D\u4F1A\u6709\u5F88\u591A\u6709\u4EF7\u503C\u7684\u610F\u89C1\uFF0C\u4E5F\u4F1A\u6709\u4E00\u4E9B\u8D28\u7591\uFF0C\u50CF\u8FD9\u6837\u7684\u63D0\u6848\u4F1A\u6536\u5230\u5F88\u591A\u53CD\u9988\u548C\u5BA1\u67E5\uFF0C\u5728\u6B64\u8FC7\u7A0B\u4E2D\u5C06\u4F1A\u9700\u8981\u6D89\u53CA\u5927\u91CF\u7684\u8BED\u8A00\u8BBE\u8BA1\u65B9\u9762\u7684\u66F4\u6539\uFF0C\u5E76\u4E14\u9700\u8981\u8981\u8BDD\u8D39\u591A\u5E74\u624D\u80FD\u770B\u5230\u7ED3\u679C\u3002</p><p>\u4F46\u662F\uFF0C\u4E00\u65E6\u6211\u4EEC\u5B8C\u6210\u4E86\u8FD9\u4E00\u5207\uFF0C\u6211\u4EEC\u5C06\u4F1A\u7ED9JavaScript\u4E16\u754C\u5E26\u6765\u6700\u5177\u5F71\u54CD\u529B\u7684\u6539\u8FDB\u4E4B\u4E00\uFF0C\u5BF9\u6B64\u6211\u4EEC\u5F88\u5174\u594B\uFF0C\u4E5F\u5F88\u671F\u671B\u3002</p><p>\u6700\u540E\uFF0C\u8981\u611F\u8C22\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u6240\u6709\u7ED9\u4E88\u6211\u4EEC\u56E2\u961F\u5E2E\u52A9\u7684\u6240\u6709\u4EBA\uFF0C\u6211\u4EEC\u5F88\u8363\u5E78\u662F\u8FD9\u4E2A\u5145\u6EE1\u6FC0\u60C5\u7684\u5F00\u53D1\u4E16\u754C\u4E2D\u7684\u4E00\u5458\u3002</p>`,30),l=[t];function o(c,r,i,y,d,D){return s(),p("div",null,l)}var h=a(e,[["render",o]]);export{F as __pageData,h as default};