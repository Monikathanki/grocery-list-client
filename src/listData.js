let listData =  {
    "categories": [
        {
            "category_Id" : "1",
            "category": "Vegetables"
        },
        {
            "category_Id" : "2",
            "category": "Fruits"
        },
        {
            "category_Id" : "3",
            "category": "Grain"
        },
        {
            "category_Id" : "4",
            "category": "Frozen"
        },
        {
            "category_Id" : "5",
            "category": "Miscellaneous"
        },
    ],
    "lists": [
        {    "id" : "1",
            "name": "Cabbage",
            "note" : "Store name",
            "category": "Vegetables",
            "price": "2.05",
            "weight": "2 lbs",
            "start_date": "2020-01-03T00:00:00.000Z",
            checked: true
        },

        {
            "id" : "2",
            "name": "Maize",
            "note" : "next week new deal",
            "category": "Grain",
            "price": "3.05",
            "weight": "3 lbs",
            "start_date": "2020-01-03T00:00:00.000Z",
            checked: true
        },

        {
            "id" : "3",
            "name": "Pineapple",
            "note" : "next week new deal",
            "category": "Fruits",
            "price": "5.05",
            "weight": "2 piece",
            "start_date": "2020-01-03T00:00:00.000Z",
            "completed_date":"2020-04-03T00:00:00.000Z",
            checked: true
        },
        {
            "id" : "4",
            "name": "Frozen Strawberris",
            "note" : "next week new deal",
            "category": "Frozen",
            "price": "5.05",
            "weight": "3 lbs",
            "start_date": "2020-01-03T00:00:00.000Z",
            "completed_date": "2020-04-03T00:00:00.000Z",
            checked: false
        },
        {
            "id" : "5",
            "name": "Toilet Paper",
            "note" : "next week new deal",
            "category": "Miscellaneous",
            "price": "5.05",
            "weight": "1 pack",
            "start_date": "2020-01-03T00:00:00.000Z",
            "completed_date": "2020-04-03T00:00:00.000Z",
            checked: false
        },
    ]
    
}


export default listData;