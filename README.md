<div align="center">

# 🚍 Trip Planning Using GTFS Data
### Benchmarking Redis and MongoDB for High-Performance Trip Planning Applications

<p>
A Node.js & Express application demonstrating how <strong>GTFS (General Transit Feed Specification)</strong> data can be stored, queried, and benchmarked using <strong>MongoDB</strong> and <strong>Redis</strong> to evaluate performance for modern trip-planning systems.
</p>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

# 📖 Overview

This project demonstrates how GTFS (General Transit Feed Specification) transportation data can be integrated into a backend application while comparing the performance characteristics of two leading NoSQL technologies:

- **MongoDB** – Document-Oriented Database
- **Redis** – In-Memory Data Store

The application provides a simple API for querying transportation stops while illustrating the advantages of caching with Redis compared to persistent storage using MongoDB.

The project also includes a benchmarking report explaining architectural decisions, performance observations, scalability considerations, and practical use cases.

---

# 🎯 Objectives

- Import GTFS transportation data
- Store transportation stops in MongoDB
- Cache frequently requested data using Redis
- Benchmark Redis vs MongoDB
- Demonstrate real-world trip-planning architecture
- Analyze scalability and response time improvements

---

# ✨ Features

- RESTful API built with Express.js
- MongoDB integration using Mongoose
- Redis caching layer
- GTFS stop data processing
- Performance benchmarking
- Modular project architecture
- Environment variable support
- Clean MVC project structure

---

# 🏗️ Project Structure

```
Trip-Planning-using-GTFS-Data/
│
├── config/
│   ├── db.js
│   └── redis.js
│
├── controllers/
│   └── stopController.js
│
├── models/
│   └── Stop.js
│
├── routes/
│   └── stopRoutes.js
│
├── data/
│   └── stops.json
│
├── Screenshots/
│
├── Benchmarking-GTFS-with-Redis-and-MongoDB.pdf
├── Instructions.txt
├── server.js
├── package.json
└── README.md
```

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|----------|
| Node.js | Backend Runtime |
| Express.js | REST API |
| MongoDB | Persistent Database |
| Mongoose | ODM |
| Redis | In-memory Cache |
| JavaScript | Programming Language |
| GTFS | Public Transit Data Standard |

---

# 📦 Dependencies

```json
{
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "mongoose": "^9.7.4",
  "redis": "^6.1.0",
  "nodemon": "^3.1.14"
}
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/Trip-Planning-using-GTFS-Data.git
```

```bash
cd Trip-Planning-using-GTFS-Data
```

---

## Install dependencies

```bash
npm install
```

---

# 🔧 Environment Variables

Create a `.env` file inside the project root.

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/gtfs

REDIS_HOST=127.0.0.1

REDIS_PORT=6379
```

---

# 🚀 Running MongoDB

Start MongoDB locally.

Example:

```bash
mongod
```

or use MongoDB Compass.

---

# 🚀 Running Redis

Using Docker:

```bash
docker run --name redis \
-p 6379:6379 \
-d redis
```

Verify Redis is running:

```bash
docker ps
```

---

# ▶️ Start the Server

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

---

# 🌐 API Endpoints

## Get All Stops

```
GET /api/stops
```

Returns all transportation stops.

---

## Get Stop by ID

```
GET /api/stops/:id
```

Returns a specific transportation stop.

---

# 🚍 GTFS Data

GTFS (General Transit Feed Specification) is an open standard used worldwide to publish public transportation schedules and geographic information.

Typical GTFS datasets include:

- Stops
- Routes
- Trips
- Stop Times
- Calendar
- Agencies
- Shapes

This project currently demonstrates handling GTFS stop data stored in JSON format.

---

# ⚡ Redis Caching Workflow

```
          Client Request
                 │
                 ▼
          Express API
                 │
      ┌──────────┴──────────┐
      │                     │
Check Redis Cache      Cache Miss
      │                     │
      ▼                     ▼
Return Cached Data     Query MongoDB
      │                     │
      └──────────┬──────────┘
                 ▼
        Store Result in Redis
                 │
                 ▼
          Return Response
```

---

# 📊 Benchmark Focus

The benchmarking compares Redis and MongoDB based on:

- Read Performance
- Write Performance
- Query Latency
- Memory Consumption
- Scalability
- Persistence
- Throughput
- Real-Time Suitability

---

# 📈 Redis vs MongoDB

| Feature | Redis | MongoDB |
|---------|--------|----------|
| Storage | In-Memory | Disk-Based |
| Read Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Write Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Persistence | Optional | Built-in |
| Scalability | Excellent | Excellent |
| Complex Queries | Limited | Excellent |
| Best Use Case | Cache | Primary Database |

---

# 📄 Included Documentation

The repository includes a complete benchmarking report:

```
Benchmarking-GTFS-with-Redis-and-MongoDB.pdf
```

The report covers:

- GTFS overview
- Redis architecture
- MongoDB architecture
- Benchmark methodology
- Performance comparison
- Advantages and disadvantages
- Practical application design
- Final conclusions

---

# 📷 Screenshots

The project includes screenshots demonstrating:

- Redis running with Docker
- MongoDB and Redis connection
- Overall application architecture

```
Screenshots/
```

---

# 🔮 Future Improvements

- Complete GTFS feed importer
- Route planning algorithm
- Shortest path computation
- Trip scheduling
- Geographic search
- Nearby stops lookup
- Redis expiration policies
- Performance dashboard
- Docker Compose deployment
- Unit and integration tests

---

# 🎓 Learning Outcomes

Through this project you will understand:

- GTFS data modeling
- REST API development
- MongoDB document storage
- Redis caching
- Performance benchmarking
- Backend optimization
- NoSQL database comparison
- Scalable application architecture

---

# 👨‍💻 Author

**Yassine Kalthoum**

Software & Network Engineering

Master's Student in Software Engineering

---

# 📜 License

This project is licensed under the MIT License.

---

<div align="center">

**⭐ If you found this project helpful, consider giving it a star!**

Built with ❤️ using Node.js, MongoDB, Redis, and GTFS.

</div>
