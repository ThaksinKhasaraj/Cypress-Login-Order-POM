
Scenario: Successful Shopping and Checkout
  Given I visit the Acetoys Shopping Page
  When I add an item to my cart
  And I proceed to checkout
  And I sign in to my account
  And I review and place my order
  Then I should see an order confirmation message
