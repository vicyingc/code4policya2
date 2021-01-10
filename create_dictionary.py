#!/usr/bin/env python3

import pandas as pd
df = pd.read_csv('OxCGRT_latest_onerowpercountry_01092021_0100.csv')
df.columns
df[['CountryName', 'C5_Close public transport', 'C8_International travel controls', 'H6_Facial Coverings']].to_json('data.json',orient='records')