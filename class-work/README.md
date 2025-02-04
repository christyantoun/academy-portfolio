# Angular Portfolio 
This project aims at building a very simple portfolio using angular and scss. 

## After successfully cloning 
- Make sure you checkout to your own branch after successfully cloning the repo

```bash 
git checkout -b "feature/{name}-classwork"
```

- Go into the right directory and complete the below steps:

```bash 
cd class-work
```

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
  ng g c navbar
  ```
- [ ] Add a commit message about the project setup and push it
- [ ] Copy the navar section from the vanilla project and paste it into the navbat component you just created
- [ ] Include component specific styles in the component's stylesheet
- [ ] Update the css styles used to use scss styles
- [ ] Include global styles in styles.scss
- [ ] Commit and push the changes made to the navbar component
- Inspect the browser and go over prominent dev tool features 
- Bonus: Write and link a function to the TS file


**Make sure to commit and push your changes then create a Pull Request and assign christyantoun as reviewer**
