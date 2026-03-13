def ips_between(start, end):
    [sf, ss, st, sft] = list(map(int, start.split('.')))
    [ef, es, et, eft] = list(map(int, end.split('.')))

    
    startIp = sf * 256 ** 3 + ss * 256 ** 2 + st * 256 + sft;
    endIp = ef * 256 ** 3 + es * 256 ** 2 + et * 256 + eft;

    return endIp - startIp;

print(ips_between("10.0.0.0", "10.0.0.50")); # 50
print(ips_between("1.2.3.4", "5.6.7.8")); # 67372036
print(ips_between("180.0.0.0", "181.0.0.0")); # 16777216
print(ips_between("50.0.0.0", "50.1.1.1")); # 65793
