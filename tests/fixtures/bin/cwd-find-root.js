'use strict';

const findWorkspaceRoot = require('../../../index');

process.stdout.write(findWorkspaceRoot());
process.exit(0); // eslint-disable-line no-process-exit
