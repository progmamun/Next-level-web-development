# Module 7: Explore Mongoose More Queries

### [Dowload-nosqlbooster](https://nosqlbooster.com/downloads)

- `db.practice.find({age: {$gte: 18 , $lt: 30}}).projection({age: 1}).sort({age: 1})`

## in

- `db.practice.find({age: {$in: [18, 23]}}).projection({age: 1}).sort({age: 1})`
- `db.practice.find({gender: 'Female', age: {$in: [18, 23]}}).projection({gender: 1,age: 1}).sort({age: 1})`

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
