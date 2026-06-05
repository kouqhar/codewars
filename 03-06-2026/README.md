## Schema Validator Part 1

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

```js 

{
  username: string
}

```

- Extra keys are allowed

## Schema Validator Part 2

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

```js

{
  username: string,
  posts: number,
  verified: boolean
}

```

- keys are allowed

## Schema Validator Part 3

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

```js 

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles
}

```

- The pipe (|) symbol means "or". role must be one of the listed Roles values.

- Extra keys are allowed

## Schema Validator Part 4

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

```js

Roles = "user" | "creator" | "moderator" | "staff" | "admin"


{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean
}

```

- The pipe (|) symbol means "or". role must be one of the listed Roles values.

- The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.

- Extra keys are allowed