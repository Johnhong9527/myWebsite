# 动画

## 重复执行动画
```html
<div class="animation"></div>
```

```css
.animation {
  position: absolute;
  z-index: -5;
  width: 2px;
  height: 2px;
  background: red;
  animation: myfirst 1s;
  animation-iteration-count: infinite;
}
@keyframes myfirst {
  0% {
    background: red;
  }
  25% {
    background: yellow;
  }
  50% {
    background: blue;
  }
  100% {
    background: red;
  }
}
```
