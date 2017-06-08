angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

		recursoFoto.query(function(fotos){
			$scope.fotos = fotos;
		}, function(erro){
			console.log(erro);
		});

	


	$scope.remover = function(foto) {

		recursoFoto.delete({fotoId : foto._id}, function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';
		}, function(erro){
			console.log(erro);
			$scope.mensagem = 'Foto ' + foto.titulo + ' não foi removida!';
		});


	};


	/**$http.get('v1/fotos')
		.success(function(fotos){
			$scope.fotos = fotos;
		})
		.error(function(erro){
			console.log(erro);
		});

		Comentando a forma de fazer com $http
		
			$http.delete('v1/fotos/' + foto._id)
			.success(function(){
				//indexOf PARA pegar a posicao da foto excluida do array
				//splice para dzer quem vou tirar do array, e 1 pela quantidade
				var indiceFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indiceFoto, 1);
				$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';
			})
			.error(function(erro){
				console.log(erro);
				$scope.mensagem = 'Foto ' + foto.titulo + ' não foi removida!';
			});

		*/

/*
		var promise = $http.get('v1/fotos');
		promise.then(function(retorno){
			$scope.fotos = retorno.data;
		}).catch(function(error){
			console.log(error);
		}); 
		utilizando a promise

*/
});