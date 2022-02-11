# Full-stack exercise
Build a simple web-app that allows storing and retrieving pet professionals.
We'll be looking at your abilities to follow existing conventions and build a simple and clean design.

When you're done with the exercise, please provide us with links to your app's repositories, with instruction on how to run it.

## Back-end
There is no scaffolding for the back-end code, you'll need to write it yourself.

The API should provide queries for listing professionals, and retrieving one professional.

### Stack
- GraphQL API with [Apollo](https://www.apollographql.com/) & [TypeGraphQL](https://typegraphql.com/)
- ORM: [Prisma](https://www.prisma.io/)
- Database: PostgreSQL. We recommend running your local database in a [docker container](https://hub.docker.com/_/postgres)
- Typescript

### Data
The pet professional model should include the following data:
- First Name
- Last Name
- Languages spoken
- Title
- Email
- SEO friendly url - to be used for routing of details page in the frontend
- description
- address
- Pictures of the practice
- Payment options available
- Appointment Schedule / Practice Opening hours

## Front-end
This repo provides a base project for the front-end, you are expected to extend it to build the front-end of your app.

### Set-up
After cloning this repo, run `npm install` then `npm run dev` to launch the local server.

### Structure
This app uses the controller component pattern, in which controller components manage all data fetching and formatting, and presentation components manage all the UI, using the data provided by their parent controller component.

You can start building the listing page by completing the existing `LandingPageController` and `LandingPage` components.

### Tools
You're expected to use:
- Typescript
- Apollo: to make the api calls.
- react-router: for routing
- Emotion: for CSS.
- DayJS: for dates

### Expected
You should add the following screens
#### List page
- The listing page should be paginated and show 15 items per page.
- Should be filterable by title, city & payment methods.
- the design should be similar to [this one](https://tipaw.com/listing-professionnels/veterinaire)

#### Details page
- should be accessible by clicking on one of the items of the listing page
- This page should show all the available data for this professional.
