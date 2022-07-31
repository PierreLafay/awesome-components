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
> Je pense que oui, car je ne peux utiliser l'objet userIdentity dans le template sans y mettre de pipe, sinon j'ai comme affichage :
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
- Pourquoi ne déclare-t-on et n'exportons pas les animations dans sharedModule ?

## Chapitre 14
- Pourrait-on n'utiliser qu'un observable pour la préférence de contact et lui faire retourner mail ou phone ?
- Quel est l'expression régulière qui permet de tester un n° de téléphone ?
> J'ai fait quelques essais en utilisant des regexp trouvées sur le web et fonctionnelles, mais cela ne marche pas, j'ai une erreur sur la regexp
- Je voudrais stocker des patterns préparés dans un fichier pour les utiliser ensuite, comment faire cela proprement ?
> On pourrait les stocker dans coreModule ou sharedModule ? (je pense), mais je préfèrerai un fichier indépendant pour la réutilisabilité. 
- Comment afficher un message d'erreur lorsque l'enregistrement du formulaire provoque une erreur ?
> On pourrait créer un validator sur le formulaire entier ?

## Chapitre 15
- Bug (petit), dans le validator simple, quand on poste le form, au réaffichage du formulaire, les champs email ne sont plus visibles.
> Je pense que cela est du que l'on réinitialse le formulaire en appliquant ce contrôle. J'ai résolu de cette manière :
> ```
> ...
>  if ( ! ctrl.value || ctrl.value.includes('me.com') || ctrl.value.includes('apple.com') || ctrl.value.includes('icloud.com')) {
> ...
> ```
- J'ai modifié le validator sur les champs mails, pour n'accepter que les email d'Apple (m.com, apple.com, icloud.com). Le validator marche bien.
J'ai créé le validator confirmEqual qui marche bien également, mais si je sais une addresse apple correcte (p.lafay@me.com) dans le premier champ et une adresse incorrecte dans le second champ (p.lafay@gmail.com), j'obtiens :
  - Un message pour le 2ème champ (confirmEmailCtrl)
  - Un message pour le groupe (emailForm)

- Ma question : est-il possible de tester dans l'observable pour le groupe si les champs contiennent des valeurs valides ?
De cette manière le message d'erreur pour le groupe (non égalité) ne s'afficherait que lorsque l'on a deux valeurs validées.
> J'ai essayé de rajouter au map pour l'observable showEmailError$ :
> ```
> ...
> 
> && ! this.emailCtrl.hasError('appleMail')
> && ! this.confirmEmailCtrl.hasError('appleMail')
> ...
> ```
> Ou appleMail est mon validateur d'email apple.
> Cela ne fonctionne pas

## Chapitre 17 - State detection - Préparation module
- SI je comprends bien, il n'y a que des avantages à passer les modules en onPush. Pourquoi dans ce cas, n'est-ce pas le mode par défaut ?
