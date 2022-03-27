# Web-Applications

In this project students will choose two API's and create a mashup that uses them **synchronously**.  Once the code is completed students will then present their projects in a short recoded screencast walking through their code and demoing the final result.

 You will need to complete the HTTP and API playlist and most of assessment 4 to understand how to write code to utilize the HTTP and HTTPS protocols on Node.js.  Your project must use the techniques we covered this semester.

 Some notable examples from previous semesters includes:

- Nasa API + Google Drive: Connect to a users Google drive and uploads a new photo from Space.
- OpenDota API + Wunderlist: Create Calendar events for all league matches.
- OpenWeatherMap + OpenBreweryDB: Let the user search for brewery's by zip code and display weather information for the surrounding area.

  

## Requirements

A successful project will have at minimum four phases in code execution:

1. When a end user visits the home page, your server send them a form to fill out.

2. When a end user submits the form, use the captured data to send the first API request.

3. Upon receiving the response from the first API request, your server will  parse the response and generate a request to the second API. 

   *You have to be careful here: the user cannot be the driver of this secondary request, if they have to interact with the page at all, (for example clicking a button) this is considered two separate requests and not two synchronous requests.  In the GitHub Jobs x Todoist mashup upon receiving a response from GitHub our application immediate contacts Todoist for the next phase.*

4. Upon receiving the response from the second API request, your server will parse the response and finally send results back to the end user.

The project requires two API's to be chosen, **one of which MUST have some form of authentication**.  The authentication model chosen will determine the maximum score that can be earned.  The other chosen API does not need authentication.  (You only need to do authentication once)

These two API's **MUST** be queried synchronously without race conditions.  **Having two API's operate asynchronously will result in a failing score.**

 

## Deliverables

If any of these are missing no partial credit will be awarded:  

1. Project code that satisfies restrictions.  Please be careful with this, projects submitted that do not follow the minimum guidelines will be awarded a zero.

2. An HTTP sequence diagram which shows all **HTTP** requests/responses made between client and server.  (Be sure to **not** include TCP handshakes and ACKs which should be abstracted away)

   [Here is an example of what I want](https://sequencediagram.org/index.html#initialData=C4S2BsFMAIBUHsAm8QGdjQMwBkDy0BBAV2AAtoAmAOgAZoAKANREUnmgBYBKK6AKD4BDcBgTI0GAgAUAktADaBALrRBAO0RwkKdIVkKAQisEAnGGRipBAW0gAaaHIDGZwcEiaO0SGtChIqNDA7IIAbiiaLvCoqCBqAObQ4HEBfD6IAgAOpqBOINm+WuK60jKKSnzZJrn56hgAqqiQJpU5IHkFGADKzaHNrdXttYViOpKy8kYCjc0AtAB89ACMXD0mfSYAXAYm8ADuTSbQZgCORAHAgQBEAPRXDLvwGPAAZtDwREex7lx8axsLZZcGZbaA9DSBCg0Oi4ADWggAng4AEqQYCfNSBOKsAAeVFIwGs4AYL3gJmsvxBgJW-2amxB0BeIHA4ECHwwpPJDFQREymWSAWgiDcgk20AAVOLgIJULDJVxoAAdNQ7faHY6QM4Xa43QSIRAAfVgMth93oj2ebw+XzAkF+fDUTxg8A2YN6dOgAGFXO5ApL0G5IJLlV0woKAN7S2UOAPuAC+AlpJmpwMOYvBiECmBoFGgqMQIDMTgwwSC2gk0AA1NBw56Bb4ZAARGNOeCZezQWOQONKtQAcXYpeCxXGclL4Hg8Tiqg00HiJjq0GsCMIfMCdZAPmATd7FlUACNmWAV6W4u4F8XoHswOQEdboO2TKh4GphGWR6onK2iIVlT-WEcyTWLamioK27bHEQUCBOakB6nYriIHsJi2nYrBQO43jAE4VC4QqypdtAaDQEQTSaOO8DwLCvLQHenxBCa7xqBq6ImGoAjCKIpDEU46jQPulikGS2GFk4RAgURbx7qRzREYEwiISuE7xPEHhEcx6iaKQMqqOAilzguvhqY+wExCAL58FSiwrKMFalOU2y7AcslNIK2YUA4yogNYtgFoG4ArmYBZFpcZZFGMegyMqnJ7KYBYJDWG5bk2LZth2XYJrZJQTMoKYgpsGaBMp06ctYlmHCmWWjg5DLKVi7FVZF5R5WmBCypJtEfFei6lvOi4mWgsQWVZQKNfZyj0uqVgIoECKpOkAhjTlSgtR67l5h4haQJepb3ocrrVuGrasDG0rxr2npIDAZiZGYTS+IE0mHIEyqQDi-JDBgA1mS+jJkl69bbo2ZZeUZF4YNeZBBNxgQgvJX4fL+aj-i54EwPE4noSkqBUOVczWas7pbKqzlHEWkAgH0WY5p5ajeb5ID+YFm0hY97C4PRSbRWSsUmPFiRHVdp2BgmDpOu8rpJmKMx+uKXaSqogSwpAJ7sBOVE0ZKUZyuKiZE5V5bZWURgFekgRHYDBosA4TiW00LhojbV1xsqvVop+TgBGzytqK7pDmKQZgwK21iZC+W6PZALLQzApTKpKtubr4LCSmKLBbiATKCnugh8sq9A53yjhXrsmGhDjMdMTAdEl+Lf5kWFwAXrCGrPp8nskVYqkzpooOdvAtidp7r4odEndqZy-HMskCRcPH4qJxH21mMAqeqHyADk1zZDEexkog9zz8dQbimKN13VubjmcxrzjyYW+9t9Q3MaeYOCJekPkO-36+IthvVUYFMUsZBvEgBsBEZA4iJCcP7JwsI2QkAcHsdG7s+KSm-l7A0wQfYK33O-WEet1j41Gv-JqJtSgai1OgNmqh9SqAYu1Q6GCYhYKoj4F2agpC4C6LAaABJgCZFQJsG4upMggCoMOMYVAQ43DusAG4oQlg3G1n-D89lAEEyllCJYXofRqWrMKaUDA4i2yIPzaA9RkTYHeFJE09okyrS2BmLAOYNrBW2iWdgljrG3xUXjZMBMlplAmiTdU5NKZuRzF5Hym0mZuK2jtLxVjVERXGitAm+UoQwgANJCjQPyREj0TQCD4EAA)

3. A screencast where students will record them walking through their project and code.

In the past semesters students have submitted code without a recording, those students earned a zero.

 

## Score Ceilings and Authentication Model

There will be score ceilings dependent on the authentication model chosen.

- API Keys are typically the easiest as you get them when registering your application.  
- OAuth 2.0 Client Credential requires your application to **dynamically** trade Client ID and Client secret for an access token, before being able to interact with the API.  The access token should not be hard coded into your program.  (You are encouraged to cache it after it's been run once though)
- A three-legged OAuth request is the most complex as it involves explicitly getting permissions from a third entity, the end user.

Each step increases project complexity, but there is a larger reward for those willing to take a risk with a more difficult work flow.  (To gauge the difficulty the Spotify API in assessment 4 used Client Credential authorization workflow)

 

| Authentication                                               | Maximum Score |
| ------------------------------------------------------------ | ------------- |
| API Key                                                      | 90%           |
| [OAuth 2.0 Client Credential](https://github.com/Kong/mashape-oauth/blob/master/FLOWS.md#oauth-2-two-legged) | 100%          |
| [OAuth 2.0 Three Legged](https://github.com/Kong/mashape-oauth/blob/master/FLOWS.md#oauth-2-three-legged) | 110%          |

This score ceiling is based on the most difficult API you choose:

- If you choose to do a mashup between an OAuth Three Legged and a public API you will have a ceiling of 110%.  
- If you choose two Client Credential APIs you will have a ceiling of 100%.
- If you choose an API key and a public API your ceiling will be 90%
- A project with two public API's will not be accepted.

 

## List of API's

https://github.com/public-apis/public-apis

You should avoid OAuth 1.0 API's as we did not cover certificate signing this semester.

You are not restricted to just API's on this list.

 

## Restrictions

The point of this project is to demonstrate your understanding of low-level Node.js.  Specific tools and libraries that 

 

### Third party modules are banned (eg. NPM / github)

This project tasks you with writing an HTTP server to communicate with various API's.  Some API's offer helper libraries to automate the authentication process.  You **cannot** use these libraries.  (You can still use those API's, but you must do so using **only HTTP / HTTPS** Node.js modules)

Some popular libraries that are **banned** from this assignment

- request https://www.npmjs.com/package/request
- express https://www.npmjs.com/package/express

 

#### How to avoid accidentally used a third party module

The only libraries you are allowed to use are built in libraries.  **I need to emphasize this because of the number of students that received zeros in previous semesters.**

If the library is available on **nodejs.org** ✅ you can use it (fs, http, https, querystring, url, ...).  If it's anywhere else including **npmjs.com** ❌ or **github.com**❌ it's barred from this project.  Specifically the only libraries you should be using are the one's found in the sidebar on the [nodejs documentation page](https://nodejs.org/dist/latest-v14.x/docs/api/).  

- If an API provides a Node.js or JavaScript helper "library" you should **not** use that, instead look for API's that offer a REST or cURL interface.  These are typically language agnostic and easy to test with Insomnia Core and then you can use `https.request()` or `https.get()` to interact with.  These will be the two main ways you will be pulling (or pushing) API data.
- If the instructions on an API tell you to run the command `npm install` at any point, it is directing you to install 3rd party module.
- Review the `require` statements on top of your code, there should only be built in libraries and one's you wrote yourself.
- If you find at any point in your project you have a `node_modules` directory that is required for your program to function, you are using an external library (and should rewrite your code to remove those).

 

### Promise and Async/Away notation is banned

We have covered callback and observer pattern this semester, your solution must demonstrate understanding of these techniques.

### setTimeout and equivalents are banned.

The code may look like it works initially, but it has race conditions, doesn't scale, and is always going to be slower in the scenario where it does work.

### API's must be different than demos

As this is meant to be an independent research project, API's used in current and future lecture videos and in previous assignments are not allowed.  This list includes four API's:

- https://jobs.github.com/api 

- https://developer.usajobs.gov/ 

- https://developer.todoist.com/

- https://developer.spotify.com/ 

  - Exception: Three legged OAuth endpoints are allowed for Spotify API as we only used Client Credential.

     

## Unrelated API's are okay

If you are  having difficulty finding two related API's, it is fine to use two unrelated API's.  In this scenario, students are *still* required to write their code in a synchronous fashion, and will instead *pretend* the first API request needs to be responded to, before the second can be sent.  (Eg. I need to get the restaurant information, before I can request the weather data)

 

 

## Phase 1: Choosing a pair of APIs

First check this list to see which pairing of API's your fellow classmates have chosen (this will be updated daily)  **This document is set to read only - You will not be editing this document**

You cannot use the exact same pair as someone else, but you can change one of them to a different API and it will be considered a different pairing.

Don't rush to lock in your API without thoroughly testing it.  The public API list currently has 773 different API's meaning there are 773C2 = 298,378 possible pairings.  It's very unlikely for two students choose the exact same pair of APIs at random.

There's little need to rush this process and it can be harmful if you lock yourself into an API that you later find incredibly difficult to use.

 During this phase you should be looking through and setting up accounts with various API's to find a pair that you want to create your project with.  Make sure to try using each API before deciding on your API, as some API's are much harder to use than others.  Use an HTTP debugger like **Insomnia** or Postman to try to authenticate and make queries.

I would recommend first looking into API's that interest you, having contextual knowledge about a particular hobby can make working with the API much easier.  (E.g. A Hearthstone player would understand the intricate details of the Hearthstone API better than non-players)

During this phase you should:

- Get the required API keys or Client ID / Client Secret pairs.
- Draw a draft of a sequence diagram that follows how a typical user would use your server and how your server interacts with 3rd party APIs. *(Not submitted yet)*
- For each network request to a third party (outbound arrow) in the sequence diagram, try to replicate them with an HTTP debugger (Insomnia or Postman).  
- Ensure that you can correctly authenticate and access all endpoints.

 

## Phase 2: Creating the Project

First make a formalized HTTP Sequence Diagram describing a (non-cached) use of your application including all calls to each API

- https://sequencediagram.org/
- There should be 4 entities in your diagram: the user, your server, and the two APIs.

This will organize your thought so you can keep track of various endpoints and decide at any point if you are sending or receiving data.

After the diagram has been formalized, build the project.  

 

Additional factors that will effect your grade:

- Is your application resilient to unexpected input?  (It should deliver 404 in most of these cases)

- Do you utilize caching?

  If you have any cache files delete them before submitting.  (Make sure you program is not reliant on the cache, test this by deleting the cache and running the program again)

- Sequence Diagram

  - Are all Requests included (No missing HTTP requests on diagram)
    (Ignore TCP segments as they are abstracted away)
  - Headers / Query / Post Data included where required?

If you have multiple similar requests, like when downloading multiple images, a single arrow with a remark is sufficient

 

#### Important: testing your project to ensure it is operating synchronously

Your project **MUST operate synchronously**.

If we have Requests A and B, **Request A must finish (received response)** before Request B begins, otherwise you risk a failing grade for not hitting requirements.

If B's request is dependent on A's response, (GithubJobs x Todoist example where I can't create calendar events without the Github search results) then this is obvious and you can skip this step.

But if the requests are independent, this becomes harder to test.

You can use the following snippet of code to test if your calls are being done synchronously.

```
const api_request_a = https.request(url, options, callback);
setTimeout( () => api_request_a.end(...) , 5000);
```

Specifically change your call to `.end()` with a version that has a delay.  (Note we are only using this call to `setTimeout` to test our code, you should revert back to the original version before submitting.  Don't use `setTimeout()` for anything other than testing)

 

Add a print statement each time one of your API is called. (API 1 has been called, API 2 has been called)

 

If **without any additional changes** your project takes an additional 5 seconds before it can display the exact same results, then it is likely fine, operating synchronously (as the second API is waiting for the results from the first)  

If the code blows through the delay and makes the call to the second API without waiting for the first to finish (the message API 2 has been called should appear), then you are operating asynchronously and you need to make changes.  Synchronous behavior means that if there is a delay for any reason, the second task will wait.  Your code must work if I change that timeout to 10 seconds, 60 seconds, or 60 years.

 

#### My code is operating asynchronously, how do I make it synchronous?

Refer to the N Domains Synchronously topic of lecture 6.

https://venus.cs.qc.cuny.edu/~rlaw/cs355/lectures/06-asynchronous-programming/asynchronous-programming.html#n-domains-synchronously-recursion

 

## Additional Notes

To earn a grade everything must be submitted (code, sequence diagram, and screencast) No partial credit will be given to students stuck in earlier phases.

Be careful of scope creep, keep the project simple.  **The usefulness of your project is not a factor in it's grading.**   Your code will be graded on your programs functionality, reliability, caching, and whether all the requirements are hit.

All code including submissions from previous semesters are passed through Stanford Moss to check for plagiarism.

 

## Submission

Review the code:

- Remember third party libraries are not allowed, your project should **not** have a `node_modules` directory.
- Delete any cache files before submitting.  Make sure your program is not dependent on it's cache.  (In assessment 4 the cache files would be the authentication-cache and the album art images)
- Optionally you can delete your Client ID / Secret / API Key in your authentication file, I will create an account with each of the APIs, should I need to run your code.