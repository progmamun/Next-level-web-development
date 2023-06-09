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

### exists

- `db.practice.find({phone: {$exists: true}})`

### type

- `db.practice.find({friends: {$type: 'array'}})`
- `db.practice.find({skills: {$size: 0}})`

###

- `db.practice.find({'interests.0': 'Travelling'}).project({interests: 1})`

### all

- `db.practice.find({interests: {$all : ['Travelling', 'Cooking', 'Reading']}}).project({interests: 1})`

### elemMatch

- `db.practice.find({
    skills: {$elemMatch: {name: "JAVA", level: "Intermidiate"}}
}).project({skills: 1})`

---

## update methods

### updateOne , $set

- ```
  db.practice.updateOne(
      { _id: ObjectId("6406ad65fc13ae5a400000c6") },
      {
          $set: {
              company: "Programming-hero"
          }
      }
  )
  ```

### $addToSet(duplicate value not set), $each(added multiple value in array)

- ```
  db.practice.updateOne(
      { _id: ObjectId("6406ad65fc13ae5a400000c6") },
      {
          $addToSet: {
              interests: {$each: ['Gamming', "COC"]}
          }
      }
  )
  ```

### unset remove one filed

- ```
  db.practice.updateOne(
      { _id: ObjectId("6406ad65fc13ae5a400000c6") },
      {
          $unset: {occupation: 1 }
      }
  )
  ```

### pop {1 remove last item, -1 remove 1st item}

- ```
  db.practice.updateOne(
      { _id: ObjectId("6406ad65fc13ae5a400000c6") },
      {
         $pop: {languages: 1}
      }
  )
  ```

### The $pull operator removes from an existing array all instances of a value or values that match a specified condition.

- ```
  db.practice.updateOne(
      { _id: ObjectId("6406ad65fc13ae5a400000c6") },
      {
         $pull: {friends: 'Mizanur Rahman'}
      }
  )
  ```

### pullAll remove multiple array value

- ```
  db.practice.updateOne(
      { _id: ObjectId("6406ad65fc13ae5a400000c6") },
      {
         $pullAll: {friends: ["Abdur Rakib", "Tanmoy Parvez"]}
      }
  )
  ```

### deleteOne

- `db.practice.deleteOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") }
)`

### createCollection

- `db.createCollection("test")`

### insertOne

- `db.test.insertOne({name: "AL Mamun Khan"})`

### drop

- `db.test.drop()`

---

### inc

- `db.practice.updateOne({_id: ObjectId('6406ad65fc13ae5a400000c5')},
    {$inc: {age: 1}}
)`

### updateMany

- `db.practice.updateMany(
    {},
    {$rename: {'favoutiteColor': 'favouriteColor'}}
)`

### min

- ```db.practice.updateMany(
      {},
      {
          $min: {
              minAge: 18
          }
      }
  )
  ```
