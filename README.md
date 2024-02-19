# Salvemos Patitas App

This application is for an ONG that raises funds for animal shelters.

![screenshot](/public/screenshot.png?raw=true)

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)

## Features

- Create accounts.
- Make payments.
- List of partners.

## Requirements

Before you get started, ensure that you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (or a cloud-based MongoDB service like MongoDB Atlas)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/maritocuate/salvemospatitas.git
   ```

2. Navigate to the project directory:

   ```bash
   cd salvemospatitas
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Setup .env files:

   ```bash
    KINDE_CLIENT_ID=123
    KINDE_CLIENT_SECRET=123
    KINDE_ISSUER_URL=https://zxc.kinde.com
    KINDE_SITE_URL=http://localhost:3000
    KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
    KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/auth-callback

    MERCADOLIBRE_KEY=123
    MERCADOLIBRE_TOKEN=123

    DATABASE_URL="mongodb-url"
    VERCEL_URL="https://zxc.com"
   ```

## API Endpoints

The API provides the following endpoints:

- POST **/api/pagounico**: Generates a payment with the service information and obtains the URL needed to initiate the payment flow.

```bash
{
  "id": "123",
  "amount": "jdoe@gmail.com",
  "name": "john"
  "surname": "doe"
  "email": "jdoe@gmail.com"
}
```
