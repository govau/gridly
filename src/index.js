var existing = document.querySelectorAll('.js-uikit-gridly');

if( existing.length > 0 ) {
	existing[ 0 ].parentNode.removeChild( existing[ 0 ] );
}
else {
	var overlay = document.createElement("div");

	if( overlay.classList ) {
		overlay.classList.add('js-uikit-gridly');
	}
	else {
		overlay.className += ' js-uikit-gridly';
	}

	overlay.style.backgroundImage =    'linear-gradient( #000 2px, transparent 2px ),' +
		'linear-gradient(90deg, #000 2px, transparent 2px),' +
		'linear-gradient( rgba(0, 0, 0, 0.3) 1px, transparent 1px ),' +
		'linear-gradient( 90deg, rgba(0, 0, 0, 0.3) 1px, transparent 1px )';
	overlay.style.backgroundSize =     '64px 64px, 64px 64px, 8px 8px, 8px 8px';
	overlay.style.backgroundPosition = '-2px -2px, -2px -2px, -1px -1px, -1px -1px';
	overlay.style.position = 'fixed';
	overlay.style.top = '0';
	overlay.style.right = '0';
	overlay.style.bottom = '0';
	overlay.style.left = '0';

	document.body.appendChild( overlay )
}
