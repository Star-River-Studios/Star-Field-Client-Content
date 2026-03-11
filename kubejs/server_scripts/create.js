ServerEvents.recipes(event => {
    const create = event.recipes.create
    //event.remove([{id:'create:sequenced_assembly/precision_mechanism'}])
    create.compacting([Item.of('create_new_age:blank_circuit',16)],['create_new_age:overcharged_golden_sheet','create_new_age:overcharged_iron_sheet','4x minecraft:redstone']).heated()
    create.compacting('pneumaticcraft:ingot_iron_compressed', '2x minecraft:iron_ingot')
    const tempItem = 'create:incomplete_precision_mechanism'
    event.recipes.create.sequenced_assembly(
    'create:precision_mechanism'
   ,'create:golden_sheet', [
    event.recipes.create.deploying(tempItem, [tempItem, 'create:cogwheel']),
    event.recipes.create.deploying(tempItem, [tempItem, 'create:large_cogwheel']),
    event.recipes.create.deploying(tempItem, [tempItem, 'minecraft:iron_nugget']),
]).transitionalItem(tempItem).loops(3)
    create.filling('twilightforest:fiery_blood',['minecraft:glass_bottle',Fluid.of('kubejs:fiery_blood',250)])
    create.filling('twilightforest:fiery_tears',['minecraft:glass_bottle',Fluid.of('kubejs:fiery_tears',250)])
    event.recipes.create.mixing([Fluid.of('immersiveengineering:redstone_acid',250)],[Fluid.of('minecraft:water',250),'minecraft:redstone'])
    event.recipes.create.mixing([Fluid.of('pneumaticcraft:oil',1000)],[Fluid.of('kubejs:bone_solvent_fluid',500),Fluid.of('kubejs:oily_solution_fluid',500)])
    create.emptying(['minecraft:glass_bottle',Fluid.of('kubejs:fiery_tears',250)],'twilightforest:fiery_tears')
    create.emptying(['minecraft:glass_bottle',Fluid.of('kubejs:fiery_blood',250)],'twilightforest:fiery_blood')

})