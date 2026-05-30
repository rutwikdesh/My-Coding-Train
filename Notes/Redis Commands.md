General Commands:

ping: Tests connection to the Redis server (15:56).
String Commands:

set: Sets a value for a specific key (18:27).
get: Retrieves the value of a key (18:55).
set nx: Sets a value only if the key does not already exist (23:46).
mget ...: Retrieves multiple key values at once (25:32).
mset ...: Sets multiple key-value pairs (26:26).
incr: Increments a numeric value by 1 (26:56).
incrby: Increments a value by a specified amount (27:09).
expire: Sets an expiration time for a key (33:03).
List Commands:

lpush: Pushes an element to the left (head) of a list (38:29).
rpush: Pushes an element to the right (tail) of a list (38:54).
rpop: Removes and returns an element from the right (tail) of a list (40:54).
llen: Returns the length of a list (41:22).
blpop: Blocking pop from the left side of a list (42:49).
lrange: Returns a range of elements from a list (48:04).
Set Commands:

sadd: Adds members to a set (53:34).
sismember: Checks if a member exists in a set (53:06).
sinter: Performs an intersection between sets (54:12).
Stream & Geospatial Commands:

xadd \*: Adds an entry to a stream (1:04:00).
geoadd: Mentioned for storing location data (1:09:00).
geosearch: Used for querying items within a specific radius (1:09:50).
