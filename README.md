# Devtools-debugging

Week 1 assignment for CodeX Academy.

I’m practicing using Chrome DevTools to find and fix JavaScript errors. I got to see how helpful the console is, how little typos can break things, and why it’s important to pay attention to scope, case sensitivity, and data types.  

## What I Fixed / Learned  
- **Error 1:** Fixed a typo when logging the message.  
- **Error 2:** Used querySelector the right way to grab the button.  
- **Error 3–4:** Added missing functions so the button could actually display output.  
- **Error 6:** Learned that variables declared with let inside a function don’t update the one outside.  
- **Error 7:** Hooked up the test button correctly so it called the function.  
- **Error 8:** Fixed the math by adding parentheses.  
- **Error 9:** Null doesn’t need anything special — you can just log it.  
- **Error 10:** JavaScript cares about case — fixed the variable name.  
- **Error 11:** Fixed a typo so the console showed the right variable.  
- **Error 12:** Commented out a function call that didn’t exist.  
- **Error 13:** Fixed a misspelled object property.  
- **Error 14:** toUpperCase() only works on strings, so I created a string variable for it.  
- **Error 15:** Added a missing quote in the string.  
- **Error 16:** Took out an extra semicolon in the loop.  
- **Error 17:** Switched from === to == so it would check value instead of type.  
- **Error 18:** The Array.push method got overwritten — it logs a message now, but doesn’t break anything. I left it as is since that’s how it was shown in the video.  
- **Error 19:** Declared the variable before logging it.  
- **Error 20:** Strings can’t have properties, so I made an object to hold the string instead.  

## Big Takeaways  
- Check spelling and variable names — JS is picky about case.
- Scope matters — if you use let/const inside a function or block, it makes a new variable instead of changing the one outside.
- Use methods on the right stuff (toUpperCase only works on strings).
- Keep loops clean — no extra semicolons.
- console.log is the easiest way to see what’s going on.
