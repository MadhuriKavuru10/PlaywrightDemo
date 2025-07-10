const{test,expect} = require("@playwright/test")

test ("My First Test", async function ({page}){ 
    expect (12).toBe (12)

})

test ("My Second Test", async function({page}) { 

    expect (101).toBe (101)
    
})

test ("My Third Test", async function({page}) { 
   
    expect (2.0).toBe (2.0)
})

test ("My Fourth Test", async function({page}) { 
   
    expect ("Madhuri Kavuru").toContain("Madh")
    expect(true).toBeTruthy
})

test ("My Fifth Test", async function({page}) { 
   
    expect(false).toBeFalsy
})

test ("My sixth Test", async function({page}) { 
   
    expect("Madhuri Kavuru".includes("Mad").toBeTruthy)
})