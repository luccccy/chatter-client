# chatterbox-client
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.

# SPRINT SEVEN: CHATTERBOX

This assignment constitutes the beginning of a multi-sprint journey exploring client-server architecture. Today, you'll build a chat client that allows you to communicate with your fellow students. You'll do this using $.ajax to save (POST) and fetch (GET) JSON data to and from a remote server.

**High Level Goals of this Sprint**

* Successfully implement a request-response based chat application using component-based thinking with good separation of concerns.
* Gain experience interacting with a REST API (in this case the Parse REST API)
* Gain exposure to some common Browser Security themes

**Key HTTP Vocabulary**

The following reading will expose you to a lot of vocabulary having to do with HTTP. You don't need to memorize these terms yet, but be prepared to revisit them and commit them to memory when you begin your job hunt as you can expect to be asked about them during phone screens.

* [Request-Response Communication](https://en.wikipedia.org/wiki/Request%E2%80%93response)
* The [HTTP Session](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#HTTP_session) section of Wikipedia's [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) page
* The [Request Methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) section of Wikipedia's [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) page
* [List of HTTP Status](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) Codes. Don't read this entirely, but at least look into what each of the NXX (e.g. 2XX, 3XX) sections mean.

**Browser Security**

Read all about [Cross-site scripting (XSS)](https://owasp.org/www-community/attacks/xss/). You may find this Interactive Tutorial on [Cross-site scripting (XSS)](https://xss-game.appspot.com/) or this one [from Google](https://www.google.com/about/appsecurity/learning/xss/) useful. Note that these tutorials are pretty hard, you don't have to complete them if you don't find them useful.

**Tools You'll Use**

**ES6**

The ECMAScript specification is a scripting language specification upon which JavaScript implementations (such as those found in web browsers like Chrome) are based. In June 2015, the 6th edition of the ECMAScript standard was finalized, and is commonly referred to as ES6. This was the first major update to the language since 2009. Since then, the committe that decides on language updates has released ES7, ES8 and ES9 (about one update per year) with several smaller but important language improvements.

We encourage you to try experimenting with some new features. Here are some suggested ones for this sprint:

* arrow functions
* spread (...) operator
* rest parameters
* object literal extensions
* for...of loops
* template strings

**Package Management**

A [package manager](https://en.wikipedia.org/wiki/Package_manager) is a tool for automating the process of installing, upgrading, configuring and managing dependencies (underscore, jquery, etc) for projects. Most package managers run through a command-line interface.

Today, you'll use a popular package manager called npm to install and keep track of the tools your client-side code requires.

**Parse API**

We've set up a remote server using the [Parse](http://parseplatform.org/) platform. Later (as part of a different sprint) you'll build your own (local) server and replace the (remote) one you're using today.

Since you'll eventually reuse parts of your solution to this sprint, try to make your code readable/maintainable so that future-you doesn't get angry at present-you for making things messy.

Parse has documented their REST API [here](http://docs.parseplatform.org/rest/guide/). Please note that you will only need to use a small part of it. In the [Quick Reference](http://docs.parseplatform.org/rest/guide/#quick-reference) section, there's a heading named "Objects" that you'll need to refer to. You'll also need to refer to the [Request Format](http://docs.parseplatform.org/rest/guide/#quick-reference_request-format) section.

Parse is a very generalized system and will allow you to store any kind of object you like. During this sprint, we'll be using it as a shared message server that everyone in the class can read and write from (via REST).

The message objects you send to the parse server (via POST requests) should be in the following format:

```javascript
var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};
```

To get you started, here's an example POST request. Note that any messages you POST to the server are viewable by everyone, so be nice.
```javascript
$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
```

**API Keys and Git**

You should NEVER check in API Keys to version control. It's easy to accidentally commit sensitive data to your git repo if you're not careful. If you do so (and push to GitHub), everyone will have access to your private keys (which means they can mess with your data).

A common practice (which we adopt here) is to prevent that by storing our API keys in a special file *config.js* (referenced in client/index.html) that we add to our *.gitignore* so that it's never committed to our repo. This means that after you clone down the repo, before running the app, you must re-create that special file and add your API keys to it or the app won't run.

To make this easier and less prone to breakage, we create a dummy file (which we do commit) in the correct format, and add placeholders for the real data within it. In this application, that dummy file is located at *client/env/config.example.js*.

To get your application running with the real API keys, follow these steps:

* Duplicate *client/env/config.example.js* renaming it to *client/env/config.js* in the process.
  * NOTE: *client/env/config.js* is also ignored in your *.gitignore* so that the API keys you add won't be committed.
* Replace the placeholder strings in your newly created *client/env/config.js* with the keys delivered by staff.
* Update the *CAMPUS* variable with your campus identifier (ex: atx, nyc, la, sfm6, sfm8, hrr, rpt, etc).

# Bare minimum requirements

**Install Pomander**

In Terminal, run the following command from within this repository:
```javascript
curl -s https://raw.githubusercontent.com/reactorcore/pomander/master/bin/install | bash
```
Pomander will check your code for syntax errors and violations against the Hack Reactor style guide before each commit.

It uses a pre-commit hook to run staged files through eslint before each commit. eslint is a linter that will block your commit should you have any syntax errors, or, should you violate the Hack Reactor style guide. There are some preferred whitespace style rules that will give warnings but not block your commit. Your work will be of a higher quality if you follow the instructions of the linter. That said, if the linter gives you any funny bugs, these bugs are not intentional, and you should feel free to skip using it during commits with the --no-verify option.

**npm**

This sprint uses [npm](http://docs.parseplatform.org/rest/guide/#quick-reference_request-format) to manage its dependencies. npm comes bundled with Node, and is another JavaScript package manager that makes it easy for developers to share and reuse code. Even though npm started in the Node ecosystem, it is quickly becoming the default choice for sharing all types of JavaScript code.

Here are a few tips to help get up and running:

* To install all the dependencies run npm install
* npm's configuration file is package.json
* npm downloads packages into node_modules

Install this sprint's dependencies:
* Install Node.js if you haven't yet.
* Run npm install

**Separation of Concerns**

As you write the functions that will power your chat application, consider what job each of these functions is doing and in which file that function should ideally live. Take note of times where you are mixing concerns and attempt to split functions up into smaller functions so that it's easier to place similar or related concerns together into one file.

The files included in this project suggest one possible arrangement for the separation of concerns and project organization. Use the proposed structure or refactor to one you find more intuitive.

**Messages**

Look inside the client/scripts folder and start coding.
* Display messages retrieved from the parse server.
  * Read about [Underscore's easy templating abilities](https://css-tricks.com/lodge/learn-jquery/24-templating-underscore/), then create a template function to render a message to HTML. Alternatively, you may use jQuery to construct DOM nodes and compose them together to create the desired HTML output. Underscore's template system is quite extensive and you can read about it's advanced capabilities here.
  * Be sure to use proper escaping on any user input. Since you're displaying input that other users have typed, your app is vulnerable to XSS attacks. See the section about escaping below.

**Note:** If you issue an XSS attack, you must make it innocuous enough to be educational, rather than disruptive. Basically you should scope your attacks to be console.logs or minor style changes. The following are **not** allowed:

* alerts or popups
* adding or removing dom elements
* anything using setInterval
* spamming the server
* DDOS attacks
* Allow users to save new chat messages to the server
* Setup a way to refresh the displayed messages (either automatically or with a button)

**A Note About Escaping**

Escaping is the way we ensure that when users input things to our sites, we don't allow them to write our site's code for us. For example, what if someone's user name was *<script>$('body').prepend('you got pwned')</script>?* If we didn't escape, that 'user name' would get executed just like any other code, and all the sudden you'll have a new div on your site that says 'you got pwned', anytime that person's user name is displayed.

Now that might seem trivial, but understand that attacks like this can affect (or transmit) your users data too. That's not cool.

You'll need to figure out a way to effectively protect your app against cross-site scripting (XSS) attacks issued by your class-mates during this sprint. Part of the fun of this sprint is figuring out how to do so.

As always, google is your friend :)

**Rooms**

Allow users to create rooms and enter existing rooms - Rooms are defined by the .roomname property of messages, so you'll need to filter them somehow.

**Socializing**

Allow users to 'befriend' other users by clicking on their username
Display all messages sent by friends in bold or with highlight

# ADVANCED CONTENT
Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer. The following problem is no exception, and you may have to do a fair amount of work to get enough context to get started on the problem itself.

For each of the features below, write new *describe* blocks, with tests, inside *spec/chatterboxSpec.js* before implementing.

* Construct a Parse query that responds with only messages from a specific room. Use this query to simplify your room filtering logic.
* Allow users to have more than one room open at a time using tabs
* Show unread message counts in open tabs and a special notifier when the user is mentioned

# NIGHTMARE MODE
If you've made it this far you're in for some real fun, it's time to convert your Chatterbox application into a Twitter clone. If you don't have a Twitter account we recommend you create one so that you can direct your remaining efforts towards mimicking the functionality and styling of a real Twitter feed.

Recognizing that there are constraints in place given that your classmates are not using the same code base as you (of course you could organize!), feel free to conduct this refactor as you see fit. If you wish you may use the following as recommendations for the features you should implement to complete the refactor successfully:

* A settings pane where a user can change their personal info and upload a photo (photos may not be stored in parse)
* The ability to follow other users, only displaying the messages of those you are following
* The ability to 'heart' other users' messages
* The ability to generate and display summary metrics on the activity of yourself and other users
* Styling that looks as close as possible to an actual Twitter feed. You might consider the wildly popular CSS framework [Bootstrap](https://getbootstrap.com/) to help you out, especially since it was built at Twitter
