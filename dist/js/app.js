function PokemonFactory(o){var t=this;return t.url="https://pokeapi.co/api/v2/pokemon/",factory={},factory.pokemon=[],factory.list=[],factory.getPokemonList=function(t){o.get(t).then(function(o){factory.list.push(o.data)})},factory.getPokemonList(t.url),factory.getPokemon=function(t){o.get(t).then(function(o){factory.pokemon.push(o.data)})},factory}function MainCtrl(o,t){o.requestPokemon=function(n){o.totalPokemon+=1,t.getPokemon(n)},o.previous=function(){o.list[o.position-1]||o.requestList("previous"),o.position-=1},o.next=function(){o.list[o.position+1]||o.requestList("next"),o.position+=1},o.requestList=function(n){var e=o.list[o.position][n];t.getPokemonList(e)},o.totalPokemon=0,o.pokemon=t.pokemon,o.list=t.list,o.position=0,o.loadStats=["hp","attack","defense","special-attack","special-defense","speed"]}var app=angular.module("angularAPI",[]);app.factory("PokemonFactory",PokemonFactory),PokemonFactory.$inject=["$http"],app.controller("MainCtrl",MainCtrl),MainCtrl.$inject=["$scope","PokemonFactory"];