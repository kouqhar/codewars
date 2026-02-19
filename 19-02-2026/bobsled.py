def check_eligibility(athlete_weights, sled_weight):
    athSledSum, athLng, eligibility = [sum(athlete_weights) + sled_weight, len(athlete_weights), "Not Eligible"];

    if athLng == 1 and sled_weight >= 162 and athSledSum <= 247:
        eligibility = "Eligible";
    elif athLng == 2 and sled_weight >= 170 and athSledSum <= 390:
        eligibility = "Eligible";
    elif athLng == 4 and sled_weight >= 210 and athSledSum <= 630:
        eligibility = "Eligible";

    return eligibility;


print(check_eligibility([106, 99, 90, 88], 205)); # "Not eligible".
print(check_eligibility([78], 165)); # Eligible
print(check_eligibility([80], 160)); # Not eligible
print(check_eligibility([85, 90], 170)); # Eligible
print(check_eligibility([85, 95], 168)); # Not eligible
print(check_eligibility([110, 102, 90, 106], 222)); # "Eligible".