package com.example.motorvognregister;

public class motorvogn {
    private String persNum;
    private String fornavn;
    private String etternavn;
    private String adresse;
    private String kjennetegn;
    private String bilmerke;
    private String biltype;
    private String bilfarge;

    public motorvogn(String persNum, String navn,String etternavn, String adresse, String kjennetegn, String bilmerke, String biltype, String bilfarge){
        this.persNum = persNum;
        this.fornavn = navn;
        this.etternavn = etternavn;
        this.adresse = adresse;
        this.kjennetegn = kjennetegn;
        this.bilmerke = bilmerke;
        this.biltype = biltype;
        this.bilfarge = bilfarge;
    }

    public motorvogn() {

    }

    public String getPersNum() { return persNum; }
    public void setPersNum(String persNum) { this.persNum = persNum; }

    public String getNavn() { return fornavn; }
    public void setNavn(String navn) {this.fornavn = navn;}

    public String getEtternavn() { return etternavn; }
    public void setEtternavn(String navn) {
    }

    public String getAdresse() { return adresse; }
    public void setAdresse(String adresse) { this.adresse = adresse; }

    public String getKjennetegn() { return kjennetegn;}
    public void setKjennetegn(String kjennetegn) { this.kjennetegn = kjennetegn; }

    public String getBilmerke() { return bilmerke;}
    public void setBilmerke(String bilmerke) { this.bilmerke = bilmerke; }

    public String getBiltype() { return biltype; }
    public void  setBiltype(String biltype) { this.biltype = biltype;}

    public String getBilfarge() { return bilfarge; }
    public void  getBilfarge(String biltype) {
    }
}