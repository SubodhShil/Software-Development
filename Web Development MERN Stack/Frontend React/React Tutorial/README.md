> # **`React`**

### To create a React application

1. Install **Vite** in the machine: `npm i vite`
2. To create a new React project: `npm create vite@latest`
3. Change directory to the newly created project and run the command: `npm install`
4. Launch the application: `npm run dev`

## **`Motivation`**

React is a library and eco-system provides good sense develpoment experience with richness of UI development lifecycle. It has the biggest community among UI development technology and continuously pushing the technology next level. Thus the market goest on "React" way.

## **`Breakthrough of React`**

You know every technology comes into big picture and public attention must have some unique traits to provide that solves good-hard business problems. React has several briefly discussed below:

1. React Virtual DOM

## **`Updating values in the UI real-time (How react rendering works)`**

React uses a solution called state, it fixes the reload issue everytime the UI update or adds new data. The state feature in React makes a webapp truly SPA (Single Page Application). Simple term, it re-render specific portion without even reloading.

React uses reconciliation process to handle UI changes. React has it's own version of DOM called **Virtual-DOM**, the which is a lightweight replication of the actual DOM. To UI update, React don't works on actual in-browser DOM, rather changes or updates are made on virtual DOM itself. React then compares current and previous versions of the virtual DOM and append the specific updated nodes in the browser DOM.

## **`Some React extensions (for VS Code)`**

1. html to JSX

## **`React Components`**

-   Components are reuseable function can be used throughout the project.
-   Compenents provide feature that maintains, **Similar in design or strcuture and different in data approach**.

### Good practices:

When we create a component we should abide by these good practices:

1. **Each Component in Its Own Folder**: For each component it should contain in a folder with same component name.
2. The main component or parent component file should only contain logics, methods like data fetching methods, event handling methods, states or other important stuffs etc. It will only responsible for passing these logical data to the child components declared inside the same component folder.
3. All UI related work should be handled by child component files, these fill should not work around any logics for the UI.

## **`React component naming rule`**

React এর component এর নাম অবশ্যই Capital letter দিয়ে শুরু করতে হবে বা pascale case follow করতে হবে ।

## React File System

**manifest.json** used for mobile indexing.
**robots.txt** used for web indexing.  
<ins>**Best practice**</ins>: Make sure every react component start off with capital letter.

### `<center></center> Tag`

The **center** tag center everything in it.

### React Fragments

Fragment is a feature that allows you to group multiple children elements without adding an extra node to the DOM tree.

```jsx
const ChildComponent = () => (
    <React.Fragment>{/* Codes here */}</React.Fragment>
);
```

Shorthand for fragment

```jsx
const ChildComponent = () => <>{/* Codes here */}</>;
```

### Mapping items

```jsx
const foodItem = ["Bread", "Butter", "Milk", "Vegetables"];
return (
    <>
        {foodItem.map((item) => (
            <li>{item}</li>
        ))}
    </>
);
```

## **`'key' attribute or key prop`**

The key attribute or prop is a special attribute used by React. If the “key” attribute is present, React uses it as a way to identify an element of the same type among its siblings during re-renders. It helps React to identify which items have changed, been added, or been removed within a list. It's common to include a key attribute for each rendered item.
**key prop track if any item changes and re-render that particular UI**.

**Best practices**:

1. You can create a function to generate unique keys/ids/numbers/strings and use that.
2. You can make use of existing npm packages like uuid, uniqid, etc.
3. You can also generate random number like new Date().getTime(); and prefix it with something from the item you're iterating to guarantee its uniqueness
   Lastly, I recommend using the unique ID you get from the database, If you get it.

Study more:

1. https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements
2. https://bobbyhadz.com/blog/react-generate-unique-id

## **`Conditional Rendering`**

Conditional rendering in React is a technique where components render differently based on certain conditions within your React components. This is achieved using JavaScript's conditional statements like if, &&, and ? : operators. There are several ways to perform conditional rendering in React:

1. **Using logical && operator:**

    You can use the logical `&&` operator to conditionally render elements based on truthy values.

    ```jsx
    import React, { useState } from "react";

    function MyComponent() {
        const [isDataAvailable, setIsDataAvailable] = useState(true);

        return <div>{isDataAvailable && <p>Data is available!</p>}</div>;
    }
    ```

2. **Using ternary operator:**

    Ternary operators can be used for simple conditional rendering within JSX.

    ```javascript
    import React, { useState } from "react";

    function MyComponent() {
        const [isLoading, setIsLoading] = useState(true);

        return <div>{isLoading ? <p>Loading...</p> : <p>Data loaded!</p>}</div>;
    }
    ```

3. **Using conditional rendering with if-else outside JSX:**

    You can perform conditional rendering by using regular JavaScript `if-else` statements outside the JSX and returning different components or content based on conditions.

    ```javascript
    import React, { useState } from "react";

    function MyComponent() {
        const [isError, setIsError] = useState(false);

        let content;
        if (isError) {
            content = <p>Error occurred!</p>;
        } else {
            content = <p>No errors!</p>;
        }

        return <div>{content}</div>;
    }
    ```

## **`CSS Modules`**

CSS files in React are globally available throughout the project. This may lead to ambiguities (like repeating class names) and other difficulties with design. As a result, **CSS modules were introduced with a pattern stating that every component has its own CSS file**. To define a CSS module file follow this file naming:

`component_name.module.css`

To use classes defined in a CSS module file we have to use object like notation.

👉 See more in: **Practice1.jsx**

### 🚀 Best practice - Optional chaining

While accessing object properties using optional chaining operator (**?.**) consider a best practice. It is important because the property we're trying to access may not available, in this can it produce an error prone to bug.

### **htmlFor**

The htmlFor attribute is used to associate a label with an input element.

## **`Props in React`**

Props (Short form of properties) are way to pass parent to child.

-   Passed into a component from it's parent.
-   Read-only (immuteable) within the receiving component.
-   Allow parent-to-child component communication.
-

## **`Passing component as props (Children props)`**

> We can easily import and use a component in another component, but as per react good practices one should use **children props** to do so with additional benefits.
>
> To pass a component as a prop in React, you can simply pass the component name as a value to the prop. Here's an example:

```jsx
import React from "react";

// Child component
const ChildComponent = () => {
    return <h2>Hello from ChildComponent!</h2>;
};

// Parent component
const ParentComponent = ({ child }) => {
    return (
        <div>
            <h1>Hello from ParentComponent!</h1>
            {child}
        </div>
    );
};

// App component
const App = () => {
    return (
        <div>
            <ParentComponent child={<ChildComponent />} />
        </div>
    );
};

export default App;
```

In the example above, the `ChildComponent` is passed as a prop to the `ParentComponent` by wrapping it in curly braces and using the prop name `child`. Inside the `ParentComponent`, you can render the passed component by simply using `{child}`.

Note that when passing a component as a prop, you need to use the component name without the JSX tags (`< >`).

&nbsp;

## **`Event Handling`**

1. Avoid inline arrow functions in JSX for performance.

&nbsp;

**Bad practice**

```jsx
<div>
    <input
        type="text"
        className={`border p-1 ${styles.foodInput}`}
        placeholder="Say Food Name.."
        name=""
        onChange={(e, foodname) => console.log(e.target.value, foodname)}
    />
</div>
```

**Good practice**: Rather define a function outside which takes care of event handling.

```jsx
const handleFoodInput = (foodName, randomName) => (e) => {
    console.log(`foodName is ${foodName}`);
    console.log(`randomName is ${randomName}`);
    console.log(e.target.value);
};

return (
    <div>
        <input
            type="text"
            className={`border p-1 ${styles.foodInput}`}
            placeholder="Say Food Name.."
            name=""
            onChange={handleFoodInput("somename", "random")}
        />
    </div>
);
```

Read more: https://www.w3schools.com/react/react_events.asp

## **`Event bubbling`**

Event propagation is the process of an event moving up the DOM tree from the element where it occurred to its parent elements, and so on, until it reaches the top of the document. In React, event propagation works in the same way as it does in the DOM.

In event bubbling, when an event is triggered on a child component, it will first be handled by the child component's event handler. Then, the event will propagate up to the parent component's event handler, and further up to the next parent component's event handler, continuing until it reaches the root element or until the event is explicitly stopped from propagating further.

Event bubbling is also known as even propagation. When an event triggered on a nested element is propagated through it's parent element in the DOM hierarchy.

In simple language, child component calls along with it's parent event.

-   First, the button’s event handler gets triggered.
-   Second, the parent div’s event handler gets triggered.

**How to stop event bubbling?**
On the event handling function invoke this function.

```javascript
onClick={(e) => {
        e.stopPropagation();
        console.log("Parent 2 is called");
    }}>
```

The best practice is to always use **`event.stopPropagation();`**

&nbsp;

## **`Pass method as props`**

Yes, we can define method in the child compoment itself and use any time. But receiving method via parent consider best practice, since **components that can perform different actions based on the passed function**.

&nbsp;

> # **`React State Management`**

### `What is state?`

State in React refers to the dynamic and interactive data that can change over time and affect the output of the render function on a special dependency change.

-   State is local and private to the component.
-   State changes cause the component or specific part of a component to re-render.
-   To handle state in functional component
-   State is muteable.
-   Causes re-render when updated.
-   Managed using **useState** in functional components.

&nbsp;

### **`Good practice`**

We should never spoil or modify default state variable values.

```jsx
const [foodItems, setFoodItems] = useState(["Salad", "Green Vegetable", "Roti"]);

const onKeyDown = (event) => {
  if (event.key === "Enter”) {
      let newFoodItem = event.target.value;
      let newltems = [...foodItems, newFoodItem];
      setFoodItems(newltems);
  }

  console. log("Food value entered is “ + newfFoodltenm);
};
```

In this code snippet, we're not updating the state variable, rather just adding existing and new values to a new variable and then updating in the state using useState second parameter method.

> # `React Hooks`

Hooks in react are powerful feature that allows you to use state and other React features in functional components.

> ### **`useState`** hook
>
> When we need to render on update or show new data in a paritcular section of a website we have to use useState hook.

> **The first parameter of the useState function represent the intial value, second parameter represents a method that is responsible for re-render or updating the component thus initial value or the first paremter of useState get updated and visible in the UI.**

```jsx
import React, { useState } from "react";

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Example;
```

-   States are associated with events. To change a state an event needs to be triggered.

## **`Declaring empty useState`**

If you want to initialize a state variable that will eventually hold a string, you can initialize it as an empty string:

```javascript
const [text, setText] = useState("");
```

If you want to initialize a state variable that will eventually hold a number, you can initialize it as `0` or `null`:

```javascript
const [count, setCount] = useState(0);
// or
const [count, setCount] = useState(null);
```

If you want to initialize a state variable that will eventually hold an array, you can initialize it as an empty array:

```javascript
const [items, setItems] = useState([]);
```

If you want to initialize a state variable that will eventually hold an object, you can initialize it as an empty object:

```javascript
const [user, setUser] = useState({});
```

### **`Caution`**

Never declare empty useState in this way, `const [text, setText] = useState();`, this will set the initial value as **'undefined'**.

## **`Declaring state`**

The decision to declare state in a component's closest parent or privately in the component itself largely depends on the specific requirements of your application. Both approaches have their own advantages and use cases.

### 1. **Lifting state up or Declaring State in the Closest Parent**

Lifting state up in React refers to the process of moving the state from a child component to its parent component. This may happen that an instance or any resource can be used by multiple components, so by declaring state in the parent level which contains multiple component can provide state to child components. By lifting the state up to their closest common parent component, all the child components can share the state.

```jsx
import React from "react";

export default function App() {
    const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]);

    return (
        <>
            <TodoCount todos={todos} />
            <TodoList todos={todos} />
            <AddTodo setTodos={setTodos} />
        </>
    );
}
```

Here in the `App.jsx` component example, the todos array is used by two components, so it would be better declare the state in the App component which is the closest parent, rather declaring state privately.

### 2. **Declaring State Privately**

Sometimes, it's better to keep the state private within a component. This is the case when state that is used exclusively within a specific component and doesn't need to be shared with other component. By keeping the state private, you can encapsulate the state and the logic that manipulates it within a single component. This can make your component more self-contained and easier to test.

**`Conclusion`**: Use as much privately declared state, this is better for UI rendering, in rare case if it require to share single state among multiple component then use lifting state up method.

## **Updating state from previous state**

### Spread operator

Consider cloning of previous array or object elements along with new items using spread operator. This will maintain immutability when updating arrays or objects.

```jsx
const newUserData = [...userData, newData];
```

```jsx
const newTodoItems = [
    ...todoItems,
    { name: itemName, dueDate: itemDueDate, todoID: uid }
];

/// Not a good way to updating state using previous value
// setTodoItems(newTodoItems);

/// good practice ✅✅
setTodoItems((currentValue) => [
    ...currentValue,
    { name: itemName, dueDate: itemDueDate, todoID: uid }
]);
```

### Functional updates

Use, `(previousData) => [...previousData, newData]` to avoid state values during asynchronous updates.

Sometimes it requires updating the state based on the previous state value. Most developers do this in the following way:

```jsx
import { useState } from "react";

export default function Counter() {
    const [value, setValue] = useState(0);

    const handleValue = () => {
        /// bad practice ❌❌
        setValue(value + 1);
    };

    return (
        <div>
            <h1>Counter App</h1>
            <h3>Value: {value}</h3>
            <button onClick={handleValue}>Add</button>
        </div>
    );
}
```

The example demonstrates a counter app, where we need to add 1 in each button click, this needs the previous value to be updated.

Here how to do this is recommended way,

```jsx
import { useState } from "react";

export default function Counter() {
    const [value, setValue] = useState(0);

    const handleValue = () => {
        /// good practice ✅✅
        setValue((value) => value + 1);
    };

    return (
        <div>
            <h1>Counter App</h1>
            <h3>Value: {value}</h3>
            <button onClick={handleValue}>Add</button>
        </div>
    );
}
```

## **`useEffect`** hook

```javascript
useEffect(() => {
    /// your codes
}, [dependencies]);
```

With useEffect a component re-render every time it's dependency changes.

## **`useRef` hook**

The useRef hook is a special hook that is used for accessing actual DOM tree in the browser. Ref refers to reference of a DOM element.

Purpose or usecase:

1. Using state without re-rendering.
2. Can retain previous state or prop values.

Traits:

When not to use useRef:

1. Avoid using useRef to show some value in UI, so don't useRefValue.current to show vlaues in UI.

&nbsp;

> # **`useReducer` hook**

A simple counter app using `useReducer` hook.

```jsx
import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            if (state === 0) return 0;
            return state - 1;
        default:
            return state;
    }
};

export default function UseReducerCounter() {
    const [count, dispatch] = useReducer(reducer, (initialState = 5));

    return (
        <div>
            <div>Count: {count}</div>

            <button type="button" onClick={() => dispatch("increment")}>
                Increment
            </button>

            <button type="button" onClick={() => dispatch("decrement")}>
                Decrement
            </button>
        </div>
    );
}
```

> # `Context API`

A react app (or any frontend architecture) always has the concept of components that are similar in look different in data. As for React the data is here may be passed via props. Suppose we have a parent component containing one or more child components, that child component may have it's child and so forth. If we would like to pass data from a parent to a child then we need to pass the props all the way down to that inner or child component, this is called the props drilling.

> ### `The Context API allows us to create global state variables in a parent component can be consumed by it's child component.`

### Drawbacks of **props drilling**

1. Context API solves the props drilling problem in a React app. When the component tree is big or deepness is huge and we want to pass data using props to a child placed deep then it creates complexity and refactoring in the component tree or debugging becomes more of a headache. Context API creates a centralized route to pass data from the parent to any level of the child component.

### Folder steup

-   Create a store folder to store context files.

### Usecase

1. To avoid props drilling complexity.
2. To globally share states that may be used by multiple components.
3. Props can reduce code readability and maintain clean code. Using less props with components make it easy read it.

### Caution

1. Everything wrapped within the Context API provider re-render each time the value is changed.
2. Always use object in the value property.

    ```jsx
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
        {/* Child components */}
    </TodoItemsContext.Provider>
    ```

### **"\_redirects" file**

The_redirects file is used to handle client-side routing in a single-page React application.

> # `React Event Handler`

### **`onKeyDown`** event handler

The onkeydown event in JavaScript occurs when a key on the keyboard is pressed down.

> If a user presses and holds the 'Enter' key, the onKeyDown event is fired immediately. It fires for 'Enter' key, including function keys and special keys like Shift and Alt, doesn't mean that you've also pressed the 'Alt' key. It's just that the altKey property is part of the event object and will be logged regardless of whether the 'Alt' key was actually pressed.

&nbsp;

> # `React Classnames library`

You can reuse css classes by using this library additionally handle classes with conditional rendering.

> # `React Forms`

The value attribute in an `<input>` tag in HTML specifies the initial value of the input element.

```jsx
<input type="text" value="Initial Text">
```

The onsubmit should be called from forms.

### **`Button type`**

In a form, if you don't provide any value for the button **type** attribute, it will implicitly initialize type attribute with the value "submit", the "submit" type responsible for collecting data from input fields and provide it to server.

Button with no explicit type is cosidered as a bad practice, since it reload the entire page. To avoid this we have to invoke or call **`event.preventDefault()`** method in the onSubmit method of a form tag.

```jsx
// Always do this!!

const handleAddUser = (event) => {
    event.preventDefault();
    /// other codes...
    event.target.reset();
};

<form onSubmit={handleAddUser} action="">
    <input
        typeF="text"
        name="name"
        id=""
        placeholder="Enter your name"
        required
    />
</form>;
```

### **`input tag "name" attribute`**

The name attribute in an input tag in React is used to identify the form field that gets get its value submitted with the form. It specifies the name for the input that's submitted with the form. But, Each input element within a form should have a unique name to avoid conflicts in submitted data.

> # **`React TypeScript`**

TypeScript Tuples:

> # **`Important libraries and packages`**

## **`uuid react`**

```jsx
/// install command
npm install uuid

/// how to use in react
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();
console.log(id);

```
