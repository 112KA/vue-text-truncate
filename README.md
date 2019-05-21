# vue-text-truncate
Vue component - Omits the text that exceeds the specified height

## Example
https://112ka.github.io/example/vue-text-truncate/

## Install

### Install component
```html
<script src="vue-text-truncate.umd.js"></script>
<script>
Vue.use(TextTruncate)
</script>
```

or

```
yarn add vue-text-truncate
or
npm install vue-text-truncate
```

```js
import TextTruncate from 'vue-text-truncate'
Vue.component('TextTruncate', TextTruncate)
```

## Usage
```vue
<div style="height:100px;"> <!-- Wrapper element with specified height -->　
<TextTruncate>Some long text.</TextTruncate>
</div>
```

## Licensing

MIT