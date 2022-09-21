

<p align="center">
   <img src="../.github/logo.png" alt="e-sports" />
</p>


<p align="center">
🎮 Find your best duo and have fun playing your favorite game!
</p>

---

## :rocket: Technologies
This project was made using the following technologies:

* [TypeScript](https://www.typescriptlang.org/)      
* [NodeJS](https://nodejs.org/en/)      
* [Prisma.io](https://www.prisma.io/)


## :computer: How to run

```bash
# Clone repository
$ git clone https://github.com/debfdias/e-sports

# Access folder 
$ cd server
```

```bash
# Install dependencies
$ npm install

# Run migrations
$ npx prisma migrate dev

# Run aplication
$ npm run dev

# Access prisma client
$ yarn prisma client
```

### ⚙️ Environment variables

```bash
# Edit the .env.example file with your pg credentials
$ DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/YOUR_DATABASE?schema=public"

```

### :whale: Docker

You can also use Docker to run the whole application. First, create your postgre database:

```bash
# Create pg database
$ docker run --name esports -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

```bash
# Run the app and api
$ docker-compose up 
```


## :page_facing_up: License

This project is licensed under the [MIT license](./LICENSE).