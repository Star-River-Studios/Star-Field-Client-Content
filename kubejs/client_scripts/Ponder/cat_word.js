Ponder.registry(event=>{
    event.create('minecraft:player_head[profile={id:[I;1641040311,-943372947,-1226221698,487318010],name:"free_cat_eating",properties:[{name:"textures",signature:"vEQ1D62cTGMAnfefO81Gbb+eWO+HiYhJWLZpihP4feeAjrl5SdARbm7M3ARMYLzVSzYT+BCdAQbZK2msMmiLP+KpiVlBo2bBmrAhqgmKYGXQJodBbqQ3CtBfnFDVeNvniBvXVJGrmiFWWT8ezLEIO0ad18gn8cPKPMdjAazGHhxQ13TmuAygScEvmqv15pZPS/E+Ul2NKqch4fgE8zZrwOshzSb22NT1ASkRuEBeQ+B03rQI3NGVu6MGaSrAcf97EWSHIe7TmiWkIY9IU8bqT0aKEUKVPglp7KcFiddmJR6hsSgu2OYEy/GIfjguErG/9KzQwAeAZ5ut8zHZh7Mc2Hx4aX9LlrhedkNY53espzjffU3iXps8/78qyictBN9ggF6lCR3D6HG+vnKCEcV7v0HcsXmi3xe01Z2GohO+SrgJD3NYL7pdLvwGvcnBhtpdSh8iWcuU5/WcRKEUr2K1atv7OQFTTPD2py2SK4xUwiMzO4L9xlI0234ajiIdi0daqaCNF6210SG9J94uU/3ioqyjVClt073Yl9APPXwF3UElTplpiYax2XkhX++H957xscb9Vw8YX4kWQ6ulnYOuUdMKl3jyoM2nsoRR1c6K7oNLn8PFQJWUdZf7M1WKYT3irhDziV4MJsPXfxSlDzXtyTiEoyEbBy02WOGcpeIceqs=",value:"ewogICJ0aW1lc3RhbXAiIDogMTc3MjUwMzg3NDUwMCwKICAicHJvZmlsZUlkIiA6ICI2MWQwNDliN2M3YzU0NTZkYjZlOTU3N2UxZDBiZTFmYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJmcmVlX2NhdF9lYXRpbmciLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjlkODk4MGZiMjdmYWE2MzE0ZmZhYTI5NWRlMmYxZmUxMzE3N2JkYTE4NzIzODYxMDNmMGNlMzM2MDlhNDc1MSIsCiAgICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICAgIm1vZGVsIiA6ICJzbGltIgogICAgICB9CiAgICB9CiAgfQp9"}]}]')
         .scene("kubejs:cat_word",
                "猫猫的前言",
                "kubejs:floor",
                (scene)=>{
                    scene.showBasePlate()
                    scene.idle(20)
                    scene.addKeyframe()
                    scene.idle(20)
                    scene.text(40, "这里是猫猫呀，这是咱第一次写这么多东西呢", [1, 1, 1])
                    scene.idle(50)
                    scene.text(40, "这里是咱用来测试写的东西有没有用的场景哦", [1, 1, 1])
                    scene.idle(50)
                    scene.text(40, "拖了这么久的魔改真是抱歉呀", [1,1,1])
                    scene.idle(50)
                    scene.addKeyframe()
                    scene.text(40, "咱现在是把IE相关的多方块结构塞工厂块了哦", [1,1,1])
                    scene.idle(50)
                    scene.text(40, "还有一些奇奇怪怪但是有用的东西也会尽量做点思索的", [1,1,1])
                    scene.idle(50)
                    scene.text(40, "还望多多包涵呐", [1,1,1])
                    scene.idle(50)
                    scene.markAsFinished()
                }
         )
})