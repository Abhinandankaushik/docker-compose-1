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
  - Start postgres
     - docker run -e POSTGRES_PASSWORD=mysecret -d -p 5432:5432 
  - Build the image - `docker build -t user-project  .`
  - start the image - `docker run -p 3000:3000 user-project`
  
## Docker Compose installation steps
- Install docker , docker-compose
- Run `docker-compose up`