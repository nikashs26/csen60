# Networking and Servers

## How the internet works
### It's a chain:
- Web browser presents info to you, which it sourced from the computer, iPad, or phone, which it sourced from the router (wifi-wired).
- This router comes through cable, which is sourced from the Internet, which contains a ton of web servers full of html files (all of which comprise a wesbite)
    
## Client-Server Architecture
### Request and Response
- Starting from a server, the server connects to the internet which then connects to clients who are using devies

### HTTP (Hypertext Transfer Protocol)
- Protocol that allows resources to be requested and sent on the internet
- Types of requests: GET, POST, PUT & PATCH, DELETE
- Responses: 404, 502, etc.

### Testing tools
- Network Tab in Browser Devtools
- Ping: Check to see if you can get a response from a server
- Curl: Way to request data from a server (used for API testing)
- Postman: made for testing APIs (curl wrapper)

### Domain Name System (DNS)
- Computer doesn't understand a link like google's link, but it does understand an IP (internet protocol) address 11.11.11.11

### JS Fetch API
- "GET [end point name]" to fetch content