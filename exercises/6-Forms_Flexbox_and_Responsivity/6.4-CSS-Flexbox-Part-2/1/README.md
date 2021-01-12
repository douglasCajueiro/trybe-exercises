# Part 1: FLEXBOX FROGGY

Exercises done on this website:
https://flexboxfroggy.com/

The solution of each exercises is inside a css files, named by its number.

Ex.: 14.css, 15.css, etc.

## Exercises

#### 14) Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the order property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).

- Use the order property to reorder the frogs according to their lilypads.

#### 15) Use the order property to send the red frog to his lilypad.

#### 16) Another property you can apply to individual items is align-self. This property accepts the same values as align-items and its value for the specific item.

#### 17) Combine order with align-self to help the frogs to their destinations.

#### 18) Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the flex-wrap property, which accepts the following values:

- nowrap: Every item is fit to a single line.
- wrap: Items wrap around to additional lines.
- wrap-reverse: Items wrap around to additional lines in reverse.

#### 19) Help this army of frogs form three orderly columns using a combination of flex-direction and flex-wrap.

#### 20) The two properties flex-direction and flex-wrap are used so often together that the shorthand property flex-flow was created to combine them. This shorthand property accepts the value of one of the two properties separated by a space.

For example, you can use flex-flow: row wrap to set rows and wrap them.

- Try using flex-flow to repeat the previous level.

#### 21) The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use align-content to set how multiple lines are spaced apart from each other. This property takes the following values:

- flex-start: Lines are packed at the top of the container.
- flex-end: Lines are packed at the bottom of the container.
- center: Lines are packed at the vertical center of the container.
- space-between: Lines display with equal spacing between them.
- space-around: Lines display with equal spacing around them.
- stretch: Lines are stretched to fit the container.

This can be confusing, but align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect.

#### 22) Now the current has bunched the lilypads at the bottom. Use align-content to guide the frogs there.

#### 23) The frogs have had a party, but it is time to go home. Use a combination of flex-direction and align-content to get them to their lilypads.

#### 24) Bring the frogs home one last time by using the CSS properties you've learned:

- justify-content
- align-items
- flex-direction
- order
- align-self
- flex-wrap
- flex-flow
- align-content
