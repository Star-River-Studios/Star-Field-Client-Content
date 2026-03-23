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
    //event.recipes.immersiveengineering.refinery(Fluid.of('kubejs:alloy_infuser_fluid',100),200,Fluid.of('immersiveengineering:redstone_acid',50),'twilightforest:naga_scale',Fluid.of("kubejs:fiery_tears",250))//灌注剂制备
    //event.recipes.immersiveengineering.refinery(Fluid.of('kubejs:alloy_infuser_fluid',100),200,Fluid.of('immersiveengineering:redstone_acid',50),'twilightforest:naga_scale',Fluid.of("kubejs:fiery_blood",250))
    //event.recipes.immersiveengineering.refinery(Fluid.of('kubejs:alloy_infuser_fluid',100),200,Fluid.of('immersiveengineering:phenolic_resin',10),'minecraft:redstone')
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
    let all_ore=[
        'tin',
        'lead',
        'uranium',
        'osmium',
        'iron',
        'gold',
        'copper',
        'nickel',
        'silver',
        'aluminum',
        'zinc',
        'tungsten'
    ]
    for(let i of all_ore){
        event.remove('immersiveengineering:arcfurnace/ore_'+`${i}`)
        event.remove('immersiveengineering:arcfurnace/raw_ore_'+`${i}`)
        event.remove('immersiveengineering:arcfurnace/raw_block_'+`${i}`)
    }
    event.replaceOutput({output:'immersiveengineering:ingot_aluminum'},'immersiveengineering:ingot_aluminum','neoecoae:aluminum_ingot')
    event.replaceInput({input:'immersiveengineering:ingot_aluminum'},'immersiveengineering:ingot_aluminum','neoecoae:aluminum_ingot')
    event.recipes.immersiveengineering.crusher(
        TagOutputJS.ofItemStack('4x mekanism_extras:nugget_naquadah'),
        "kubejs:dirty_ore_powder",
        1000,
        [
            StackWithChanceJS.of('powah:uraninite_raw', 0.3),
            StackWithChanceJS.of('mekanism:raw_uranium', 0.5),
            StackWithChanceJS.of('kubejs:ore_powder', 1)
        ]
    )
    event.recipes.immersiveengineering.crusher(
        TagOutputJS.ofItemStack('2x mekanism:raw_osmium'),
        "kubejs:dirty_ore2_powder",
        1000,
        [
            StackWithChanceJS.of('immersiveengineering:raw_nickel', 0.7),
            StackWithChanceJS.of('immersiveengineering:raw_silver', 0.5),
            StackWithChanceJS.of('kubejs:ore2_powder', 1)
        ]
    )
    event.recipes.immersiveengineering.crusher(
        TagOutputJS.ofItemStack('2x minecraft:raw_copper'),
        "kubejs:dirty_ore1_powder",
        1000,
        [
            StackWithChanceJS.of('minecraft:ancient_debris', 0.05),
            StackWithChanceJS.of('create:raw_zinc', 0.5),
            StackWithChanceJS.of('kubejs:ore1_powder', 1)
        ]
    )
    function ore_arc_furnace(tag_input,tag_output,output_count){
        event.custom(
        {
  "type": "immersiveengineering:arc_furnace",
  "additives": [],
  "energy": 102400,
  "input": {
    "tag": tag_input,
    "count": 1
  },
  "results": [
    {
      "id": tag_output,
      "count": output_count
    }
  ],
  "secondaries": [
    {
      "chance": 0.75,
      "output": {
        "id": tag_output
      }
    }
  ],
  "slag": {
    "tag": "c:slag"
  },
  "time": 50
}
    )
    }
    let minecraft_ore=[
        'iron',
        'gold',
        'copper'
    ]
    let mek_ore=[
        'tin',
        'lead',
        'uranium',
        'osmium'
    ]
    let IE_ore=[
        'silver',
        'nickel'
    ]
    let NEO_ore=[
        'aluminum',
        'tungsten'
    ]
    for(let i of minecraft_ore){
        ore_arc_furnace('c:storage_blocks/raw_'+`${i}`,'minecraft:'+`${i}`+'_ingot',33)
        ore_arc_furnace('c:dirty_dusts/'+`${i}`,'minecraft:'+`${i}`+'_ingot',2)
        ore_arc_furnace('c:raw_materials/'+`${i}`,'minecraft:'+`${i}`+'_ingot',3)
        ore_arc_furnace('c:ores/'+`${i}`,'minecraft:'+`${i}`+'_ingot',5)
    }
    for(let i of mek_ore){
        ore_arc_furnace('c:storage_blocks/raw_'+`${i}`,'mekanism:ingot_'+`${i}`,33)
        ore_arc_furnace('c:dirty_dusts/'+`${i}`,'mekanism:ingot_'+`${i}`,2)
        ore_arc_furnace('c:raw_materials/'+`${i}`,'mekanism:ingot_'+`${i}`,3)
        ore_arc_furnace('c:ores/'+`${i}`,'mekanism:ingot_'+`${i}`,5)
    }
     for(let i of IE_ore){
        ore_arc_furnace('c:storage_blocks/raw_'+`${i}`,'immersiveengineering:ingot_'+`${i}`,33)
        ore_arc_furnace('c:raw_materials/'+`${i}`,'immersiveengineering:ingot_'+`${i}`,3)
        ore_arc_furnace('c:ores/'+`${i}`,'immersiveengineering:ingot_'+`${i}`,5)
    }
     for(let i of NEO_ore){
        ore_arc_furnace('c:storage_blocks/raw_'+`${i}`,'neoecoae:'+`${i}`+'_ingot',33)
        ore_arc_furnace('c:raw_materials/'+`${i}`,'neoecoae:'+`${i}`+'_ingot',3)
        ore_arc_furnace('c:ores/'+`${i}`,'neoecoae:'+`${i}`+'_ingot',5)
     }
    ore_arc_furnace('c:storage_blocks/raw_zinc','create:zinc_ingot',33)
    ore_arc_furnace('c:raw_materials/zinc','create:zinc_ingot',3)
    ore_arc_furnace('c:ores/zinc','create:zinc_ingot',5)
})

