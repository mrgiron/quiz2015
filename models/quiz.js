//Definicion del modelo de quiz

modele.exports = function(sequelize, DataTypes){
	return sequelize.define( 'Quiz',
	{ 	pregunta: DataTypes.STRING,
		respuesta: DataTypes.STRING,
	});
}