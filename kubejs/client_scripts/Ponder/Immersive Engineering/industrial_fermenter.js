Ponder.registry(event=>{
    event.create(['immersiveengineering:rs_engineering','immersiveengineering:hammer'])
         .scene('kubejs:industrial_fermenter',
                '工业发酵机',
                'kubejs:industrial_fermenter',
                (scene)=>{
                    scene.showBasePlate()
                    scene.idle(20)
                    scene.addKeyframe()
                    let block1=[
                        [0,1,0,5,1,3]
                    ]
                    block1.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第一层",[2,1,2])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block2=[
                        [0,2,0,5,2,3]
                    ]
                    block2.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第二层",[2,2,2])
                    scene.idle(30)
                    scene.addKeyframe()
                    let block3=[
                        [0,3,0,5,3,3]
                    ]
                    block3.forEach((pos)=>{
                        scene.world.showSection(pos,Direction.DOWN)
                        scene.idle(2)
                    })
                    scene.text(20,"第三层",[2,3,2])
                    scene.idle(30)
                    scene.addKeyframe()
                    scene.idle(15)
                    scene.overlay.showOutline("blue", {}, [1, 1, 1, 3, 3, 3], 20)
                    scene.addKeyframe()
                    scene.idle(15)
                    scene.overlay.showOutline("blue", {}, [2, 2, 2], 30)
                    scene.showControls(30,[2,2,2],"right")
                         .rightClick()
                         .withItem('immersiveengineering:hammer')
                    scene.idle(35)
                    scene.markAsFinished()
                }
         )
})