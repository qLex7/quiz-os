# Quel est cet os ? — Quiz d'anatomie en 3D

Squelette humain 3D à faire tourner ; l'os à trouver s'allume en blanc, on tape son nom (nomenclature Terminologia Anatomica en français).

## Tester en local
```
node server.mjs      # puis ouvrir http://localhost:8080
```
(Les modules ES et le .glb demandent un serveur HTTP : ouvrir index.html par double-clic ne fonctionne pas.)

## Contenu
- `index.html` : jeu + scène three.js (OrbitControls)
- `assets/skeleton.glb` : les 206 os (os pairs des deux côtés), ~1,8 Mo, compression Meshopt
- `assets/muscles.glb` (+ `muscles.json`, `muscle_zones.json`, `muscles_data.js`) : 136 muscles BodyParts3D (CC BY-SA 2.1 Japon), noms, difficulté et explications
- `assets/regions.json` : os affichés pour chaque zone du corps
- `assets/bones.json` : correspondance « os du quiz » -> maillages
- `vendor/` : three.js r170 (MIT) et addons, hébergés localement (aucun CDN pour le code)

## Crédits et licences
- **Modèles 3D : BodyParts3D**, © The Database Center for Life Science, licence **CC BY-SA 2.1 Japon**
  (https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html). Version 3.0 (2011-09-15), via le dépôt
  Kevin-Mattheus-Moerman/BodyParts3D (STL). Citation : Mitsuhashi N. et al., Nucleic Acids Res. 2009, doi:10.1093/nar/gkn613.
- **Modifications** : sélection des os, simplification des maillages (~14 % des triangles), normales recalculées,
  repère réorienté (Y haut), conversion GLB + compression Meshopt, sacrum tronqué pour retirer le coccyx fusionné.
  Les modèles dérivés (`assets/skeleton.glb`) restent sous **CC BY-SA 2.1 Japon** (partage dans les mêmes conditions).
- **Z-Anatomy** (https://www.z-anatomy.com/), licence **CC BY-SA 4.0** : coccyx et osselets de l'oreille (marteau, enclume, étrier),
  exportés du fichier Blender, recalés et convertis. Eux-mêmes dérivés de BodyParts3D.
- three.js : licence MIT (`vendor/LICENSE-three.txt`). Police Atkinson Hyperlegible : SIL OFL.
