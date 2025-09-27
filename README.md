# Todo App (React + Vite)

A simple and interactive **Todo Application** built with **React** and **Vite**.  
This app helps you manage your daily tasks efficiently with features to **add, complete, and delete tasks**.

## Features

- **Add tasks**: Quickly add new todos with a single input.  
- **Mark tasks as completed**: Click on a task to mark it as done.  
- **Delete completed tasks**: Remove only the tasks that have been completed.  
- **Delete all tasks**: Clear the entire list with one click.  
- **Responsive design**: Works well on desktop and mobile devices.  
- **Interactive UI**: Visual feedback for completed tasks for better user experience.  
- **Persistent tasks**: Saves tasks locally so they remain after refreshing the page.  

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/MaksymSyrotiuk/todo-app.git
cd todo-app
npm install
npm run dev
Open your browser and go to http://localhost:5173 to see the app running locally.
```
## Deployment

This project is deployed on **GitHub Pages**:  
[https://MaksymSyrotiuk.github.io/todo-app](https://MaksymSyrotiuk.github.io/todo-app)

To deploy your own version:

```bash
npm run build
npm run deploy
```
> **Note:** Make sure `"homepage"` is set in `package.json` and `vite.config.js` has `base: '/todo-app/'` to fix paths for GitHub Pages.

## Technologies Used

- **React 19** – Frontend library for building user interfaces  
- **Vite** – Fast build tool and development server  
- **React Icons** – Beautiful and customizable icons  
- **UUID** – Generate unique IDs for tasks  

## Contributing

Feel free to fork the project and submit pull requests.  
Please make sure your code follows the existing coding style.

## License

This project is open-source and available under the **MIT License**.
