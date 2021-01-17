# A Better React Scaffold - by D. William Zero
With this React scaffold, you can immediately start building your next auth app.  No need to spend time thinking about file structure, or configuring auth.  It's all ready to go out of the box.

### Authentication
Authentication is setup for JWT, make sure your backend auth is set to JWT

### API Endpoints
Just add your endpoints and you're ready to go!

### Routes and Authenticated Routes
Sign-Up, Sign-In, Sign-Out, and Dashboard are setup and ready for you to modify. (Dashboard is a protected route.)

### File Structure
React does not have a specified file structure convention, so I've set it up in a common and intuitive manner.  (note: what most people call the "screens" directory, I call "pages". I like to call things what they are.)

## Getting Started
1) Clone Repo <br/>
   HTTPS: `git clone https://github.com/DWilliamZero/better-react-scaffold.git`<br/>
   SSH: `git clone git@github.com:DWilliamZero/better-react-scaffold.git`
2) Create and setup a .env file in the project root (See ".env.example"). Be sure to set REACT_APP_API_URL to your api's url. (NOTE: All .ENV variables except for BASE_URL, and NODE_ENV, must be prefaced with `REACT_APP_`.  ENVs can be called anywhere in your project see example below.)<br/><br/>
Variable: `REACT_APP_STRIPE_PUBLIC_KEY`<br/>
How to use it: `const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;` (Instantiation not required)

3) Run `npm install`
   Run `npm start`

4) Pat yourself on the back for saving a ton of time. ;-)

5) Send a pull request if you have any suggested changes.

