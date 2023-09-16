<!-- Add at least 3 Project features: -->

1.Card Lockout Feature:
 In this project, once a user clicks on the "selected" button for a card, they will be unable to select it again. This ensures that users cannot pick the same card multiple times.

2.Credit Limit Enforcement: 
Users will be restricted from selecting more than 20 cards in total. This limitation helps maintain balance and fairness in the system.

3.Positive Credit Hours Validation:
 The "Credit Remaining Hours" field will now always display a positive number. This enhancement ensures that users are aware of their remaining hours.



 <!-- Discuss how you managed the state in your assignment project -->


 Managing state is a critical aspect of any software project, as it involves keeping track of data and its changes over time. The approach to managing state can vary depending on the project's complexity and the technology stack being used. Here's a general discussion of how state management could be handled in your assignment project, considering the features you've mentioned:

    Card Selection State:
        You can maintain an array or a list to keep track of selected cards. Each card object can have a property to indicate whether it's selected or not.
        When a user clicks on a card's "selected" button, you can update the state by toggling the selected property for that card.
        To prevent reselection, you can disable the "selected" button for cards that have already been selected.

    Credit Limit State:
        Create a variable to store the user's total selected cards' count.
        Whenever a card is selected or deselected, you can increment or decrement this count accordingly.
        Before allowing the user to select a new card, you can check if the count exceeds 20. If it does, prevent further selections.

    Credit Remaining Hours State:
        Have a variable to store the user's remaining credit hours.
        When a card is selected, deduct the corresponding credit hours from this variable.
        Ensure that the variable never goes negative by validating it before allowing further card selections.
        Update the UI to display this remaining credit hours to the user.

    User Interface Updates:
        Ensure that the user interface elements are bound to the state variables. This means that when the state changes, the UI automatically updates to reflect those changes.
        Use frameworks or libraries like React, Angular, or Vue.js, which have built-in mechanisms for handling state and UI updates.

    Persistence:
        If the state needs to persist across sessions, consider using technologies like cookies, local storage, or a backend server to store and retrieve user data.

    Error Handling:
        Implement error handling to gracefully handle situations where state transitions cannot be completed due to any unforeseen issues.

    Testing:
        Thoroughly test the state management logic to ensure that it works correctly under various scenarios, including edge cases.

    Documentation:
        Document the state management strategy and the logic behind it so that other developers (or your future self) can understand and maintain the code effectively.