class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Roxy(Cat):
     def sing(self, sounds):
         return f'{sounds}'

Bengal = Cat('Bengal', 4)
Chartreux = Cat('Chartreux',5)
Roxy = Cat("Roxy", 7)

pet_list = [Bengal, Roxy, Chartreux]

sara_pets = Pets(pet_list)
sara_pets.walk()

