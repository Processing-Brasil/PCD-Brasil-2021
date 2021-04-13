

( function() {

	// NAVEGAÇÃO

	var container, button, menu, overlay;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	overlay = document.getElementsByClassName( 'overlay' )[0];
	if ( ! overlay ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		console.log("click")
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			button.innerText = "Menu";
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			button.innerText = "Fechar";
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

	overlay.onclick = function() {
		console.log("click container")
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			button.innerText = "Menu";
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			button.innerText = "Fechar";
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	}

	let lista_obras = document.getElementById("lista-obras");
	let botao_lista = document.getElementById("lista-botao");
	let botao_fechar = document.getElementById("lista-fechar");

	botao_lista.onclick = function() {
		if ( -1 !== lista_obras.className.indexOf( 'aberto' ) ) {
			lista_obras.className = lista_obras.className.replace( ' aberto', '' );
			button.setAttribute( 'aria-expanded', 'false' );
		} else {
			lista_obras.className += ' aberto';
			lista_obras.setAttribute( 'aria-expanded', 'true' );
		}
	};

	botao_fechar.onclick = function() {
		console.log("click container")
		if ( -1 !== lista_obras.className.indexOf( 'aberto' ) ) {
				lista_obras.className = lista_obras.className.replace( ' aberto', '' );
			} else {
				lista_obras.className += ' aberto';
			}
	}

	

	// ACCORDEON

	var acc = document.getElementsByClassName("plus-button");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var panel = this.parentElement.previousElementSibling;
	    if (panel.style.maxHeight) {
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + "px";
	    } 
	  });
	}
} )();