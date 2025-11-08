## Manual installation

-Install nodejs locally()
-clonse the repo
-Install dependencies (npm install)
-Start the DB locally 
  -docker run -e POSTGRES_PASSWORD=mysecret -d -p 5432:5432
  -or Go to neon.tech and get yourseld a new DB
-change .env file and update your DB credentials
-npx prisma migrate 
-npx prisma generate
-npm run build
-npm run start

## Docker installation

## Docker Compose installation steps
