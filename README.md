<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt Material Icons
- Package name: nuxt-material-icons
- Description: My new Nuxt module
-->

# Nuxt Material Icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

This module wraps the [material-icons package by marella](https://www.npmjs.com/package/material-icons)
to ease the integration with Google's Material Icons & Symbols with your Nuxt project.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/~/github.com/jaredhandra/nuxt-material-icons?file=playground/app.vue)
- [📖 &nbsp;Documentation](https://example.com)

## Features

<!-- Highlight some of the features your module provide here -->

- ⛰ Adds all of Google's [Material Symbols & Icons](https://fonts.google.com/icons)
- 🚠 Wraps the [material-icons package by marella](https://www.npmjs.com/package/material-icons) with a
  simple custom component
- 🌲 Removes need for imports

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-material-icons
```

That's it! You can now use Nuxt Material Icons in your Nuxt app ✨

## Usage

The module will automatically make the MIcon component available to your application. All you need to pass is the props
for the type of icon you want, and the icon name. The package will do the rest. For example:

```html

<MIcon variant="two-tone" icon="pie_chart"/>
```

You can still style the icon as you would normally do with a vanilla import.

```html

<MIcon
  variant="round"
  icon="add"
  style="font-size: 72px"
/>
```

## Available Icons

You can find all available icons [here](https://www.npmjs.com/package/material-icons#available-icons). Google's Material
Icons Guidelines can be found [here](https://m3.material.io/styles/icons/overview)

## Contribution

<details>
  <summary>Local development</summary>

  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-material-icons/latest.svg?style=flat&colorA=020420&colorB=00DC82

[npm-version-href]: https://npmjs.com/package/nuxt-material-icons

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-material-icons.svg?style=flat&colorA=020420&colorB=00DC82

[npm-downloads-href]: https://npm.chart.dev/nuxt-material-icons

[license-src]: https://img.shields.io/npm/l/nuxt-material-icons.svg?style=flat&colorA=020420&colorB=00DC82

[license-href]: https://npmjs.com/package/nuxt-material-icons

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js

[nuxt-href]: https://nuxt.com
