Ponder.registry(event=>{
    event.create(['immersiveengineering:rs_engineering','immersiveengineering:hammer'])
         .scene('kubejs:arc_furnace',
                '电弧炉',
                'kubejs:arc_furnace',
                (scene)=>{
                    scene.showBasePlate()
                    scene.idle(20)
                    scene.addKeyframe()
                    let block1=[
                        [0,1,0,7,1,7]
                    ]
                    block1.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第一层",[3,1,4])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block2=[
                        [0,2,0,7,2,7]
                    ]
                    block2.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第二层",[3,2,4])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block3=[
                        [0,3,0,7,3,7]
                    ]
                    block3.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第三层",[3,3,4])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block4=[
                        [0,4,0,7,4,7]
                    ]
                    block4.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第四层",[3,4,4])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block5=[
                        [0,5,0,7,5,7]
                    ]
                    block5.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第五层",[3,5,4])
                    scene.idle(30)
                    scene.addKeyframe()
                    scene.overlay.showOutline("blue", {}, [1, 1, 2, 5, 5, 6], 20)
                    scene.addKeyframe()
                    scene.idle(15)
                    scene.overlay.showOutline("blue", {}, [3, 1, 2], 30)
                    scene.showControls(30,[3,1,2],"left")
                         .rightClick()
                         .withItem('immersiveengineering:hammer')
                    scene.idle(35)
                    scene.markAsFinished()
                }
         )
})
