Ponder.registry(event=>{
    event.create(['immersiveengineering:rs_engineering','immersiveengineering:hammer'])
         .scene('kubejs:crusher',
                 "粉碎机",
                 'kubejs:crusher',
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
                    scene.text(20,"第一层",[3,1,3])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block2=[
                        [0,2,0,5,2,5]
                    ]
                    block2.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第二层",[3,2,3])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block3=[
                        [0,3,0,5,3,5]
                    ]
                    block3.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第三层",[3,3,3])
                    scene.idle(30)
                    scene.addKeyframe()
                    scene.idle(15)
                    scene.overlay.showOutline("blue", {}, [2, 1, 1, 4, 4, 5], 20)
                    scene.addKeyframe()
                    scene.idle(15)
                    scene.overlay.showOutline("blue", {}, [2, 2, 3], 30)
                    scene.showControls(30,[2,2,3],"left")
                         .rightClick()
                         .withItem('immersiveengineering:hammer')
                    scene.idle(35)
                    scene.markAsFinished()
                 }
         )
})