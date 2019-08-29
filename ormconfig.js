module.exports = {
    "type": "sqlite",
    "database": __dirname + "/q6.db",
    "entities": [
        "dist/**/*.entity.js"
    ],
    "migrations": [
        "dist/migrations/*{.js,.ts}"
    ],
    "cli": {
        "migrationsDir": "migrations"
    },
    "charset": "utf8mb4",
    "synchronize": true
}