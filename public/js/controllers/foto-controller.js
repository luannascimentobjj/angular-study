angular.module('alurapic').controller('FotoController', ['$scope', 'recursoFoto', '$routeParams', 'cadastroDeFotos',
 function($scope, recursoFoto, $routeParams, cadastroDeFotos){
//$routeParams é para pegar os paramentros vindo através do sistema de rotas, tipo nas chamadas da url navegador
	$scope.foto = {};
	$scope.mensagem = '';



	if($routeParams.fotoId){

		recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
			$scope.foto = foto;
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível obter a foto';
		});
	}



	$scope.submeter = function(){
		
		if($scope.formulario.$valid) {

		cadastroDeFotos.cadastrar($scope.foto)
		.then(function(dados){
			$scope.mensagem = dados.mensagem;
			if(dados.inclusao) $scope.foto = {};

		})
		.catch(function(dados){
			$scope.mensagem = dados.mensagem;
		});

		}
	};
});


/**
	- AREA DAS CHAMADAS COM MÉTODOS HTTP

if($routeParams.fotoId){
		$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		})
		.error(function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi possível obter a foto ';
		});
	}


$scope.submeter = function(){
		
		if($scope.formulario.$valid){
			
			if($scope.foto._id){

				$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
				    .success(function(){
					$scope.mensagem = 'A foto ' + $scope.foto.titulo  + ' foi alterada com sucesso' ;
				})
				.error(function(erro) {
					console.log(erro);
					$scope.mensagem = 'Não foi possivel alterar a foto ' + $scope.foto.titulo;
				});

			} else {

			$http.post('v1/fotos', $scope.foto)
			.success(function(){
				$scope.foto = {};
				$scope.mensagem = 'Foto Cadastrada com sucesso';
			
		}).error(function(){
			$scope.mensagem = 'Não foi possivel cadastrar a foto';
			console.log(error);
		});

			}

		}
	};


*/