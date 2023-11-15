import { Command } from 'commander';

import { version } from '../package.json';

import { pnpmSync } from './pnpmSync';

const program = new Command();

program.version(version);

program
  .description('Execute actions defined under node_modules/.pnpm-sync.json')
  .usage('[OPTIONS]...')
  .option('-p, --prepare', 'Prepare the pnpm-sync.json')
  .option('-s, --lockfile <value>', 'The pnpm-lock.yaml path')
  .option('-s, --store <value>', 'The .pnpm folder path')
  .action(pnpmSync);

program.parse();
