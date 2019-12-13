# Provide Suspensified Data to Components with Context Providers, Consumers, and useContext

Proper Suspense code can mean a lot of functions wrapped in other functions.  
Because these function are composed with Hooks, modules can't help us hide the implementation details.  
But Context can!

Let's explore how Context Providers, Consumers, and the `useContext` Hook can integrate with Suspense to mask wordy `useTransition`-wrapped API calls.

## Exercise
