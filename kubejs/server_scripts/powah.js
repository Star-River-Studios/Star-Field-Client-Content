ServerEvents.recipes(event=>{
    let level=[
        "basic",
        "hardened",
        "blazing",
        "niotic",
        "spirited",
        "nitro"
    ]
    let item=[
      "powah:energy_discharger_",
      "powah:battery_",
      "powah:energy_hopper_",
      "powah:capacitor_",
      "powah:thermo_generator_"
    ]
    for(let i of level){
      for(let j of item){
        event.replaceInput([{"output":`${j}`+`${i}`}],'powah:dielectric_paste','kubejs:'+`${i}`+'_dielectric_paste')
      }
    }
    event.shaped('2x powah:capacitor_basic_tiny',[
      ' A ',
      'CBC',
      ' A '
    ],{
      A:'powah:dielectric_paste',
      B:'minecraft:redstone',
      C:'minecraft:iron_nugget'
    })
    event.recipes.create.mixing('24x kubejs:basic_dielectric_paste',['12x powah:dielectric_paste',Fluid.of('kubejs:redstone',80)]).heated()
    event.recipes.create.mixing('24x kubejs:hardened_dielectric_paste',['16x powah:dielectric_paste','4x mekanism:dust_diamond',Fluid.of('kubejs:diamond',80)]).superheated()
    event.custom({//炽热血制备
      "type": "pneumaticcraft:thermo_plant",
  "inputs": {
    "fluid": {
      "amount": 5,
      "fluid": 'kubejs:refined_obsidian'
    },
    "item": {
      "count": 24,
      "item": 'powah:dielectric_paste'
    }
  },
  "outputs": {
    "item_output": {
      "count": 4,
      "id": 'kubejs:blazing_dielectric_paste'
    }
  },
  "pressure": 1.5,
  "temperature": {
    "min": 573
  }
    })
    event.custom({//炽热血制备
      "type": "pneumaticcraft:thermo_plant",
  "inputs": {
    "fluid": {
      "amount": 5,
      "fluid": 'kubejs:radiance'
    },
    "item": {
      "count": 1,
      "item": 'powah:dielectric_paste'
    }
  },
  "outputs": {
    "item_output": {
      "count": 1,
      "id": 'kubejs:niotic_dielectric_paste'
    }
  },
  "pressure": 5.5,
  "temperature": {
    "min": 973
  }
    })
  event.recipes.mekanism.metallurgic_infusing('24x kubejs:spirited_dielectric_paste','32x powah:dielectric_paste','20x mekanism_extras:thermonuclear',false)
  event.recipes.mekanism.metallurgic_infusing('16x kubejs:nitro_dielectric_paste','32x powah:dielectric_paste','20x mekanism_extras:shining',false)
  event.recipes.mekanism.metallurgic_infusing('12x kubejs:ender_dielectric_paste','32x powah:dielectric_paste','20x mekanism_extras:spectrum',false)
})
PowahEvents.registerHeatSource(event=>{
    event.addBlock('twilightforest:fiery_block',3500)
})
PowahEvents.registerCoolants(event=>{
    event.addFluid('mekanism:hydrogen',-40)
})