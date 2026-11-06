# Quel est cet os ? — Quiz d'anatomie en 3D

Squelette humain 3D à faire tourner ; l'os à trouver s'allume en blanc, on tape son nom (nomenclature Terminologia Anatomica en français).

## Tester en local
```
node server.mjs      # puis ouvrir http://localhost:8080
```
(Les modules ES et le .glb demandent un serveur HTTP : ouvrir index.html par double-clic ne fonctionne pas.)

## Contenu
- `index.html` : jeu + scène three.js (OrbitControls)
- `assets/skeleton.glb` : 190 os, ~1,5 Mo, compression Meshopt
- `assets/bones.json` : correspondance « os du quiz » -> maillages
- `vendor/` : three.js r170 (MIT) et addons, hébergés localement (aucun CDN pour le code)

## Crédits et licences
- **Modèles 3D : BodyParts3D**, © The Database Center for Life Science, licence **CC BY-SA 2.1 Japon**
  (https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html). Version 3.0 (2011-09-15), via le dépôt
  Kevin-Mattheus-Moerman/BodyParts3D (STL). Citation : Mitsuhashi N. et al., Nucleic Acids Res. 2009, doi:10.1093/nar/gkn613.
- **Modifications** : sélection des os, simplification des maillages (~14 % des triangles), normales recalculées,
  repère réorienté (Y haut), conversion GLB + compression Meshopt, coccyx séparé du sacrum par une coupe approximative.
  Les modèles dérivés (`assets/skeleton.glb`) restent sous **CC BY-SA 2.1 Japon** (partage dans les mêmes conditions).
- three.js : licence MIT (`vendor/LICENSE-three.txt`). Police Atkinson Hyperlegible : SIL OFL.
