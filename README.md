### Meme-ory-App

# Question 1

Play the whole game with size=2. By browsing the 3 views of the application, how many files did your browser download overall? How many time did it took to load them all?
* Sur la première vue : 5 fichiers, 60 ms
* Sur la deuxième vue : 10 fichiers, 95 ms
* Sur la troisième vue : 6 fichiers, 61 ms

# Question 2

Component-oriented programming for the web is considered more maintainable. Why?

C'est plus simple à maintenir car tout est centralisé, par exemple, si modification d'une couleur dans un fichier CSS, le changement est appliqué à tout les endroits où il est appelé, au lieu de faire le changement à chaque endroit manuellement.

# Question 3

Try to remove the 2 closures from both card.component.js & game.component.js. What happens? Why?
Once figured out, remove the extra variable that makes the code to crash.

Les closures permettent d'encapsuler les variables d'environnement et d'éviter les conflits en elles.

Les deux fonctions demandent à ce qu'on les nomment. Le problème vient du fait que les deux fonctions définissent deux variables d'environnement qui rentrent en conflit, c'est pourquoi afin d'éviter ce problème, on les encapsule dans des scripts.

# Question 4

As you can see, `npm install` command also generated a `package-lock.json` file along with `package.json`. What is the purpose of this file?

Le fichier `package-lock.json` sert à stocker une représentation exacte des dépendances installées dans le projet à un instant T pour qu'il soit reproductible.

# Question 5
all NPM dependencies use a 3-digit format for version numbers. How do you call this? Can you explain the meaning of the `^` symbol next to the bootstrap version?

C'est du semantic versionning. Le format correspond à major.minor.patch. Le symbole `^` signifie que le projet sera compatible et mis à jour avec toutes les versions suivantes jusqu'à ce que le major change.

# Question 6
What is a devDependency exactly? What are the differences with a dependency?
Les devDependancy sont des packages qui sont installés par le développeur pour le développement local et le test.

Les devDependancy sont utilisés uniquement lors du développement et ne doivent être installé qu'à ce moment. Ils ne sont pas utile quand l'application ou le site est en production, par contre les dependencies eux sont utiles à tout moment du cycle d'une application.

# Question 7
Can you think of at least 2 things that are possible with Java classes, but cannot be done with ES6 classes?

Pour les ES6 : fonctions --> pas d'héritage
Un seul constructeur possible pour ES6 // une infinité de constructeur pour Java.

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

Les syntaxes `async` et `await` sont introduits par la version ECMAScript-7 ou ES7.

# Question 12
What does the `@` symbol mean in `@babel/***` ?

Le symbole `@` désigne le namespace qui possède le repository npm.

# Question 13
Look at the files produced within `dist/` folder. How babel transpile your class `WelcomeComponent` ?

Babel ajoute des `require()` qui permettent d'importer des fonctions déjà existantes en ES5 qui font exactement la même chose que notre code initial en ES6. (But du transpiler)

# Question 14
What is the weight of the transpiled sources compared to your original sources?

Le poids de la source transpilée est plus grand que la source original car la transpilation requiert une adaptation d'un code vers sa version antérieure, ce qui nécessite plus de lignes afin de réaliser une tâche.

# Question 15
What is the difference between `import * from './utils'` and `import { parseUrl } from './utils'` ?

`import * from './utils'` va importer l'ensemble des composants, classes, function dans `utils.js` tandis que `import { parseUrl } from './utils'` va elle importer uniquement la fonction `parseUrl()`.

# Question 16
Why the `utils.js` will also be transpiled?

`utils.js` est aussi transpilé car il utilise des notions de ES6 (.map(), .reduce(), etc...) qui n'existe pas dans ES5.

# Question 17
What does the `webpack --config webpack.config.js` do ?

//

# Question 18
