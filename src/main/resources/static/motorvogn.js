function regBil() {
    const bil = {
        persNum: $("#persNum").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        adresse: $("#adresse").val(),
        kjennetegn: $("#kjennetegn").val(),
        bilmerke: $("#bilmerke").val(),
        biltype: $("#biltype").val(),
        bilfarge: $("#bilfarge").val()
    };

    const url = "/lagre";
    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(bil),
        success: function (retur) {
            hentAlle();
            // Tøm inputfeltene etter lagring
            $("#persNum").val("");
            $("#fornavn").val("");
            $("#etternavn").val("");
            $("#adresse").val("");
            $("#kjennetegn").val("");
            $("#bilmerke").val("");
            $("#biltype").val("");
            $("#bilfarge").val("");
        },
        error: function () {
            alert("Feil ved lagring av motorvogn.");
        }
    });
}


function hentAlle() {
    $.get("/hentAlle", function (data) {
        formaterData(data);
    });
}

function formaterData(biler) {
    let ut = "<table>" +
        "<tr>" +
        "<th>Eiers personnummer</th><th>Eiers fornavn</th><th>Eiers adresse</th><th>Kjennetegn</th><th>Bilmerke</th><th>Biltype</th>" +
        "</tr>";
    for (let i in biler) {
        ut += "<tr><td>" + biler[i].persNum + "</td><td>" + biler[i].fornavn + "</td><td>" + biler[i].adresse + "</td><td>" + biler[i].kjennetegn + "</td><td>" + biler[i].bilmerke + "</td><td>" + biler[i].biltype + "</td></tr>";
    }
    $("#bilene").html(ut);
}

function slettAlle() {
    $.get("/slettAlle", function (data) {
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
        success: function () {
            hentAlle();
            alert("Motorvogn slettet!");
        },
        error: function () {
            alert("Feil ved sletting av motorvogn.");
        }
    });

    // Tøm inputfeltet etter sletting
    $("#slettPersNum").val("");
}

function hentModeller() {
    const valgtMerke = $("#bilmerke").val();
    const modeller = hentModellerForMerke(valgtMerke);

    let options = "<option value=''>Velg modell</option>";
    for (let i = 0; i < modeller.length; i++) {
        options += "<option value='" + modeller[i] + "'>" + modeller[i] + "</option>";
    }

    $("#biltype").html(options);
}

function hentModellerForMerke(merke) {
    const modeller = {
        "Tesla": ["Model S", "Model 3", "Model X", "Model Y"],
        "Toyota": ["Corolla", "Camry", "Rav4", "Prius"]
        // Legg til flere modeller for andre merker etter behov
    };

    return modeller[merke] || [];
}
