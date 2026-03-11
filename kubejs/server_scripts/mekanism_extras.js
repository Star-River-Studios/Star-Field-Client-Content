ServerEvents.recipes(event => {
    event.remove(["mekanism_extras:control_circuit/infused_absolute","mekanism_extras:control_circuit/infused_supreme","mekanism_extras:control_circuit/infused_cosmic","mekanism_extras:control_circuit/infused_infinite"])
    event.remove(['mekanism_extras:control_circuit/absolute','mekanism_extras:control_circuit/supreme','mekanism_extras:control_circuit/cosmic','mekanism_extras:control_circuit/infinite'])
    event.recipes.create.sequenced_assembly([
    '2x kubejs:absolute_control_circuit_unfinished'
]  ,'mekanism:ultimate_control_circuit', [
    event.recipes.create.deploying('mekanism:ultimate_control_circuit', ['mekanism:ultimate_control_circuit', 'mekanism_extras:alloy_radiance']),
    event.recipes.create.deploying('mekanism:ultimate_control_circuit', ['mekanism:ultimate_control_circuit', 'pneumaticcraft:pcb_blueprint']).keepHeldItem(),
    event.recipes.create.deploying('mekanism:ultimate_control_circuit', ['mekanism:ultimate_control_circuit', 'mekanism_extras:alloy_radiance']),
]).transitionalItem('mekanism:ultimate_control_circuit').loops(2)
 event.recipes.create.sequenced_assembly([
    '2x kubejs:supreme_control_circuit_unfinished'
]  ,'mekanism_extras:absolute_control_circuit', [
    event.recipes.create.deploying('mekanism_extras:absolute_control_circuit', ['mekanism_extras:absolute_control_circuit', 'mekanism_extras:alloy_thermonuclear']),
    event.recipes.create.deploying('mekanism_extras:absolute_control_circuit', ['mekanism_extras:absolute_control_circuit', 'pneumaticcraft:pcb_blueprint']).keepHeldItem(),
    event.recipes.create.deploying('mekanism_extras:absolute_control_circuit', ['mekanism_extras:absolute_control_circuit', 'mekanism_extras:alloy_thermonuclear']),
]).transitionalItem('mekanism_extras:absolute_control_circuit').loops(2)
 event.recipes.create.sequenced_assembly([
    '2x kubejs:cosmic_control_circuit_unfinished'
]  ,'mekanism_extras:supreme_control_circuit', [
    event.recipes.create.deploying('mekanism_extras:supreme_control_circuit', ['mekanism_extras:supreme_control_circuit', 'mekanism_extras:alloy_shining']),
    event.recipes.create.deploying('mekanism_extras:supreme_control_circuit', ['mekanism_extras:supreme_control_circuit', 'pneumaticcraft:pcb_blueprint']).keepHeldItem(),
    event.recipes.create.deploying('mekanism_extras:supreme_control_circuit', ['mekanism_extras:supreme_control_circuit', 'mekanism_extras:alloy_shining']),
]).transitionalItem('mekanism_extras:supreme_control_circuit').loops(2)
 event.recipes.create.sequenced_assembly([
    '2x kubejs:infinite_control_circuit_unfinished'
]  ,'mekanism_extras:cosmic_control_circuit', [
    event.recipes.create.deploying('mekanism_extras:cosmic_control_circuit', ['mekanism_extras:cosmic_control_circuit', 'mekanism_extras:alloy_spectrum']),
    event.recipes.create.deploying('mekanism_extras:cosmic_control_circuit', ['mekanism_extras:cosmic_control_circuit', 'pneumaticcraft:pcb_blueprint']).keepHeldItem(),
    event.recipes.create.deploying('mekanism_extras:cosmic_control_circuit', ['mekanism_extras:cosmic_control_circuit', 'mekanism_extras:alloy_spectrum']),
]).transitionalItem('mekanism_extras:cosmic_control_circuit').loops(2)
})

