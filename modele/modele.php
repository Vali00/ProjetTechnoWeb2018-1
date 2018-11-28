<?php

/**
 * Cette fonction permet d'obtenir une connection à la base de donnée grâce aux informations de connexion
 * situées dans le fichier connect.php
 * 
 * @return PDO
 * 		Correspond à la connexion à la base de donnée
 */

function getConnect(){
		require_once('connect.php');
		try{
				$connexion = new PDO('mysql:host='.SERVEUR.';dbname='.BDD, USER, PASSWORD);
				$connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$connexion->query("SET NAMES UTF8");
				return $connexion;
			}catch(PDOException $e){
				echo 'Il y a eu une erreur de connexion : ' . $e->getMessage();
			}
}


/**
 * Cette fonction effectue une requete SQL à la base de donnée pour obtenir un resultat
 * correspondant à l'employé recherché
 * 
 * @param string : $login
 * 		Correspond au login de l'employé à rechercher
 * @param string : $mdp
 * 		Correspond au mot de passe de l'employé à rechercher 
 * 
 * @return arrray
 * 		Correspond au résultat de la requête SQL sous forme de tableau contenant l'employé
 * 		recherché
 */

function checkLogin($login, $mdp){
	$connexion = getConnect();
	$requete = "SELECT * FROM EMPLOYE WHERE '$login' = login AND '$mdp' = mdp";
	$resultat = $connexion->query($requete);
	$resultat->setFetchMode(PDO::FETCH_OBJ);
	return $resultat->fetchAll();
}

/**
 * Cette fonction effectue une requete SQL à la base de donnée pour obtenir un resultat
 * correspondant au client recherché
 * 
 * @param integer : $idClient
 * 		Correspond au numéro du client à rechercher
 * 
 * @return arrray
 * 		Correspond au résultat de la requête SQL sous forme de tableau contenant le client
 * 		recherché
 */

function checkClient($idClient){
	$connexion = getConnect();
	$requete = "SELECT * FROM CLIENT WHERE numClient = $idClient";
	$resultat = $connexion->query($requete);
	$resultat->setFetchMode(PDO::FETCH_OBJ);
	echo gettype($idClient);
	return $resultat->fetchAll();
}

/**
 * Cette fonction effectue une requete SQL à la base de donnée pour obtenir un resultat
 * correspondant au client recherché
 * 
 * @param string : $nom
 * 		Correspond au nom du client à rechercher
 * 
 * @param string : $dateNaissance
 * 		Correspond à la date de naissance du client
 * 
 * @return arrray
 * 		Correspond au résultat de la requête SQL sous forme de tableau contenant le client
 * 		recherché
 */

function rechercherClient($nom, $dateNaissance){
	$connexion = getConnect();
	$requete = "SELECT * FROM CLIENT WHERE nom = '$nom' AND dateDeNaissance = STR_TO_DATE('$dateNaissance', '%Y-%m-%d')";
	$resultat = $connexion->query($requete);
	$resultat->setFetchMode(PDO::FETCH_OBJ);
	return $resultat->fetchAll();
}
