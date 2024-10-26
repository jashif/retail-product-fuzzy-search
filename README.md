# Retail Product Catalog

## Overview

This project is a retail product catalog application with a basic fuzzy search implementation.
The application consists of 2 part a frontend with react and typescript and backend api written in typescript

## Getting Started

### Prerequisites

- NodeJS
- VsCode
- Yarn

### Installation

1. Clone the repository:

   ```
   git clone git@github.com:jashif/retail-product-fuzzy-search.git

   yarn install

   ```

### Running the Application

Run the application using:

```bash
   yarn start
```

The server will start on port 8080.

The app will start on port 3000.

## API Endpoints

- `POST /products`: adds a new product.
- `Get /products?offset=0&limit=10`: returns a paginated list of all products.
- `GET /products/{id}`: Get the details of a product by id.
- `GET /search?term={value}`: search the list of products matching the name.

## Project Structure and Discussion

### 1. Project Structure

The project is a mono repo with frontend and services:

- `frontend`: Contains the frontend applications.
- `services`: List the apis in the project.

### 3. Database Choice

An in-memory data store is currently used for simplicity. For a production setup, a database like Redis or PostgreSQL could be considered for persistence and scalability.
