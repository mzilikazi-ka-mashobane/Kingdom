/**
 * PORTAL DATA PATCH — gis-portal.html
 * ─────────────────────────────────────────────────────────────────
 * In the SA_MINERALS array, find and REPLACE the two entries below.
 * Search by name to locate them:
 *   "Blue Ridge Platinum Mine — Mzilikazi Kingdom"
 *   "Elandshoogte Gold Mine — Omaruru Minerals"
 *
 * The new entries add all missing report fields:
 *   railName / railDist, airportName / airportDist,
 *   borderName / borderDist, townName / townDist,
 *   hectares, elevation, status, commodity
 * ─────────────────────────────────────────────────────────────────
 */


/* ══ REPLACE: Blue Ridge Platinum Mine entry in SA_MINERALS ══ */
{lat:-25.2441,lng:29.5583,t:'pgm',s:'care_maintenance',
 name:'Blue Ridge Platinum Mine — Mzilikazi Kingdom',
 company:'Mzilikazi ka Mashobane Kingdom',
 reserves:'~3.2 Mt ore (89.8 Mt indicated total deposit)',
 production:'Care & Maintenance — Restart Ready',
 grade:'3.5–5 g/t 4E',depth:'200–800 m',
 province:'Limpopo (Sekhukhune)',
 notes:'Located within Mzilikazi Kingdom territory in the Bushveld Eastern Limb. Hosts Merensky Reef and UG2 layers. Resources: 89.8 Mt (9.14 Moz 4E PGM) + 19.5 Mt Cr₂O₃. Life of mine: 18–25 years. Mining Right MR-LP177 MRC. Brownfield — infrastructure intact.',

 /* ── Site identity (new) ── */
 status:'Care & Maintenance',
 commodity:'PGM / Platinum',
 hectares:6500,
 elevation:1120,

 /* ── Investment snapshot ── */
 workers:340,
 activity:'Mining',
 monthlyRev:'4 500 000',
 annualRev:'54 000 000',
 revSource:'PGM concentrate (Pt · Pd · Rh) + Chrome ore',
 askingPrice:'280 000 000',
 roi:'~18% p.a. — payback est. 5–7 years',

 /* ── Connectivity & access ── */
 substationName:'Steelpoort 132kV Substation',
 substationDist:4.2,
 roadName:'R37 (Polokwane–Lydenburg)',
 roadDist:1.5,
 portName:'Maputo Port, Mozambique',
 portDist:380,
 railName:'Maputo Corridor Rail · Steelpoort siding',
 railDist:12,
 airportName:'Phalaborwa Airport (PHL) · OR Tambo International (210km)',
 airportDist:95,
 borderName:'Lebombo / Komatipoort Border Post (Mozambique)',
 borderDist:320,
 townName:'Groblersdal',
 townDist:20,

 /* ── Water & boreholes ── */
 waterSource:'Borehole / groundwater',
 drillLoc:'25.2448°S, 29.5561°E — NW of main shaft headgear',
 drillDepth:55,
 waterYield:'3.2 L/s',
 aquiferType:'Fractured norite — Bushveld Complex',
 waterQuality:'pH 7.4, low TDS ~180 mg/L, suitable for process and potable use',

 /* ── Secondary minerals ── */
 secMin:'Vanadium · Andalusite',
 secMinLoc:'Southern extent of UG2 reef, 25.2510°S 29.5490°E',
 secMinDepth:320,
 secMinGrade:'1.6% V₂O₅ (vanadium) · 38% Al₂SiO₅ (andalusite)',
 secMinNotes:'Vanadium confirmed in magnetite layers below UG2. Andalusite outcrop mapped adjacent to southern lease boundary. Both commodities under review for co-extraction.',
},


/* ══ REPLACE: Elandshoogte Gold Mine entry in SA_MINERALS ══ */
{lat:-25.367,lng:30.674,t:'gold',s:'active',
 name:'Elandshoogte Gold Mine — Omaruru Minerals',
 company:'Omaruru Minerals (Pty) Ltd / Elandshoogte & Bagale Consortium',
 reserves:'1.5Mt @ 7.3g/t (350Koz IND) + 3.2Mt @ 7.3g/t (750Koz INF) + 225 000t tailings (545kg Au)',
 production:'Development stage — plant on site',
 grade:'10.4 g/t channel mean · 30–45cm reef width',
 depth:'Shallow underground + surface tailings',
 province:'Mpumalanga (Nelspruit district, Houtbosloop Valley)',
 notes:'Narrow-reef quartz-sulphide gold vein near Sudwala Caves. Gold hosted in pyrite-bearing brecciated quartz veins. Three tailings dumps (A: 30 000t @ 1.9g/t · B: 145 000t @ 2.5g/t · C: 50 000t @ 2.75g/t). Business rescue completed late 2023. Total asset valuation R34.1B. Anglo American and PMC confirmed economic mineralisation. NNE trending pay-shoots. Water right: ad infinitum RMT 7/245. 464ha mineral rights.',

 /* ── Site identity (new) ── */
 status:'Development',
 commodity:'Gold',
 hectares:464,
 elevation:880,

 /* ── Investment snapshot ── */
 workers:0,
 activity:'Mining',
 monthlyRev:'',
 annualRev:'',
 revSource:'Gold (Au) — narrow reef underground',
 askingPrice:'',
 roi:'~22% p.a. projected at restart (based on SRK scoping estimate)',

 /* ── Connectivity & access ── */
 substationName:'Mbombela (Nelspruit) 132kV Substation',
 substationDist:36,
 roadName:'R40 White River–Graskop · R539 to Sudwala Caves',
 roadDist:2,
 portName:'Maputo Port, Mozambique',
 portDist:118,
 railName:'Nelspruit–Maputo Rail Corridor (Ressano Garcia line)',
 railDist:42,
 airportName:'Kruger Mpumalanga International Airport (KMIA)',
 airportDist:35,
 borderName:'Lebombo / Komatipoort Border Post (Mozambique)',
 borderDist:112,
 townName:'White River',
 townDist:28,

 /* ── Water & boreholes ── */
 waterSource:'Surface water',
 drillLoc:'25.3672°S, 30.6740°E — Houtbosloop stream bank, adjacent to processing plant',
 drillDepth:22,
 waterYield:'1.8 L/s',
 aquiferType:'Weathered granite / greenstone basement — Barberton Greenstone Belt margin',
 waterQuality:'pH 6.9, low TDS ~95 mg/L, clear mountain stream source',

 /* ── Secondary minerals ── */
 secMin:'Pyrite · Chalcopyrite · Arsenopyrite',
 secMinLoc:'Throughout ore zones, elevated in lower shoot',
 secMinDepth:80,
 secMinGrade:'Trace Cu 0.12% · As 0.08% (arsenopyrite associated)',
 secMinNotes:'Sulphide assemblage pyrite–chalcopyrite–arsenopyrite. Amenable to CIL/CIP gold recovery. Potential sulphide flotation concentrate for Cu credits. Arsenopyrite-hosted gold common in greenstone terrains.',
},
