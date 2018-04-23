问题集
===

本目录收集环境配置期间遇到的问题及解决方案



[sublime中文输入解决方案](http://blog.csdn.net/ajianyingxiaoqinghan/article/details/78910182)


# GITBOOK_PLUGIN
[gitbook插件列表](https://plugins.gitbook.com/plugin)
[gitbook插件](https://blog.csdn.net/zhangjk1993/article/details/50380403)

```:sequence
    Title: Here is a title
    A->B: Normal line
    B-->C: Dashed line
    C->>D: Open arrow
    D-->>A: Dashed open arrow
```

```
{% sequence %}
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
{% endsequence %}
```

Inline math: $$\int_{-\infty}^\infty g(x) dx$$

$$ b^3$$


Block math:

```
$$
\int_{-\infty}^\infty g(x) dx
$$
```
```
Or using the templating syntax:

{% math %}\int_{-\infty}^\infty g(x) dx{% endblock %}
```