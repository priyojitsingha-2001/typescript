// Enums in TypeScript allow us to define a set of named values.

/**
 * Enum representing the different seat choices.
 */
enum SeatChoice {
    /**
     * Seat choice for an aisle seat. by deafult the value will be set to 01 if we dont assign anything to it
     */
    AISLE = "aisle",
    /**
     * Seat choice for a middle seat.
     */
    MIDDLE = 3,
    /**
     * Seat choice for a window seat.
     */
    WINDOW,
    /**
     * Seat choice for a fourth seat (not a standard seat choice).
     */
    FOURTH
}

/**
 * Assigning the AISLE seat choice to a constant variable named Seat.
 */
const Seat = SeatChoice.AISLE