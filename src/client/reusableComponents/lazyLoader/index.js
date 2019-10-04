import React, { useState, useRef, useEffect } from "react";

const LazyLoadComp = ({ callback, theEnd, children }) => {
  const [endReached, setEndReached] = useState(false);
  const bottomRef = useRef();

  //Trigger the callback function when the intersection is reached
  function scrollCallBack(entries) {
    if (entries[0].isIntersecting) {
      callback(); // Triggering a parent function
    }
  }

  //Defines the view port boundary
  //Defines the reference element which needs to be observed and Instantiates the observer
  //We need to make sure to disconnect observering to avoid memory leaks.
  //It is important to remove the observer and remove it from dom so that our useeffect hook doesn't trigger unecessarily. also it is good to inform the user that the end of the list is reached.

  useEffect(() => {
    const scroll = new IntersectionObserver(scrollCallBack, {
      root: null,
      rootMargin: "10px 0px 10px 0px",
      threshold: [1]
    });
    if (theEnd) {
      setEndReached(true);
      scroll.disconnect();
    }
    scroll.observe(bottomRef.current);
    return () => scroll.disconnect();
  }, [theEnd]);

  return (
    <div>
      {children}
      <br />
      {!endReached && <div ref={bottomRef} />}
      <br />
      <br />
      <br />
      <br />
      {endReached && <p>~that's all folks!~</p>}
    </div>
  );
};

export default LazyLoadComp;
