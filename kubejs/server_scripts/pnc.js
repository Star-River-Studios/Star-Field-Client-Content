ServerEvents.recipes( event =>{
  function assembly_laser(input,in_count,output,out_count){
    event.custom(
        {
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "count": in_count,
    "item": input
    },
  "program": "laser",
  "result": {
    "count": out_count,
    "id": output
    }}
    )
  }
  event.shaped('pneumaticcraft:reinforced_stone',//压缩石头制作
    [
      'BBB',
      'BAB',
      'BBB'
    ],
    {
      A:'#c:ingots/steel',
      B:'#c:stones'
    }
  )
  assembly_laser("kubejs:infinite_control_circuit_unfinished",2,"mekanism_extras:infinite_control_circuit",8)//高阶控制电路激光处理
  assembly_laser("kubejs:supreme_control_circuit_unfinished",2,"mekanism_extras:supreme_control_circuit",8)
  assembly_laser("kubejs:cosmic_control_circuit_unfinished",2,"mekanism_extras:cosmic_control_circuit",8)
  assembly_laser("kubejs:absolute_control_circuit_unfinished",2,"mekanism_extras:absolute_control_circuit",8)
   event.custom({
  "type": "pneumaticcraft:pressure_chamber",
  "inputs": [
    {
      "count": 2,
      "item": 'minecraft:blue_ice'
    }
  ],
  "pressure": 2.0,
  "results": [
    {
      "count": 1,
      "id": 'powah:dry_ice'
    }
  ]
})
    event.custom({//炽热血制备
      "type": "pneumaticcraft:thermo_plant",
  "inputs": {
    "fluid": {
      "amount": 500,
      "fluid": "irons_spellbooks:blood"
    },
    "item": {
      "item": "minecraft:blaze_powder"
    }
  },
  "outputs": {
    "fluid_output": {
      "amount": 250,
      "id": "kubejs:fiery_blood"
    }
  },
  "pressure": 1.5,
  "temperature": {
    "min": 627
  }
    })
  event.custom({//炽热泪制备
      "type": "pneumaticcraft:thermo_plant",
  "inputs": {
    "fluid": {
      "amount": 500,
      "tag": "minecraft:water"
    },
    "item": {
      "item": "minecraft:blaze_powder"
    }
  },
  "outputs": {
    "fluid_output": {
      "amount": 250,
      "id": "kubejs:fiery_tears"
    }
  },
  "pressure": 1.5,
  "temperature": {
    "min": 623
  }
    })
  //event.custom({//合金灌注
  //    "type": "pneumaticcraft:thermo_plant",
  //"inputs": {
  //  "fluid": {
  //    "amount": 100,
  //    "fluid": "kubejs:alloy_infuser_fluid"
  //  },
  //  "item": {
  //    "item": "minecraft:copper_ingot",
  //    "count":1
  //  }
  //},
  //"outputs": {
  //  "item_output": {
  //    "count": 1,
  //    "id": 'mekanism:alloy_infused'
  //  }
  //},
  //"pressure": 1.0,
  //"temperature": {
  //  "min": 323
  //}
  //  })
  event.custom({
  "type": "pneumaticcraft:fluid_mixer",
  "fluid_output": {
    "amount": 1000,
    "id": "pneumaticcraft:oil"
  },
  "input1": {
    "amount": 500,
    "fluid": "kubejs:bone_solvent_fluid"
  },
  "input2": {
    "amount": 500,
    "fluid": "kubejs:oily_solution_fluid"
  },
  "item_output": {
    "count": 6,
    "id": "mekanism:fluorite_gem"
  },
  "pressure": 1,
  "time": 40
})
 event.custom({
  "type": "pneumaticcraft:fluid_mixer",
  "fluid_output": {
    "amount": 1000,
    "id": "kubejs:oil_fluid1"
  },
  "input1": {
    "amount": 500,
    "tag": 'c:crude_oil'
  },
  "input2": {
    "amount": 500,
    "fluid": "minecraft:lava"
  },
  "item_output":{},
  "pressure": 2,
  "time": 20
})
function oil_fluid_mixer(fluid_output,item_output,fluid){
  event.custom({
  "type": "pneumaticcraft:fluid_mixer",
  "fluid_output": {
    "amount": 1000,
    "id": fluid_output
  },
  "input1": {
    "amount": 500,
    "fluid": fluid
  },
  "input2": {
    "amount": 500,
    "fluid": "minecraft:lava"
  },
  "item_output": {
    "count": 1,
    "id": item_output
  },
  "pressure": 2,
  "time": 20
})
}
 oil_fluid_mixer("kubejs:oil_fluid2","kubejs:dirty_ore_powder","kubejs:oil_fluid1")
 oil_fluid_mixer("kubejs:oil_fluid3","kubejs:dirty_ore1_powder","kubejs:oil_fluid2")
 oil_fluid_mixer("kubejs:used_oil_fluid","kubejs:dirty_ore2_powder","kubejs:oil_fluid3")
function oil_thermo_plant(fluid_output,item_output,fluid_input,item_input,item_count){
  event.custom({
      "type": "pneumaticcraft:thermo_plant",
  "inputs": {
    "fluid": {
      "amount": 500,
      "fluid": fluid_input
    },
    "item": {
      "item": item_input,
      "count":1
    }
  },
  "outputs": {
    "item_output": {
      "count": item_count,
      "id": item_output
    },
    "fluid_output": {
      "amount": 500,
      "id": fluid_output
    }
  },
  "pressure": 4.0,
  "temperature": {
    "min": 673
  }
    })
}
 oil_thermo_plant("kubejs:oil_fluid2","kubejs:dirty_ore_powder","kubejs:oil_fluid1",'immersiveengineering:slag',4)
 oil_thermo_plant("kubejs:oil_fluid3","kubejs:dirty_ore1_powder","kubejs:oil_fluid2",'immersiveengineering:slag',4)
 oil_thermo_plant("kubejs:used_oil_fluid","kubejs:dirty_ore2_powder","kubejs:oil_fluid3",'immersiveengineering:slag',4)
 oil_thermo_plant("kubejs:oil_fluid2","kubejs:dirty_ore_powder","kubejs:oil_fluid1",'immersiveengineering:dust_hop_graphite',8)
 oil_thermo_plant("kubejs:oil_fluid3","kubejs:dirty_ore1_powder","kubejs:oil_fluid2",'immersiveengineering:dust_hop_graphite',8)
 oil_thermo_plant("kubejs:used_oil_fluid","kubejs:dirty_ore2_powder","kubejs:oil_fluid3",'immersiveengineering:dust_hop_graphite',8)
  event.custom({//树脂冷却成树脂板
  "type": "pneumaticcraft:heat_frame_cooling",
  "bonusLimit": 0.75,
  "bonusMultiplier": 0.01,
  "input": {
    "fluid": {
      "amount": 200,
      "tag": 'c:phenolic_resin'
    }
  },
  "output": {
    "count": 1,
    "id": 'immersiveengineering:plate_duroplast'
  },
  "temperature": 273
    })
  event.custom({//乙烯冷却成乙烯片
  "type": "pneumaticcraft:heat_frame_cooling",
  "bonusLimit": 0.25,
  "bonusMultiplier": 0.01,
  "input": {
    "fluid": {
      "amount": 100,
      "tag": 'c:ethene'
    }
  },
  "output": {
    "count": 1,
    "id": 'mekanism:hdpe_sheet'
  },
  "temperature": 253
    })
  event.custom(
    {"type": "pneumaticcraft:heat_properties",
  "block": 'archaeological_research_exploration:tillite',
  "temperature": 253,
  "thermalResistance": 5,
  "heatCapacity": 1000000,
  "transformHot": {
    "block": 'archaeological_research_exploration:tillite'
  }}
  )
  event.remove(['pneumaticcraft:pneumatic_boots','pneumaticcraft:pneumatic_helmet','pneumaticcraft:pneumatic_chestplate','pneumaticcraft:pneumatic_leggings'])
  event.recipes.create.mechanical_crafting('pneumaticcraft:pneumatic_helmet',[
    ' CCC ',
    'BDFDB',
    'BEAEB'
  ],
  {
    A:'minecraft:netherite_helmet',
    B:'pneumaticcraft:ingot_iron_compressed',
    C:'#c:ingots/steel',
    D:'mekanism:basic_control_circuit',
    E:'pneumaticcraft:reinforced_air_canister_array',
    F:'pneumaticcraft:printed_circuit_board'
  })
  event.recipes.create.mechanical_crafting('pneumaticcraft:pneumatic_chestplate',[
    'CC CC',
    'BDADB',
    ' BFB ',
    ' CEC '
  ],
  {
    A:'minecraft:netherite_chestplate',
    B:'pneumaticcraft:ingot_iron_compressed',
    C:'#c:ingots/steel',
    D:'mekanism:basic_control_circuit',
    E:'pneumaticcraft:reinforced_air_canister_array',
    F:'pneumaticcraft:printed_circuit_board'
  })
  event.recipes.create.mechanical_crafting('pneumaticcraft:pneumatic_leggings',[
    'CC CC',
    'BDADB',
    'BE EB',
    'B   B'
  ],
  {
    A:'minecraft:netherite_leggings',
    B:'pneumaticcraft:ingot_iron_compressed',
    C:'#c:ingots/steel',
    D:'mekanism:basic_control_circuit',
    E:'pneumaticcraft:reinforced_air_canister_array',
  })
  event.recipes.create.mechanical_crafting('pneumaticcraft:pneumatic_boots',[
    ' C C ',
    'BDADB',
    'BE EB'
  ],
  {
    A:'minecraft:netherite_boots',
    B:'pneumaticcraft:ingot_iron_compressed',
    C:'#c:ingots/steel',
    D:'mekanism:basic_control_circuit',
    E:'pneumaticcraft:reinforced_air_canister_array',
  })
})

