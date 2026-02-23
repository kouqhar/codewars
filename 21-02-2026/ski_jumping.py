def ski_jump_medal(distance_points, style_points, wind_comp, k_point_bonus):
    total = distance_points + style_points + wind_comp + k_point_bonus;
    points = sorted([
        165.5,
        172.0,
        158.0,
        180.0,
        169.5,
        175.0,
        162.0,
        170.0,
        total,
    ], reverse=True);

    if points[0] == total:
        return "Gold"
    elif points[1] == total:
        return "Silver"
    elif points[2] == total:
        return "Bronze"
    else:
        return "No Medal"
    

print(ski_jump_medal(125.0, 58.0, 0.0, 6.0)); # "Gold"
print(ski_jump_medal(119.0, 50.0, 1.0, 4.0)); # "Bronze"
print(ski_jump_medal(122.0, 52.0, -1.0, 4.0)); # "Silver"
print(ski_jump_medal(118.0, 50.5, -1.5, 4.0)); # "No Medal"