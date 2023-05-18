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
   $sort: 1
  },
  {
  $limit: 3
  }

])
```
