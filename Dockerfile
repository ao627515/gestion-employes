# Utiliser une image Node officielle (version alpine pour être léger)
FROM node:14-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de configuration npm
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l’application
COPY . .

# Exposer le port sur lequel l’application écoute
EXPOSE 3000

# Démarrer l’application
CMD ["npm", "start"]
