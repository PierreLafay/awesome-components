# Questions Cours Angular perfectionnement

## Chapitre 3 

- Quel est le meilleur choix pour implémenter les roues pour la consommation d'une api :
  - Avec un service ?
  - Avec un resolver ?
> J'ai bien compris la différence (attente du résultat de la requête avant affichage pour le resolver), toutefois je pense que le service est meilleur car on lance en parallèle la requête et le render du component. Est-ce vrai ?

## Chapitre 5
- J'ai modifié le backend pour renvoyer dans chaque post une identité :
 ```
...
  "id": 1,
  "userId": 499,
  "userIdentity": { "firstName": "Will", "lastName": "Alexander" }
...
```
- j'ai modifié PostModel :
```
...
  id!: number;
  userId!: number;
  userIdentity! : { firstName: string, lastName: string };
...
```
- Enfin, dans le template, j'utilise de cette manière :
```
...
  <mat-card-content>
    <img mat-card-image *ngIf="post.imageUrl as imageUrl" [src]="imageUrl" [alt]="post.title">
    <p><span class="post-content">{{ post.content | shorten: 100 }}</span></p>
    <p><span class="post-content">{{ post.userIdentity.firstName}} {{ post.userIdentity.lastName}}</span></p>
  </mat-card-content>
...
```
Tout fonctionne bien, mais est-ce la bonne manière ?
> Je pense que oui, car je ne peut utiliser l'objet userIdentity dnas le template sans y mettre de pipe, sinon j'ai comme affichage :
>```
>[object Object]
>``` 
> Ce qui me parait très logique
## Chapitre 9 
- Erreur de compil sur :
```
...
  createdDate: new Date().toISOString(),
...
```
  >createdDate attend une date, mais je ne sais pas ou/quand est typé createdDate.
  > Pb corrigé en enlevant la conversion en chaîne ISO :
  > ```
  > ...
  >   createdDate: new Date(),
  > ...
  > ```
## Chapitre 10
- Comment peut-on utiliser l'animation flashAnimation de sharedModule, sans l'avoir ni déclarée, exportée ?
