ServerEvents.tags('item',event =>{
    event.add('c:circuits_unfinished', ['kubejs:absolute_control_circuit_unfinished','kubejs:supreme_control_circuit_unfinished','kubejs:cosmic_control_circuit_unfinished','kubejs:infinite_control_circuit_unfinished'])
})

ServerEvents.tags('fluid',event =>{
    event.add('c:fiery_vial_fluid',['kubejs:fiery_tears','kubejs:fiery_blood'])
})