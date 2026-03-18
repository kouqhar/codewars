import requests
from bs4 import BeautifulSoup # type: ignore

def print_secret_message(url):
    # 1. Fetch the document content
    response = requests.get(url)
    if response.status_code != 200:
        print("Failed to retrieve the document.")
        return

    # 2. Parse the HTML table data
    soup = BeautifulSoup(response.text, 'html.parser')
    table = soup.find('table')
    rows = table.find_all('tr')

    data = []
    max_x = 0
    max_y = 0

    # Skip the header row and iterate through data
    for row in rows[1:]:
        cols = row.find_all('td')
        if len(cols) == 3:
            try:
                # Extract x-coordinate, character, and y-coordinate
                x = int(cols[0].get_text().strip())
                char = cols[1].get_text().strip()
                y = int(cols[2].get_text().strip())
                
                data.append((x, y, char))
                
                # Track grid boundaries
                if x > max_x: max_x = x
                if y > max_y: max_y = y
            except ValueError:
                continue

    # 3. Initialize the grid with spaces
    # Grid dimensions are max_coordinate + 1
    grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]

    # 4. Fill the grid
    for x, y, char in data:
        grid[y][x] = char

    # 5. Print the grid (Top-to-Bottom)
    # Note: Standard grids often have Y increasing downwards; 
    # if the message looks upside down, use: for row in reversed(grid):
    for row in reversed(grid):
        print("".join(row))

# Run the function with your specific URL
url = "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub" # HCMIDBO
print_secret_message(url)