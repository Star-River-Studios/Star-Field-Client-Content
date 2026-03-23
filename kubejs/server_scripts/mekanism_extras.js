ServerEvents.recipes(event => {
    event.remove(["mekanism_extras:control_circuit/infused_absolute","mekanism_extras:control_circuit/infused_supreme","mekanism_extras:control_circuit/infused_cosmic","mekanism_extras:control_circuit/infused_infinite"])
    event.remove(['mekanism_extras:control_circuit/absolute','mekanism_extras:control_circuit/supreme','mekanism_extras:control_circuit/cosmic','mekanism_extras:control_circuit/infinite'])
    event.recipes.create.sequenced_assembly([
    '2x kubejs:absolute_control_circuit_unfinished'
]  ,'mekanism:ultimate_control_circuit', [
    event.recipes.create.deploying('mekanism:ultimate_control_circuit', ['mekanism:ultimate_control_circuit', 'mekanism_extras:alloy_radiance']),
    event.recipes.create.filling('mekanism:ultimate_control_circuit', ['mekanism:ultimate_control_circuit', Fluid.of('kubejs:radiance',10)]),
    event.recipes.create.deploying('mekanism:ultimate_control_circuit', ['mekanism:ultimate_control_circuit', 'kubejs:niotic_dielectric_paste']),
    event.recipes.create.pressing('mekanism:ultimate_control_circuit','mekanism:ultimate_control_circuit'),
]).transitionalItem('mekanism:ultimate_control_circuit').loops(1)
 event.recipes.create.sequenced_assembly([
    '2x kubejs:supreme_control_circuit_unfinished'
]  ,'mekanism_extras:absolute_control_circuit', [
    event.recipes.create.deploying('mekanism_extras:absolute_control_circuit', ['mekanism_extras:absolute_control_circuit', 'mekanism_extras:alloy_thermonuclear']),
    event.recipes.create.filling('mekanism_extras:absolute_control_circuit', ['mekanism_extras:absolute_control_circuit', Fluid.of('kubejs:thermonuclear',10)]),
    event.recipes.create.deploying('mekanism_extras:absolute_control_circuit', ['mekanism_extras:absolute_control_circuit', 'kubejs:spirited_dielectric_paste']),
    event.recipes.create.pressing('mekanism_extras:absolute_control_circuit','mekanism_extras:absolute_control_circuit'),
]).transitionalItem('mekanism_extras:absolute_control_circuit').loops(1)
 event.recipes.create.sequenced_assembly([
    '2x kubejs:cosmic_control_circuit_unfinished'
]  ,'mekanism_extras:supreme_control_circuit', [
    event.recipes.create.deploying('mekanism_extras:supreme_control_circuit', ['mekanism_extras:supreme_control_circuit', 'mekanism_extras:alloy_shining']),
    event.recipes.create.filling('mekanism_extras:supreme_control_circuit', ['mekanism_extras:supreme_control_circuit', Fluid.of('kubejs:shining',10)]),
    event.recipes.create.deploying('mekanism_extras:supreme_control_circuit', ['mekanism_extras:supreme_control_circuit', 'kubejs:nitro_dielectric_paste']),
    event.recipes.create.pressing('mekanism_extras:supreme_control_circuit','mekanism_extras:supreme_control_circuit'),
]).transitionalItem('mekanism_extras:supreme_control_circuit').loops(1)
 event.recipes.create.sequenced_assembly([
    '2x kubejs:infinite_control_circuit_unfinished'
]  ,'mekanism_extras:cosmic_control_circuit', [
    event.recipes.create.deploying('mekanism_extras:cosmic_control_circuit', ['mekanism_extras:cosmic_control_circuit', 'mekanism_extras:alloy_spectrum']),
    event.recipes.create.filling('mekanism_extras:cosmic_control_circuit', ['mekanism_extras:cosmic_control_circuit', Fluid.of('kubejs:spectrum',10)]),
    event.recipes.create.deploying('mekanism_extras:cosmic_control_circuit', ['mekanism_extras:cosmic_control_circuit', 'kubejs:ender_dielectric_paste']),
    event.recipes.create.pressing('mekanism_extras:cosmic_control_circuit','mekanism_extras:cosmic_control_circuit'),
]).transitionalItem('mekanism_extras:cosmic_control_circuit').loops(1)
})

