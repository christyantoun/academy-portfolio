# Angular Portfolio 
This project aims at building a very simple portfolio using angular and scss. 


## Installation
1.  **Install Node.js and npm:** Angular requires Node.js and npm to be installed on your system. You can download and install them from the official Node.js website: https://nodejs.org/
2. **Install Angular CLI:** Angular CLI (Command Line Interface) is a powerful tool for initializing, developing, scaffolding, and maintaining Angular applications. Install it globally using npm:
```bash 
npm install -g @angular/cli
```
3. **Create a new Angular project:** Once Angular CLI is installed, you can create a new Angular project using the ng new command. Navigate to the directory where you want to create your project and run:
```bash 
ng new
```

> **_NOTE:_**  when prompted to add routing, select yes. For server side rendering, select no. Select scss as the stylesheet format to be used
```python
? Would you like to add Angular routing? Yes
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
? Which stylesheet format would you like to use? SCSS
```
4. Navigate to the project directory: After creating the project, navigate into the project directory `cd portfolio-project-name`

5. Serve the application: 
```bash
ng serve
```
Now you can access your application at http://localhost:4200/.


### In-Class Work 
- [ ]  Go over vanilla project and understand how to divide the page
- [ ]  Setup new project, go over the automatically generated files and how angular works
- [ ]  Define a suggested architecture
- [ ] Create the components
  ```
  ng g c projects 
  ```
- [ ] Copy the projects section from the vanilla project
- [ ] Demo the API that we will be using https://my-json-server.typicode.com/christyantoun/frontend-session
- [ ] Include component specific styles in the component's stylesheet
- [ ] Include global styles in styles.scss
- [ ] Create an interface for the projects (IProjects)
- [ ] Create a projects service and link to the API
- [ ] Use the @for directive to loop through the projects array
- [ ] Import the multi-select component
- [ ] Get the categories from the API and populate the select component
- [ ] Create onSelectionChange function that listens to the changes 
- [ ] Add filters to the endpoint and update the project list inside the onSelectionChange
- [ ] Map through the projects and link the category name to the category ID found in the project
- [ ] Display the category name inside the project card component


### Homework
- [ ] Refer to the TODOs
- [ ] Go over vanilla project and understand how to divide the components
- [ ] Create the needed components 
        ```
        ng g component navbar
        ```
- [ ]  Copy the navbar section from the vanilla project and paste it into the navbar component
- [ ]  Include component specific styles in the component's stylesheet 
- [ ]  Include global styles in styles.scss 
- [ ]  Repeat for the rest of the components
- [ ]  Create relevant interfaces

**Make sure to checkout onto a new branch and commit and push your changes then assign christyantoun as reviewer**
