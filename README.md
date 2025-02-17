# @webextensions/react
React based Components and Hooks

# Import

## Components

### AfterDelay
```js
import { AfterDelay } from '@webextensions/react/components/AfterDelay/AfterDelay.js';
```

### ClickToShow
```js
import { ClickToShow } from '@webextensions/react/components/ClickToShow/ClickToShow.js';
```

### CopyIcon
```js
import { CopyIcon } from '@webextensions/react/components/CopyIcon/CopyIcon.js';
```

### Loading
```js
import '@webextensions/react/components/Loading/Loading.css';
import { Loading } from '@webextensions/react/components/Loading/Loading.js';
```

## Hooks

### useAjax
```js
import { useAjax } from '@webextensions/react/hooks/useAjax/useAjax.js';
```

### useLocalStorage
```js
import { useLocalStorage } from '@webextensions/react/hooks/useLocalStorage/useLocalStorage.js';
```

### useMinHeight
```js
import { useMinHeight } from '@webextensions/react/hooks/useMinHeight/useMinHeight.js';
```

# For Developers
Steps to publish:
```sh
$ npm install
$ npm test
$ npm run install-without-peerDependencies
$ npm start
$ npm version <patch/minor/major/...>
$ npm publish
```
