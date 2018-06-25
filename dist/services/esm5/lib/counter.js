/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var /** @type {?} */ INCREMENT = 'INCREMENT';
export var /** @type {?} */ DECREMENT = 'DECREMENT';
export var /** @type {?} */ RESET = 'RESET';
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function counterReducer(state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case INCREMENT:
            console.log(state);
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NvbWVtYWlsNzMtdGVzdC1zZXJ2aWNlcy8iLCJzb3VyY2VzIjpbImxpYi9jb3VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLENBQUMscUJBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUNyQyxNQUFNLENBQUMscUJBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUNyQyxNQUFNLENBQUMscUJBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQzs7Ozs7O0FBRTdCLE1BQU0seUJBQXlCLEtBQWlCLEVBQUUsTUFBYztJQUFqQyxzQkFBQSxFQUFBLFNBQWlCO0lBQzlDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssU0FBUztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbkIsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFbkIsS0FBSyxTQUFTO1lBQ1osTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFbkIsS0FBSyxLQUFLO1lBQ1IsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVYO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNoQjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgSU5DUkVNRU5UID0gJ0lOQ1JFTUVOVCc7XG5leHBvcnQgY29uc3QgREVDUkVNRU5UID0gJ0RFQ1JFTUVOVCc7XG5leHBvcnQgY29uc3QgUkVTRVQgPSAnUkVTRVQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY291bnRlclJlZHVjZXIoc3RhdGU6IG51bWJlciA9IDAsIGFjdGlvbjogQWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIElOQ1JFTUVOVDpcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcblxuICAgICAgcmV0dXJuIHN0YXRlICsgMTtcblxuICAgIGNhc2UgREVDUkVNRU5UOlxuICAgICAgcmV0dXJuIHN0YXRlIC0gMTtcblxuICAgIGNhc2UgUkVTRVQ6XG4gICAgICByZXR1cm4gMDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==