# Redis Commands for Interview Prep

## General Commands
- `ping`: Tests connection to the Redis server.
- `quit`: Closes the connection.
- `select <index>`: Switches to the specified database (0-15 by default).
- `move <key> <db>`: Moves a key from the current database to another.
- `flushdb`: Removes all keys in the current database.
- `flushall`: Removes all keys in all databases.
- `dbsize`: Returns the number of keys in the current database.
- `info`: Provides server information and statistics.
- `monitor`: Streams back every command processed by the server.
- `slowlog`: Manages Redis slow queries log.
- `time`: Returns the current server time.

## String Commands
- `set <key> <value>`: Sets a value for a specific key.
- `get <key>`: Retrieves the value of a key.
- `setnx <key> <value>`: Sets a value only if the key does not already exist.
- `setex <key> <seconds> <value>`: Sets a value with expiration time.
- `psetex <key> <milliseconds> <value>`: Sets a value with expiration in milliseconds.
- `getset <key> <value>`: Sets the string value of a key and returns its old value.
- `mget <key1> <key2> ...`: Retrieves multiple key values at once.
- `mset <key1> <value1> <key2> <value2> ...`: Sets multiple key-value pairs.
- `msetnx <key1> <value1> ...`: Sets multiple keys only if none exist.
- `incr <key>`: Increments a numeric value by 1.
- `incrby <key> <increment>`: Increments a value by a specified amount.
- `decr <key>`: Decrements a numeric value by 1.
- `decrby <key> <decrement>`: Decrements a value by a specified amount.
- `append <key> <value>`: Appends a value to a string.
- `strlen <key>`: Returns the length of the string value.
- `getrange <key> <start> <end>`: Gets a substring of the string.
- `setrange <key> <offset> <value>`: Overwrites part of a string.

## List Commands
- `lpush <key> <value1> <value2> ...`: Pushes elements to the left (head) of a list.
- `rpush <key> <value1> <value2> ...`: Pushes elements to the right (tail) of a list.
- `lpop <key>`: Removes and returns the leftmost element of a list.
- `rpop <key>`: Removes and returns the rightmost element of a list.
- `llen <key>`: Returns the length of a list.
- `lindex <key> <index>`: Returns the element at a specific index.
- `lrange <key> <start> <end>`: Returns a range of elements from a list.
- `ltrim <key> <start> <end>`: Trims a list to the specified range.
- `lrem <key> <count> <value>`: Removes elements equal to value from a list.
- `lset <key> <index> <value>`: Sets the value of an element in a list by index.
- `linsert <key> BEFORE|AFTER <pivot> <value>`: Inserts value before or after pivot.
- `blpop <key1> <key2> ... <timeout>`: Blocking pop from the left side of a list.
- `brpop <key1> <key2> ... <timeout>`: Blocking pop from the right side of a list.
- `brpoplpush <source> <destination> <timeout>`: Pops from source and pushes to destination atomically.

## Set Commands
- `sadd <key> <member1> <member2> ...`: Adds members to a set.
- `srem <key> <member1> <member2> ...`: Removes members from a set.
- `smembers <key>`: Returns all members of a set.
- `scard <key>`: Returns the number of members in a set.
- `sismember <key> <member>`: Checks if a member exists in a set.
- `sinter <key1> <key2> ...`: Returns the intersection of multiple sets.
- `sunion <key1> <key2> ...`: Returns the union of multiple sets.
- `sdiff <key1> <key2> ...`: Returns the difference between sets.
- `sinterstore <destination> <key1> <key2> ...`: Stores intersection in destination.
- `sunionstore <destination> <key1> <key2> ...`: Stores union in destination.
- `sdiffstore <destination> <key1> <key2> ...`: Stores difference in destination.
- `smove <source> <destination> <member>`: Moves member from source to destination set.
- `spop <key> [count]`: Removes and returns random members from a set.
- `srandmember <key> [count]`: Returns random members without removing.

## Hash Commands
- `hset <key> <field> <value>`: Sets field in hash to value.
- `hget <key> <field>`: Gets the value of a hash field.
- `hmset <key> <field1> <value1> <field2> <value2> ...`: Sets multiple hash fields.
- `hmget <key> <field1> <field2> ...`: Gets values of multiple hash fields.
- `hgetall <key>`: Returns all fields and values of a hash.
- `hlen <key>`: Returns the number of fields in a hash.
- `hexists <key> <field>`: Checks if field exists in hash.
- `hdel <key> <field1> <field2> ...`: Deletes one or more hash fields.
- `hkeys <key>`: Returns all field names in a hash.
- `hvals <key>`: Returns all values in a hash.
- `hincrby <key> <field> <increment>`: Increments field by integer.
- `hincrbyfloat <key> <field> <increment>`: Increments field by float.
- `hstrlen <key> <field>`: Returns string length of field value.

## Sorted Set Commands
- `zadd <key> <score1> <member1> <score2> <member2> ...`: Adds members with scores.
- `zrange <key> <start> <stop> [WITHSCORES]`: Returns range of members by index.
- `zrevrange <key> <start> <stop> [WITHSCORES]`: Returns range by index in reverse order.
- `zrangebyscore <key> <min> <max> [WITHSCORES] [LIMIT]`: Returns range by score.
- `zrevrangebyscore <key> <max> <min> [WITHSCORES] [LIMIT]`: Reverse range by score.
- `zrem <key> <member1> <member2> ...`: Removes members from sorted set.
- `zincrby <key> <increment> <member>`: Increments score of member.
- `zcard <key>`: Returns number of members in sorted set.
- `zcount <key> <min> <max>`: Counts members in score range.
- `zscore <key> <member>`: Returns score of member.
- `zrank <key> <member>`: Returns index of member (ascending).
- `zrevrank <key> <member>`: Returns index of member (descending).
- `zinterstore <destination> <numkeys> <key1> <key2> ... [WEIGHTS] [AGGREGATE]`: Intersect and store.
- `zunionstore <destination> <numkeys> <key1> <key2> ... [WEIGHTS] [AGGREGATE]`: Union and store.

## HyperLogLog Commands
- `pfadd <key> <element> [element ...]`: Adds elements to HyperLogLog.
- `pfcount <key> [key ...]`: Returns approximated cardinality.
- `pfmerge <destkey> <sourcekey> [sourcekey ...]`: Merge multiple HyperLogLogs.

## Geospatial Commands
- `geoadd <key> <longitude> <latitude> <member> [<longitude> <latitude> <member> ...]`: Adds geospatial items.
- `geopos <key> <member> [<member ...>]`: Returns longitude/latitude of members.
- `geodist <key> <member1> <member2> [unit]`: Returns distance between two members.
- `georadius <key> <longitude> <latitude> <radius> <unit> [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT <count>] [ANY] [ORDER]`: Query items within radius.
- `georadiusbymember <key> <member> <radius> <unit> [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT <count>] [ANY] [ORDER]`: Query by member.
- `geohash <key> <member> [<member ...>]`: Returns geohash string of members.

## Stream Commands
- `xadd <key> *|ID <field1> <value1> [field2> <value2> ...]`: Adds entry to stream.
- `xrange <key> <start> <end> [COUNT <count>]`: Range of entries from stream.
- `xrevrange <key> <end> <start> [COUNT <count>]`: Reverse range of entries.
- `xlen <key>`: Number of entries in stream.
- `xread [COUNT <count>] [BLOCK <milliseconds>] STREAMS <key1> <key2> ... <ID1> <ID2> ...`: Reads from streams.
- `xgroup CREATE <key> <groupname> <ID> [MKSTREAM]`: Creates consumer group.
- `xgroup SETID <key> <groupname> <ID>`: Sets group ID.
- `xgroup DESTROY <key> <groupname>`: Destroy consumer group.
- `xgroup DEL-CONSUMER <key> <groupname> <consumername>`: Remove consumer.
- `xreadgroup GROUP <group> <consumer> [COUNT <count>] [BLOCK <milliseconds>] STREAMS <key1> <key2> ... <ID1> <ID2> ...`: Read group.
- `xack <key> <group> <ID> [ID ...]`: Acknowledge processed messages.
- `xpending <key> <group> [COUNT <count>] [IDLE <idle>] [START <start>] [END <end>] [CONSUMER <consumer>]`: Pending messages.
- `xclaim <key> <group> <consumer> <min-idle-time> <ID> [ID ...]`: Transfer ownership.

## Transactions
- `multi`: Marks start of transaction block.
- `exec`: Executes all commands in transaction block.
- `discard`: Discards all commands in transaction block.
- `watch <key1> <key2> ...`: Watches keys for optimistic locking.
- `unwatch`: Unwatches all keys.

## Pub/Sub Commands
- `subscribe <channel> [<channel ...>]`: Subscribes to channels.
- `unsubscribe [<channel> [<channel ...>]]`: Unsubscribes from channels.
- `psubscribe <pattern> [<pattern ...>]`: Subscribes to patterns.
- `punsubscribe [<pattern> [<pattern ...>]]`: Unsubscribes from patterns.
- `publish <channel> <message>`: Publishes message to channel.
- `pubsub CHANNELS [<pattern>]`: Lists active channels.
- `pubsub NUMSUB [<channel1> <channel2> ...]`: Returns number of subscribers.
- `pubsub NUMPAT`: Returns number of subscriptions to patterns.

## Scripting (Lua)
- `eval <script> <numkeys> [key1] [key2] ... [arg1] [arg2] ...]`: Executes Lua script.
- `evalsha <sha1> <numkeys> [key1] [key2] ... [arg1] [arg2] ...]`: Executes cached script.
- `script exists <sha1> [<sha1> ...]`: Checks existence of scripts.
- `script flush`: Removes all scripts from cache.
- `script kill`: Kills currently executing script.
- `script load <script>`: Loads script into cache.

## Server Management
- `config get <parameter>`: Gets configuration parameter.
- `config set <parameter> <value>`: Sets configuration parameter.
- `config resetstat`: Resets statistics.
- `flushall`: Removes all keys from all databases.
- `flushdb`: Removes all keys from current database.
- `save`: Synchronously saves dataset to disk.
- `bgsave`: Asynchronously saves dataset to disk.
- `bgrewriteaof`: Asynchronously rewrites AOF file.
- `shutdown [NOSAVE] [SAVE]`: Synchronously save and shut down server.
- `lastsave`: Returns Unix time of last successful save.
- `slowlog get [<number>]`: Gets slow log entries.
- `slowlog len`: Gets length of slow log.
- `slowlog reset`: Resets slow log.
- `info [section]`: Returns server information.
- `monitor`: Listens for all requests received by server.
- `sync`: Used for replication internals.
- `psync <runid> <offset>`: Continues replication.
- `role`: Returns role of instance in replication.

## Key Expiration
- `expire <key> <seconds>`: Sets expiration time in seconds.
- `pexpire <key> <milliseconds>`: Sets expiration in milliseconds.
- `expireat <key> <timestamp>`: Sets expiration at Unix timestamp.
- `pexpireat <key> <milliseconds-timestamp>`: Sets expiration at Unix timestamp in ms.
- `ttl <key>`: Returns time to live in seconds.
- `pttl <key>`: Returns time to live in milliseconds.
- `persist <key>`: Removes expiration from key.

## Bitmap Commands
- `setbit <key> <offset> <value>`: Sets or clears bit at offset.
- `getbit <key> <offset>`: Returns bit value at offset.
- `bitcount <key> [start end]`: Counts set bits in string.
- `bitop operation <destkey> <key1> [<key2> ...]`: Performs bitwise operations.
- `bitpos <key> <bit> [start] [end]`: Finds first bit set to 0 or 1.

## HyperLogLog (Additional)
- `pfmerge <destkey> <sourcekey> [sourcekey ...]`: Merge N HyperLogLogs into destkey.
- `pfcount <key> [key ...]`: Return approximated cardinality of set(s).

Note: For interview preparation, focus on understanding:
1. Time complexity of commands (O(1), O(log n), O(n), etc.)
2. Common use cases for each data type
3. Differences between similar commands (e.g., BLPOP vs BRPOP)
4. When to use which data structure
5. Atomicity and transaction guarantees