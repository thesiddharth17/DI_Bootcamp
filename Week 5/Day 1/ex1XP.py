class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

cat1 = Cat('Kitty',3)
cat2 = Cat('Foxy',2)
cat3 = Cat('Mimi',5)

def oldest_cat(*args):
    return max(args)

print(f'The oldest cat is {oldest_cat(cat1.age,cat2.age,cat3.age)} years old.')