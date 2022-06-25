[React Course by Traversy Media](https://youtu.be/w7ejDZ8SWv8)

* What is React?
  * React is a library for building user interfaces
  * Ract runs on the client as a SPA(Single Page App), but can be used to build full stack apps by communication with a server/API (eg. MERN stack)
  * React is often referred to as a front-end "framework" because it is capable and directly comparable to a framework such as Angular or Vue

* Why Would You Use React?
  * Structure the "view" layer of your application
  * Reusable components with their own state
  * JSX - Dynamic markup
  * Interactive UIs with Virtual DOM
  * Performance & testing
  * Very popular in the industry

* What should you know first?
  * You shoud have a good handle on JavaScript. I would not suggest jumping into React without learning JavaScript first
  * Data types, variables, functions, loops, etc
  * Promises & asynchronous programming
  * Array methods like forEach() & map()
  * Fetch API & making HTTP requests

* UI Components
  * When using React, think of your UI as a bunch of separate components
  * eg: Header, Add (Inputs), Tasks, Task, Footer Componetns
  
* Working With State
  * Components can have "state" which is an object that dertermins how a compnents renders and behaves
  * "App" or "global" state refers to state that is available to the entire UI, not just a single component.
  * Prior to React 16.8, we had to use class based components to use state.
  * Now we can use function components with hooks.

* React Hooks
  * React Hooks are functions that let us hook into the React state and lifecycle features from function components
  * useState - Returns a stateful value and a function to update it
  * useEffect - Perform side effects in function components
  * useContext, useReducer, useRef 
  * You can also create your own custom hooks

* Let's learn React
  * https://reacts.org/docs/create-a-new-react-app.html
  * install node
  * install React Developer Tools Chrome Extension
  * npm --version
  * npm create-react-app react-task-tracker
  * cd react-task-tracker
  * code .
  * go over some of package.json like dependencies and scripts...
  * open up integrated terminal in VS code and run npm start
  * go over public folder and index.html within the folder
    * div tag in the body is a gateway to our React Aplication
  * src/index.js is the entry point for react
  * src/App.js is the root app component
  * Change title to 'Task Tracker' : index.html 
  * delete some files : logo.svg, App.css, App.test.js, setupTests.js
  * src/App.js
    * JSX expression must have one parent element

  ```
    function App() {
      return (
        <div className="App">
            <h1>Hello From React</h1>
            <h2>hello</h2>
        </div>
      );
    }

    export default App;
  ```

* inspect elements
* VS extension install :  ES7 React/Redux/GraphQL/React-Native snippets by dsznajder
  * rcc, rce, rafce

* Create src/components folder
  * Header.js : rafce enter
  * impt enter
* Styling
  * style component
  * inline style
  * index.css : [copy from github](https://github.com/bradtraversy/react-crash-2021/blob/master/src/index.css)

* components/Button.js, components/Header.js 
  * rafce enter
  * include Button in Header.js
  * pass onClick function from Header to Button via props

* components/Tasks.js
  * declare tasks array variables and initialize it with some task elements
  * use tasks.map() to construct JSX element
  * put Tasks component in App.js
  * use useState() hook to make tasks to be part of Tasks component
  * move useState() hook to App.js and pass tasks through Tasks component

* components/Task.js
  * put Task in Tasks component
  * change Tasks.js to return JSX which is a list of Task component
  * npm install react-icons
  * https://react-icons.github.io/react-icons/icons?name=fa
  * import { IconName } from "react-icons/fa";
  * include <FaTimes />
  * restart development server

* src/App.js
  * define deleteTask function and pass it through to Task component
  * define toggleReminder function and pass it through to Task component
  * check if toggleReminder is working correctly by inspecting components using react developer tool
  * add some dynamic class value to div tag in Task.js

* components/AddTask.js
  * put AddTask component right below Header component in App.js
  * import useState hook
  * manage each input value using useState hook, i.e, make input as controlled input
  * See if AddTask is working by checking react develoment tool

* src/App.js
  * define addTask function and pass it through to AddTask component 

* components/AddTask.js
  * add addTask function which was passed to this component as onSumit event handler

* src/App.js
  * add showAddTask state using useState hook
  * showAddTask state controls the visibility of add task form
  * make it visible or not depending on the value of showAddTask state
  * pass setShowAddTask function to Button component
  * pass showAddTask state to Header component to determine the text to diplay on Button component and the color of the component

* build static asset
  * npm run build
  * build folder generated where you push to production
  * to try this locally you could install the npm serve
    * sudo npm install -g serve
    * serve -s build -p 8000
    * you can delete all the folder except buld folder and server still runs

* [install mock backend server](https://github.com/typicode/json-server)
  * npm install json-server
  * add another script to package.json
    * "server" : "json-server --watch db.json --port 5000" 
  * npm run server
  * get data from mock backend server
  * copy tasks array from App.js to db.js and do some modification to make it json object
    * make tasks state's initial value to []
  * try localhost:5000/tasks from your web browser

* src/App.js
  * use useEffect() to fecth data from mock server
  * update deleteTask function to make delete request to mock server
    * call await fetch(...), and to use await deleteTask must be definded as async
  * update addTask functio to make post request to mock server
    * * call await fetch(...), and to use await addTask must be definded as async
  * add fetchTask function to fetch a task and make toggleReminder function call it
  * and toggle the reminder value of the fetched task
  * modify toggleReminder to make a PUT request to mock server

* Routing
  * No routing with the core library
  * instal react router dom
    * npm install react-router-dom
  * create Footer component and include it in App.js
  * include a Link to About component in Footer component
  * put Footer component right above the closing div tag in App.js
  * create About component
  * bring About component to App.js 
  * Wrap the below in Router
    * ```
       <Router>
          <Routes>
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </Router>
      ```
    * put AddTask and Tasks components into Route of path '/'
    * ```
        const addTaskFormNTasks =         
                          <>
                                  {
                                      showAddTask && <AddTask onAdd={addTask}/>
                                    }
                                    { tasks.length > 0 ? (
                                        <Tasks tasks={tasks} onDelete={deleteTask}
                                            onToggle={toggleReminder} />
                                    ) : ('No Tasks to show')
                                    }
                          </>
          return (
            
              <div className="container">
                <Header onAdd={()=>setShowAddTask(!showAddTask)}
                        showAdd={showAddTask}/>

                <Router>
                  <Routes>
                    <Route path='/' element={addTaskFormNTasks} />
                    <Route path='/about' element={<About />} />
                  </Routes>
                  <Footer />
                </Router>
                
              </div>
          );
        ```
  * Button component in Header component must be seen only when current route path is '/'
    * need to know current route path. use useLocation hook
    * components/Header.js
      * In App.js, put Header component between the Router component and Routes component
      * In Header.js, use conditional rendering to render Button component only when current pathname is '/'



