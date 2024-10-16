# Founders Friday Landing Page

This repository contains the code for **Founders Friday Landing Page**, a modern and responsive web page built with React and Tailwind CSS. The page is optimized for both desktop and mobile views, featuring various sections like a sponsor registration form, attendee testimonials, and an announcement of upcoming events in different locations.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Founders Friday Landing Page is designed to provide an engaging user experience, allowing potential attendees to register for events, learn about past attendees' experiences, and access information about sponsorship opportunities. Each section is built with attention to responsiveness, ensuring an optimal display across all screen sizes.

## Features

- **Sponsor Registration Form**: A form that allows companies or individuals to sign up as sponsors for upcoming events.
- **Responsive Design**: The layout adapts seamlessly to mobile, tablet, and desktop views.
- **Event Announcement**: Special focus on upcoming events in Kaduna, displaying event details and allowing users to register.
- **Testimonials Section**: Feedback from past attendees is highlighted, with an intuitive design for viewing.
- **Video Section**: Engaging video content that provides insight into the mission of Founders Friday.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive designs quickly.
- **JavaScript (ES6+)**: Modern JavaScript syntax.
- **HTML5**: Semantic and accessible markup.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/founders-friday.git
   ```

2. Navigate into the project directory:

   ```bash
   cd interntest
   ```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

The app will be available at `https://interntest.vercel.app/`.

## Usage

- **Sponsor Registration**: Navigate to the sponsorship section, fill out the form with your details, and submit it to become a sponsor.
- **Event Registration**: Check the upcoming events, especially the Kaduna event, and register through the form provided.
- **Mobile Experience**: The app is fully responsive, ensuring a smooth experience on both desktop and mobile devices.
- **Video Section**: Learn more about Founders Friday by watching the embedded video in the "Vid" section.

## Folder Structure

```bash
├── public                 # Public assets (images, videos, etc.)
│   └── bg.png             # Background image for the Kaduna section
│   └── Frame 26.png       # Video thumbnail for the Vid section
│   └── Logo.png           # Logo for the Kaduna section
│   └── ArrowRightwhite.png # Icon used in the buttons
│   └── Frame 634.png      # Testimonials images
├── src
│   ├── components         # All React components used in the project
│   │   └── Sponsour.js    # Sponsorship form component
│   │   └── Kaduna.js      # Event announcement section for Kaduna
│   │   └── Vid.js         # Video section
│   │   └── Attendees.js   # Testimonials section
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point of the app
│   ├── styles.css         # Tailwind CSS configuration and custom styles
└── README.md              # Project documentation
```

```bash
I will probably come back to fix this ran out of time 😏
```
