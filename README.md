## Set-up
Initialise the node app

```
npm init
npm install
```

Run the tests

```
npx jest
```

## In the refactored version, I made the following choices to enhance readability:

- Extracted the logic for determining the candidate partition key and hashing it into separate functions        `determineCandidate` and `hashCandidate` for improved readability and making the code more modular.

- Simplified the conditional checks by using if statements instead of nested ternary expressions.

- Removed unnecessary nested conditionals by checking for the presence of candidate using a single if statement.

- Early return if there is no event simplifying the flow and avoiding unnecessary checks.

- The refactored version is more readable than the original because it is structured in a modular and self-explanatory way, making it easier for developers to follow and comprehend the code's intentions.