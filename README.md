### Meme-ory-App

# Question 1
Play the whole game with size=2. By browsing the 3 views of the application, how many files did your browser download overall? How many time did it took to load them all?

* Vue de l'accueil (Welcome) : 5 fichiers, 62 ms
* Vue du jeu (Game) : 10 fichiers, 96 ms
* Vue du résultat (Score) : 6 fichiers, 63 ms

# Question 2
Component-oriented programming for the web is considered more maintainable. Why?

C'est plus simple à maintenir car tout est centralisé, par exemple, s'il y a modification d'une couleur dans un fichier CSS, le changement est appliqué simultanément à tout les endroits où il est appelé, au lieu de faire le changement à chaque endroit manuellement.

# Question 3
Try to remove the 2 closures from both card.component.js & game.component.js. What happens? Why?
Once figured out, remove the extra variable that makes the code to crash.

Les closures permettent d'encapsuler les variables d'environnement et d'éviter les conflits en elles.
Les deux fonctions demandent à ce qu'on les nomment. Le problème vient du fait que les deux fonctions définissent deux variables d'environnement qui rentrent en conflit, c'est pourquoi afin d'éviter ce problème, on les encapsule dans des scripts.

# Question 4
As you can see, `npm install` command also generated a `package-lock.json` file along with `package.json`. What is the purpose of this file?

Le fichier `package-lock.json` permet de conserver une trace des versions de chaque packages installés à un instant T pour qu'il soit reproductible et repris par d'autres développeurs.

# Question 5
all NPM dependencies use a 3-digit format for version numbers. How do you call this? Can you explain the meaning of the `^` symbol next to the bootstrap version?

C'est du semantic versionning. Le format correspond à major.minor.patch. Le symbole `^` signifie que le projet sera compatible et mis à jour avec toutes les versions suivantes jusqu'à ce que le major change.

# Question 6
What is a devDependency exactly? What are the differences with a dependency?

Les devDependancy sont des packages qui sont installés par le développeur pour le développement local et le test.
Les devDependancy sont utilisés uniquement lors du développement et ne doivent être installé qu'à ce moment. Ils ne sont pas utile quand l'application ou le site est en production, par contre les dependencies, elles, sont utiles à tout moment du cycle d'une application.

# Question 7
Can you think of at least 2 things that are possible with Java classes, but cannot be done with ES6 classes?

Pour l'ES6, les fonctions n'ont pas d'héritage et il n'est possible d'avoir qu'un seul constructeur (Pas de surcharge). Contrairement au Java où l'on peut avoir une infinité de constructeurs.
On ne peut pas avoir d'interface pour les classes en ES6.

# Question 8
What are the differences between `var` and `let` ?

`let` permet de déclarer des variables dont la portée est limitée à celle du bloc dans lequel elles sont déclarées. `var` permet de définir une variable globale ou locale à une fonction (sans distinction des blocs utilisés dans la fonction).

# Question 9
What is the `.bind(this)` stuff ? What does happen if you delete it? Is it needed when using an *arrow function* ?

`.bind(this)` est une fontion qui permet de changer le contexte global avec un autre contexte où réside la fonction. Si `.bind(this)` est supprimé, il y aura une erreur car elle utilisera le contexte global et non le contexte lié à la fonction interne (confusion avec le `this`).
`.bind(this)` n'est pas nécessaire puisque c'est une fonction anonyme (elle retourne un Callback qui est propre à la fonction).

# Question 10
What are the advantages of Promises ?

L'avantage est de pouvoir chaîner les opérations asynchrones, la garantie que les opérations vont se dérouler dans l'ordre voulu et une gestion des erreurs simplifiées tout en évitant le "callback hell".

# Question 11
What version of ECMAScript `async` / `await` was released in?

Les mots-clés `async` et `await` ont été ajoutés à la documentation JavaScript dans la version ECMAScript 2017, la 8e version de la documentation.

# Question 12
What does the `@` symbol mean in `@babel/***` ?

Le symbole `@` désigne le namespace qui possède le repository npm. Cette notation permet d'avoir plusieurs bibliothèques avec des namespaces différents.

# Question 13
Look at the files produced within `dist/` folder. How babel transpile your class `WelcomeComponent` ?

Babel ajoute des `require()` qui permettent d'importer des fonctions déjà existantes en ES5 qui font exactement la même chose que notre code initial en ES6. (But du transpiler)

# Question 14
What is the weight of the transpiled sources compared to your original sources?

Le poids de la source transpilée est plus grand que la source original car la transpilation requiert une adaptation d'un code vers sa version antérieure, ce qui nécessite plus de lignes afin de réaliser une même tâche.

# Question 15
What is the difference between `import * from './utils'` and `import { parseUrl } from './utils'` ?

`import * from './utils'` va importer l'ensemble des composants, classes, function dans `utils.js` tandis que `import { parseUrl } from './utils'` va elle importer uniquement la fonction `parseUrl()`.

# Question 16
Why the `utils.js` will also be transpiled?

`utils.js` est aussi transpilé car tous les fichiers `.js` du dossier `/app` sont déjà transpilés.
`utils.js` utilise des notions de ES6 (.map(), .reduce(), etc...) qui n'existe pas dans ES5, donc il sera lui aussi transpilé. 

# Question 17
What does the `webpack --config webpack.config.js` do ?

La commande webpack permet de regrouper l'ensemble des fichiers JavaScript de l'application pour les utiliser dans un navigateur.

# Question 18
Play the whole game with size=2. By browsing the 3 views of the application, how many files did your browser download in total? How many time did it took to load them all?

9 fichiers au total ont été chargés en 335ms.

# Question 19
Can you guess how exactly style-loader works exactly?

`style-loader` takes CSS you've imported in your JavaScript files, and injects them as `<style></style>` tags into the DOM.
`style-loader` prends le CSS qui a été importé dans les fichiers JavaScript, puis les injecte comme des balises `<style></style>` dans le DOM.

# Question 20
What does the `_` prefix means on a sass file?

Le `_` (underscore) est une convention pour dire que le fichier ayant le `_` correspond à une partie du css complet. Cela signifie que la feuille de style va être importée (`@import`) dans une feuille de style principale, c'est-à-dire `styles.scss`. L'avantage d'utiliser des préfix `_` est de pouvoir utiliser plusieurs fichiers pour organiser le code et que tout soit compilé dans un seul fichier.
