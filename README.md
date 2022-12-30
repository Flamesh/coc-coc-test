# How to run testing 
- Make sure your nodejs 16.15.0 is already on your env
    ### _I. Test part 1_
        - Please checkout into commit ```git checkout 241cb1526b2fbca85f155aa9256ba28c09bcef83```
        - run ```npm run start```
        
    ### _II. Test part 2_
        - Please checkout into commit ```git checkout 789f353b1da503b4e6a1abb9bf60a6b3516e3fc3```
        - run ```npm run start```
        
    ### _III. Test part 3_
        - Please checkout into new branch ```git checkout master```
    
    **1. Run Frontend code**
        - Open terminal into current project directory
        - ``` npm install ```
        - ``` npm run dev ```
        
    **2. Running Backend code**
        - Open terminal into current project directory
        - ``` cd server install ```
        - ``` npm install ```
        - ``` npm run dev ```

    **3. Test auth token**
        - Please use Postman or any software to help test API.
        - Use POST method call into ``` localhost:3001/auth/login  ``` which header is ```Content-type: application/json```, data are ```email: 'nobita@gmail.com' ``` and ```password: 123456```.
        - Get accessToken from resposne.
        - Use GET method call into ```localhost:3001/auth/test-auth```
        - Set authorization is ```Bearer {{accessToken}}``

    **4. Some new features with part 2**
        Frontend will have a difference with part 2 because I added:
        - Routing into a new page (No new dependencies)
        - Use Context to save and blind data
        - Home now is protected router (can't access without login)
    

