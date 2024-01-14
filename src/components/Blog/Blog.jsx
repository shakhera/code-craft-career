import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-2xl font-extrabold mt-16 mb-12 text-left">
        React Unleashed: Context API, Custom Hooks, useRef, and useMemo Decoded
        for Advanced Development.
      </h2>
      <div className="join join-vertical w-full text-left">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            When should you use context API?
          </div>
          <div className="collapse-content">
            <p>
              The React Context API is valuable when managing global state or
              shared data across components in a React application. It proves
              useful in scenarios such as theming, authentication, user
              preferences, or any situation where prop drilling becomes
              cumbersome. By centralizing state management at the application
              level, the Context API streamlines the process of passing data
              between components, reducing the need for extensive prop passing.
              It is particularly beneficial for smaller to medium-sized
              applications where the overhead of more complex state management
              solutions like Redux may not be warranted. However, its usage
              should be balanced, and for simpler cases, local component state
              or prop drilling might suffice. As the application complexity
              grows, the Context API or other state management solutions can be
              employed to enhance maintainability and scalability.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is a custom hook?
          </div>
          <div className="collapse-content">
            <p>
              A custom hook in React is a JavaScript function that encapsulates
              reusable logic and stateful behavior, enabling components to share
              and reuse that logic across different parts of an application.
              Custom hooks allow developers to abstract complex functionalities
              into modular and shareable units, promoting code reusability and
              maintaining a cleaner component structure. By convention, custom
              hooks start with the word "use," and they can encapsulate state
              management, side effects, or any other logic that enhances
              component functionality. These hooks help avoid code duplication
              and make it easier to manage and organize complex logic within a
              React application, fostering a more maintainable and scalable
              codebase.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is useRef?
          </div>
          <div className="collapse-content">
            <p>
              useRef is a React Hook that provides a way to access and interact
              with a mutable object that persists across renders without causing
              re-renders itself. It is often used to reference a DOM element or
              to store mutable values without triggering a re-render when the
              value changes. When you create a ref using useRef(), the object it
              returns has a current property that can be assigned the reference
              to a DOM element or any other mutable value.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is useMemo?
          </div>
          <div className="collapse-content">
            <p>
              useMemo is a React Hook that is used for memoization, a technique
              to optimize performance by memoizing the result of a computation
              so that it's not recomputed on every render. It is particularly
              beneficial when dealing with expensive calculations or operations
              within a React component. When you use useMemo, you pass in a
              function and a dependency array. The function contains the
              computation you want to memoize, and the dependency array consists
              of variables or values that, when changed, will trigger the
              recalculation of the memoized value. If the dependencies remain
              the same between renders, React will reuse the memoized value from
              the previous render instead of recalculating it, thus improving
              the component's performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
