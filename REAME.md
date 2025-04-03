# Apollonia - Backend

API REST pour la gestion des employés et services du cabinet dentaire Apollonia.

## Technologies

- Node.js
- Express.js
- MongoDB
- Docker

## Structure des données

- **Employé** : id, firstName, lastName, department
- **Service** : id, name

## Installation avec Docker

```bash
# Construire l'image
docker compose up
```

## Installation sans Docker

```bash
# Installer les dépendances
npm install

# Lancer le serveur
npm run dev
```

## Configuration

Créer un fichier `.env` à la racine du projet :

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/apollonia
```

## API Endpoints

- `GET /employees` - Liste tous les employés
- `GET /employees/:id` - Récupère un employé par ID
- `POST /employees` - Crée un nouvel employé
- `PUT /employees/:id` - Met à jour un employé
- `DELETE /employees/:id` - Supprime un employé

- `GET /departments` - Liste tous les services
- `GET /departments/:id` - Récupère un service par ID
- `POST /departments` - Crée un nouveau service
- `PUT /departments/:id` - Met à jour un service
- `DELETE /departments/:id` - Supprime un service
