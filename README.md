# Terminal-Twitter

A terminal based Twitter client leveraging the funcionality of [ntwitter](https://github.com/AvianFlu/ntwitter).

Usage
---------

1. Clone the repo into a directory you choose
1. npm install
1. Set up an application at [dev.twitter.com](https://dev.twitter.com/apps/new)
1. Make sure you have ```Read, write and direct messages``` access to it
1. Update the config.js file with your credentials
1. Run ```bin/terminal-twitter -h``` for help

You can filter out users from the Home Timeline view by providing their Twitter numeric IDs in the config.filteredIds array:

```javascript
config.filteredIds = [111222333, 333444555, 5556667666];
```
