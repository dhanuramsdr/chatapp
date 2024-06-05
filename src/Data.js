const plans = [
    {
        plan : "Level 1",
        Fee : 200,
        Fee2 : 2400,
        user : "Basic Level Doubt",
        storage : "Unlimited Chat",
        feature_flags : [1,1,0,0,0,0],  /* 1 , 0 - represents flag */
    },
    {
        plan : "Level 2",
        Fee : 400,
        Fee2 : 4800,
        user : "Medium Level Doubt",
        storage : "Unlimited chat",
        feature_flags : [1,1,1,1,1,0],  /* 1 , 0 - represents flag */
    },
    {
        plan : "Level 3",
        Fee : 700,
        Fee2 : 8400,
        user : "Advance Level",
        storage : "Unlimited Chat",
        feature_flags : [1,1,1,1,1,1], /* 1 , 0 - represents flag */
    },
    {
        plan : "Level 4",
        Fee : 800,
        Fee2 : 9600,
        user : "Advavance Level",
        storage : "Unlimited Chat",
        feature_flags : [1,1,1,1,1,1], /* 1 , 0 - represents flag */
    }

]

const features = ["chat time 9.00am to 6.00pm","Expect Trainers","chat history available","Material download available"]

export {plans,features}