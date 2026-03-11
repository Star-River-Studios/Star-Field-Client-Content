Ponder.registry(event=>{
    event.create(['immersiveengineering:rs_engineering','immersiveengineering:hammer'])
         .scene('kubejs:refinery',
                '炼油厂',
                'kubejs:refinery',
                (scene)=>{
                    scene.showBasePlate()
                    scene.idle(20)
                    scene.addKeyframe()
                    let block1=[
                        [0,1,0,5,1,5]
                    ]
                    block1.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第一层",[2,1,4])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block2=[
                        [0,2,0,5,2,5]
                    ]
                    block2.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第一层",[2,2,4])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block3=[
                        [0,3,0,5,3,5]
                    ]
                    block3.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第一层",[2,3,4])
                    scene.idle(30)
                    scene.addKeyframe()
                    scene.idle(15)
                    scene.overlay.showOutline("blue", {}, [0, 1, 3, 4, 3, 5], 20)
                    scene.addKeyframe()
                    scene.idle(15)
                    scene.overlay.showOutline("blue", {}, [2, 2, 3], 30)
                    scene.showControls(30,[2,2,3],"right")
                         .rightClick()
                         .withItem('immersiveengineering:hammer')
                    scene.idle(35)
                    scene.markAsFinished()
                }
         )
})