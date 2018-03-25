# Ryde

[Ryde](https://ryde.herokuapp.com/) is a web app for organizing and joining carpools. It was created for Project 3 at General Assembly, WDI-17 and is hosted on Heroku at:

https://ryde.herokuapp.com/

### Jump to...

- [Technologies Used](https://github.com/ScoRoc/Ryde#technologies-used)
- [Routes](https://github.com/ScoRoc/Ryde#routes)
- [Models](https://github.com/ScoRoc/Ryde#models)
- [APIs Used](https://github.com/ScoRoc/Ryde#apis-used)
- [User Stories](https://github.com/ScoRoc/Ryde#user-stories)
- [About the project](https://github.com/ScoRoc/Ryde#about-the-project)
- [Styling/Animations](https://github.com/ScoRoc/Ryde#styling--animations)
- [Wireframes](https://github.com/ScoRoc/Ryde#wireframes)
- [Next Steps](https://github.com/ScoRoc/Ryde#next-steps)
- [WIP Screenshots](https://github.com/ScoRoc/Ryde#work-in-progress-screenshots)
- [Desktop Wireframe Images](https://github.com/ScoRoc/Ryde#desktop)
- [Mobile Wireframe Images](https://github.com/ScoRoc/Ryde#mobile)

Ryde Homepage
<!-- ![Ryde homepage](finished_screenshots/homepage.png) -->

---
## Technologies Used
[to the top](https://github.com/ScoRoc/Ryde#Ryde)

- HTML5 / CSS3
- JavaScript
- Materialize
- Node.js
- Express
- BCrypt
- Passport
- Session
- MongoDB
- Mongoose

## Routes
[to the top](https://github.com/ScoRoc/Ryde#Ryde)

| CRUD   | ROUTE              | FUNCTIONALITY
|--------|--------------------|--------------
| GET    | /                  | Renders the home page for yo! favo
| GET    | /signup            | Renders the signup page
| POST   | /signup            | Adds a new user and redirects to the home page if successful. If an error occurred, redirects back to the signup page.
| GET    | /login             | Renders the login page
| POST   | /login             | Logs user in and redirects to home page upon success or back to the login page upon error.
| GET    | /logout            | Logs user out and redirects to the home page.
| GET    | /:name             | Renders the page for an individual favo after searching for it. This is where the API is queried.
| POST   | /favos             | Adds a favo to the user's favos list and redirects to the same page with the same info without re-querying the API.
| PUT    | /favos/order       | This is where the ranking of the favos are tracked after a users sorts them. Every time the user sorts their lists this route is called and updates the new order to the database.
| GET    | /:id/profile       | Renders the user's profile page and queries database to find the top ranked favo for each category. The database portion is handled using raw SQL. The user needs to be logged in to view this page. If not logged in, they are redirected to the login page.
| GET    | /:id/games         | Renders the user's top games page and queries the data base to gather a list of all the favos with category 'game' that they've favorited. The database portion is handled using raw SQL. The user needs to be logged in to view this page. If not logged in, they are redirected to the login page.
| GET    | /:id/movies        | Renders the user's top movies page and queries the data base to gather a list of all the favos with category 'movie' that they've favorited. The database portion is handled using raw SQL. The user needs to be logged in to view this page. If not logged in, they are redirected to the login page.
| GET    | /:id/music         | Renders the user's top music page and queries the data base to gather a list of all the favos with category 'music' that they've favorited. The database portion is handled using raw SQL. The user needs to be logged in to view this page. If not logged in, they are redirected to the login page.
| GET    | /:id/tv            | Renders the user's top tv page and queries the data base to gather a list of all the favos with category 'tv' that they've favorited. The database portion is handled using raw SQL. The user needs to be logged in to view this page. If not logged in, they are redirected to the login page.
| GET    | /:id/update        | Renders the profile update page where the user can edit their user info. The user needs to be logged in to view this page. If not logged in, they are redirected to the login page.
| PUT    | /:id/update        | Edits the user info on the database. The user needs to be logged in to view this page. If not logged in, they are redirected to the login page.
| GET    | /:id/public        | Renders the user's share page that doesn't require being logged in to view.
| DELETE | /:id/favos/:favoId | Deletes a favo from the user's favorite list. This actually deletes the entry from the join table, as the favo itself still remains in the database.

## Models
[to the top](https://github.com/ScoRoc/Ryde#Ryde)

#### User

| id       | name   | type   | wTeaser | wUrl   | yUrl
|----------|--------|--------|---------|--------|------
| auto-gen | string | string | text    | string | string

#### Trip
| id       | first_name | last_name | email  | password
|----------|------------|-----------|--------|---------
| auto-gen | string     | string    | string | hashed string



## APIs Used
[to the top](https://github.com/ScoRoc/Ryde#Ryde)


## User Stories
[to the top](https://github.com/ScoRoc/Ryde#Ryde)

1. 

2. 

## About the project
[to the top](https://github.com/ScoRoc/Ryde#Ryde)


#### The pages


##### The Navbar


## Styling / Animations
[to the top](https://github.com/ScoRoc/Ryde#Ryde)


<!-- ![footer](finished_screenshots/footer.png) -->

#### Custom Built Animations


##### Submit Buttons (Login/Signup pages)

[Animation/Styling menu](https://github.com/ScoRoc/Ryde#custom-built-animations)


#### Color Palette

[Animation/Styling menu](https://github.com/ScoRoc/Ryde#custom-built-animations)

Here are all of the colors used in the project:

<!-- ![off white](color_palette/off-white.png) ![Bright Yello](color_palette/bright-yellow.png) ![Yellow](color_palette/yellow.png) ![Dull Yellow](color_palette/dull-yellow.png) -->


## Wireframes
[to the top](https://github.com/ScoRoc/Ryde#Ryde)

<!-- - [Desktop](https://github.com/ScoRoc/Ryde#landing-page) | [Mobile](https://github.com/ScoRoc/Ryde#landing-page-1) | **Landing Page:** home page of the entire site -->


## Next Steps
[to the top](https://github.com/ScoRoc/Ryde#Ryde)



*END of content. Wireframe images below*

### Desktop
[to the top](https://github.com/ScoRoc/Ryde#Ryde)

Desktop wireframes

##### Landing page
<!-- [Wireframe Menu](https://github.com/ScoRoc/Ryde#wireframes) | [Mobile version](https://github.com/ScoRoc/Ryde#landing-page-1) | [to the top](https://github.com/ScoRoc/Ryde#Ryde)
![landing page](wireframes/desktop/desktop-landing-page.png) -->

---

### Mobile
[to the top](https://github.com/ScoRoc/Ryde#Ryde)

Mobile wireframes

##### Landing page
<!-- [Wireframe Menu](https://github.com/ScoRoc/Ryde#wireframes) | [Desktop version](https://github.com/ScoRoc/Ryde#landing-page) | [to the top](https://github.com/ScoRoc/Ryde#Ryde)
![landing page](wireframes/mobile/mobile-landing-page.png) -->


[to the top](https://github.com/ScoRoc/Ryde#Ryde)