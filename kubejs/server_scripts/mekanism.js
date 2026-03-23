ServerEvents.recipes( event => {
    event.remove([{id:'mekanism:control_circuit/advanced'},{id:'mekanism:control_circuit/infused_advanced'}])
    event.remove([{id:'mekanism:control_circuit/elite'},{id:'mekanism:control_circuit/infused_elite'}])
    event.remove([{id:'mekanism:control_circuit/ultimate'},{id:'mekanism:control_circuit/infused_ultimate'}])
     event.recipes.create.sequenced_assembly([//控制电路序列制作
    '2x mekanism:advanced_control_circuit'
]  ,'mekanism:basic_control_circuit', [
    event.recipes.create.deploying('mekanism:basic_control_circuit', ['mekanism:basic_control_circuit', 'mekanism:alloy_infused']),
    event.recipes.create.filling('mekanism:basic_control_circuit', ['mekanism:basic_control_circuit', Fluid.of('kubejs:redstone',10)]),
    event.recipes.create.deploying('mekanism:basic_control_circuit', ['mekanism:basic_control_circuit', 'kubejs:basic_dielectric_paste']),
    event.recipes.create.pressing('mekanism:basic_control_circuit','mekanism:basic_control_circuit'),
]).transitionalItem('mekanism:basic_control_circuit').loops(1) 
     event.recipes.create.sequenced_assembly([
    '2x mekanism:elite_control_circuit'
]  ,'mekanism:advanced_control_circuit', [
    event.recipes.create.deploying('mekanism:advanced_control_circuit', ['mekanism:advanced_control_circuit', 'mekanism:alloy_reinforced']),
    event.recipes.create.filling('mekanism:advanced_control_circuit', ['mekanism:advanced_control_circuit', Fluid.of('kubejs:diamond',10)]),
    event.recipes.create.deploying('mekanism:advanced_control_circuit', ['mekanism:advanced_control_circuit', 'kubejs:hardened_dielectric_paste']),
    event.recipes.create.pressing('mekanism:advanced_control_circuit','mekanism:advanced_control_circuit'),
]).transitionalItem('mekanism:advanced_control_circuit').loops(1)
     event.recipes.create.sequenced_assembly([
    '2x mekanism:ultimate_control_circuit'
]  ,'mekanism:elite_control_circuit', [
    event.recipes.create.deploying('mekanism:elite_control_circuit', ['mekanism:elite_control_circuit', 'mekanism:alloy_atomic']),
    event.recipes.create.filling('mekanism:elite_control_circuit', ['mekanism:elite_control_circuit', Fluid.of('kubejs:refined_obsidian',10)]),
    event.recipes.create.deploying('mekanism:elite_control_circuit', ['mekanism:elite_control_circuit', 'kubejs:blazing_dielectric_paste']),
    event.recipes.create.pressing('mekanism:elite_control_circuit','mekanism:elite_control_circuit'),
]).transitionalItem('mekanism:elite_control_circuit').loops(1)
    event.replaceInput([{output:'mekanism:purification_chamber'}],'mekanism:alloy_infused','create:polished_rose_quartz')
    event.replaceInput([{output:'mekanism:chemical_injection_chamber'}],'minecraft:gold_ingot','immersiveengineering:circuit_board')
    event.remove(['mekanism:steel_casing','mekanism:atomic_disassembler'])
    event.shaped('mekanism:steel_casing',[//钢制机壳配方重置
        'ABA',
        'BCB',
        'ABA'       
    ],
    {
        A:'#c:ingots/steel',
        B:'#c:glass_blocks',
        C:'pneumaticcraft:ingot_iron_compressed',
    })
    event.shaped('mekanism:atomic_disassembler',[//原子分解机配方
        'CEC',
        'BAB',
        ' D '       
    ],
    {
        A:'mekanismtools:diamond_paxel',
        B:'createbigcannons:nethersteel_ingot',
        C:'immersiveengineering:plate_duroplast',
        D:'mekanism:alloy_atomic',
        E:'mekanism:ultimate_control_circuit'
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
    event.remove(['mekanism:solar_neutron_activator','mekmm:large_solar_neutron_activator','mekanismgenerators:reactor/frame','mekanism:modification_station','mekmm:cnc_stamper','mekmm:cnc_rolling_mill'])
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
    //event.remove("mekanism:metallurgic_infuser")
    //event.shaped('mekanism:advanced_infusing_factory',[//高级灌注工厂
    //    'BAB',
    //    'CDC',
    //    'BAB'       
    //],
    //{
    //    A:'minecraft:furnace',
    //    B:'mekanism:alloy_infused',
    //    C:'mekanism:ingot_osmium',
    //    D:'mekanism:steel_casing'
    //})
    //event.remove([{id:'mekanism:osmium_compressor'}])
    //event.shaped('mekanism:osmium_compressor',[//锇压缩机（高级电路板配方替换为基础）
    //    'ABA',
    //    'CDC',
    //    'ABA'       
    //],
    //{
    //    A:'mekanism:alloy_infused',
    //    B:'mekanism:basic_control_circuit',
    //    C:'minecraft:bucket',
    //    D:'mekanism:steel_casing'
    //})
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
    event.shaped('mekanism:chemical_oxidizer',[//氧化机
        'ACA',
        'DBE',
        'ACA'       
    ],
    {
        A:'create:zinc_ingot',
        B:'mekanism:steel_casing',
        C:'mekanism:basic_control_circuit',
        D:'#c:barrels/wooden',
        E:'mekanism:basic_chemical_tank'
    })
    event.shaped('mekmm:cnc_stamper',[//压模机
        'CBD',
        'GAG',
        'EGF'       
    ],
    {
        A:'mekmm:cnc_rolling_mill',
        B:'create:mechanical_press',
        C:'ae2omnicells:omni_link_print_press',
        D:'ae2cs:resonating_print_press',
        E:'advanced_ae:quantum_processor_press',
        F:'extendedae:concurrent_processor_press',
        G:'mekanism:ultimate_control_circuit'
    })
    event.shaped('mekmm:cnc_rolling_mill',[//轧机
        'FEF',
        'ADB',
        'GCG'       
    ],
    {
        A:'create:mechanical_press',
        B:'createaddition:rolling_mill',
        C:'mekanism:steel_casing',
        D:'create:shaft',
        E:'#c:barrels/wooden',
        F:'mekanism:elite_control_circuit',
        G:'minecraft:redstone'
    })
    event.remove(['mekanism:thermal_evaporation/block','mekanism:boiler_casing','mekanismgenerators:turbine/casing','mekanismgenerators:fission_reactor/casing'])
    event.shaped('4x mekanism:thermal_evaporation_block',[//蒸馏塔
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A:'kubejs:lpg_steel_casing',
        B:'minecraft:copper_ingot'
    })
     event.shaped('4x mekanism:boiler_casing',[//热力锅炉
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A:'kubejs:lpg_steel_casing',
        B:'minecraft:iron_ingot'
    })
     event.shaped('4x mekanismgenerators:turbine_casing',[//涡轮
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A:'kubejs:lpg_steel_casing',
        B:'mekanism:ingot_osmium'
    })
     event.shaped('8x mekanismgenerators:fission_reactor_casing',[//裂变反应堆
        'CBC',
        'BAB',
        'CBC'
    ],
    {
        A:'kubejs:lpg_steel_casing',
        B:'#c:ingots/lead',
        C:'mekanism_extras:alloy_radiance'
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
    chemicalCrystallize('mekanism:ethene',50,'mekanism:hdpe_pellet')//乙烯丸'mekanism:creative_chemical_tank[mekanism:chemicals={chemical_tanks:[{amount:9223372036854775807L,id:""}]}]'
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
    rotary('mekanism:redstone','kubejs:redstone')
    rotary('mekanism:diamond','kubejs:diamond')
    rotary('mekanism:refined_obsidian','kubejs:refined_obsidian')
    rotary('mekanism_extras:radiance','kubejs:radiance')
    rotary('mekanism_extras:thermonuclear','kubejs:thermonuclear')
    rotary('mekanism_extras:shining','kubejs:shining')
    event.custom({
        "type":"mekanism:rotary",
        "chemical_output":{"amount":1,"id":'mekanism:sulfuric_acid'},
        "fluid_input":{"amount":1,"fluid":'powergrid:acid'},})
    event.recipes.mekanism.metallurgic_infusing("kubejs:lpg_steel_casing",'mekanism:steel_casing','720x kubejs:lpg',false)
    event.recipes.mekanism.metallurgic_infusing("4x kubejs:nether_star_powder",'mekanism:dust_netherite','480x mekanism:refined_obsidian',false)
    event.remove(['mekanism:mekasuit_helmet','mekanism:mekasuit_bodyarmor','mekanism:mekasuit_pants','mekanism:mekasuit_boots','mekanism:digital_miner'])
    event.recipes.create.mechanical_crafting('mekanism:mekasuit_helmet',[//mek头
        ' BBB ',
        'BICIB',
        'BHAHB',
        'GEFEG',
        ' GDG '
    ],
    {
        A:'pneumaticcraft:pneumatic_helmet',
        B:'pneumaticcraft:plastic',
        C:'minecraft:netherite_ingot',
        D:'neoecoae:black_tungsten_alloy_ingot',
        E:'mekanism:pellet_polonium',
        F:'mekanism_extras:supreme_control_circuit',
        G:'mekanism:hdpe_sheet',
        H:'mekanism:basic_induction_cell',
        I:'ae2omnicells:multidimensional_expansion_processor'
    }
  )
    event.recipes.create.mechanical_crafting('mekanism:mekasuit_bodyarmor',[//mek胸甲
        'BBB BBB',
        'BEBBBEB',
        'BEJLJEB',
        'ICFAFCI',
        ' IKLKI ',
        ' IHGHI ',
        ' IHGHI ',
        '  DDD  '
    ],
    {
        A:'pneumaticcraft:pneumatic_chestplate',
        B:'pneumaticcraft:plastic',
        C:'minecraft:netherite_ingot',
        D:'neoecoae:black_tungsten_alloy_ingot',
        E:'neoecoae:energized_superconductive_ingot',
        F:'mekanism:pellet_polonium',
        G:'mekanism_extras:alloy_thermonuclear',
        H:'mekanism_extras:supreme_control_circuit',
        I:'mekanism:hdpe_sheet',
        J:'mekanism:basic_induction_cell',
        K:'mekanism:basic_induction_provider',
        L:'neoecoae:superconducting_processor'
    }
  )
    event.recipes.create.mechanical_crafting('mekanism:mekasuit_pants',[//mek护腿
        ' BBBBB ',
        'BGEEEGB',
        'BLJLJLB',
        'BHKAKHB',
        'IHFCFHI',
        'IDF FDI',
        'IID DII'
    ],
    {
        A:'pneumaticcraft:pneumatic_leggings',
        B:'pneumaticcraft:plastic',
        C:'minecraft:netherite_ingot',
        D:'neoecoae:black_tungsten_alloy_ingot',
        E:'neoecoae:energized_superconductive_ingot',
        F:'mekanism:pellet_polonium',
        G:'mekanism_extras:alloy_thermonuclear',
        H:'mekanism_extras:supreme_control_circuit',
        I:'mekanism:hdpe_sheet',
        J:'mekanism:basic_induction_cell',
        K:'mekanism:basic_induction_provider',
        L:'ae2cs:resonating_processor'
    }
  )
    event.recipes.create.mechanical_crafting('mekanism:mekasuit_boots',[//mek靴子
        ' BB BB ',
        ' BGCGB ',
        'FDHAHDF',
        'FFE EFF'
    ],
    {
        A:'pneumaticcraft:pneumatic_boots',
        B:'pneumaticcraft:plastic',
        C:'neoecoae:energized_superconductive_ingot',
        D:'mekanism:pellet_polonium',
        E:'mekanism_extras:supreme_control_circuit',
        F:'mekanism:hdpe_sheet',
        G:'mekanism:basic_induction_cell',
        H:'advanced_ae:quantum_processor'
    }
  )
    event.recipes.create.mechanical_crafting('mekanism:digital_miner',[//数字采矿机
        'CFEFC',
        'DHAHD',
        'EJBJE',
        'CIKIC',
        'CGGGC'
    ],
    {
        A:'mekanism:robit',
        B:'immersiveengineering:survey_tools',
        C:'immersiveengineering:steel_scaffolding_standard',
        D:'immersiveengineering:heavy_engineering',
        E:'immersiveengineering:light_engineering',
        F:'immersiveengineering:rs_engineering',
        G:'create:mechanical_drill',
        H:'mekanism:ultimate_control_circuit',
        I:'mekanism:steel_casing',
        J:'mekanism:logistical_sorter',
        K:'mekanism:quantum_entangloporter'
    }
  )
  function dissolution(item,item_count,chemical,chemical_amount){//硫酸溶解
    event.custom({"type":"mekanism:dissolution",
     "chemical_input":{"amount":1,"chemical":"mekanism:sulfuric_acid"},
     "item_input":{"count":item_count,"item":item},
     "output":{"amount":chemical_amount,"id":chemical},
     "per_tick_usage":true})
  }
    dissolution('minecraft:bone_block',2,'kubejs:bone_solvent_chemical',1000)
    dissolution('createdieselgenerators:asphalt_block',2,'kubejs:amethyst_chemical',1000)
    dissolution('archaeological_research_exploration:mudstone',2,'kubejs:amethyst_chemical',1000)
  function washing(chemical_in,chemical_out){//化学清洗
    event.custom({
        "type":"mekanism:washing",
        "chemical_input":{"amount":1,"chemical":chemical_in},
        "fluid_input":{"amount":5,"tag":"minecraft:water"},
        "output":{"amount":1,"id":chemical_out}})
  }
    washing('kubejs:bone_solvent_chemical','kubejs:clean_bone_solvent_chemical')
    washing('kubejs:amethyst_chemical','kubejs:clean_amethyst_chemical')
    event.custom(//铀黄饼富集
        {
  "type": "createnuclear:enriched",
  "ingredients": [
    {
      "item": 'mekanism:yellow_cake_uranium',
      "count": 1
    }
  ],
  "results": [
    {
      "id": "createnuclear:enriched_yellowcake",
      "count": 1
    }
  ]
}
    )
    event.recipes.mekanism.injecting('2x minecraft:amethyst_block', 'minecraft:amethyst_shard', '50x kubejs:amethyst_gas')
    event.recipes.mekanism.injecting('minecraft:budding_amethyst', 'minecraft:amethyst_block', '250x kubejs:amethyst_gas')
    event.recipes.mekanism.injecting('minecraft:nether_star', "kubejs:nether_star_powder", '100x kubejs:nether_gas')
    event.recipes.mekanism.injecting('2x minecraft:quartz_block', 'minecraft:quartz', '100x kubejs:nether_gas')
    event.recipes.mekanism.injecting('4x minecraft:glowstone', 'minecraft:glowstone_dust', '100x kubejs:nether_gas')
    event.recipes.mekanism.injecting('16x minecraft:redstone', 'minecraft:redstone_block', '100x kubejs:redstone_gas')
//    event.recipes.mekanism.chemical_infusing('kubejs:fix_fuel','mekanism:fissile_fuel','mekanismgenerators:fusion_fuel')
    function oxidizing(item,item_count,chemical,chemical_amount){
        event.custom(
            {"type":"mekanism:oxidizing","input":{"count":item_count,"item":item},"output":{"amount":chemical_amount,"id":chemical}}
        )
    }
    oxidizing('createnuclear:yellowcake',1,"mekanism:uranium_oxide",250)
    oxidizing('createnuclear:enriched_yellowcake',1,"mekanism:uranium_oxide",1000)
    event.custom({"type":"mekanism:evaporating","input":{"amount":10,"fluid":"kubejs:used_oil_fluid"},"output":{"amount":1,"id":"kubejs:remake_oil_fluid"}})
})




