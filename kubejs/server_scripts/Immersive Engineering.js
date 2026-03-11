ServerEvents.recipes( event => {
    event.recipes.immersiveengineering.coke_oven(TagOutputJS.ofItemStack('immersiveengineering:coke'),IngredientWithSizeJS.ofItem('mekanism:block_charcoal',2),600,4000)
    event.remove(['createnuclear:crafting/crafting/steel_block_from_compacting','mekanism:storage_blocks/steel','immersiveengineering:crafting/ingot_steel_to_storage_steel'])
    event.shapeless('immersiveengineering:storage_steel',['#c:ingots/steel','#c:ingots/steel','#c:ingots/steel','#c:ingots/steel','#c:ingots/steel','#c:ingots/steel','#c:ingots/steel','#c:ingots/steel','#c:ingots/steel'])
    MineralMixBuilder.builder()//矿脉添加
        .dimensionOverworld()
        .ore('minecraft:deepslate_gold_ore', 2)
        .ore('mekanism:deepslate_osmium_ore', 6)
        .ore('mekanism:deepslate_tin_ore', 2)
        .addOverworldSpoils()
        .weight(40)
        .failChance(0.1)
        .build(event, "mek_ore_1")
    MineralMixBuilder.builder()
        .dimensionOverworld()
        .ore('create_new_age:thorium', 29)
        .ore('powah:deepslate_uraninite_ore_dense', 29)
        .ore('minecraft:echo_shard', 2)
        .addOverworldSpoils()
        .weight(30)
        .failChance(0.05)
        .build(event, "radioactive_ore")
    MineralMixBuilder.builder()
        .dimensionOverworld()
        .ore('mekanism:deepslate_fluorite_ore', 3)
        .ore('create:deepslate_zinc_ore', 2)
        .ore('minecraft:deepslate_redstone_ore', 3)
        .addOverworldSpoils()
        .weight(30)
        .failChance(0.1)
        .build(event, "mek_ore_2")
    MineralMixBuilder.builder()
        .dimensionNether()
        .ore('minecraft:ancient_debris', 1)
        .ore('minecraft:nether_quartz_ore', 6)
        .ore('minecraft:glowstone', 2)
        .ore('irons_spellbooks:ancient_knowledge_fragment', 1)
        .addOverworldSpoils()
        .weight(10)
        .failChance(0.1)
        .build(event, "nameless_mine_site")
    event.recipes.immersiveengineering.refinery(Fluid.of('kubejs:alloy_infuser_fluid',100),200,Fluid.of('immersiveengineering:redstone_acid',50),'twilightforest:naga_scale',Fluid.of("kubejs:fiery_tears",250))//灌注剂制备
    event.recipes.immersiveengineering.refinery(Fluid.of('kubejs:alloy_infuser_fluid',100),200,Fluid.of('immersiveengineering:redstone_acid',50),'twilightforest:naga_scale',Fluid.of("kubejs:fiery_blood",250))
    event.recipes.immersiveengineering.refinery(Fluid.of('kubejs:alloy_infuser_fluid',100),200,Fluid.of('immersiveengineering:phenolic_resin',10),'minecraft:redstone')
    event.remove(['immersiveengineering:crafting/light_engineering','immersiveengineering:crafting/heavy_engineering','immersiveengineering:crafting/rs_engineering'])
    event.recipes.create.compacting('4x immersiveengineering:light_engineering',['2x immersiveengineering:component_iron','2x immersiveengineering:sheetmetal_iron','minecraft:copper_ingot'])//工厂块制作
    event.recipes.create.compacting('4x immersiveengineering:rs_engineering',['2x minecraft:redstone','2x immersiveengineering:sheetmetal_iron','minecraft:copper_ingot'])
    event.recipes.create.compacting('4x immersiveengineering:heavy_engineering',['2x immersiveengineering:component_steel','2x immersiveengineering:sheetmetal_steel','minecraft:copper_ingot'])
    event.recipes.mekanism.combining('4x immersiveengineering:light_engineering','immersiveengineering:component_iron','immersiveengineering:sheetmetal_iron')//工厂块制作
    event.recipes.mekanism.combining('4x immersiveengineering:rs_engineering','minecraft:redstone','immersiveengineering:sheetmetal_iron')
    event.recipes.mekanism.combining('4x immersiveengineering:heavy_engineering','immersiveengineering:component_steel','immersiveengineering:sheetmetal_steel')
    function thermoelectric_source(id,tem){
        event.custom({
  "type": "immersiveengineering:thermoelectric_source",
  "singleBlock": id,
  "tempKelvin": tem
    })
    }
    thermoelectric_source('archaeological_research_exploration:tillite',200)//低温块添加
    event.recipes.immersiveengineering.mixer(
        Fluid.of("kubejs:nether_fluid", 1000),
        Fluid.of('kubejs:amethyst_fluid', 1000),
        [
            IngredientWithSizeJS.ofItemStack("minecraft:nether_star")
        ],
        1000
    )
    event.recipes.immersiveengineering.squeezer(
        IngredientWithSizeJS.ofItemStack('minecraft:amethyst_cluster'),
        6400,
        Fluid.of("kubejs:amethyst_fluid",250),
        TagOutputJS.ofItemStack("2x minecraft:amethyst_shard")
    )
})

