# ui-lib
建立 ui lib demo

### 調整 storybook 打包設定
.storybook 的 main.js webpackFinal 設定

### 發佈版本
```
yarn build
```
調整 package version
```
npm login
npm publish
```

### 發布測試快照
```
yarn chromatic
```

### 套用方式
在要套用的專案下
```
yarn add @zhiuanh/ui-lib
```
在要引用樣式的 js
```
import "@zhiuanh/ui-lib"
```

### 開發階段同步
在此專案根目錄下
```
npm link
```

在要套用的專案下
```
npm link @zhiuanh/ui-lib
```

