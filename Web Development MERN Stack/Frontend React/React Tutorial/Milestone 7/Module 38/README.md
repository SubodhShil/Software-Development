> ## Components

-   Components are smaller piece or unit of a website exist independently.
-   Components are reusable around a codebase.
-   With the help of the 'props' feature, components are usually **'similar in look, different in data'**.
-   In React, we can declare our own component by creating functions. All the HTML markup are written in the component function. The markup we've written is not an actual HTML markup rather a special notation solely created for React, it is known as "JSX".

&nbsp;

> ## JSX (JavaScript XML)

-   JavaScript syntax extension
-   JSX convert into actual HTML markup in production, Babel is a compiler responsible for accomplish this task.

> ## Props

-   Props are a way to propagate parameter to a component.
-   One disadvantage of Props is that it only support single way data binding that means props can only send data from parent to a child and not in the opposite direction. Props create various problem like **'Props-drilling'**.
-   Reading missing props values shows 'undefined'.
-   Props are immutable or read-only properties.

---

-   **'export'**: The keyword 'export' indicates that the components can be used inside other components.
-   **'import'**: The keyword 'import' refers to a component that is being imported for use.

## Conditional rendering

### Way 01

```javascript

    <span>
        {" "}
        <b> {task}: </b>
    </span>

    <span>{!isDone ? " Not Done" : " Done"}</span>

```

### Way 02

```javascript
    {/* If we want to show only the 'true' values */}
    {isDone && (
        <span>
            {" "}
            <b> {task}: </b> Done
        </span>
    )}
```
