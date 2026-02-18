def get_hill_rating(drop, distance, hill_type):
    steepness = drop / distance
    adjSteepness = steepness * 1.0
    hillType = "Blue"

    if hill_type == "Downhill":
        adjSteepness = steepness * 1.2
    elif hill_type == "Slalom":
        adjSteepness = steepness * 0.9

    if adjSteepness <= 0.1:
        hillType = "Green"
    elif adjSteepness > 0.25:
        hillType = "Black"
        
    return hillType

get_hill_rating(95, 900, "Slalom"); # "Green"
get_hill_rating(620, 2800, "Downhill"); # "Black"
get_hill_rating(110, 900, "Slalom"); # "Blue"