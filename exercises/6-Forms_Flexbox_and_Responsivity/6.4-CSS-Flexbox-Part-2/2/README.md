# Part 2: Flexbox Defense

Exercises done on this website:
https://flexboxfroggy.com/

The solution of each exercises is inside a css files, named by its number.

Ex.: 10.css, 11.css, 12.css

## Exercises

#### 10) Move your towers into position by combining the container property justify-content with the item property order. Remember that all items have a default order of 0.

#### How to solve:

The super towers are in bad positions again, but this time you'll need to apply styles to the towers themselves.

The order property defines the order in which an item appears in the flex container and accepts both positive and negative integer values. All flex items begin with a default order of 0, so an item with an order greater than 0 will be repositioned relative to items still set to their default orders.

Use justify-content and order to move your towers into position.

##### justify-content

- flex-start: group items at the start of a container's main axis
- flex-end: group items at the end of the main axis
- center: group items in the center of the main axis
- space-between: evenly distribute items along the main axis such that the first item aligns at the start and the final item aligns at the end
- space-around: evenly distribute items along the main axis such that all items have equal space around them
  
##### order

- #: position an item relative to the other items in the container

<hr>

#### 11) Use justify-content and align-self to move your towers into position.

#### How to solve:

To vertically position individual towers, use align-self, which accepts the same values as align-items.

Use justify-content and align-self to move your towers into position.

##### justify-content

- flex-start: group items at the start of a container's main axis
- flex-end: group items at the end of the main axis
- center: group items in the center of the main axis
- space-between: evenly distribute items along the main axis such that the first item aligns at the start and the final item aligns at the end
- space-around: evenly distribute items along the main axis such that all items have equal space around them

##### align-self

- flex-start: align item at the start of a container's cross axis
- flex-end: align item at the end of the cross axis
- center: align item at the center of the cross axis

_Reminder: align-self, like align-items, also accepts the values baseline and stretch, but these values cannot be used in Flexbox Defense._

<hr>

#### 12) Use the properties you've learned to move your towers into position: justify-content, align-items, flex-direction, order, align-self.

#### How to solve:

This last one's pretty tough! Use the properties you've learned to score 80 or higher!

##### justify-content

- flex-start: group items at the start of a container's main axis
- flex-end: group items at the end of the main axis
- center: group items in the center of the main axis
- space-between: evenly distribute items along the main axis such that the first item aligns at the start and the final item aligns at the end
- space-around: evenly distribute items along the main axis such that all items have equal space around them

##### align-items and align-self

- flex-start: align item(s) across the start of a container's cross axis
- flex-end: align item(s) across the end of the cross axis
- center: align item(s) across the center of the cross axis

##### flex-direction

- row: lay out the main axis from left to right
- row-reverse: lay out the main axis from right to left
- column: lay out the main axis from top to bottom
- column-reverse: lay out the main axis from bottom to top

##### order

- #: position an item relative to the other items in the container
