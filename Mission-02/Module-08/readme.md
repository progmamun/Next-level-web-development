# Module 8: MongoDB Aggregation Framework and indexing.

> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.
> The stages make up what is known as a pipeline.
> The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.

### Aggregation Syntax

- db.collection.aggregate([
  // stage 1
  {}, -> pipeline
  // stage 2
  {}, -> pipeline
  // stage 3
  {} -> pipeline
  ])

### $match aggregation operator

- `db.practice.aggregate([
    // stage Match
    {$match: {favouriteColor: 'Indigo', gender: 'Male'}},
    {$project: {gender: 1, age: 1, favouriteColor: 1}}
])`

### $addFields

- `db.practice.aggregate([
    // add field stage 
    {
        $addFields: {
            salary: {
                $toInt: {
                    $floor: {
                        $multiply: [{$rand: {}}, 100]
                    }
                }
            }
        }
    },
    {$out: "salarywithpractice"}
])`

- `db.practice.aggregate([
    // add field stage 
    {
        $addFields: {
            salary: {
                $toInt: {
                    $floor: {
                        $multiply: [{$rand: {}}, 100]
                    }
                }
            }
        }
    },
    {$merge: "practice"}
])`

### $group

-

```db.practice.aggregate([
 // group stage
 {
 $group: {
           _id: {
               age: "$age",
 email: "$email"
 }
}}
])
```

### accumulator, $sort, $limit

-

```db.practice.aggregate([
  {$match: {age: {$gt: 18}}},
  // group stage
  {
  $group: {
            _id: "$salary",
  persons: { $sum: 1 } // accumulator
        }
    },
    {
        // project stage
        $project: {
            _id: 0,
            salary: "$\_id",
  persons: 1,
  }
  },
  {
  // sort stage
   $sort: {salary: 1}
  },
  {
  $limit: 3
  }

])
```

### accumulator operator using aggregation

-

```
db.practice.aggregate([
    // group stage
   { $group: {
       _id: null,
       count: {$sum: "$salary"},
       maxSalary: {$max: "$salary"},
       minSalary: {$min: "$salary"},
       avgSalary: {$avg: "$salary"}
   }},
   {
       $project: {
           count: 1,
           maxSalary: 1,
           minSalary: 1,
           avgSalary: 1,
           salaryRange: {$subtract: [ "$maxSalary", "$minSalary" ]}
       }
   }
])
```

### $unwind

-

```
db.practice.aggregate([
    {
        // unwind stage
        $unwind: "$friends"
    },
    {
        $group: {
            _id: "$friends",
            count: { $sum: 1 }
        },
    }
])
```

### $facet

-

```
db.practice.aggregate([
    { $match: { _id: ObjectId("6406ad63fc13ae5a40000064") } },
    {
        $facet: {
            // sub pipline
            "friendsCount": [
                // stage
                { $project: { friendCount: { $size: "$friends" } } }
            ],
            // sub pipline
            "interestsCount": [
                // stage
                { $project: { interestesCount: { $size: "$interests" } } }
            ],
            "skillsCount": [
                // stage
                {$project: {skillsCount: {$size: "$skills"}}}
            ]
        }
    }
])
```

### $lookup

-

```
db.practice.aggregate([
    { $match: { email: "dladley0@washingtonpost.com" } },
    {$lookup: {
           from: "additionalInfo",
           localField: "email",
           foreignField: "userEmail",
           as: "additionalInfo"
         }}
])
```

-

```
db.additionalInfo.updateOne({userEmail: "dladley0@washingtonpost.com"}, {
    $unset: { userEmail: 1 }
})
```

-

```
db.additionalInfo.updateOne({_id: ObjectId("6466eb489f2debd244779a9f")},
    { $set: {userId: new ObjectId("6406ad63fc13ae5a40000064")}
})
```

-

```
db.practice.aggregate([
    // { $match: { _id: ObjectId("6406ad63fc13ae5a40000064") } },
    { $match: { email: "dladley0@washingtonpost.com" } },
    {$lookup: {
           from: "additionalInfo",
           localField: "_id",
           foreignField: "userId",
           as: "additionalInfo"
         }}
])
```

---
