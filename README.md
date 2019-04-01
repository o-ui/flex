# flex
A flex layout in vue

# examples

row-start with wrap
```html
  <row-start wrap>
    <div class="demo-item"></div>
    <div class="demo-item"></div>
    <div class="demo-item"></div>
    <div class="demo-item"></div>
    <div class="demo-item"></div>
    <div class="demo-item"></div>
  </row-start>
```

row-start top align + row-unit
```html
  <row-start top>
    <span>pre label</span>
    <row-unit>
      <div>
        <div class="demo-unit"></div>
        <br>
        <div class="demo-unit"></div>
      </div>
    </row-unit>
    <span>after label</span>
  </row-start>
```

![example](https://user-images.githubusercontent.com/49022875/55307634-b4613400-548a-11e9-9f49-29c0dd1460d4.png)
