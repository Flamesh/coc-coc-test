# Assessment Test for the Senior Frontend Developer position

Our team is requested to build a website that requires the authentication feature.
The first task is creating the login screen, please help to implement the following parts:

### Part 1: Code-base (1 point)

- Setup the project structure in the Node environment.
- Setup compiling and bundling flow for the frontend. Make sure the output is ES5 code.

### Part 2: Login screen (7 points)

- Dependencies: "react", "react-dom" (others not allowed).
  Dev-dependencies are not specified.
- The requirements for UI/UX are described with the attached screenshots.
- The output does not need to be pixel-perfect.
  However, you have some info to make it looks closest to the screenshots:
  - Input height 32px
  - Border radius 3px
  - Font sizes: normal text 12px, heading 24px
  - Login dialog width 400px
- Assets
  - Font: Provided in the folder "fonts"
  - Icons: Use the SVG files provided in the folder "icons"
- Whenever the user is logged in, show the notification to the user instead of the login dialog.
- Implement the API handlers, using the mockup responses.

### Part 3: APIs and integration (2 points)

- Dependencies and dev-dependencies are not specified.
- Implement the necessary APIs to support the logic of the login screen.
- Use JWT to authenticate users.
- Use the mockup data for users provided in "mock/users.json".
  Passwords are encrypted using the Bcrypt algorithm.
  The plaintext passwords are "123456" and "654321".
- Integrate the APIs into the client-side code.

Try your best to make the project well-structured, easy to maintain, and scale-up.
No less important, you should spend enough time to bring users the excellent UI/UX.
Finally, please write a clear README to instruct others on how to test the output.

Please use Github to manage the project then we can see your commit history.
When you complete, send us the Github repository URL or a ZIP file of the project.

Don't hesitate to contact us if you have any unclear about this assessment test.
Thank you for participating in our interview!

---

Happy coding!  
The Cốc Cốc Ad Frontend Team.

#1 Config React

- init npm: `npm init -y`
- install `react` and `react-dom`: `npm i react react-dom`
- install
