ServerEvents.recipes(e=>{
    e.shapeless('4x minecraft:crafting_table',['archaeological_research_exploration:ramie_thread','#minecraft:logs','#minecraft:logs','archaeological_research_exploration:ramie_thread'])
    e.shapeless('archaeological_research_exploration:ramie_thread',['immersiveengineering:hemp_fiber','immersiveengineering:hemp_fiber'])
    e.shapeless('16x minecraft:stick',['#minecraft:logs','#minecraft:logs'])
    e.shaped('4x minecraft:chest',[
        'AAA',
        'A A',
        'AAA'
    ],
    {
        A:'#minecraft:logs'
    })
})
