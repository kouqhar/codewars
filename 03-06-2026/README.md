## Schema Validator Part 1

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

{
  username: string
}

Extra keys are allowed

## Schema Validator Part 2

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

{
  username: string,
  posts: number,
  verified: boolean
}

Extra keys are allowed

## Schema Validator Part 3

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles
}

The pipe (|) symbol means "or". role must be one of the listed Roles values.

Extra keys are allowed