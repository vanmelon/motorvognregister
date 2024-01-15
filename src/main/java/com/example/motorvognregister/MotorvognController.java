package com.example.motorvognregister;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MotorvognController {

    private final List<motorvogn> alleBiler = new ArrayList<>();

    @PostMapping("/lagre")
    public String lagreMotorvogn(@RequestBody motorvogn innMotorvogn) {
        alleBiler.add(innMotorvogn);
        return "Motorvogn lagret suksessfullt!";
    }

    @GetMapping("/hentAlle")
    public List<motorvogn> hentAlle() {
        return alleBiler;
    }

    @GetMapping("/slettAlle")
    public String slettAlle() {
        alleBiler.clear();
        return "Alle motorvogner slettet suksessfullt!";
    }

    @DeleteMapping("/slettEn")
    public String slettEn(@RequestParam String persNum) {
        alleBiler.removeIf(motorvogn -> motorvogn.getPersNum().equals(persNum));
        return "Motorvogn slettet suksessfullt!";
    }
}
