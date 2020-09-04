# svelte-wired-types

Nice type definition files for (wired elements)[https://wiredjs.com/] to use with [Svelte](https://svelte.dev/).

### Usage

```javascript
npm install --save-dev svelte-wired-types
```

Then put an import somewhere, eg. the main.ts file:
```javascript
import "svelte-wired-types";
```

Now you should have see type information in vs code for wired-elements components, eg. when you hover over wired-button:
```javascript
 //App.svelte
 <script lang="ts">
  import "wired-elements";
 </script>
 
<main>
  <wired-card elevation={5} fill={"#99A8B5"}>
    <wired-button elevation={2} >Submit</wired-button>
 </wired-card>
</main>
```



------------------------------------


<a href="https://www.buymeacoff.ee/michalmxt" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>
