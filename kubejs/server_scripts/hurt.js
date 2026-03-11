EntityEvents.beforeHurt( event =>{
    if (!event.source || !event.entity || !event.entity.isLiving()) return
    const bossIds = ['minecraft:ender_dragon','minecraft:pig']
    if (!bossIds.includes(event.entity.id)) return
    const sourceEntity = event.source.getActual()
    if (sourceEntity && sourceEntity.type === 'create:deployer') {
        event.cancel() // 取消伤害
    }
})