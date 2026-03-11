Ponder.registry(event=>{
    event.create(['immersiveengineering:rs_engineering','immersiveengineering:hammer'])
         .scene("kubejs:excavator",
                "斗轮挖掘机",
                "kubejs:excavator",
                (scene)=>{
                    scene.showBasePlate()
                    scene.idle(20)
                    scene.addKeyframe()
                    let block1=[
                        [0,1,0,9,1,9]
                        ]
                    block1.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第一层",[7,1,6])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block2=[
                        [0,2,0,9,2,9]
                    ]
                    block2.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第二层",[5,2,6])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block3=[
                        [0,3,0,9,3,9]
                    ]
                    block3.forEach((pos=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    }))
                    scene.text(20,"第三层",[5,3,6])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block4=[
                        [0,4,0,9,4,9]
                    ]
                    block4.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第四层",[5,4,6])
                    scene.idle(30)
                    scene.scaleSceneView(0.8)
                    scene.addKeyframe()
                    let block5=[
                        [0,5,0,9,5,9]
                    ]
                    block5.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第五层",[5,5,6])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block6=[
                        [0,6,0,9,6,9]
                    ]
                    block6.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第六层",[5,6,6])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block7=[
                        [0,7,0,9,7,9]
                    ]
                    block7.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle
                    })
                    scene.text(20,"第七层",[5,7,6])
                    scene.idle(15)
                    scene.addKeyframe()
                    scene.idle(15)
                    scene.overlay.showOutline("blue", {}, [2, 1, 4, 9, 7, 6], 20)
                    scene.addKeyframe()
                    scene.idle(15)
                    scene.overlay.showOutline("blue", {}, [2, 4, 5], 30)
                    scene.showControls(30,[2,4,5],"left")
                         .rightClick()
                         .withItem('immersiveengineering:hammer')
                    scene.idle(35)
                    scene.markAsFinished()
                }
         )
})