---
title: Messaging Queue Internals Deep Dive
author: Lakshya Khera
pubDatetime: 2024-06-05T10:00:00+05:30
slug: messaging-queue-internals
featured: true
draft: false
tags:
  - tech
  - deep dive
description: Messaging Queue Internals Deep Dive
---

### Messaging Queue Internals -- Deep Dive

So I've been deep diving into message queues lately. Message queues are beautiful things, it decouples your services, aids your distributed system and super good for high throughput systems.

But understanding core concepts and internals is as important as it is.

There are few major concepts when it comes to Message queue!

- Partitions
- Brokers
- Cluster
- Topics
- Consumer group 
- Producers
- Zookeeper

Let's understand these concepts one by one:


### Topics

Topics are topics, topics are specifically a way to group messages together. Just like how databases how tables group data. 

For eg: All transaction related messages can go to topic called `transactions`.

### Partitions

**I've gone through lot of articles and all but to understand things better let's forget the big picture and focus on small parts (not the thing you say in software engineering that often)**

So how I used to imagine message queue. There is a single queue, it takes message and sends it forward. But it's not scalable, it can be choked very easily on heavy load. 

Now what? We can divide these queue into smaller queues, based on topics. 

-> Topic A -- Partition A1 <br>
-> Topic B -- Partition A2 <br>
-> Topic C -- Partition A3 <br>

![Topic Partition Relation](@assets/images/messaging-queue-topic-parition.png)

Not only here, **a single topic can have multiple partitions!**

![Topic Partition Relation](@assets/images/messaging-topics-multiple-queues.png) Here partitions are distributed into multiple servers (brokers, will come over there next).

### Brokers

These are single server, their single job is to consume message and push message. Each broker maintains all partitions for topics. Brokers can also have replicas for horizontal scaling btw.

So the relation between partitions and brokers is, messages can be distributed to different partitions in different brokers. 

![Broker Partition Relation](@assets/images/broker-partition-division.png)

### Clusters

Group of brokers together maintained is known as cluster. Also  clusters can maintain replicas as well.
No the real question how would a client know which broker to connect with ?

Every cluster has a bootstrap broker which shares all list of brokers. The bootstrap server will return metadata to the client that consists of a list of all the brokers in the cluster. 

Then, when required, the client will know which exact broker to connect to to send or receive data, and accurately find which brokers contain the relevant topic-partition.

### Consumers and Consumer groups

Consumers are entities which listens to the message from messaging queue. They can listen to one topic from a single partition. 

![Partition and consumer group](@assets/images/messaging-queue-partitons-consumers-groups.png)

The real issue is with order while consumers in a group consuming from same partition for same topic the order cannot be maintained so the constraint is that a single partition can only be consumed by one consumer in the same group.

### Producers

These entities are the one pushing messages to queue. Producers choose to which partition to send the message based on configured parameter such as hashing key this way load is balanced and if the key is not provided the message gets evenly distributed. 

We can also configure message delivery schematics between messaging queue and producers and it highly depends on your business requirements. 

Link: [Message Delivery Schematics](https://medium.com/@sdjemails/kafka-producer-delivery-semantics-be863c727d3f)

### Zookeepers

These are not very specific to messaging queue but to distributed systems. Zookeepers helps to coordinate between replicas, keeps tracks of leader, manages the configuration between services etc.

They internally have ZNodes and services watch changes to these nodes. 

A great article to deep dives into [Zookepers](https://bikas-katwal.medium.com/zookeeper-introduction-designing-a-distributed-system-using-zookeeper-and-java-7f1b108e236e)


### Conclusion

Messaging queues are indeed a beautiful tool and there are bunch of options with add on features and architecture, this article is build with Apache Kafka in mind.

The high level architecture looks likes this:

![Messaging queue HLD](@assets/images/messaging-queue-hld.png)

Thankyou for reading and stay around for more.

