FROM node:22-alpine

WORKDIR /app

COPY package* .

RUN npm install

COPY . . 

ENV DATABASE_URL=postgresql://postgres:mysecret@localhost:5432/postgres
RUN echo $DATABASE_URL

RUN npx prisma migrate dev
RUN npx prisma generate
RUN npx prisma db push
RUN npm run build

EXPOSE 3000

CMD ["npm","start"]