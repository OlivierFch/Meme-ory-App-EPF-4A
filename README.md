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

As you can see, npm install command also generated a package-lock.json file along with package.json. What is the purpose of this file?

Le fichier package-lock.json sert à stocker une représentation exacte des dépendances installées dans le projet à un instant T pour qu'il soit reproductible.

# Question 5
all NPM dependencies use a 3-digit format for version numbers. How do you call this? Can you explain the meaning of the ^ symbol next to the bootstrap version?

C'est du semantic versionning. Le format correspond à major.minor.patch. Le symbole `^` signifie que le projet sera compatible et mis à jour avec toutes les versions suivantes jusqu'à ce que le major change.

# Question 6
What is a devDependency exactly? What are the differences with a dependency?
Les devDependancy sont des packages qui sont installés par le développeur pour le développement local et le test.

Les devDependancy sont utilisés uniquement lors du développement et ne doivent être installé qu'à ce moment. Ils ne sont pas utile quand l'application ou le site est en production, par contre les dependencies eux sont utiles à tout moment du cycle d'une application.

# Question 7
Can you think of at least 2 things that are possible with Java classes, but cannot be done with ES6 classes?

Pour les ES6 : fonctions --> pas d'héritage
Un seul constructeur possible pour ES6 // une infinité de constructeur pour Java.
