/***************************************************************************************************************************************************************
 *
 * BUILD TOOL
 *
 **************************************************************************************************************************************************************/

'use strict';


/**
 * Dependencies
 */
const Bookmarklet = require(`bookmarklet`);
const Path = require(`path`);
const Fs = require(`fs`);


const source = Fs.readFileSync( Path.normalize(`${ __dirname }/../src/index.js`), 'utf-8' );
const bookmarklet = Bookmarklet.convert(source, {
	script: false,
	style: false,
});

Fs.writeFileSync( Path.normalize(`${ __dirname }/../docs/bookmarklet.js`), bookmarklet, 'utf-8' );
console.log(`Written bookmarklet successfully`);

let html = Fs.readFileSync( Path.normalize(`${ __dirname }/../src/index.html`), 'utf-8' );
html = html.replace( `replaceme`, bookmarklet );

Fs.writeFileSync( Path.normalize(`${ __dirname }/../docs/index.html`), html, 'utf-8' );
console.log(`Written index.html successfully`);
