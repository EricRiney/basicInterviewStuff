# basicInterviewStuff

**1. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?**

Although `typeof bar === "object"` is a reliable way of checking if `bar` is an object, the surprising gotcha in JavaScript is that `null` is also considered an object!

Therefore, the following code will, to the surprise of most developers, log `true` (not `false`) to the console:

`var bar = null;`
`console.log(typeof bar === "object");  // logs true!`
As long as one is aware of this, the problem can easily be avoided by also checking if bar is null:

`console.log((bar !== null) && (typeof bar === "object"));  // logs false`