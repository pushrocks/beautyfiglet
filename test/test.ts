import { expect, tap } from 'tapbundle';
import * as beautyfiglet from '../ts/index';

tap.test('first test', async () => {
  console.log(beautyfiglet.standardExport);
});

tap.start();
