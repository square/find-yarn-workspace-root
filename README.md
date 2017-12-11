# find-yarn-workspace-root

<img src="https://travis-ci.org/thetimothyp/find-yarn-workspace-root.svg?branch=master">

Algorithm for finding the root of a yarn workspace, extracted from yarnpkg.com

## Installation
```
yarn add find-yarn-workspace-root
```

## Usage
```
const findWorkspaceRoot = require('find-yarn-workspace-root');

const workspaceRoot = findWorkspaceRoot(__dirname); // Absolute path or null
```

## Testing
```
yarn test
```

---
Copyright 2017 Square, Inc.
