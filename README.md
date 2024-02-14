# DALL-E Clone - 

## Introduction

Welcome to the DALL-E Clone project! This project use API  of OpenAI's DALL-E, 
a generative model capable of creating unique and diverse images from textual descriptions.

## Overview

DALL-E Clone uses a deep learning architecture on the backend to generate images based on textual prompts.
The frontend, built with ReactJS, allows users to interact with the model, input textual prompts, and visualize the generated images.


## Features

- **Text-to-Image Generation:** Input a textual prompt in the frontend, and the model on the backend will generate an image corresponding to the description.

- **Interactive UI:** A user-friendly interface built with ReactJs to facilitate easy interaction with the model.

- **Real-time Updates:** See the generated images in real-time as you modify the textual prompts.

## Getting Started
  Before starting make sure u have accounts in :
  - MongoDB (for database storage)
  - Openai (using this API requires a minimum payment of $5 )
  - Cloudinary (for saving images)
### Prerequisites

- Node.js installed
- $ npm i cloudinary cors dotenv express mongoose nodemon openai 

### Installation

1. Clone the repository:

    ```
    git clone https://github.com/DimaOstanin/AI_image
    ```

2. Navigate  to the backend directory and Run:

    ```
    cd server (from root derectory)
    npm start
    ```
3. Create .env file in server:

    ```
    MONGODB_URL= your url
    OPEN_AI_API_KEY=your key
    CLOUDINARY_CLOUD_NAME= your name
    CLOUDINARY_API_KEY= your key
    CLOUDINARY_API_SECRET= your secret
    ```    
4. Change to you Links :

    ```
    client\src\pages\CreatePost.jsx
    Replace lines 
    20 line
    from -> const response = await fetch('https://dall-e-d59a.onrender.com/api/v1/dalle',{
    to   -> const response = await fetch('http://localhost:8080/api/v1/dalle',{
    46 line
    from -> const response = await fetch('https://dall-e-d59a.onrender.com/api/v1/post',{
    to   -> const response = await fetch('http://localhost:8080/api/v1/post',{

    
    client\src\pages\Home.jsx
    Replace line
    24 line
    from  const response = await fetch('https://dall-e-d59a.onrender.com/api/v1/post',{
          const response = await fetch('http://localhost:8080/api/v1/post',{
    ```   
5. Navigate to the frontend directory and Run:

    ```
    cd .. (back to root derectory)
    cd client (from root derectory)
    npm run dev
    ```

6. Hooray, you have your own image generator:

    ```
    cd .. (back to root derectory)
    cd client (from root derectory)
    npm run dev
    ```

## Acknowledgments

- Special thanks to OpenAI for inspiring this project with their groundbreaking work on DALL-E.

## Contact

For any inquiries or feedback, please contact [Dima.Ostanin.42@gmail.com]

