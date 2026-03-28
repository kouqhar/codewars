def get_movie_night_cost(day, showtime, number_of_tickets):
    weekend = ["Friday", "Saturday", "Sunday"]
    weekday = ["Monday", "Wednesday", "Thursday"]
    [[hour, minute], period, cost] = [showtime[:-2].split(":"), showtime[-2:], 0]

    if day in weekend:
        cost = 12.00
    elif day in weekday:
        cost = 10.00
    else:
        return f"${5.00 * number_of_tickets:.2f}"

    total = cost * number_of_tickets
    matinee = total - (2.00 * number_of_tickets) if ((period == "pm" and int(hour)) or period == "am") < 5 else total

    return f"${matinee:.2f}"

print(get_movie_night_cost("Saturday", "10:00pm", 1)) # "$12.00".
print(get_movie_night_cost("Sunday", "10:00am", 1)) # "$10.00".
print(get_movie_night_cost("Tuesday", "7:20pm", 2)) # "$10.00".
print(get_movie_night_cost("Wednesday", "5:40pm", 3)) # "$30.00".
print(get_movie_night_cost("Monday", "11:50am", 4)) # "$32.00".
print(get_movie_night_cost("Friday", "4:30pm", 5)) # "$50.00".
print(get_movie_night_cost("Tuesday", "11:30am", 1)) # "$5.00".