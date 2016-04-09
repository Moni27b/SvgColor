$drawing.click(function(event) {
	var shapeRef = new Path(event.target);    // Récupération de l'Object 2D de la forme cliquée
	for (var id = 0; id < $("#drawing path").length; id++) {
		var o = $("#drawing path")[id];
		// La ligne suivante pue du cul comme on dit dans le jargon à cause des couleurs déjà présentes
		if (o != event.target && o.style && $("#select-color")[0].style && o.style.fill == $("#select-color")[0].style['background-color']) {
			// Récupération de l'Object 2D de la forme i de la figure
			var shapeI = new Path(o);
			//On vérifie si on a une intersection
			//pomme = Intersection.intersectShapes(shapeRef, shapeI);
			if (Intersection.intersectShapes(shapeRef, shapeI).points.length > 0) {
				alert('Un voisin est d\351j\340 de la m\352me couleur.\nVeuillez choisir une couleur diff\351rente.');
				return false;
			}
		}
	}
	// Si on a pas eu d'intersection, on colorie.
	event.target.style.fill = "#"+color;
	return true;
});