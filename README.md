# Pokemon
## Tech stack
- Bootstrap 5

## Screens
All screen should have the same header, the header contains breadcrumb (https://getbootstrap.com/docs/5.0/components/breadcrumb/) and progress (https://getbootstrap.com/docs/5.0/components/progress/)

1. Choose your shape
    - After choosing progress is 33%

2. Choose you spiece (from shape response `pokemon_species`)
    - After choosing progress is 66%

3. choose your Pokemon (from spiece response `varieties`)
    - After choosing progress is 100%

4. Pokemon - show be a modal (https://getbootstrap.com/docs/5.0/components/modal/#modal-components) 
    - Modal have back button that closes modal
    - Modal have reset button that restrat the process (Screen 1 is up) 


## Endpoint
- Shapes: `get` https://pokeapi.co/api/v2/pokemon-shape
- Shape `get` https://pokeapi.co/api/v2/pokemon-shape/:id
- Species: `get` https://pokeapi.co/api/v2/pokemon-species/:id
- Pokemon: `get` https://pokeapi.co/api/v2/pokemon/:id


## Extras
- Save the responses in Objects for caching
