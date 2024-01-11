package com.example.motorvognregister;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MotorvognController {
    public final List<motorvogn> alleBiler = new ArrayList<>();

    @GetMapping("/lagre")
    public void lagreMotorvogn(motorvogn innMotorvogn) { alleBiler.add(innMotorvogn);}
    @GetMapping("/hentAlle")
    public List<motorvogn> hentAlle(){
        return alleBiler;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        alleBiler.clear();
    }

    @DeleteMapping("/slettEn")
    public void slettEn(@RequestParam String persNum) {
        alleBiler.removeIf(motorvogn -> motorvogn.getPersNum().equals(persNum));
    }
}