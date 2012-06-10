# Terminal-Twitter

A terminal based Twitter client leveraging the funcionality of [ntwitter](https://github.com/AvianFlu/ntwitter).

Usage
---------

1. Clone the repo into a directory
1. CD into the directory
1. run ```make``` in the terminal
1. When you to run the app with ```bin\terminal-twitter``` you get an error message reminding you setting up an application at [dev.twitter.com](https://dev.twitter.com/apps/new)
1. Set up an application at [dev.twitter.com](https://dev.twitter.com/apps/new)
1. Make sure you have ```Read, write and direct messages``` access to it
1. Update the config.js file with your credentials
1. Run ```bin/terminal-twitter``` to read your tweets from the CLI
1. Learn more about the other command line arguments by executing ```bin/terminal-twitter -h``` in the terminal

You can filter out users from the Home Timeline view by providing their Twitter numeric IDs:

```
bin/terminal-twitter -i 111222333
```

After you executed this line the user with userID 111222333 is filtered out of your home timeline tweets.
