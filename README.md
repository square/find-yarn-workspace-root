# find-yarn-workspace-root

[![Build Status](https://travis-ci.org/square/find-yarn-workspace-root.svg?branch=master)](https://travis-ci.org/square/find-yarn-workspace-root)

Algorithm for finding the root of a yarn workspace, extracted from yarnpkg.com

## Installation
```bash
yarn add find-yarn-workspace-root
```

## Usage
```js
const findWorkspaceRoot = require('find-yarn-workspace-root');

const workspaceRoot = findWorkspaceRoot(__dirname); // Absolute path or null
```

## Testing
```bash
yarn test
```

---
Copyright 2017 Square, Inc.
