## Manual installation

- Install nodejs locally()
- clonse the repo
- Install dependencies (npm install)
- Start the DB locally 
  - docker run -e POSTGRES_PASSWORD=mysecret -d -p 5432:5432
  - or Go to neon.tech and get yourseld a new DB
- change .env file and update your DB credentials
- npx prisma migrate 
- npx prisma generate
- npm run build
- npm run start

## Docker installation
  - Install docker
  - Create a network `docker network create user_project`
  - Start postgres
     - docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecret -d -p 5432:5432 postgres
  - Build the image - `docker build --network=host -t user-project  .`
  - start the image - `docker run -e DATABASE_URL=postgresql://postgres:mysecret@postgres:5432/postgres --network user_project -p 3000:3000 user-project`
  
## Docker Compose installation steps
- Install docker , docker-compose
- Run `docker-compose up`