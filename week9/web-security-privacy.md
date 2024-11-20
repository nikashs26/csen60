# Web Security and Privacy

## Security
### Potential Security Oversights
- No user authentication
- Allowing weak authentication
- Not sanitizing form entries and requests
- Not encrypting sensitive communication
- Sessions that don't time out
- Out-of-date (unpatched) software
    - New vulnerabilities are disocvered all the time
- Bugs that expose user data

## Agenda
### Attack
- Cross-site scripting
- DDOS
## Network
- Symetric Encryption
- Asymetric Encryption

## Cross Site Scripting
- meant to avoid potential hacking on your website to take your information and change the website
### What if HTML includes script tags? That's very dangerous. Here's what the douche could do:
- Replace page with a new one
    - fake instance of page to get passwords, accounts, etc.
- Pass information from page to foreign page
- Cookies, passwords, credit card numbers, session lds
- Download's user's cookies for other sites

### How the cross scripting is done:
- Attacker provides link
- It puts a script to its website and you therefore go to that and it injects this into your HTML
- The HTML would then have the script in it

### Mitigation of this Cross Site Scripting
- Don't allow any HTML to be inserted by stripping out any html tags via the backend
- Same with maliciious HTML tags
- Similar case with SQL

## Distributed Denial of Servuce (DDoS)
- Overwhelm a site with malicious requests to block regular, human users off
- An example is essentially taking malicious bots and sending them to a site so human users can be blocked out
- Requests don't come from one machine
    - These are easily blocked
- Attackers use many controlled machines

## How to lower DDoS
- Rate limiting
    - Limit volume of requests through javascript
- Throw out excess traffic at random
- Distribute traffic across network
    - By distributing load, can accomodate huge volume
## Network Security
- Need to send requests: Get or Post
- Need to send responses: HTML docs
- Network channels aren't nessecarily secure

## Secure Communication
- For anyone other than intended recipient, we want our message to be:
- unreadable
- unmodifiable

## Encryption and Decryption
- Encryption
    - ensures privacy within an organization and on the internet
    - the conversino of data into an unreadable form, called ciphertext
- Descryption
    - The process of converting cipthertext back into readable text

## Encryption types:
- 2 types: Symetric-key and asymmetric-key
- SSL (Secure Sockets Layer)

## Broswer-Server Communication
- Can use encrypted communication in web apps
    - HTTPS represents an encrypted (secure) connection
- HTTPS is a more secure HTTP
    - Data passed back and forth is encrypted
    - Browser and server agree on key

## HTTPS Connections
- Browser connects to server
- SSL handshake protocol

## Cookies
- A cookie is a name/value pair created by website to store information on your computer
### Here's how it works:
- User adds data through browser which gets stored on website, and it comes back to your browser
- Session ID tracks who you are regardless of login

## Privacy Policy
- Statement saying what website does with any info it collects
- Generally considered legally binding
- Written in dense legal language
- Users may not pay attention

## Digital Certificate
- The contents of a server's digital certificate include:
    - Public key
    - effective date
### Digital Authority
- Trusted third party organization or company that issues the certificates

## Advertising/Ad Tracking
- Companies can use you as a "product" to sell to advertising companies when you get their product for free


## Behavior Logging
- Any action a user takes on a webpage can be logged
- HTML event listeners
    - Clicks
    - Hovers
- Time between actions
    - How long you spend looking at a post
    - If you skip an ad and where in the ad did you skip

## Data Applications
- Based on user action, data can be gained by companies for future ads for any consumer

## Sensitive Info
- Personally identifiable information (PII)
    - Anything related to a user like name, email, and phone
- Financial info like bank accounts and credit cards
- Legally sensitive info
    - HIPAA
    - FERPA
    - COPPA

## Legal Responsibility
- Privacy has legal implication
- Developer responsible for breaches