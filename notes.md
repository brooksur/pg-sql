# Notes

## Data Types

Each column in a table has a designated type

- Numbers: serial, integer, numeric, double precision `sql SELECT (2.0::INTEGER)`
- Characters: char, varchar, varchar(40), text
- Boolean: true, false
- Date/Time: date, time, time with time zone, timestamp
- Interval: dates that can be operated on

## Performance

- `sql SHOW data_directory`
- Data is inside of base directory
- `sql SELECT oid, datname FROM pg_database` lists databases
- Postgres is storing all database information on a hard disk
- Heap or Heap File: File that contains all the data of a table
- Tuple or Item: Individual row from a table
- Block or Page: Heap files are divided into many "blocks" or "pages"
- Each page/block stores some number of rows
- Each block is 8kb
- Each block has a number
- Full table scan: Loads all rows from a heap into memory
- Indexes make looking up a record by a certain property much faster

```sql
  CREATE INDEX ON users (username);
  DROP INDEX users_username_idx;

  -- w/ index: 0.038ms
  -- w/out index: 0.524ms

  EXPLAIN ANALYZE SELECT *
  FROM users
  WHERE username = 'Emil30';

  SELECT pg_size_pretty(pg_relation_size('users')); -- To see size of a table
  -- The bigger the table the bigger the index
```

- Stroring indexes takes up storage space
- It's best to be conservative as possible on indexes
- There are different types of indexes, but 99% of time a B-Tree index should be used
- Any PK column or UNIQUE column automatically generates an index
