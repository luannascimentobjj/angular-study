angular.module('minhasDiretivas', ['meusServicos'])
.directive('meuPainel', function() {
	
	var ddo = {};
		//AE = pode ser usada como atribudo e elemento (Atribute-Element)
		ddo.restrict = "AE";
		/*Escopo isolado, o @(uso apenas o @ é igual )é para ter um atributo passado
		exemplo titulo: @titulo, como são iguais, posso passar abreviado.
		<meu-painel titulo="teste"> ele usa titulo, pois no escopo está titulo. 
		Se o valor fosse diferente, poderia ser outro nome a ser chamado na diretiva. 
		*/
		ddo.scope = {
			titulo: '@'
		};

		//Utilizado para não sobrescrever o html quando for chamar o index, mantendo os elementos filhos
		//adiciono também na div onde quero manter os itens o ng-transclude
		ddo.transclude = true;

		ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;

    })
    .directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}" width="150" height="150" >';           

        return ddo;

    })
    .directive('meuBotaoPerigo', function(){
    	var ddo = {};

    	ddo.restrict = "E";

    	ddo.scope = {
    		
    		nome : '@',
    		acao: '&'
    		//estou passando um & pois a ideia é enviar uma expressão para a diretiva.
    		// Pois com o @ ele transforma a ação em string
    	};

    	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

    	return ddo;
    })
    .directive('meuFocus', function(){
        
        var ddo = {};

        ddo.restrict = "A";
        
        ddo.link = function(scope, element) {
            scope.$on('fotoCadastrada', function(){
                element[0].focus();
            });
        }
        return ddo;
})
.directive('meusTitulos', function(){
     var ddo = {};

     ddo.restrict = "E";

     ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
     ddo.controller = function($scope, recursoFoto){
        recursoFoto.query(function(fotos){
            $scope.titulos = fotos.map(function(foto){
                return foto.titulo;
            });
            
        });

     };
     return ddo;
})

/*
Exemplo usando o watch para observar as mundacas
Ele observa a mudança no que é passado por ele, nesse caso o scopo da diretiva
Quando há alterações nele, ele executa alguma função. Esse atributo deve ser registrado
no DOM e consequentemente no controller

         // '=' gual passando é para usar o 2WayDatabind, assim permitindo que o controler altere a diretiva
         //E que o DOM saiba  

     ddo.scope  = {
           focado: '='
        };

    scope.$watch('focado', function() {
                if(scope.focado) {
                    element[0].focus();
                    scope.focado = false;
                }

           });

*/

