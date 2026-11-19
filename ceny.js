// =====================================================================
//  CENÍK LANGSERVIS
// =====================================================================
//  Tady se mění všechny ceny na webu. Otevřete v Poznámkovém bloku.
//
//  Jak na to:
//   - Měňte jen čísla a texty v "uvozovkách".
//   - Ceny pište jako číslo bez "Kč" a bez mezer, např. 2990 (ne "2 990 Kč").
//   - Řádek přidáte zkopírováním celého řádku { ... }, i s čárkou na konci.
//   - Nemažte závorky { } [ ], dvojtečky ani čárky mezi řádky.
//   - Po uložení soubor nahrajte na web (vedle index.html).
// =====================================================================

var CENIK = {

  // Jazykové kurzy – cena za 1 vyučovací hodinu (45 min)
  kurzy: [
    { nazev: "individuální výuka",    cena: 479 },
    { nazev: "skupina 2 osoby",       cena: 519 },
    { nazev: "skupina 3 osoby",       cena: 559 },
    { nazev: "skupina 4 osoby",       cena: 599 },
    { nazev: "skupina 5 a více osob", cena: 649 },
  ],

  // Překlady – cena za 1 normostranu (1 800 znaků)
  preklady: [
    { jazyk: "angličtina",    doCestiny: 339, zCestiny: 389 },
    { jazyk: "němčina",       doCestiny: 339, zCestiny: 389 },
    { jazyk: "francouzština", doCestiny: 399, zCestiny: 449 },
    { jazyk: "ruština",       doCestiny: 339, zCestiny: 389 },
    { jazyk: "polština",      doCestiny: 339, zCestiny: 389 },
  ],

  // Tlumočení
  tlumoceni: [
    { nazev: "do 2 hodin",                                        cena: 2990 },
    { nazev: "každá další započatá půlhodina (do 8 hodin denně)", cena: 679 },
    { nazev: "každá další půlhodina nad 8 hodin denně",           cena: 999 },
  ],

};
