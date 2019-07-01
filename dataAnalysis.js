'use strict';

var pokemonVis = {};

//dimensões do gráfico
pokemonVis.h = 255;   //altura
pokemonVis.w = 950;   //largura
pokemonVis.margins = {top: 20, bottom: 50, left: 50, right: 15}; //dimensões da margem


pokemonVis.appendSvg = function(div) //criando svg
{
	var node = d3.select(div).append('svg')
		.attr('width', pokemonVis.w + pokemonVis.margins.left + pokemonVis.margins.right)
		.attr('height', pokemonVis.h + pokemonVis.margins.top + pokemonVis.margins.bottom)
        //.append("g");
	return node;
}

pokemonVis.run = function()
{
	var svg = pokemonVis.appendSvg("vis");

}

window.onload = pokemonVis.run;
