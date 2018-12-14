function afficherNumCli(){
	var noeudDiv=document.createElement("div");
	noeudDiv.id='idDiv';
	var noeudP=document.createElement("p");
	noeudP.id='idP';
	var noeud=document.getElementById('f1');
	noeud.appendChild(noeudDiv);
	noeudDiv.appendChild(noeudP);
	document.getElementById('idP').innerHTML='<p><label>Numéro du client : </label><input type="text" name="numClient"/></p>';
}

function afficherNomDate(){
	var noeudDiv=document.createElement("div");
	noeudDiv.id='idDiv';
	var noeudP=document.createElement("p");
	noeudP.id='idP';
	var noeud=document.getElementById('f1');
	noeud.appendChild(noeudDiv);
	noeudDiv.appendChild(noeudP);
	document.getElementById('idP').innerHTML='<p><label>Nom du client : <label><input type="text" name="nomClient" required /></p><p><label>Date de naissance : <label><input type="date" name="birthday" required /></p>';
}

function showRDV(dataNom, dataPrenom, dataMotif, dataPieceAFournir, dataDateHeure){
    var divBack = document.createElement("div");
    var divModal = document.createElement("div");
    var quit = document.createElement("img");
    var title = document.createElement("h1");
    var infos = document.createElement("div");
    var nomClient = document.createElement("label");
    var inputNomClient = document.createElement("input");
    var motif = document.createElement("label");
    var nomMotif = document.createElement("input");
    var date = document.createElement("label");
    var nomDate = document.createElement("input");
    var paf = document.createElement("label");
    var listePaf = document.createElement("textarea");
    var br = document.createElement("br");

    divBack.className = "showRDV_back";
    divModal.className = "showRDV_modal";
    infos.className="infos";

    document.body.appendChild(divBack);

    divBack.appendChild(divModal);
    divModal.appendChild(quit);
    divModal.appendChild(title);
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(br.cloneNode(true));
    divModal.appendChild(infos);
    infos.appendChild(nomClient);
    infos.appendChild(inputNomClient);
    infos.appendChild(br);
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(motif);
    infos.appendChild(nomMotif);
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(date);
    infos.appendChild(nomDate);
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(br.cloneNode(true));
    infos.appendChild(paf);
    infos.appendChild(listePaf);

    var dateRAW = dataDateHeure.split('-');
    var mois = dateRAW[1];
    var annee = dateRAW[0];
    var jour = dateRAW[2].split(' ')[0];
    var heureRAW = dateRAW[2].split(' ')[1];
    var heureSplit = heureRAW.split(':');
    var heurePropre = heureSplit[0] + "H" + heureSplit[1];
    var datePropre = "Le " + jour + "/" + mois + "/" + annee + " à " + heurePropre;
    quit.src = "vue/style/cross.png";
    title.textContent = "Plus d'information";
    nomClient.textContent = "Nom du client : ";
    inputNomClient.value = dataNom.toUpperCase() + " " + dataPrenom;
    inputNomClient.readOnly = "readOnly";
    motif.textContent = "Motif : ";
    nomMotif.value = dataMotif;
    nomMotif.readOnly = "readOnly";
    date.textContent = "Date : ";
    nomDate.value = datePropre;
    nomDate.readOnly = "readOnly";
    paf.textContent = "Liste des pièces à fournir : ";
    listePaf.value = dataPieceAFournir;
    listePaf.readOnly = "readOnly";
    listePaf.style = "resize : none;";

    quit.addEventListener('click', handler, false);

    document.onkeydown = function(e){
        if(e.key == "Escape"){
            handler(e);
        }
    };

    function handler(event){
        event.preventDefault();
        document.body.removeChild(divBack);
    }
}

function checkRDV(c){
    var b = document.getElementById(c).checked;

    if(b){
        document.getElementById(c).checked = false;
    }else{
        document.getElementById(c).checked = true;
    }
}


function afficherAjout(){
	var noeudDiv=document.createElement("div");
	noeudDiv.id='idDiv';
	var noeud=document.getElementById('liste');
	noeud.appendChild(noeudDiv);
	document.getElementById('idDiv').innerHTML='<p><select name="aOuvrir"><option value="contrat">Contrat</option><option value="compte">Compte</option></select></p><p><label>Nom du contrat ou du compte</label><input type="text" name="nomCo" /></p><p><label> Pièces à fournir : </label><input type="text" name="piece" /></p><p><input type="submit" name="ajouterCo" value="Ajouter Contrat/Compte"/></p>';
	}	

function afficherModificationCon(nbContrat){
	var noeudDiv=document.createElement("div");
	noeudDiv.id='idDiv';
	var noeud=document.getElementById('liste');
	noeud.appendChild(noeudDiv);
	var contenu='';
	for(i=0;i<nbContrat;i++){
		var val=document.modifMotif.elements['contrat'+i].value;
		contenu+='<p><label>Contrat '+eval(i+1)+' :</label><input type="text" name="contrat'+i+'" value="'+val+'"/></p>';
		
	}
	contenu+='<p><input type="submit" name="modifierCo" value="Modifier la liste des contrats"/></p>';
	document.getElementById('idDiv').innerHTML=contenu;
}

function afficherSuppressionCon(nbContrat){
	var noeudDiv=document.createElement("div");
	noeudDiv.id='idDiv';
	var noeud=document.getElementById('liste');
	noeud.appendChild(noeudDiv);
	var contenu='<p><select name="contratSuppr">';
	for(i=0;i<nbContrat;i++){
		var val=document.modifMotif.elements['contrat'+i].value;
		contenu+='<option value="'+val+'">'+val+'</option>';
	}
	contenu+='</select></p><p><input type="submit" name="supprimerCo" value="Supprimer de la liste des contrats"/></p>';
	document.getElementById('idDiv').innerHTML=contenu;
}

function afficherModificationCom(nbCompte){
	var noeudDiv=document.createElement("div");
	noeudDiv.id='idDiv';
	var noeud=document.getElementById('liste');
	noeud.appendChild(noeudDiv);
	var contenu='';
	for(i=0;i<nbCompte;i++){
		var val=document.modifMotif.elements['compte'+i].value;
		contenu+='<p><label>Compte '+eval(i+1)+' :</label><input type="text" name="compte'+i+'" value="'+val+'"/></p>';
		
	}
	contenu+='<p><input type="submit" name="modifierCompte" value="Modifier la liste des comptes"/></p>';
	document.getElementById('idDiv').innerHTML=contenu;
}

function afficherSuppressionCom(nbCompte){
	var noeudDiv=document.createElement("div");
	noeudDiv.id='idDiv';
	var noeud=document.getElementById('liste');
	noeud.appendChild(noeudDiv);
	var contenu='<p><select name="compteSuppr">';
	for(i=0;i<nbCompte;i++){
		var val=document.modifMotif.elements['compte'+i].value;
		contenu+='<option value="'+val+'">'+val+'</option>';
	}
	contenu+='</select></p><p><input type="submit" name="supprimerCo" value="Supprimer de la liste des contrats"/></p>';
	document.getElementById('idDiv').innerHTML=contenu;
}