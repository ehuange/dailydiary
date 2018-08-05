# Dailydiary

## How to run
* This app requires PostgreSQL for DB storage. Please make sure you have an instance running.
- npm install
- npm run server-dev (start api server)
- ng serve (serve static files through angular)

## Accessing the application
http://localhost:4200 


## Requirements

Design and implement a daily diary application

### Design and implement a Single Page Application with following features:
1. Add or edit today's page
2. Save page
3. Access old pages using a calendar widget
4. Basic search by keywords
   - The search is based on the whole words found in the search text except “the”, “and”, “or” “is” or similar common words
   - The search can include texts from title or body of a diary entry
   - No ranking is required. Please just list out all documents where we can find matched word(s) either in title or body or in both

## Other requirements
* Use JDK 8+ (rebuilt backend using NodeJS)
* Spring Boot (Skeleton code with minimal rest controller already provided)
* Responsive design
* AngularJS 2+ 
* Good looking UI 

### Rest-API
* GET /api/v1/pages 
    - Returns list of daily pages
* GET /api/pages/2018-01-01 
    - Return page of that day
* GET /api/pages/today   
    - Returns today's page
* POST /api/pages/      
    - Creates a page for today. That can be accessed by today's date or using 'today'
* GET /api/v1/pages?search=keyword 
    - Returns list of daily pages where match is found

    
### Check following locations for mock up

* src/main/resources/static/home.png

* src/main/resources/static/search.png