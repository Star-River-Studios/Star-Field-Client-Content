ServerEvents.recipes( event => {
    event.remove([{id:'mekanism:control_circuit/advanced'},{id:'mekanism:control_circuit/infused_advanced'}])
    event.remove([{id:'mekanism:control_circuit/elite'},{id:'mekanism:control_circuit/infused_elite'}])
    event.remove([{id:'mekanism:control_circuit/ultimate'},{id:'mekanism:control_circuit/infused_ultimate'}])
     event.recipes.create.sequenced_assembly([//控制电路序列制作
    '2x mekanism:advanced_control_circuit'
]  ,'mekanism:basic_control_circuit', [
    event.recipes.create.deploying('mekanism:basic_control_circuit', ['mekanism:basic_control_circuit', 'minecraft:redstone']),
    event.recipes.create.deploying('mekanism:basic_control_circuit', ['mekanism:basic_control_circuit', 'create_new_age:copper_circuit']),
    event.recipes.create.deploying('mekanism:basic_control_circuit', ['mekanism:basic_control_circuit', 'mekanism:alloy_infused']),
]).transitionalItem('mekanism:basic_control_circuit').loops(2) 
     event.recipes.create.sequenced_assembly([
    '2x mekanism:elite_control_circuit'
]  ,'mekanism:advanced_control_circuit', [
    event.recipes.create.deploying('mekanism:advanced_control_circuit', ['mekanism:advanced_control_circuit', 'mekanism:dust_diamond']),
    event.recipes.create.deploying('mekanism:advanced_control_circuit', ['mekanism:advanced_control_circuit', 'create:precision_mechanism']),
    event.recipes.create.deploying('mekanism:advanced_control_circuit', ['mekanism:advanced_control_circuit', 'mekanism:alloy_reinforced']),
]).transitionalItem('mekanism:advanced_control_circuit').loops(2)
     event.recipes.create.sequenced_assembly([
    '2x mekanism:ultimate_control_circuit'
]  ,'mekanism:elite_control_circuit', [
    event.recipes.create.deploying('mekanism:elite_control_circuit', ['mekanism:elite_control_circuit', 'mekanism:dust_obsidian']),
    event.recipes.create.deploying('mekanism:elite_control_circuit', ['mekanism:elite_control_circuit', 'pneumaticcraft:pcb_blueprint']).keepHeldItem(),
    event.recipes.create.deploying('mekanism:elite_control_circuit', ['mekanism:elite_control_circuit', 'mekanism:alloy_atomic']),
]).transitionalItem('mekanism:elite_control_circuit').loops(2)
    event.remove([{id:'mekanism:steel_casing'}])
    event.shaped('mekanism:steel_casing',[//钢制机壳配方重置
        'ABA',
        'BCB',
        'ABA'       
    ],
    {
        A:'#c:ingots/steel',
        B:'#c:glass_blocks',
        C:'pneumaticcraft:ingot_iron_compressed'
    })
    event.remove(['mekanism:chemical_crystallizer','mekanism:chemical_dissolution_chamber','mekanism:chemical_washer'])
    event.shaped('mekanism:chemical_crystallizer',[
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A:'mekanism:ingot_refined_obsidian',
        B:'mekanism:fluorite_gem',
        C:'mekanism:ultimate_control_circuit',
        D:"kubejs:lpg_steel_casing"
    }
    )
    event.shaped('mekanism:chemical_dissolution_chamber',[
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A:'mekanism:ingot_refined_obsidian',
        B:'mekanism:basic_chemical_tank',
        C:'mekanism:ultimate_control_circuit',
        D:"kubejs:lpg_steel_casing"
    }
    )
    event.shaped('mekanism:chemical_washer',[
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        A:'mekanism:ingot_refined_obsidian',
        B:'mekanism:basic_chemical_tank',
        C:'mekanism:ultimate_control_circuit',
        D:"kubejs:lpg_steel_casing",
        E:'mekanism:basic_fluid_tank'
    }
    )
    event.remove(['mekanism:solar_neutron_activator','mekmm:large_solar_neutron_activator','mekanismgenerators:reactor/frame','mekanism:modification_station'])
    event.shaped('mekanism:solar_neutron_activator',[//太阳能活化器
        'ACA',
        'BDB',
        'EEE'
    ],
    {
        A:'mekanism_extras:alloy_radiance',
        B:'mekanism_extras:absolute_control_circuit',
        C:'mekanism:hdpe_sheet',
        D:'kubejs:lpg_steel_casing',
        E:'mekanism:ingot_bronze'
    })
    event.shaped('mekmm:large_solar_neutron_activator',[//大型太阳能活化器
        'AAA',
        'BCB',
        'EDE'
    ],
    {
        A:'mekanismgenerators:advanced_solar_generator',
        B:'mekanism:solar_neutron_activator',
        C:'mekanism:robit',
        D:'mekanism:laser',
        E:'mekmm:ultimate_max_chemical_tank'
    })
    event.shaped('mekanismgenerators:fusion_reactor_frame',[//聚变反应框架
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A:'mekanism_extras:alloy_thermonuclear',
        B:'mekanism:pellet_polonium',
        C:'kubejs:lpg_steel_casing'
    })
    event.shaped('mekanism:modification_station',[//改造站
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        A:'mekanism:hdpe_sheet',
        B:'#mekanism:personal_storage',
        C:'mekanism_extras:absolute_control_circuit',
        D:'kubejs:lpg_steel_casing',
        E:'mekanism:pellet_polonium'
    })
    event.remove("mekanism:metallurgic_infuser")
    event.shaped('mekanism:advanced_infusing_factory',[//高级灌注工厂
        'BAB',
        'CDC',
        'BAB'       
    ],
    {
        A:'minecraft:furnace',
        B:'mekanism:alloy_infused',
        C:'mekanism:ingot_osmium',
        D:'mekanism:steel_casing'
    })
    event.remove([{id:'mekanism:osmium_compressor'}])
    event.shaped('mekanism:osmium_compressor',[//锇压缩机（高级电路板配方替换为基础）
        'ABA',
        'CDC',
        'ABA'       
    ],
    {
        A:'mekanism:alloy_infused',
        B:'mekanism:basic_control_circuit',
        C:'minecraft:bucket',
        D:'mekanism:steel_casing'
    })
    event.remove('mekanism:energy_tablet')
    event.shaped('mekanism:energy_tablet',[//能量版
        'ABA',
        'CBC',
        'ABA'       
    ],
    {
        A:'minecraft:redstone',
        B:'minecraft:gold_ingot',
        C:'powah:dielectric_paste'
    })
    event.remove([{id:'mekanism:processing/diamond/to_dust'}])
    event.remove([{id:'mekanism:processing/diamond/from_dust'}])//钻石粉产率提高
    event.recipes.mekanism.crushing("4x mekanism:dust_diamond",'minecraft:diamond')
    event.recipes.mekanism.enriching("minecraft:diamond",'4x mekanism:dust_diamond')
    function reaction(chemical_in,ch_in_amount,chemical_out,ch_out_amount,fluid,flu_amount,item_in,item_in_count,item_out,item_out_count,time){
        event.custom({
    "type": "mekanism:reaction",
    "chemical_input": {"amount": ch_in_amount, "chemical": chemical_in},
    "chemical_output": {"amount": ch_out_amount, "id": chemical_out},
    "duration": time,
    "fluid_input": {"amount": flu_amount, "fluid": fluid},
    "item_input": {"item": item_in, "count": item_in_count},
    "item_output": {"id": item_out, "count": item_out_count}
})
    }
    event.custom({//生物燃料块制乙烯
    "type": "mekanism:reaction",
    "chemical_input": {"amount": 500, "chemical": "mekanism:hydrogen"},
    "chemical_output": {"amount": 500, "id": "mekanism:ethene"},
    "duration": 900,
    "fluid_input": {"amount": 100, "tag": "minecraft:water"},
    "item_input": {"item": 'mekanism:block_bio_fuel', "count": 1},
    "item_output": {"id": "mekanism:substrate", "count": 5}
})
    event.custom({//绝缘涂层
    "type": "mekanism:reaction",
    "chemical_input":{"amount":100,"chemical":"mekanism:bio"},
    "chemical_output":{"amount":10,"id":"mekmm:unstable_dimensional_gas"},
    "duration":1000,
    "fluid_input":{"amount":1000,"tag":"minecraft:water"},
    "item_input":{"count":1,"tag":"minecraft:coals"},
    "item_output":{"id":"powah:dielectric_paste","count":32}
    })
    function chemicalCrystallize(gas,amount,item){
    event.custom({
    "type": "mekanism:crystallizing",
    "chemicalType": "gas",
    "input": {
      "amount": amount,
      "chemical": gas
    },
    "output": {
      "id": item
    }
  })}
    chemicalCrystallize('mekanism:ethene',50,'mekanism:hdpe_pellet')//乙烯丸
  function rotary(chemical,fluid){
    event.custom({
        "type":"mekanism:rotary",
        "chemical_input":{"amount":1,"chemical":chemical},
        "chemical_output":{"amount":1,"id":chemical},
        "fluid_input":{"amount":1,"fluid":fluid},
        "fluid_output":{"amount":1,"id":fluid}})
  }
    rotary("kubejs:lpg","pneumaticcraft:lpg")//石油气汽液转换
    rotary('kubejs:amethyst_gas','kubejs:amethyst_fluid')
    rotary('kubejs:nether_gas','kubejs:nether_fluid')
    rotary('kubejs:redstone_gas','immersiveengineering:redstone_acid')
    rotary('kubejs:clean_bone_solvent_chemical',"kubejs:bone_solvent_fluid")
    rotary('kubejs:clean_amethyst_chemical',"kubejs:oily_solution_fluid")
    event.recipes.mekanism.metallurgic_infusing("kubejs:lpg_steel_casing",'mekanism:steel_casing','720x kubejs:lpg',false)
    event.recipes.mekanism.metallurgic_infusing("4x kubejs:nether_star_powder",'mekanism:dust_netherite','480x mekanism:refined_obsidian',false)
    event.remove(['mekanism:mekasuit_helmet','mekanism:mekasuit_bodyarmor','mekanism:mekasuit_pants','mekanism:mekasuit_boots'])
    event.recipes.create.mechanical_crafting('mekanism:mekasuit_helmet',[//mek头
        ' HFH ',
        'GIBIG',
        'CEAEC',
        'C D C'
    ],
    {
        A:'pneumaticcraft:pneumatic_helmet',
        B:'mekanism:basic_induction_provider',
        C:'mekanism:hdpe_sheet',
        D:'mekanism:basic_induction_cell',
        E:'ae2omnicells:multidimensional_expansion_processor',
        F:'immersiveengineering:plate_hop_graphite',
        G:'pneumaticcraft:plastic',
        H:'mekanism:ultimate_control_circuit',
        I:'mekanism:pellet_polonium'
    }
  )
    event.recipes.create.mechanical_crafting('mekanism:mekasuit_bodyarmor',[//mek胸甲
        'GF FG',
        'GHEHG',
        'GIAIG',
        'CJBJC',
        ' CDC '
    ],
    {
        A:'pneumaticcraft:pneumatic_chestplate',
        B:'mekanism:basic_induction_provider',
        C:'mekanism:hdpe_sheet',
        D:'mekanism:basic_induction_cell',
        E:'ae2omnicells:multidimensional_expansion_processor',
        F:'immersiveengineering:plate_hop_graphite',
        G:'pneumaticcraft:plastic',
        H:'mekanism:ultimate_control_circuit',
        I:'mekanism:pellet_polonium',
        J:'pneumaticcraft:printed_circuit_board'
    }
  )
    event.recipes.create.mechanical_crafting('mekanism:mekasuit_pants',[//mek护腿
        ' EEE ',
        'EDDDE',
        'BFCFB',
        'BHAHB',
        'BG GB'
    ],
    {
        A:'pneumaticcraft:pneumatic_leggings',
        B:'mekanism:hdpe_sheet',
        C:'mekanism:basic_induction_cell',
        D:'immersiveengineering:plate_hop_graphite',
        E:'pneumaticcraft:plastic',
        F:'mekanism:ultimate_control_circuit',
        G:'mekanism:pellet_polonium',
        H:'pneumaticcraft:printed_circuit_board'
    }
  )
    event.recipes.create.mechanical_crafting('mekanism:mekasuit_boots',[//mek靴子
        ' GFG ',
        'HEAEH',
        'BECEB',
        'BD DB'
    ],
    {
        A:'pneumaticcraft:pneumatic_boots',
        B:'mekanism:hdpe_sheet',
        C:'mekanism:basic_induction_cell',
        D:'immersiveengineering:plate_hop_graphite',
        E:'pneumaticcraft:plastic',
        F:'mekanism:ultimate_control_circuit',
        G:'mekanism:pellet_polonium',
        H:'pneumaticcraft:printed_circuit_board'
    }
  )
  function dissolution(item,item_count,chemical,chemical_amount){
    event.custom({"type":"mekanism:dissolution",
     "chemical_input":{"amount":1,"chemical":"mekanism:sulfuric_acid"},
     "item_input":{"count":item_count,"item":item},
     "output":{"amount":chemical_amount,"id":chemical},
     "per_tick_usage":true})
  }
    dissolution('minecraft:bone_block',2,'kubejs:bone_solvent_chemical',1000)
    dissolution('createdieselgenerators:asphalt_block',2,'kubejs:amethyst_chemical',1000)
    dissolution('archaeological_research_exploration:mudstone',2,'kubejs:amethyst_chemical',1000)
  function washing(chemical_in,chemical_out){
    event.custom({
        "type":"mekanism:washing",
        "chemical_input":{"amount":1,"chemical":chemical_in},
        "fluid_input":{"amount":5,"tag":"minecraft:water"},
        "output":{"amount":1,"id":chemical_out}})
  }
    washing('kubejs:bone_solvent_chemical','kubejs:clean_bone_solvent_chemical')
    washing('kubejs:amethyst_chemical','kubejs:clean_amethyst_chemical')
    event.recipes.mekanism.injecting('2x minecraft:amethyst_block', 'minecraft:amethyst_shard', '50x kubejs:amethyst_gas')
    event.recipes.mekanism.injecting('minecraft:budding_amethyst', 'minecraft:amethyst_block', '250x kubejs:amethyst_gas')
    event.recipes.mekanism.injecting('minecraft:nether_star', "kubejs:nether_star_powder", '100x kubejs:nether_gas')
    event.recipes.mekanism.injecting('2x minecraft:quartz_block', 'minecraft:quartz', '100x kubejs:nether_gas')
    event.recipes.mekanism.injecting('4x minecraft:glowstone', 'minecraft:glowstone_dust', '100x kubejs:nether_gas')
    event.recipes.mekanism.injecting('16x minecraft:redstone', 'minecraft:redstone_block', '100x kubejs:redstone_gas')
//    event.recipes.mekanism.chemical_infusing('kubejs:fix_fuel','mekanism:fissile_fuel','mekanismgenerators:fusion_fuel')
})




