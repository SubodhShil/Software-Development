def operation(goals):
    streak = []
    current_streak = []
    start_match = 0
    end_match = 0

    for i in range(len(goals)):
        x = goals[i]

        if x > 0:
            current_streak.append([i, x])

        else:
            if len(current_streak) > len(streak):
                streak = [item[1] for item in current_streak]
                start_match = current_streak[0][0] + 1
                end_match = current_streak[len(current_streak) - 1][0] + 1

            current_streak.clear()

    # check
    if len(current_streak) > len(streak):
        streak = [item[1] for item in current_streak]
        start_match = current_streak[0][0] + 1
        end_match = current_streak[len(current_streak) - 1][0] + 1
        current_streak.clear()

    # Task 01
    print(f"Longest streak goals: {streak}")

    # Task 02
    print(f"Start match: {start_match} and end match: {end_match}")


# goals = [5, 4, 3, 2, 0, 7, 0, 8, 8, 8, 8, 8, 8, 0, 7]
goals = [1, 2, 3, 0, 0, 5, 6, 7, 8, 9, 0, 0, 0]

operation(goals)
