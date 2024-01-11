function regBil() {
    const bil = {
        persNum : $("#persNum").val(),
        navn : $("#navn").val(),
        adresse : $("#adresse").val(),
        kjennetegn : $("#kjennetegn").val(),
        bilmerke : $("#bilmerke").val(),
        biltype : $("#biltype").val()
    }

    const url = "/lagre";
    $.get(url, bil,function(retur){
        hentAlle();
    });

    $("#persNum").val("");
    $("#navn").val("");
    $("#adresse").val("");
    $("#kjennetegn").val("");
    $("#bilmerke").val("");
    $("#biltype").val("");

}

function hentAlle() {
    $.get( "/hentAlle", function( data ) {
        formaterData(data);
    });
}

function formaterData(biler){
    let ut = "<table>" +
        "<tr>" +
        "<th>Eiers personnummer</th><th>Eiers navn</th> <th>Eiers adresse</th><th>Kjennetegn</th><th>Bilmerke</th><th>Biltype</th>" +
        "</tr>";
    for(let i in biler ){
        ut+="<tr><td>"+biler[i].persNum+"</td><td>"+biler[i].navn+"</td><td>"+biler[i].adresse+"</td><td>"+biler[i].kjennetegn+"</td><td>"+biler[i].bilmerke+"</td><td>"+biler[i].biltype+"</td></tr>"
    }
    $("#bilene").html(ut);
}

function slettAlle() {
    $.get( "/slettAlle", function( data ) {
        hentAlle();
    });
}
function slettEn() {
    const persNum = $("#slettPersNum").val();

    if (!persNum) {
        alert("Skriv inn personnummeret for å slette en spesifikk motorvogn.");
        return;
    }

    const url = "/slettEn?persNum=" + persNum;
    $.ajax({
        url: url,
        type: 'DELETE',
        success: function() {
            hentAlle();
            alert("Motorvogn slettet!");
        },
        error: function() {
            alert("Feil ved sletting av motorvogn.");
        }
    });

    $("#slettPersNum").val("");
}