---
title: Docusaurus
sidebar_position: 88
---

## Doc Only Layout

```js title="docusaurus.config.js"
const config = {
  // ...
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  // ...
};
```


## Deploying to GitHub Pages

### Bash
```bash
GIT_USER=kohyuk91 yarn deploy
```

### Batch
```batch
cmd /C "set "GIT_USER=kohyuk91" && yarn deploy"
```
