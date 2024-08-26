# Implement or solve any problem with nested dictionary

macbook = {
    'fourteenInch': {
        'processor': {

            'M3': {
                'core': '8 Core CPU',
                'graphics': '10 Core GPU',
                'RAM': '8GB Unified Memory',
                'Storage': '512GB SSD Storage',
                'price': '$1,599.00'
            },

            'M3 Pro': {
                'core': '8 Core CPU',
                'graphics': '10 Core GPU',
                'RAM': '8GB Unified Memory',
                'Storage': '1TB SSD Storage',
                'price': '$1,799.00'
            },

            'M3 Max': {
                'core': '8 Core CPU',
                'graphics': '10 Core GPU',
                'RAM': '16GB Unified Memory',
                'Storage': '1TB SSD Storage',
                'price': '$1,999.00'
            }
        }
    },

    'sixteenInch': {

        'processor': {

            'M3': {
                'core': '12 Core CPU',
                'graphics': '18 Core GPU',
                'RAM': '18GB Unified Memory',
                'Storage': '512GB SSD Storage',
                'price': '$2,499.00'
            },

            'M3 Pro': {
                'core': '12 Core CPU',
                'graphics': '18 Core GPU',
                'RAM': '36GB Unified Memory',
                'Storage': '512GB SSD Storage',
                'price': '$2,899.00'
            },

            'M3 Max': {
                'core': '12 Core CPU',
                'graphics': '18 Core GPU',
                'RAM': '36GB Unified Memory',
                'Storage': '1TB SSD Storage',
                'price': '$3,499.00'
            }
        }
    }
}

# Checking configuration for '14 inch M3 Pro' macbook
model1 = macbook['fourteenInch']['processor']['M3']
model2 = macbook['sixteenInch']['processor']['M3 Max']


def checkSpecification(model):
    for key, value in model.items():
        print(f"{key.upper()} 👉 {value}")


# Making a discount on the original price
def discount(percentage, model):

    # formatting the string number
    strPrice = model['price']
    price = strPrice[1:-1]
    price = price.replace(",", "")
    price = float(price)

    # calculating the discount
    discountAmount = price * (percentage / 100)

    return price - discountAmount


# checkSpecification(model2)
# print(f"\nPrice after discounting 30% = {discount(30, model2)}\n")

