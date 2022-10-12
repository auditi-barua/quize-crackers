import React from 'react';

const Blog = () => {
    return (

        <div>
            <h4>What is the purpose of react router?</h4>
            <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            <h4>How does context api work?</h4>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h4>What is a useRef in React?</h4>
            <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called .</p>
        </div>
    );
};

export default Blog;