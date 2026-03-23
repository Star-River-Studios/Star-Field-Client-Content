ServerEvents.recipes(event => {
    const create = event.recipes.create
    //event.remove([{id:'create:sequenced_assembly/precision_mechanism'}])
    event.remove('createdieselgenerators:mixing/asphalt_block')
    create.compacting([Item.of('create_new_age:blank_circuit',16)],['create_new_age:overcharged_golden_sheet','create_new_age:overcharged_iron_sheet','4x minecraft:redstone']).heated()
    create.compacting('pneumaticcraft:ingot_iron_compressed', '2x minecraft:iron_ingot')
    create.compacting('4x createdieselgenerators:asphalt_block',[Fluid.of('pneumaticcraft:oil',500),'2x minecraft:gravel','2x minecraft:sand'])
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
    create.filling('kubejs:oil_cobblestone',['minecraft:cobblestone',Fluid.of('kubejs:remake_oil_fluid',1000)])
    create.mixing([Fluid.of('pneumaticcraft:oil',750)],['4x createdieselgenerators:asphalt_block',Fluid.of('powergrid:acid',250)]).superheated()
    event.recipes.create.mixing([Fluid.of('immersiveengineering:redstone_acid',250)],[Fluid.of('minecraft:water',250),'minecraft:redstone'])
    event.recipes.create.mixing([Fluid.of('pneumaticcraft:oil',1000)],[Fluid.of('kubejs:bone_solvent_fluid',500),Fluid.of('kubejs:oily_solution_fluid',500)])
    create.emptying(['minecraft:glass_bottle',Fluid.of('kubejs:fiery_tears',250)],'twilightforest:fiery_tears')
    create.emptying(['minecraft:glass_bottle',Fluid.of('kubejs:fiery_blood',250)],'twilightforest:fiery_blood')
    event.remove('ae2cs:mechanical_cutting/polished_rose_quartz_from_pure_rose_quartz')
    create.splashing(['2x minecraft:redstone','minecraft:raw_iron','immersiveengineering:raw_aluminum'],'kubejs:ore_powder')
    create.splashing(['2x minecraft:lapis_lazuli','neoecoae:raw_tungsten_ore','mekanism:dust_diamond'],'kubejs:ore2_powder')
    create.splashing(['mekanism:dirty_dust_gold','mekanism:raw_tin','mekanism:dirty_dust_lead'],'kubejs:ore1_powder')
    create.crushing([CreateItem.of('minecraft:blaze_powder',0.4),CreateItem.of('2x minecraft:glowstone_dust',0.3),CreateItem.of('immersiveengineering:dust_sulfur',0.6),'immersiveengineering:slag','mekanism:dust_coal'],'kubejs:oil_cobblestone')
})