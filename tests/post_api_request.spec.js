//load the playwright module
const {test, execute} = require ('@playwright/test')

//Write a test

test ('create POST api request using static request body', async({request})=> {


    const postAPIResponse = await request.post ('/booking', {
        data: {
        "firstname": "Mike",
        "lastname": "Miller",
        "totalprice": 1000,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "super bowls"

        }


    });
   const postAPIResponseBody = await postAPIResponse.json

   console.log (postAPIResponseBody);


}

);
//create a POST api request

//Validate the status code

//Validate JSOn api response

//Validate nested JSOn objects