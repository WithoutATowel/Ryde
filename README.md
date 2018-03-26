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

| CRUD   | ROUTE                           | FUNCTIONALITY
|--------|---------------------------------|--------------
| GET    | /                               | Home page.
| POST   | /auth/signup                    | Sign up.
| POST   | /auth/login                     | Log in.
| POST   | /auth/me/from/token                  | Lift login from token.
| POST   | /ryde                           | Post a dryve.
| GET    | /ryde/:id/edit                  | Load a dryve into edit form.
| PUT    | /ryde/:id                       | Submit dryve edits.
| PUT    | /ryde/delete                    | Delete a dryve. 
| PUT    | /ryde/complete                  | Complete a dryve.
| POST   | /mydryves                       | Approve/deny ryders for a dryve.
| GET    | /mydryves/:id                   | Get logged in user's dryves.
| POST   | /ryders/confirmed               | Load confirmed ryders for a dryve.
| POST   | /ryders/pending                 | Load pending ryders for a dryve.
| PUT    | /myrydes                        | Request to join ryde.
| GET    | /myrydes/:id                    | Get logged in user's rydes.
| GET    | /profile/:id                    | Load public profile.
| POST   | /profile/:id/reviewuser         | Submit review for other user.
| PUT    | /profile/:id/removedryverstatus | Delete dryver details.
| PUT    | /profile/:id/becomedryver       | Submit dryver details.
| PUT    | /profile/:id/edit               | Submit changes from private profile page.
| DELETE | /profile/:id                    | Delete proile
| POST   | /bigsearch                      | Full ryde search.
| POST   | /minisearch                     | Limited ryde search.



## Models
[to the top](https://github.com/ScoRoc/Ryde#Ryde)

#### User

| id       | name   | email  | password | wUrl   | yUrl
|----------|--------|--------|---------|--------|------
| auto-gen | string | string | text    | string | string

#### Trip
| id       | first_name | last_name | email  | password
|----------|------------|-----------|--------|---------
| auto-gen | string     | string    | string | hashed string



## APIs Used
[to the top](https://github.com/ScoRoc/Ryde#Ryde)
- [Avatar API](https://www.avatarapi.com)
- 

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

Consolidate BigSearch and MiniSearch server routes.

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