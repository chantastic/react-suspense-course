# Wrap Fetch Requests to Communicate Pending, Error and Success Status to Suspense

Like `React.lazy`, we can write promise wrappers — of our own — to communicate pending, error, and success statuses to `Suspense` and error boundaries components.

The wrapper we write in this lesson is the minimum viable wrapper required for data fetching.  
It isn't a robust data solution.
However, knowing how to wrap promises for communication with `Suspense` and error boundaries allows you to suspend any asynchronous data.

## Video

[On egghead.io](https://egghead.io/lessons/react-wrap-fetch-requests-to-communicate-pending-error-and-success-status-to-suspense?af=1x80ad)

## Exercise

See [pokemon-detail.js](pokemon-detail.js)

## Solution

Lesson [105](../105) holds the solution to this lesson.
