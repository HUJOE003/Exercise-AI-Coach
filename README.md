# Exercise AI Coach

**Status**: In Progress 🚧  
**Last Updated**: Fri, Aug 16

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Todo](#todo)
- [License](#license)
- [Contact](#contact)

## Overview

**Exercise AI Coach** is an innovative fitness coaching platform that leverages AI technology to provide personalized workout plans, real-time feedback, and motivational support. The project aims to revolutionize the fitness industry by combining artificial intelligence with user-centric design.

## Features

- **Personalized Workout Plans**: Tailored exercise routines based on user goals and preferences.
- **Real-Time Feedback**: AI-driven analysis of exercise form and technique.
- **Progress Tracking**: Keep track of workouts, progress, and milestones.
- **Motivational Support**: Daily reminders and encouragement powered by AI.

## Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS
- **Backend**: Node.js, Express, OpenAI API
- **Database**: PlanetScale
- **Others**: TypeScript, Upstash, Prisma ORM

## Setup and Installation

To get started with this project, follow the steps below:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/HUJOE003/Exercise-AI-Coach.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd Exercise-AI-Coach
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:
    - Create a `.env` file in the root directory and add your environment variables.
    - Example:
        ```env
        DATABASE_URL=your_database_url
        OPENAI_API_KEY=your_openai_api_key
        UPSTASH_REDIS_URL=your_upstash_redis_url
        ```

5. **Run the project**:
    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` after running the project.
2. Sign up or log in to access the AI-powered exercise coach.
3. Follow the on-screen instructions to set your fitness goals and start your workout.

## Project Structure

```bash
Exercise-AI-Coach/
├── app/
│   ├── api/
│   ├── sign-in/
│   ├── sign-up/
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/
│   └── Navbar.tsx
├── lib/
├── node_modules/
├── public/
├── .env
├── .eslintre.json
├── .gitignore
├── components.json
└── middleware.ts

## Contact

For questions, feedback, or suggestions, feel free to reach out:

**Name:** HUJOE003  
**Email:** [hpandise@calpoly.edu](mailto:your.email@example.com)  
**GitHub:** [https://github.com/HUJOE003](https://github.com/HUJOE003)

