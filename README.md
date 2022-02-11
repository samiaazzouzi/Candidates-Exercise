
# Front-end exercise
Using the scaffolding in place and the SpaceX public graphql api, build 2 pages. One that list SpaceX's past launches, and one that shows more details about one launch.
We'll be looking at your abilities to follow existing conventions and build a simple and clean design.

## Set-up
Run `npm install` then `npm run dev` to launch the local server.

Please fork this repo and then [create a PR from your fork to this repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) when you're done.

## Structure
This app uses the controller component pattern, in which controller components manage all data fetching and formatting, and presentation components manage all the UI, using the data provided by their parent controller component.

You can start building the listing page by completing the existing `LandingPageController` and `LandingPage` components.

## Tools
You're expected to use:
- Apollo: to make the api calls.
- react-router: for routing
- Emotion: for CSS.
- DayJS: for dates

## Expected
### List page
- The listing page should be paginated and show 15 items per page.
- Should be filterable by mission name, launch date, and site name.

### Details page
- Should include a picture carousel (you can find pictures in the `launchesPast.links` resolver).
- Should include more details about the launch than on the list items.

## Api
[SpaceX graphql API](https://api.spacex.land/graphql/). Here you can start pulling data from the `launchesPast` resolver.
You can also explore the API with [Apollo Studio](https://studio.apollographql.com/public/SpaceX-pxxbxen/explorer?variant=current).
