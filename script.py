import requests
from bs4 import BeautifulSoup
import pandas as pd
import re

base_url = "https://heartfulcraft.com"
products_api = "https://heartfulcraft.com/products.json?limit=250"

res = requests.get(products_api)
data = res.json()

products = []

for p in data["products"]:
    name = p["title"]
    handle = p["handle"]

    sample_moq = None
    main_moq = None
    hs_code = None
    size = None

    # 🔹 Variant parsing (MOQ, HS Code, Size)
    for v in p["variants"]:
        title = v["title"].lower()

        # Sample MOQ
        if "sample" in title:
            num = re.search(r'\d+', title)
            if num:
                sample_moq = int(num.group())

        # Main MOQ
        if "meter" in title or "pcs" in title:
            num = re.search(r'\d+', title)
            if num:
                main_moq = int(num.group())

        # HS Code
        if v["sku"]:
            match = re.search(r'(\d{4}\.\d{2}\.\d{2})', v["sku"])
            if match:
                hs_code = match.group(1)

        # Size
        if "inch" in title:
            size = v["title"]

    # 🔹 Scrape frontend for USD price
    product_url = f"{base_url}/products/{handle}"

    try:
        html = requests.get(product_url, timeout=10).text
        soup = BeautifulSoup(html, "html.parser")
        text = soup.get_text()

        # ✅ FIXED REGEX
        buy_match = re.search(r'Buy at:\s*\$(\d+)', text)
        sell_match = re.search(r'Sell at:\s*\$(\d+)', text)

        buy_price = buy_match.group(1) if buy_match else None
        sell_price = sell_match.group(1) if sell_match else None

    except:
        buy_price = None
        sell_price = None

    # 🔹 Final data
    products.append({
        "Name": name,
        "Sample MOQ": sample_moq,
        "Main MOQ": main_moq,
        "HS Code": hs_code,
        "Buy Price ($)": buy_price,
        "Sell Price ($)": sell_price,
        "Size": size
    })

# 🔹 Save Excel
df = pd.DataFrame(products)

# 🔥 Alphabetical sorting (A → Z)
df = df.sort_values(by="Name", key=lambda x: x.str.lower())

df.to_excel("final_products.xlsx", index=False)