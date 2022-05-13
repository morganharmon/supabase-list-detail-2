## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

The homepage should show a list of items which are generated from a supabase database.
Each item should be clickable to open a new page with an id in the url that corresponds to that item.
On the new page, we should pull down that unique id, and then pull data from supabase that corresponds to that id.
Using the unique data, we can then generate page elements for that item's details.

Dependency:
The home page just requires the supabase data to be run through a render function.
The render function is pure so a test for it can be set up first.
The supabase data will be brought in by fetch-utils, so this should probably be first.
The details page follows the same logic, just for a single supabase item instead of all the items.

Order {verification}:
0. populate supabase
1. fetch-util for supabase home page data (all items) {should console.log pull to verify}
2. home page test for render function {output should be a div with an item name/image with link}
3. home page render function {passes test}
4. async function to await fetch-util and then render (a for loop rendering each item one at a time) {should see output on home page}
5. fetch-util for supabase details page data (singular item matching url?=id) {console.log pull}
6. details page test for singular render function {output should be a div similar to home page test but with extra info}
8. singular render function (render singular pulled item) {passes test}
9. async function to pull URLSearchParams, await fetch-util, and then render details {should see output on details page}


1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
