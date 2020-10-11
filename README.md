# Bus Report

## Requirements:

- On a single page, make all the data from `bus-services-data.json` available to the user.
- Data can be displayed in a list or a table, or a combination of both.
- Only the names of the organisation should be shown initially. When the user clicks on the name of the organisation, this should toggle the report showing the data for that organisation.
- The first three numbers of the route variant are most important, so they should be formatted as "bold".
- Display the following bus statuses based on its deviation from timetable - "On Time", "Late", "Early", or "Unknown".
- Use colors of your choice to signify the status of the buses (e.g. green text might mean that the bus was on-time)
- You may make any reasonable assumptions in your solution, but ensure that you note these assumptions down in assumptions.txt.

### Notes:

- The requirements may be ambiguous, make sure you document any assumptions used.
- Commit your work to your local git repository. Create a Github repository and push. Our team uses TDD approach and regular commits would be favourable.
- You may use NPM, Yarn or any other framework if required.  Make sure you document the steps and app versions that we might need to run your project. Please exclude (.gitignore) any generated folder or dependency that would bulk up the repository.
- The solution needs to work on Google Chrome.

### Bonus Points (Optional):

- You will score bonus points for creativity and/or making the application look nice.
- Provide a facility to leave notes about each organisation. There is no provided endpoint for the notes form submission. The data do not need to be saved to a server/database.

#### Please commit your solution to a Github repository and share the URL when done.  Good luck!

### Assumptions

Assumed deviation threshold is from 0 to 220. i.e: less than 0 is Late, greater than 220 is Early, and On Time is in between
Ideally, we will need some sort of organisation ID to associate with comment, make do with organisation name for now

## Development

### Setup

- This project use Node v12
- Run `npm install` then `npm run start`

### Framework

- `Angular` version 10.
- `Jasmine` test.
- `Angular Material` for common components. Angular Material provides versatile out of the box components for quick and simple interaction.
- `SASS` with `Bootstrap`. UI contail is mixed from custom SASS and some Bootstrap defaults.

### Build

- Run `npm run start` for dev server.
- Run `npm run test` to execute unit tests.
- Run `npm run pre-push` before checking in. Make sure all Lints and Unit tests are passed.

### Linting

This project use prettier for JS and Css linting.

- Run `npm run lint` to report linting errors in the ts source code.
- Run `npm run lint:fix` to fix linting errors in the ts source code. Recommended to run before checking the code.
- Run `npm run lint:scss` to report linting errors in the scss source code.
- Run `npm run lint:scss:fix` to fix linting errors in the scss source code. Recommended to run before checking the code.
