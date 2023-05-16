# Module 7: Explore Mongoose More Queries

### [Dowload-nosqlbooster](https://nosqlbooster.com/downloads)

- `db.practice.find({age: {$gte: 18 , $lt: 30}}).projection({age: 1}).sort({age: 1})`

## in

- `db.practice.find({age: {$in: [18, 23]}}).projection({age: 1}).sort({age: 1})`
- `db.practice.find({gender: 'Female', age: {$in: [18, 23]}}).projection({gender: 1,age: 1}).sort({age: 1})`
- `db.practice.find({ "skills.name": { $in: ['JAVASCRIPT', 'PYTHON']}}).project({'skills.name': 1})`

### implicit and

## nin

- `db.practice.find({gender: 'Female', age: {$nin: [18, 23]}}).projection({gender: 1,age: 1}).sort({age: 1})`
- `db.practice.find({
    gender: 'Female', 
    age: {$nin: [18, 23]},
    interests: 'Gaming',
}).projection({gender: 1,age: 1, interests: 1}).sort({age: 1})`
- `db.practice.find({
    gender: 'Female', 
    age: {$nin: [18, 23]},
    interests: {$in: ['Gaming', 'Cooking']},
}).projection({gender: 1,age: 1, interests: 1}).sort({age: 1})`

### and operator

- ````db.practice.find({
      $and: [
          {gender: 'Female'},
          {age: { $lt: 30 }}
      ]
  }).project({gender: 1, age: 1}).sort({age: 1})```
  ````
- ````db.practice.find({
        $and: [
            {gender: 'Female'},
            {age: { $lt: 30 }},
            {"skills.name": 'JAVASCRIPT'}
        ]
    }).project({gender: 1, age: 1, 'skills.name': 1}).sort({age: 1})```
  ````

  ## OR operator

  - ```
      db.practice.find({
        $or: [
            {"skills.name": 'JAVASCRIPT'},
            {"skills.name": 'PYTHON'},
        ]
    }).project({'skills.name': 1})
    ```

### explicit and , when file name are same

- ```db.practice.find({
      $and: [
          { age: { $ne: 18 } },
          { age: { $gt: 15 } }
      ]
  }).project({age: 1}).sort({age: 1})
  ```
