def describe_city(city, country='mauritius'):
    """Describe a city."""
    msg = city.title() + " is in " + country.title() + "."
    print(msg)

describe_city('curepipe')
describe_city('reykjavik', 'iceland')
describe_city('rose hill')
describe_city('port louis')
