# Members Only

<p><b>An exclusive club where only authorized users can join the conversation. User are required to log in and get authorized for more features. This is a project assignment from <a href="">The Odin Project</a> 2026 NodeJS course. Learning outcome of this website is to practice user authentication and authorization using Passpost.js Strategies. </b></p>

## Table of contents

- [Members Only](#members-only)
  - [Table of contents](#table-of-contents)
  - [App Showcase](#app-showcase)
  - [Overview](#overview)
  - [Tech Stack](#tech-stack)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Other Tech](#other-tech)
  - [Project Structure](#project-structure)
  - [Installation \& Setup](#installation--setup)
      - [1. Prerequisites](#1-prerequisites)
      - [2. Clone the Repository](#2-clone-the-repository)
      - [3. Install Dependencies](#3-install-dependencies)
      - [4. Environment Variables](#4-environment-variables)
      - [5. Database Setup](#5-database-setup)
      - [6. Start the Application](#6-start-the-application)
      - [7. Open in Browser](#7-open-in-browser)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)
  - [License](#license)

## App Showcase

| Homepage desktop view                                                   |
| ----------------------------------------------------------------------- |
| <img max-width="80vw" src="./public/images/homepage-desktop-light.png"> |

| Homepage desktop view (Dark mode)                                      |
| ---------------------------------------------------------------------- |
| <img max-width="80vw" src="./public/images/homepage-desktop-dark.png"> |

| Homepage smartphone view                                              | Homepage smartphone (dark mode)                                            |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| <img max-width="80vw" src="./public/images/homepage-smartphone.png" > | <img max-width="80vw" src="./public/images/homepage-smartphone-dark.png" > |

| Sign up page (Desktop)                                  |
| ------------------------------------------------------- |
| <img max-width="80vw" src="./public/images/signup.png"> |

## Overview

- Anyone visiting the site will be able to see post title and message but not username and date of creation.
- A logged in user will be able to see username and date of creation of the post.
- User need to become a member to create a new post.
- User need to become an Admin to be able to delete their own post.
- These all restrictions on each category is to apply authorization and authentication like a real application with subscriptions and other restricted feature.

## Tech Stack

### Frontend

- Javascript
- HTML
- CSS
- React

### Backend

- NodeJS
- Express
- Passpost.js
- pg (postgres)
- EJS
- SQL

### Other Tech

- ESlint
- VS code
- Jest
- NPM
- Git

## Project Structure

```
members-only
|-- app.js
|-- package.json
|-- package.lock.json
|-- \controllers
|    |-- controller.js
|    |-- rolesController.js
|-- \routes
|    |-- indexRouter.js
|    |-- logInRouter.js
|    |-- signUpRouter.js
|    |-- newPostRouter.js
|    |-- rolesRouter.js
|    |-- deleteRouter.js
|-- \db
|    |-- pool.js
|    |-- queries.js
|    |-- populateDB.js
|-- \views        # contains ejs templates and pages
|
|-- \public       # contains static files
|    |-- \icons
|    |-- \images
|    |-- \icons
|    |-- \scripts
|    |-- \styles
|    |-- \fonts
|-- .gitignore
|-- .env
|-- README.md
```

## Installation & Setup

Follow these steps to run the project locally.

#### 1. Prerequisites

Make sure you have the following installed on your system:

- Node.js (v18+ recommended)

- npm (comes with Node.js)

- PostgreSQL (running locally or via a hosted service)

- Git

You can verify installations with:

```bash
node -v
npm -v
psql --version
```

#### 2. Clone the Repository

```bash
git clone <your-repo-url>
cd members-only
```

#### 3. Install Dependencies

Install all required Node.js packages:

```bash
npm install
```

⚠️ `node_modules` is intentionally excluded from the repo and will be generated locally.

#### 4. Environment Variables

Create a `.env` file in the root directory:

```bash
touch .env
```

Add the required environment variables (example):

```env
PORT=3000
DATABASE_URL=postgresql://username:password@localhost:5432/members_only
SESSION_SECRET=your_secret_key
```

> Adjust values based on your local database setup.

#### 5. Database Setup

1. Create a PostgreSQL database:

```sql
CREATE DATABASE members_only;
```

2. Populate the database using the provided script:

```bash
node db/populateDB.js
```

This will create required tables and seed initial data (if any).

#### 6. Start the Application

Run the development server:

```bash
npm start
```

#### 7. Open in Browser

Visit:

```arduino
http://localhost:3000
```

## Acknowledgements

- Icons are downloaded from [Google Material Symbols]()
- All fonts used are taken form [Google Fonts]()
- Thanks to [The Odin Project]() community to provide an amazing learning resources.

## Contact

[contact details]

## License

[ No license yet]
