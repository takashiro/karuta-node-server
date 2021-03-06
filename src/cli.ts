#!/usr/bin/env node

import App from './core/App';
import readConfig from './util/readConfig';

(async function main(): Promise<void> {
	const config = await readConfig();
	const app = new App(config);
	await app.start();
}());
