## Next.js 15 useEffect Cleanup Issue with setInterval

This repository demonstrates a bug encountered in a Next.js 15 application. The issue involves a counter on the '/about' page that unexpectedly continues to increment even after navigating away and returning. The problem seems to stem from the useEffect cleanup function not correctly clearing the interval.

**Steps to reproduce:**

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the '/about' page. Observe the counter incrementing every second.
5. Navigate to the '/' page, then back to the '/about' page.
6. Notice that the counter continues to increment from where it left off, rather than restarting from 0.

**Expected behavior:** The counter should reset to 0 each time the '/about' page is visited.

**Actual behavior:** The counter continues incrementing from its previous value, even after navigating away and returning to the page. This indicates that the `clearInterval` call in the cleanup function isn't working as intended. 

This repository includes both the buggy code and a solution demonstrating how to properly manage the interval in the useEffect cleanup function.