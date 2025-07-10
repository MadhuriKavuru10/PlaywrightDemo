const { test, expect } = require('@playwright/test');

test('create POST API request', async ({ request }) => {
  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2023-01-01",
        checkout: "2023-01-10"
      },
      additionalneeds: "Breakfast"
    }
  });

  console.log('Status:', response.status());
  const body = await response.json();
  console.log('Response Body:', body);

  expect(response.status()).toBe(200);
});