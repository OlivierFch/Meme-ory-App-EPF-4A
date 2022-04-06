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

# Question 4

As you can see, npm install command also generated a package-lock.json file along with package.json. What is the purpose of this file?

Le fichier package-lock.json sert à stocker une représentation exacte des dépendances installées dans le projet à un instant T pour qu'il soit reproductible.

# Question 5
all NPM dependencies use a 3-digit format for version numbers. How do you call this? Can you explain the meaning of the ^ symbol next to the bootstrap version?

C'est du semantic versionning. Le format correspond à major.minor.patch. Le symbole `^` définit que la compatibilité de version et s'update sur les 5 prochaines modifications de version.

# Question 6
