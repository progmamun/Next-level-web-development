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
