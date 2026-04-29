def parse_url_query(url):
    query_string = url.split('?')[1].split('&') if '?' in url else ''
    result = {}

    for pair in query_string:
        key, value = pair.split('=')
        result[key] = value

    return result

print(parse_url_query("https://example.com/search?name=Alice&age=30")) # {"name": "Alice", "age": "30"}
print(parse_url_query("https://freecodecamp.org/learn?skill=programming&language=python")) # {"skill": "programming", "language": "python"}
print(parse_url_query("https://freecodecamp.org/items?category=books&sort=asc&page=2")) # {"category": "books", "sort": "asc", "page": "2"}
print(parse_url_query("https://example.com?redirect=freecodecamp.org/learn&when=now")) # {"redirect": "freecodecamp.org/learn", "when": "now"}